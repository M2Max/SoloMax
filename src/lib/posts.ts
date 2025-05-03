
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Common interface for Post frontmatter
export interface PostFrontmatter {
  title: string;
  summary: string;
  date: string; // Keep as string initially, parse when needed
  author: string;
  image?: string;
}

// Interface for detailed article data including content
export interface ArticleData extends PostFrontmatter {
  slug: string;
  locale: string;
  content: string; // Raw markdown content
  contentHtml?: string; // Processed HTML content
}

// Interface for list metadata (doesn't need full content)
export interface PostMetadata extends PostFrontmatter {
  slug: string;
  locale: string;
}

const postsDirectory = path.join(process.cwd(), 'src', 'posts');
const supportedLocales = ['en', 'it']; // Define supported locales here

// Function to get all unique post slugs across all locales
export function getAllPostSlugs(): { slug: string }[] {
  try {
    const filenames = fs.readdirSync(postsDirectory);
    const slugs = filenames
      .filter((filename) => /\.(en|it)\.md$/.test(filename)) // Ensure locale markdown files
      .map((filename) => {
        // Extract slug part before the locale and extension
        const match = filename.match(/^(.*?)\.(en|it)\.md$/);
        return match ? match[1] : null; // Get the base slug
      })
      .filter((slug): slug is string => slug !== null); // Filter out nulls

    // Return unique slugs
    return Array.from(new Set(slugs)).map(slug => ({ slug }));
  } catch (error) {
    console.error('Error reading posts directory for slugs:', error);
    return []; // Return empty array on error
  }
}


// Function to get static paths for all locale/slug combinations that exist
export function getAllPostPaths(): { locale: string; slug: string }[] {
    try {
        const filenames = fs.readdirSync(postsDirectory);
        const paths = filenames
            .map((filename) => {
                const match = filename.match(/^(.*?)\.(en|it)\.md$/);
                if (match) {
                    return { slug: match[1], locale: match[2] };
                }
                return null;
            })
            .filter((path): path is { locale: string; slug: string } => path !== null); // Ensure path is not null

        return paths;
    } catch (error) {
        console.error('Error reading posts directory for paths:', error);
        return [];
    }
}


// Function to get a single article's data by slug and locale
export async function getArticleData(slug: string, locale: string): Promise<ArticleData | null> {
  if (!supportedLocales.includes(locale)) {
    console.warn(`Unsupported locale "${locale}" requested for slug "${slug}".`);
    return null;
  }

  const filename = `${slug}.${locale}.md`;
  const filePath = path.join(postsDirectory, filename);

  try {
    if (!fs.existsSync(filePath)) {
        console.error(`Article file not found for locale ${locale}: ${filePath}`);
        return null; // File for the specific locale doesn't exist
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Basic validation for required fields
    if (!data.title || !data.summary || !data.date || !data.author) {
      console.warn(`Post "${slug}" in locale "${locale}" is missing required frontmatter fields.`);
      // Depending on requirements, you might want to return null or throw an error
    }

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    // Validate date format (simple check)
    if (data.date && isNaN(Date.parse(data.date))) {
       console.warn(`Invalid date format for post "${slug}" in locale "${locale}": ${data.date}. Using original value.`);
    }

    return {
      ...(data as PostFrontmatter),
      slug,
      locale, // Add locale to the returned data
      content,
      contentHtml,
     } as ArticleData;
  } catch (error) {
    console.error(`Error reading or processing article file ${filePath}:`, error);
    return null;
  }
}

// Function to get metadata for all posts for a specific locale
export function getAllPostsMetadata(locale: string): PostMetadata[] {
   if (!supportedLocales.includes(locale)) {
    console.warn(`Unsupported locale "${locale}" requested for post metadata.`);
    return [];
  }

  let filenames: string[];
  try {
    // Filter filenames for the specific locale
    filenames = fs.readdirSync(postsDirectory).filter((filename) => filename.endsWith(`.${locale}.md`));
  } catch (error) {
     console.error(`Error reading posts directory for metadata (locale: ${locale}):`, error);
     return [];
  }

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    // Extract slug part before the locale and extension
    const slug = filename.replace(`.${locale}.md`, '');
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      // Basic validation
      if (!data.title || !data.summary || !data.date || !data.author) {
         console.warn(`Post "${slug}" in locale "${locale}" is missing required frontmatter fields.`);
      }

      return {
        ...(data as PostFrontmatter),
        slug,
        locale, // Add locale
      } as PostMetadata;
    } catch (error) {
       console.error(`Error reading metadata for post ${filePath}:`, error);
       return null; // Return null for posts that fail to read/parse
    }
  }).filter((post): post is PostMetadata => post !== null); // Filter out nulls

  // Sort posts by date (descending)
  posts.sort((a, b) => {
      try {
          // Add defensive check for valid date strings before creating Date objects
          const dateA = a.date ? new Date(a.date).getTime() : 0;
          const dateB = b.date ? new Date(b.date).getTime() : 0;

          if (isNaN(dateA) || isNaN(dateB)) {
              console.error(`Invalid date encountered during sorting: ${a.slug} (${a.date}), ${b.slug} (${b.date})`);
              return 0; // Keep original order if dates are invalid
          }
          return dateB - dateA;
      } catch(e) {
          // Handle potential errors during date parsing/comparison
          console.error(`Error parsing dates for sorting: ${a.slug}, ${b.slug}`, e);
          return 0;
      }
  });


  return posts;
}
