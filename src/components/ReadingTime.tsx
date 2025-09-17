'use client';

import { Clock } from 'lucide-react';

interface ReadingTimeProps {
  content: string;
  className?: string;
  showIcon?: boolean;
  wordsPerMinute?: number;
}

// #COMPLETION_DRIVE_IMPL: Simple reading time calculation utility
export function calculateReadingTime(content: string, wordsPerMinute: number = 225): number {
  // Remove HTML tags and extra whitespace
  const plainText = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  
  // Count words
  const wordCount = plainText.split(' ').filter(word => word.length > 0).length;
  
  // Calculate reading time in minutes
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  
  return Math.max(1, readingTimeMinutes); // Minimum 1 minute
}

export default function ReadingTime({ 
  content, 
  className = '', 
  showIcon = true,
  wordsPerMinute = 225 
}: ReadingTimeProps) {
  const readingTimeMinutes = calculateReadingTime(content, wordsPerMinute);
  
  return (
    <div className={`flex items-center text-sm text-slate-500 ${className}`}>
      {showIcon && <Clock className="h-4 w-4 mr-1" />}
      <span>{readingTimeMinutes} min read</span>
    </div>
  );
}

// #COMPLETION_DRIVE_IMPL: Hook for use in components that need reading time
export function useReadingTime(content: string, wordsPerMinute: number = 225) {
  return calculateReadingTime(content, wordsPerMinute);
}

// #COMPLETION_DRIVE_IMPL: Utility for static generation
export function getReadingTime(content: string, wordsPerMinute: number = 225): string {
  const minutes = calculateReadingTime(content, wordsPerMinute);
  return `${minutes} min read`;
}