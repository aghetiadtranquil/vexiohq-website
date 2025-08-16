'use client';

import Link from 'next/link';

// Inline SVG icons to avoid external dependencies
const icons = {
  calendar: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  clock: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  arrowRight: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  user: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
};

const blogPosts = [
  {
    slug: 'how-to-implement-ai-in-enterprise',
    title: 'How to Implement AI in Enterprise: A Complete Guide for 2024',
    excerpt: 'Learn the step-by-step process of implementing AI in your enterprise, from assessment to deployment. Discover best practices, common pitfalls, and ROI strategies.',
    author: 'Sarah Chen',
    date: '2024-12-20',
    readTime: '8 min read',
    category: 'AI Implementation',
    featured: true,
    image: '/blog/ai-implementation.jpg'
  },
  {
    slug: 'genai-vs-traditional-ml',
    title: 'GenAI vs Traditional ML: Key Differences & Use Cases',
    excerpt: 'Understand the fundamental differences between Generative AI and Traditional Machine Learning, their unique capabilities, and when to use each approach.',
    author: 'DataTranquil Team',
    date: '2024-03-15',
    readTime: '12 min read',
    category: 'Technology',
    featured: true,
    image: '/blog/genai-ml.jpg'
  },
  {
    slug: 'ai-vs-traditional-analytics',
    title: 'AI vs Traditional Analytics: Which is Right for Your Business?',
    excerpt: 'Compare AI-powered analytics with traditional methods. Understand the pros, cons, costs, and use cases to make an informed decision for your organization.',
    author: 'Michael Rodriguez',
    date: '2024-12-18',
    readTime: '7 min read',
    category: 'Analytics',
    featured: true,
    image: '/blog/ai-analytics.jpg'
  },
  {
    slug: 'cost-of-bad-data-quality',
    title: 'The Hidden Cost of Bad Data Quality: Impact on Business Decision Making',
    excerpt: 'Discover how poor data quality affects your bottom line. Learn to identify, measure, and prevent data quality issues that cost businesses millions annually.',
    author: 'Emily Thompson',
    date: '2024-12-16',
    readTime: '6 min read',
    category: 'Data Quality',
    featured: true,
    image: '/blog/data-quality.jpg'
  },
  {
    slug: 'agentic-ai-revolution-2024',
    title: 'The Agentic AI Revolution: Why 2024 Changes Everything',
    excerpt: 'Discover how autonomous AI agents are transforming enterprise operations, from decision-making to complex workflow automation. Learn why Fortune 500 companies are investing billions.',
    author: 'DataTranquil Team',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'Agentic AI',
    featured: false,
    image: '/blog/agentic-ai.jpg'
  },
  {
    slug: 'oracle-to-ai-transformation-guide',
    title: 'From Oracle BI to AI: A Practical Transformation Guide',
    excerpt: 'Based on 36,000+ hours of experience, we share the roadmap for transitioning from traditional Oracle BI systems to modern AI-powered analytics platforms.',
    author: 'DataTranquil Team',
    date: '2024-12-10',
    readTime: '12 min read',
    category: 'Digital Transformation',
    featured: true,
    image: '/blog/oracle-transformation.jpg'
  },
  {
    slug: 'vibe-coding-future-development',
    title: 'Vibe Coding: The Future of Intuitive Software Development',
    excerpt: 'Explore how Vibe Coding is revolutionizing the way we build software, making development more intuitive, collaborative, and aligned with human thinking patterns.',
    author: 'DataTranquil Team',
    date: '2024-12-05',
    readTime: '10 min read',
    category: 'Innovation',
    image: '/blog/vibe-coding.jpg'
  },
  {
    slug: 'roi-ai-implementation-fortune-500',
    title: 'Measuring ROI in AI: Lessons from Fortune 500 Implementations',
    excerpt: 'Real metrics and case studies showing 40% cost reductions and 3x productivity gains. Learn how to measure and maximize your AI investment returns.',
    author: 'DataTranquil Team',
    date: '2024-11-28',
    readTime: '15 min read',
    category: 'Business Strategy',
    image: '/blog/roi-metrics.jpg'
  },
  {
    slug: 'gcp-vs-aws-ai-workloads',
    title: 'GCP vs AWS for AI Workloads: An Enterprise Perspective',
    excerpt: 'Comprehensive comparison of Google Cloud and AWS for AI/ML workloads, based on real implementations at Sunrun, Wind River, and other enterprises.',
    author: 'DataTranquil Team',
    date: '2024-11-20',
    readTime: '14 min read',
    category: 'Cloud & Infrastructure',
    image: '/blog/cloud-comparison.jpg'
  },
  {
    slug: 'ethical-ai-implementation-guide',
    title: 'Implementing Ethical AI: A Practical Framework for Enterprises',
    excerpt: 'How to build AI systems that are fair, transparent, and aligned with your values. Includes governance frameworks and real-world examples.',
    author: 'DataTranquil Team',
    date: '2024-11-15',
    readTime: '11 min read',
    category: 'AI Governance',
    image: '/blog/ethical-ai.jpg'
  },
  {
    slug: 'data-quality-ai-success',
    title: 'Why Data Quality Determines AI Success: A 500M Record Case Study',
    excerpt: 'Learn how we transformed chaotic enterprise data into AI-ready assets, processing 500M+ records with 99.7% accuracy.',
    author: 'DataTranquil Team',
    date: '2024-11-10',
    readTime: '9 min read',
    category: 'Data Engineering',
    image: '/blog/data-quality.jpg'
  },
  {
    slug: 'genai-vs-traditional-ml',
    title: 'GenAI vs Traditional ML: When to Use What',
    excerpt: 'Clear guidance on choosing between Generative AI and traditional machine learning approaches for different business use cases.',
    author: 'DataTranquil Team',
    date: '2024-11-05',
    readTime: '13 min read',
    category: 'Machine Learning',
    image: '/blog/genai-ml.jpg'
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Insights & Perspectives
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Deep insights from 36,000+ hours in the trenches. Real experiences from Oracle BI 
              to Agentic AI, helping enterprises navigate digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Articles</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {blogPosts.filter(post => post.featured).map((post) => (
              <article key={post.slug} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                {/* Blog Image */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center px-6">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <p className="text-sm font-medium">{post.category}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-slate-500">
                      <span className="mr-1">{icons.calendar}</span>
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center">
                        <span className="mr-1">{icons.user}</span>
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <span className="mr-1">{icons.clock}</span>
                        {post.readTime}
                      </span>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Read More <span className="ml-2">{icons.arrowRight}</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">All Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                {/* Blog Image */}
                <div className="h-40 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <p className="text-xs font-medium">{post.category}</p>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <time className="text-xs text-slate-500">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </time>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Read <span className="ml-1 inline-block scale-75">{icons.arrowRight}</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead with AI Insights
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get weekly insights on AI transformation, case studies, and practical guides 
              delivered to your inbox.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}