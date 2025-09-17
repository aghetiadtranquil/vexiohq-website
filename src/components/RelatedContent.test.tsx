import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RelatedContent from './RelatedContent';

const mockArticles = [
  {
    slug: 'article-1',
    title: 'First Article',
    excerpt: 'This is the first article excerpt',
    category: 'Technology',
    author: 'John Doe',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['ai', 'machine-learning', 'technology']
  },
  {
    slug: 'article-2',
    title: 'Second Article',
    excerpt: 'This is the second article excerpt',
    category: 'Business',
    author: 'Jane Smith',
    date: '2024-01-14',
    readTime: '3 min read',
    tags: ['business', 'strategy', 'ai']
  },
  {
    slug: 'article-3',
    title: 'Third Article',
    excerpt: 'This is the third article excerpt',
    category: 'Technology',
    author: 'Bob Johnson',
    date: '2024-01-13',
    readTime: '7 min read',
    tags: ['technology', 'innovation', 'future']
  },
  {
    slug: 'article-4',
    title: 'Fourth Article',
    excerpt: 'This is the fourth article excerpt',
    category: 'AI',
    author: 'Alice Brown',
    date: '2024-01-12',
    readTime: '4 min read',
    tags: ['ai', 'deep-learning', 'neural-networks']
  },
  {
    slug: 'article-5',
    title: 'Fifth Article',
    excerpt: 'This is the fifth article excerpt',
    category: 'Data Science',
    author: 'Charlie Wilson',
    date: '2024-01-11',
    readTime: '6 min read',
    tags: ['data-science', 'analytics', 'python']
  }
];

describe('RelatedContent Component', () => {
  it('renders with default props', () => {
    render(
      <RelatedContent
        currentSlug="current-article"
        currentTags={['ai', 'technology']}
        articles={mockArticles}
      />
    );
    
    expect(screen.getByText('Related Articles')).toBeInTheDocument();
  });

  it('displays related articles based on matching tags', () => {
    render(
      <RelatedContent
        currentSlug="current-article"
        currentTags={['ai', 'technology']}
        articles={mockArticles}
      />
    );
    
    // Should show articles with matching tags
    expect(screen.getByText('First Article')).toBeInTheDocument(); // has 'ai' and 'technology'
    expect(screen.getByText('Second Article')).toBeInTheDocument(); // has 'ai'
    expect(screen.getByText('Third Article')).toBeInTheDocument(); // has 'technology'
  });

  it('excludes the current article from results', () => {
    render(
      <RelatedContent
        currentSlug="article-1"
        currentTags={['ai', 'technology']}
        articles={mockArticles}
      />
    );
    
    // Should not show the current article
    expect(screen.queryByText('First Article')).not.toBeInTheDocument();
    
    // Should show other related articles
    expect(screen.getByText('Second Article')).toBeInTheDocument();
  });

  it('limits the number of displayed articles', () => {
    render(
      <RelatedContent
        currentSlug="current-article"
        currentTags={['ai']}
        articles={mockArticles}
        maxItems={2}
      />
    );
    
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(2);
  });

  it('sorts articles by similarity score and date', () => {
    render(
      <RelatedContent
        currentSlug="current-article"
        currentTags={['ai', 'machine-learning']}
        articles={mockArticles}
      />
    );
    
    const articles = screen.getAllByRole('article');
    const firstArticleTitle = articles[0].querySelector('h3')?.textContent;
    
    // Article 1 should be first (has both 'ai' and 'machine-learning')
    expect(firstArticleTitle).toBe('First Article');
  });

  it('returns null when no related articles found', () => {
    const { container } = render(
      <RelatedContent
        currentSlug="current-article"
        currentTags={['unrelated-tag']}
        articles={mockArticles}
      />
    );
    
    expect(container.firstChild).toBeNull();
  });

  it('displays custom title', () => {
    render(
      <RelatedContent
        currentSlug="current-article"
        currentTags={['ai']}
        articles={mockArticles}
        title="You May Also Like"
      />
    );
    
    expect(screen.getByText('You May Also Like')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <RelatedContent
        currentSlug="current-article"
        currentTags={['ai']}
        articles={mockArticles}
        className="custom-class"
      />
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('highlights matching tags', () => {
    render(
      <RelatedContent
        currentSlug="current-article"
        currentTags={['ai', 'technology']}
        articles={mockArticles}
      />
    );
    
    // Check for highlighted tags (they have green background)
    const aiTags = screen.getAllByText('ai');
    const matchingAiTags = aiTags.filter(tag => 
      tag.className.includes('bg-green-100')
    );
    expect(matchingAiTags.length).toBeGreaterThan(0);
  });

  it('displays article metadata correctly', () => {
    render(
      <RelatedContent
        currentSlug="current-article"
        currentTags={['ai']}
        articles={mockArticles}
        maxItems={1}
      />
    );
    
    // Check for article metadata
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('5 min read')).toBeInTheDocument();
    // Technology appears both as category and badge
    const technologyElements = screen.getAllByText('Technology');
    expect(technologyElements.length).toBeGreaterThan(0);
  });

  it('handles empty articles array', () => {
    const { container } = render(
      <RelatedContent
        currentSlug="current-article"
        currentTags={['ai']}
        articles={[]}
      />
    );
    
    expect(container.firstChild).toBeNull();
  });

  it('handles empty current tags', () => {
    const { container } = render(
      <RelatedContent
        currentSlug="current-article"
        currentTags={[]}
        articles={mockArticles}
      />
    );
    
    expect(container.firstChild).toBeNull();
  });

  it('generates correct article links', () => {
    render(
      <RelatedContent
        currentSlug="current-article"
        currentTags={['ai']}
        articles={mockArticles}
        maxItems={1}
      />
    );
    
    const link = screen.getByRole('link', { name: /First Article/i });
    expect(link).toHaveAttribute('href', '/blog/article-1');
  });

  it('calculates Jaccard similarity correctly', () => {
    const testArticles = [
      {
        ...mockArticles[0],
        tags: ['ai', 'ml', 'tech'] // 1 match out of 4 unique = 0.25
      },
      {
        ...mockArticles[1],
        tags: ['ai', 'ml'] // 1 match out of 3 unique = 0.33
      },
      {
        ...mockArticles[2],
        tags: ['ai'] // 1 match out of 1 unique = 1.0
      }
    ];

    render(
      <RelatedContent
        currentSlug="current-article"
        currentTags={['ai']}
        articles={testArticles}
      />
    );
    
    const articles = screen.getAllByRole('article');
    const titles = articles.map(a => a.querySelector('h3')?.textContent);
    
    // Article with highest similarity should be first
    expect(titles[0]).toBe('Third Article');
  });

  it('respects maxItems even with many matches', () => {
    const manyArticles = Array.from({ length: 10 }, (_, i) => ({
      slug: `article-${i}`,
      title: `Article ${i}`,
      excerpt: `Excerpt ${i}`,
      category: 'Tech',
      author: 'Author',
      date: '2024-01-01',
      readTime: '5 min',
      tags: ['ai', 'technology']
    }));

    render(
      <RelatedContent
        currentSlug="current-article"
        currentTags={['ai']}
        articles={manyArticles}
        maxItems={3}
      />
    );
    
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(3);
  });

  it('formats dates correctly', () => {
    render(
      <RelatedContent
        currentSlug="current-article"
        currentTags={['ai']}
        articles={mockArticles}
        maxItems={1}
      />
    );
    
    // Date should be formatted (month and day only)
    expect(screen.getByText(/Jan 15/)).toBeInTheDocument();
  });
});