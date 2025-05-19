'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { Bot, MessageSquare, Send, X, User, CornerDownLeft, Loader2, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { ChatMessage, type Message } from './ChatMessage';
import { cn } from '@/lib/utils';

interface ChatbotWidgetConfig {
  apiKey: string;
  themeColor: string;
  initialGreeting: string;
  position: string; // Not directly used for styling here, but available
}

export function ChatbotWidget() {
  const searchParams = useSearchParams();
  const [config, setConfig] = useState<ChatbotWidgetConfig>({
    apiKey: '',
    themeColor: 'hsl(var(--primary))', // Default to CSS variable
    initialGreeting: 'Hello! How can I help you today?',
    position: 'bottom-right',
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false); // For iframe internal full screen
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Initialize from query params
    const apiKey = searchParams.get('apiKey') || '';
    // Ensure themeColor is a valid CSS color string
    let themeColor = searchParams.get('themeColor') || 'hsl(var(--primary))';
    if (!themeColor.startsWith('#') && !themeColor.startsWith('hsl') && !themeColor.startsWith('rgb')) {
        themeColor = 'hsl(var(--primary))'; // Fallback to default if invalid
    }
    const initialGreeting = searchParams.get('initialGreeting') || 'Hello! How can I help you today?';
    const position = searchParams.get('position') || 'bottom-right';
    
    setConfig({ apiKey, themeColor, initialGreeting, position });

    // Post initial size message for FAB
     if (typeof window !== 'undefined' && window.parent) {
      window.parent.postMessage({ type: 'CHATBOT_WIDGET_RESIZE', width: '60px', height: '60px' }, '*');
    }
  }, [searchParams]);

  useEffect(() => {
    // Post message to parent iframe about size changes
    if (typeof window !== 'undefined' && window.parent) {
      const newWidth = isOpen ? (isFullScreen ? '100%' : '360px') : '60px';
      const newHeight = isOpen ? (isFullScreen ? '100%' : 'min(600px, calc(100vh - 40px))') : '60px'; // 100vh - 40px for some padding from iframe edges
      window.parent.postMessage({ type: 'CHATBOT_WIDGET_RESIZE', width: newWidth, height: newHeight }, '*');
      
      if(isOpen) window.parent.postMessage({ type: 'CHATBOT_WIDGET_OPEN'}, '*');
      else window.parent.postMessage({ type: 'CHATBOT_WIDGET_CLOSE'}, '*');
    }
    if (isOpen && inputRef.current) {
        inputRef.current.focus();
    }
  }, [isOpen, isFullScreen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  useEffect(() => {
    // Add initial greeting if not already present
    if (config.initialGreeting && messages.length === 0) {
      setMessages([{ id: 'initial', text: config.initialGreeting, sender: 'bot', timestamp: new Date() }]);
    }
  }, [config.initialGreeting, messages.length]);


  const handleSendMessage = async (e?: FormEvent) => {
    e?.preventDefault();
    if (inputValue.trim() === '' || isLoading) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate API call and streaming response
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network latency
    
    const botResponseChunks = ["Okay, I'm processing that. ", "Let me think... ", "Here's what I found: ", "This is a simulated response based on your query about '", `${newUserMessage.text.substring(0,20)}...`,"'."];
    let fullBotResponse = '';
    const botMessageId = `bot-${Date.now()}`;

    setMessages(prev => [...prev, { id: botMessageId, text: "...", sender: 'bot', timestamp: new Date()}]);

    for (let i = 0; i < botResponseChunks.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 300)); // Simulate streaming
      fullBotResponse += botResponseChunks[i];
      setMessages(prev => prev.map(msg => msg.id === botMessageId ? {...msg, text: fullBotResponse + (i < botResponseChunks.length -1 ? "..." : "")} : msg));
    }
    
    setIsLoading(false);
    inputRef.current?.focus();
  };

  const toggleOpen = () => setIsOpen(!isOpen);

  if (!config.apiKey && typeof window !== 'undefined') { // Only check apiKey after mount
     // Don't render anything or show an error if API key is missing
     // This might be too aggressive, widget might still need to show something
     // For now, let's assume it's okay to render with empty API key for demo
  }

  return (
    <div 
      className={cn(
        "fixed inset-0 flex flex-col transition-all duration-300 ease-in-out overflow-hidden",
        isOpen ? "bg-background shadow-2xl rounded-none" : "bg-transparent rounded-full items-center justify-center"
      )}
      style={{ '--widget-primary-color': config.themeColor } as React.CSSProperties}
    >
      {!isOpen && (
        <Button
          onClick={toggleOpen}
          variant="default"
          size="icon"
          className="rounded-full w-14 h-14 p-0 shadow-xl hover:scale-110 transition-transform duration-200"
          style={{ backgroundColor: config.themeColor, color: 'hsl(var(--primary-foreground))' }}
          aria-label="Open chat"
        >
          <MessageSquare className="h-7 w-7" />
        </Button>
      )}

      {isOpen && (
        <>
          <header 
            className="p-3 flex items-center justify-between border-b"
            style={{ backgroundColor: config.themeColor, color: 'hsl(var(--primary-foreground))' }}
          >
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6" />
              <h3 className="font-semibold text-lg">WebAssist AI</h3>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={() => setIsFullScreen(!isFullScreen)} className="text-primary-foreground hover:bg-white/20 mr-1" aria-label={isFullScreen ? "Exit full screen" : "Enter full screen"}>
                {isFullScreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleOpen} className="text-primary-foreground hover:bg-white/20" aria-label="Close chat">
                <X className="h-5 w-5" />
              </Button>
            </div>
          </header>

          <div className="flex-grow overflow-y-auto p-4 space-y-2 bg-background">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} themeColor={config.themeColor} />
            ))}
            <div ref={messagesEndRef} />
            {isLoading && messages[messages.length-1]?.sender === 'user' && (
                 <div className="flex items-end gap-2 mb-4 justify-start">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback style={{ backgroundColor: config.themeColor }} className="text-primary-foreground">
                            <Bot className="h-5 w-5" />
                        </AvatarFallback>
                    </Avatar>
                    <div className="max-w-[70%] rounded-xl px-4 py-3 shadow-md bg-card text-card-foreground rounded-bl-none border">
                        <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                    </div>
                </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-3 border-t bg-background flex items-start gap-2">
            <Textarea
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow resize-none min-h-[40px] max-h-[120px] text-sm p-2 focus-visible:ring-offset-0"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              rows={1}
              disabled={isLoading}
              aria-label="Chat message input"
            />
            <Button 
              type="submit" 
              size="icon" 
              className="h-10 w-10 shrink-0" 
              style={{ backgroundColor: config.themeColor, color: 'hsl(var(--primary-foreground))' }}
              disabled={isLoading || inputValue.trim() === ''}
              aria-label="Send message"
            >
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
