'use client';

import Link from 'next/link';
import { ArrowRight, Clock, User, Calendar } from 'lucide-react';

interface RelatedArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

interface RelatedContentProps {
  currentSlug: string;
  currentTags: string[];
  articles: RelatedArticle[];
  maxItems?: number;
  className?: string;
  title?: string;
}

// #COMPLETION_DRIVE_IMPL: Tag-based similarity matching algorithm
function calculateSimilarity(currentTags: string[], articleTags: string[]): number {
  const currentSet = new Set(currentTags.map(tag => tag.toLowerCase()));
  const articleSet = new Set(articleTags.map(tag => tag.toLowerCase()));
  
  // Calculate intersection
  const intersection = Array.from(currentSet).filter(tag => articleSet.has(tag));
  const union = Array.from(new Set([...Array.from(currentSet), ...Array.from(articleSet)]));
  
  // Jaccard similarity coefficient
  return intersection.length / union.length;
}

// #COMPLETION_DRIVE_IMPL: Sort and filter related articles
function getRelatedArticles(
  currentSlug: string,
  currentTags: string[],
  allArticles: RelatedArticle[],
  maxItems: number = 3
): RelatedArticle[] {
  // Filter out current article and calculate similarity scores
  const articlesWithScores = allArticles
    .filter(article => article.slug !== currentSlug)
    .map(article => ({
      ...article,
      similarity: calculateSimilarity(currentTags, article.tags)
    }))
    .filter(article => article.similarity > 0) // Only include articles with at least one matching tag
    .sort((a, b) => {
      // Sort by similarity first, then by date (newer first)
      if (b.similarity !== a.similarity) {
        return b.similarity - a.similarity;
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return articlesWithScores.slice(0, maxItems);
}

export default function RelatedContent({
  currentSlug,
  currentTags,
  articles,
  maxItems = 3,
  className = '',
  title = 'Related Articles'
}: RelatedContentProps) {
  const relatedArticles = getRelatedArticles(currentSlug, currentTags, articles, maxItems);

  // #COMPLETION_DRIVE_IMPL: Don't render if no related articles found
  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className={`py-12 bg-slate-50 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">{title}</h2>
          <p className="text-slate-600">Continue exploring related topics and insights</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {relatedArticles.map((article) => (
            <article 
              key={article.slug} 
              className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Article Image Placeholder */}
              <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <svg className="w-12 h-12 mx-auto mb-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <p className="text-xs font-medium">{article.category}</p>
                </div>
              </div>

              <div className="p-5">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Metadata */}
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                  <span className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {article.author}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>

                {/* Tags - show matching tags first */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags
                    .filter(tag => currentTags.some(currentTag => 
                      currentTag.toLowerCase() === tag.toLowerCase()
                    ))
                    .slice(0, 2)
                    .map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium"
                        title="Matching topic"
                      >
                        {tag}
                      </span>
                    ))}
                  {article.tags
                    .filter(tag => !currentTags.some(currentTag => 
                      currentTag.toLowerCase() === tag.toLowerCase()
                    ))
                    .slice(0, 2 - article.tags.filter(tag => 
                      currentTags.some(currentTag => 
                        currentTag.toLowerCase() === tag.toLowerCase()
                      )
                    ).length)
                    .map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                </div>

                {/* Read More Link */}
                <Link 
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Read Article
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* #COMPLETION_DRIVE_IMPL: Show "More Articles" link if there are more related articles */}
        {articles.filter(a => a.slug !== currentSlug).length > maxItems && (
          <div className="text-center mt-8">
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-semibold"
            >
              Explore More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

// #COMPLETION_DRIVE_IMPL: Export utility function for use in pages
export { getRelatedArticles, calculateSimilarity };