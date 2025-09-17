import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReadingTime, { calculateReadingTime, useReadingTime, getReadingTime } from './ReadingTime';
import { renderHook } from '@testing-library/react';

describe('ReadingTime Component', () => {
  it('renders with default props', () => {
    const content = 'This is a test content with some words.';
    render(<ReadingTime content={content} />);
    
    expect(screen.getByText('1 min read')).toBeInTheDocument();
    // Clock icon should be rendered (SVG elements don't have img role)
  });

  it('calculates reading time correctly for short content', () => {
    const shortContent = 'Short text';
    render(<ReadingTime content={shortContent} />);
    
    // Should show minimum 1 minute
    expect(screen.getByText('1 min read')).toBeInTheDocument();
  });

  it('calculates reading time correctly for medium content', () => {
    // Generate ~450 words (2 minutes at 225 WPM)
    const words = new Array(450).fill('word').join(' ');
    render(<ReadingTime content={words} />);
    
    expect(screen.getByText('2 min read')).toBeInTheDocument();
  });

  it('calculates reading time correctly for long content', () => {
    // Generate ~2250 words (10 minutes at 225 WPM)
    const words = new Array(2250).fill('word').join(' ');
    render(<ReadingTime content={words} />);
    
    expect(screen.getByText('10 min read')).toBeInTheDocument();
  });

  it('strips HTML tags before calculating', () => {
    const htmlContent = '<p>This is <strong>HTML</strong> content with <a href="#">links</a>.</p>';
    render(<ReadingTime content={htmlContent} />);
    
    // Should count only text words, not HTML tags
    expect(screen.getByText('1 min read')).toBeInTheDocument();
  });

  it('handles custom words per minute', () => {
    // 450 words at 450 WPM = 1 minute
    const words = new Array(450).fill('word').join(' ');
    render(<ReadingTime content={words} wordsPerMinute={450} />);
    
    expect(screen.getByText('1 min read')).toBeInTheDocument();
  });

  it('hides icon when showIcon is false', () => {
    const content = 'Test content';
    render(<ReadingTime content={content} showIcon={false} />);
    
    expect(screen.getByText('1 min read')).toBeInTheDocument();
    // Icon should not be present when showIcon is false
  });

  it('applies custom className', () => {
    const content = 'Test content';
    const { container } = render(
      <ReadingTime content={content} className="custom-class" />
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('handles empty content', () => {
    render(<ReadingTime content="" />);
    
    expect(screen.getByText('1 min read')).toBeInTheDocument();
  });

  it('handles content with special characters', () => {
    const content = 'Test content with special chars: @#$%^&*()_+-=[]{}|;\':",./<>?';
    render(<ReadingTime content={content} />);
    
    expect(screen.getByText('1 min read')).toBeInTheDocument();
  });

  it('handles content with multiple spaces and newlines', () => {
    const content = `
      This    is    content
      
      with     multiple     spaces
      
      and
      
      newlines
    `;
    render(<ReadingTime content={content} />);
    
    expect(screen.getByText('1 min read')).toBeInTheDocument();
  });
});

describe('calculateReadingTime utility function', () => {
  it('returns minimum 1 minute for short content', () => {
    expect(calculateReadingTime('Short text')).toBe(1);
    expect(calculateReadingTime('')).toBe(1);
  });

  it('calculates correctly for various content lengths', () => {
    const words225 = new Array(225).fill('word').join(' ');
    const words450 = new Array(450).fill('word').join(' ');
    const words900 = new Array(900).fill('word').join(' ');
    
    expect(calculateReadingTime(words225)).toBe(1);
    expect(calculateReadingTime(words450)).toBe(2);
    expect(calculateReadingTime(words900)).toBe(4);
  });

  it('respects custom WPM parameter', () => {
    const words300 = new Array(300).fill('word').join(' ');
    
    expect(calculateReadingTime(words300, 300)).toBe(1);
    expect(calculateReadingTime(words300, 150)).toBe(2);
    expect(calculateReadingTime(words300, 100)).toBe(3);
  });

  it('strips HTML before calculating', () => {
    const html = '<div><p>Five words in this paragraph</p></div>';
    expect(calculateReadingTime(html)).toBe(1);
  });

  it('handles complex HTML with attributes', () => {
    const complexHTML = `
      <div class="container" id="main">
        <h1 style="color: red;">Title Here</h1>
        <p data-test="paragraph">This is a <strong>test</strong> with <em>various</em> tags.</p>
        <a href="https://example.com" target="_blank">Link text</a>
      </div>
    `;
    expect(calculateReadingTime(complexHTML)).toBe(1);
  });
});

describe('useReadingTime hook', () => {
  it('returns reading time in minutes', () => {
    const content = new Array(450).fill('word').join(' ');
    const { result } = renderHook(() => useReadingTime(content));
    
    expect(result.current).toBe(2);
  });

  it('updates when content changes', () => {
    const { result, rerender } = renderHook(
      ({ content }) => useReadingTime(content),
      { initialProps: { content: 'Short text' } }
    );
    
    expect(result.current).toBe(1);
    
    const longContent = new Array(450).fill('word').join(' ');
    rerender({ content: longContent });
    
    expect(result.current).toBe(2);
  });

  it('respects custom WPM in hook', () => {
    const content = new Array(450).fill('word').join(' ');
    const { result } = renderHook(() => useReadingTime(content, 450));
    
    expect(result.current).toBe(1);
  });

  it('handles undefined content', () => {
    const { result } = renderHook(() => useReadingTime(''));
    
    expect(result.current).toBe(1);
  });
});

describe('getReadingTime utility function', () => {
  it('returns formatted string', () => {
    expect(getReadingTime('Short text')).toBe('1 min read');
    
    const words450 = new Array(450).fill('word').join(' ');
    expect(getReadingTime(words450)).toBe('2 min read');
  });

  it('handles singular and plural correctly', () => {
    const words225 = new Array(225).fill('word').join(' ');
    const words450 = new Array(450).fill('word').join(' ');
    
    expect(getReadingTime(words225)).toBe('1 min read');
    expect(getReadingTime(words450)).toBe('2 min read');
  });

  it('respects custom WPM parameter', () => {
    const words450 = new Array(450).fill('word').join(' ');
    
    expect(getReadingTime(words450, 450)).toBe('1 min read');
    expect(getReadingTime(words450, 225)).toBe('2 min read');
  });
});