'use client';

import { useState } from 'react';

// #COMPLETION_DRIVE_IMPL: Using inline SVGs for professional social sharing buttons to avoid external dependencies
const socialIcons = {
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  twitter: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  facebook: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  email: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  ),
  share: (
    <svg className="w-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
    </svg>
  )
};

interface SocialSharingProps {
  title: string;
  url: string;
  description?: string;
  className?: string;
  showLabel?: boolean;
  compact?: boolean;
}

export default function SocialSharing({ 
  title, 
  url, 
  description = '',
  className = '',
  showLabel = true,
  compact = false
}: SocialSharingProps) {
  const [copied, setCopied] = useState(false);
  
  // #COMPLETION_DRIVE_IMPL: Creating share URLs with proper encoding
  const shareUrls = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + '\n\n' + url)}`
  };

  // #COMPLETION_DRIVE_IMPL: Track sharing events for analytics
  const handleShare = (platform: string, shareUrl: string) => {
    // Open share window
    if (platform === 'email') {
      window.location.href = shareUrl;
    } else {
      window.open(
        shareUrl,
        'share',
        'width=600,height=400,resizable=yes,scrollbars=yes'
      );
    }

    // Track analytics event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'share', {
        method: platform,
        content_type: 'article',
        item_id: url
      });
    }
  };

  // #COMPLETION_DRIVE_IMPL: Copy link functionality for native sharing
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      
      // Track copy event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'share', {
          method: 'copy_link',
          content_type: 'article',
          item_id: url
        });
      }
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`${className}`}>
      {showLabel && !compact && (
        <div className="flex items-center mb-4">
          {socialIcons.share}
          <span className="ml-2 text-sm font-medium text-slate-700">Share this article</span>
        </div>
      )}
      
      <div className={`flex ${compact ? 'gap-2' : 'gap-4'}`}>
        {/* LinkedIn */}
        <button
          onClick={() => handleShare('linkedin', shareUrls.linkedin)}
          className={`inline-flex items-center justify-center ${
            compact ? 'w-8 h-8' : 'w-10 h-10'
          } bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          aria-label="Share on LinkedIn"
          title="Share on LinkedIn"
        >
          {socialIcons.linkedin}
        </button>

        {/* Twitter/X */}
        <button
          onClick={() => handleShare('twitter', shareUrls.twitter)}
          className={`inline-flex items-center justify-center ${
            compact ? 'w-8 h-8' : 'w-10 h-10'
          } bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2`}
          aria-label="Share on Twitter"
          title="Share on Twitter"
        >
          {socialIcons.twitter}
        </button>

        {/* Facebook */}
        <button
          onClick={() => handleShare('facebook', shareUrls.facebook)}
          className={`inline-flex items-center justify-center ${
            compact ? 'w-8 h-8' : 'w-10 h-10'
          } bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2`}
          aria-label="Share on Facebook"
          title="Share on Facebook"
        >
          {socialIcons.facebook}
        </button>

        {/* Email */}
        <button
          onClick={() => handleShare('email', shareUrls.email)}
          className={`inline-flex items-center justify-center ${
            compact ? 'w-8 h-8' : 'w-10 h-10'
          } bg-slate-600 hover:bg-slate-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2`}
          aria-label="Share via email"
          title="Share via email"
        >
          {socialIcons.email}
        </button>

        {/* Copy Link */}
        <button
          onClick={handleCopyLink}
          className={`inline-flex items-center justify-center ${
            compact ? 'w-8 h-8' : 'w-10 h-10'
          } ${
            copied 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-slate-400 hover:bg-slate-500'
          } text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2`}
          aria-label={copied ? 'Link copied!' : 'Copy link'}
          title={copied ? 'Link copied!' : 'Copy link'}
        >
          {copied ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>
      
      {!compact && (
        <div className="mt-2 text-xs text-slate-500">
          {copied ? 'Link copied to clipboard!' : 'Share with your network'}
        </div>
      )}
    </div>
  );
}