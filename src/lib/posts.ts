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
  content: string; // Raw markdown content
  contentHtml?: string; // Processed HTML content
}

// Interface for list metadata (doesn't need full content)
export interface PostMetadata extends PostFrontmatter {
  slug: string;
}

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

// Function to get all post slugs for generateStaticParams
export function getAllPostSlugs() {
  try {
    const filenames = fs.readdirSync(postsDirectory);
    return filenames
      .filter((filename) => filename.endsWith('.md')) // Ensure only markdown files
      .map((filename) => ({
        slug: filename.replace(/\.md$/, ''),
      }));
  } catch (error) {
    console.error('Error reading posts directory for slugs:', error);
    return []; // Return empty array on error
  }
}

// Function to get a single article's data by slug
export async function getArticleData(slug: string): Promise<ArticleData | null> {
  const filePath = path.join(postsDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Basic validation for required fields
    if (!data.title || !data.summary || !data.date || !data.author) {
      console.warn(`Post "${slug}" is missing required frontmatter fields.`);
      // Depending on requirements, you might want to return null or throw an error
    }

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    // Validate date format (simple check)
    if (data.date && isNaN(Date.parse(data.date))) {
       console.warn(`Invalid date format for post "${slug}": ${data.date}. Using original value.`);
    }

    return {
      ...(data as PostFrontmatter),
      slug,
      content,
      contentHtml,
     } as ArticleData;
  } catch (error) {
    // Differentiate between file not found and other errors if needed
    if (error instanceof Error && (error as NodeJS.ErrnoException).code === 'ENOENT') {
       console.error(`Article file not found: ${filePath}`);
    } else {
       console.error(`Error reading or processing article file ${filePath}:`, error);
    }
    return null;
  }
}

// Function to get metadata for all posts (for the blog list page)
export function getAllPostsMetadata(): PostMetadata[] {
  let filenames: string[];
  try {
    filenames = fs.readdirSync(postsDirectory).filter((filename) => filename.endsWith('.md'));
  } catch (error) {
     console.error('Error reading posts directory for metadata:', error);
     return [];
  }

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const slug = filename.replace(/\.md$/, '');
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      // Basic validation
      if (!data.title || !data.summary || !data.date || !data.author) {
         console.warn(`Post "${slug}" is missing required frontmatter fields.`);
      }

      return {
        ...(data as PostFrontmatter),
        slug,
      } as PostMetadata;
    } catch (error) {
       console.error(`Error reading metadata for post ${filePath}:`, error);
       return null; // Return null for posts that fail to read/parse
    }
  }).filter((post): post is PostMetadata => post !== null); // Filter out nulls

  // Sort posts by date (descending)
  posts.sort((a, b) => {
      try {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      } catch(e) {
          // Handle potential invalid dates during sort
          console.error(`Error parsing dates for sorting: ${a.slug}, ${b.slug}`);
          return 0;
      }
  });


  return posts;
}
