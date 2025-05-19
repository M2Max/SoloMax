
'use client';

import { useEffect } from 'react';

interface ChatbotWidgetLoaderProps {
  apiKey?: string;
  themeColor?: string;
  initialGreeting?: string;
  position?: string;
  hostUrl: string; // Make hostUrl a required prop
}

export function ChatbotWidgetLoader({
  apiKey,
  themeColor = '#000000', // Default from user's new script
  initialGreeting = 'Hello! How can I assist you today?', // Corrected from user's new script
  position = 'bottom-right', // Default from user's new script
  hostUrl, // hostUrl now comes from props
}: ChatbotWidgetLoaderProps) {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const config = {
      apiKey,
      themeColor,
      initialGreeting,
      position,
      hostUrl,
    };

    const iframeId = 'webassist-ai-widget-iframe';
    let existingIframe = document.getElementById(iframeId) as HTMLIFrameElement | null;

    const iframeSrc = `${config.hostUrl}/chatbot-frame?apiKey=${encodeURIComponent(config.apiKey ? config.apiKey : '')}&themeColor=${encodeURIComponent(config.themeColor)}&initialGreeting=${encodeURIComponent(config.initialGreeting)}&position=${encodeURIComponent(config.position)}`;

    if (existingIframe) {
      if (existingIframe.src !== iframeSrc) {
        existingIframe.src = iframeSrc;
      }
      // If iframe already exists, the user's script implies we don't need to re-attach listeners or styles.
      return;
    }

    const iframe = document.createElement('iframe');
    iframe.id = iframeId;
    iframe.title = 'WebAssist AI Chatbot'; // From user's new script
    iframe.src = iframeSrc;
    
    // Styles from user's new script
    iframe.style.position = 'fixed';
    iframe.style.zIndex = '999999';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '12px';
    iframe.style.overflow = 'hidden';
    iframe.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
    
    // Initial size for closed state (FAB) - from user's new script
    iframe.style.width = '60px'; 
    iframe.style.height = '60px';

    // Positioning from user's new script
    if (config.position.includes('right')) iframe.style.right = '20px';
    else iframe.style.left = '20px';
    
    if (config.position.includes('bottom')) iframe.style.bottom = '20px';
    else iframe.style.top = '20px';
    
    iframe.style.transition = 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease, transform 0.3s ease';
    // allowTransparency is obsolete, not setting it.
    iframe.setAttribute('aria-live', 'polite'); // From user's new script

    const messageListener = (event: MessageEvent) => {
      if (event.source !== iframe.contentWindow || !event.data || typeof event.data.type !== 'string') return;

      const data = event.data;
      if (data.type === 'CHATBOT_WIDGET_RESIZE') {
        iframe.style.width = data.width;
        iframe.style.height = data.height;
      }
      // Additional event handling if needed
    };

    window.addEventListener('message', messageListener);
    document.body.appendChild(iframe);

    return () => {
      window.removeEventListener('message', messageListener);
      // Only remove the iframe if this instance of the component added it.
      // If existingIframe was not null at the beginning, this component didn't create it.
      if (!existingIframe && iframe.parentNode === document.body) {
        document.body.removeChild(iframe);
      }
    };
  // Ensure useEffect re-runs if any of these critical config props change.
  }, [apiKey, themeColor, initialGreeting, position, hostUrl]); 

  return null; // This component only injects the iframe, doesn't render anything itself
}
