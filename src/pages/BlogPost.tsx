import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogById, blogs, blogCategories } from "@/data/blogs";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const blog = getBlogById(id || "");

  if (!blog) return <Navigate to="/blog" replace />;

  const relatedBlogs = blogs.filter((b) => b.category === blog.category && b.id !== blog.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      {/* Custom styles for rich blog content (tables, callouts, research notes, etc.) */}
      <style>{`
        .blog-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: hsl(var(--honey-dark, 30 60% 20%));
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #f5d98b;
          line-height: 1.3;
        }
        .blog-content h3 {
          font-size: 1.35rem;
          font-weight: 700;
          color: #8B6914;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }
        .blog-content p {
          color: #555;
          line-height: 1.8;
          margin-bottom: 1.1rem;
          font-size: 1.05rem;
        }
        .blog-content strong {
          color: #1a1a2e;
          font-weight: 600;
        }
        .blog-content em {
          color: #666;
        }
        .blog-content ul, .blog-content ol {
          margin: 1rem 0 1.5rem 0;
          padding-left: 1.5rem;
        }
        .blog-content ul li, .blog-content ol li {
          color: #555;
          line-height: 1.7;
          margin-bottom: 0.5rem;
          padding-left: 0.25rem;
        }
        .blog-content ul li::marker {
          color: #d4a017;
          font-weight: bold;
        }

        /* Comparison Table */
        .blog-content table.comparison-table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0 2rem 0;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(212, 160, 23, 0.15);
          font-size: 0.95rem;
        }
        .blog-content table.comparison-table thead {
          background: #1a1a2e;
        }
        .blog-content table.comparison-table thead th {
          color: #d4a017;
          font-weight: 700;
          text-align: left;
          padding: 0.85rem 1rem;
          font-size: 0.95rem;
          letter-spacing: 0.02em;
        }
        .blog-content table.comparison-table tbody td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #f5e9c8;
          color: #555;
          vertical-align: top;
        }
        .blog-content table.comparison-table tbody tr:nth-child(odd) {
          background: #fdf3dc;
        }
        .blog-content table.comparison-table tbody tr:nth-child(even) {
          background: #ffffff;
        }
        .blog-content table.comparison-table tbody td:first-child {
          font-weight: 600;
          color: #1a1a2e;
        }
        .blog-content table.comparison-table tbody tr:last-child td {
          border-bottom: none;
        }

        /* Callout (italic emphasized quote) */
        .blog-content blockquote.callout {
          background: #fdf3dc;
          border-left: 5px solid #d4a017;
          padding: 1rem 1.25rem;
          margin: 1.75rem 0;
          border-radius: 0 8px 8px 0;
          color: #7a5c00;
          font-style: italic;
          font-size: 1.05rem;
          line-height: 1.7;
        }
        .blog-content blockquote.callout em {
          color: #7a5c00;
        }

        /* Research note */
        .blog-content .research-note {
          background: #e8f5e9;
          border-left: 5px solid #2e7d32;
          padding: 1rem 1.25rem;
          margin: 1.25rem 0;
          border-radius: 0 8px 8px 0;
          color: #1b5e20;
          font-size: 0.98rem;
          line-height: 1.7;
        }
        .blog-content .research-note strong {
          color: #2e7d32;
          margin-right: 0.25rem;
        }
        .blog-content .research-note em {
          color: #1b5e20;
        }

        /* Real-life relevance block */
        .blog-content .real-life {
          background: #f5d98b;
          border-left: 5px solid #d4a017;
          padding: 1rem 1.25rem;
          margin: 1.25rem 0;
          border-radius: 0 8px 8px 0;
          color: #5c3d00;
          font-size: 0.98rem;
          line-height: 1.7;
        }
        .blog-content .real-life strong {
          color: #8b6914;
          margin-right: 0.25rem;
        }

        /* Scenario blocks (Ravi vs Priya) */
        .blog-content .scenario-block {
          padding: 1rem 1.25rem;
          margin: 1rem 0;
          border-radius: 0 8px 8px 0;
        }
        .blog-content .scenario-block p {
          margin-bottom: 0;
          color: inherit;
        }
        .blog-content .scenario-red {
          background: #fef2f2;
          border-left: 5px solid #cc0000;
          color: #7f1d1d;
        }
        .blog-content .scenario-green {
          background: #f0fdf4;
          border-left: 5px solid #007700;
          color: #14532d;
        }
        .blog-content .scenario-block strong {
          color: inherit;
        }

        /* CTA Block (gold-on-dark) */
        .blog-content .cta-block {
          background: linear-gradient(135deg, #1a1a2e 0%, #2a2a4e 100%);
          color: #ffffff;
          padding: 2rem 1.5rem;
          margin: 2rem 0;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }
        .blog-content .cta-block h3 {
          color: #d4a017;
          font-size: 1.5rem;
          margin: 0 0 0.75rem 0;
          padding-bottom: 0;
          border-bottom: none;
        }
        .blog-content .cta-block p {
          color: #f5e9c8;
          margin-bottom: 0.5rem;
          font-size: 1.05rem;
        }
        .blog-content .cta-block strong {
          color: #d4a017;
        }
        .blog-content .cta-block em {
          color: #f5d98b;
        }

        /* Mobile responsive table */
        @media (max-width: 640px) {
          .blog-content table.comparison-table {
            font-size: 0.85rem;
          }
          .blog-content table.comparison-table thead th,
          .blog-content table.comparison-table tbody td {
            padding: 0.5rem 0.6rem;
          }
          .blog-content h2 { font-size: 1.45rem; }
          .blog-content h3 { font-size: 1.15rem; }
        }
      `}</style>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted-foreground animate-slide-down">
          <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-amber-700 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{blog.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Sidebar */}
          <aside className="lg:w-72 shrink-0 animate-slide-right">
            <div className="lg:sticky lg:top-32 space-y-8">
              {/* Categories */}
              <div className="bg-card rounded-2xl p-6 border border-amber-100">
                <h3 className="font-bold text-lg mb-4" style={{ color: "hsl(var(--honey-dark))" }}>Categories</h3>
                <ul className="space-y-2">
                  {blogCategories.filter(c => c !== "All").map((cat) => (
                    <li key={cat}>
                      <Link
                        to={`/blog?category=${encodeURIComponent(cat)}`}
                        className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          cat === blog.category
                            ? "bg-amber-100 text-amber-900"
                            : "hover:bg-amber-50 text-muted-foreground"
                        }`}
                      >
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-card rounded-2xl p-6 border border-amber-100">
                <h3 className="font-bold text-lg mb-4" style={{ color: "hsl(var(--honey-dark))" }}>Recent Posts</h3>
                <ul className="space-y-3">
                  {blogs.slice(0, 5).map((b) => (
                    <li key={b.id}>
                      <Link
                        to={`/blog/${b.id}`}
                        className={`block text-sm hover:text-amber-700 transition-colors ${
                          b.id === blog.id ? "font-bold text-amber-800" : "text-muted-foreground"
                        }`}
                      >
                        {b.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="flex-1 min-w-0 animate-slide-up">
            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden mb-8 aspect-[2/1]">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-4 py-1.5 rounded-full text-xs font-semibold honey-gradient text-white">
                {blog.category}
              </span>
              <span className="text-sm text-muted-foreground">{blog.date}</span>
              <span className="text-sm text-muted-foreground">• {blog.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{blog.title}</h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{blog.excerpt}</p>

            {/* Blog Content - using custom blog-content class for rich styling */}
            <div
              className="blog-content max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-amber-100">
              <h3 className="font-bold mb-4">Share this article</h3>
              <div className="flex gap-3">
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-amber-100 hover:bg-amber-200 flex items-center justify-center transition-colors">
                  <span className="text-sm font-bold text-amber-800">X</span>
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-amber-100 hover:bg-amber-200 flex items-center justify-center transition-colors">
                  <span className="text-sm font-bold text-amber-800">f</span>
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-amber-100 hover:bg-amber-200 flex items-center justify-center transition-colors">
                  <span className="text-sm font-bold text-amber-800">in</span>
                </a>
                <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(blog.title + ' - ' + (typeof window !== 'undefined' ? window.location.href : ''))}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-amber-100 hover:bg-amber-200 flex items-center justify-center transition-colors">
                  <span className="text-sm font-bold text-amber-800">W</span>
                </a>
              </div>
            </div>

            {/* Related Posts */}
            {relatedBlogs.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedBlogs.map((rb) => (
                    <Link key={rb.id} to={`/blog/${rb.id}`} className="group rounded-xl overflow-hidden border border-amber-100 hover:shadow-lg transition-all">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img src={rb.image} alt={rb.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-4">
                        <span className="text-xs font-semibold text-amber-700">{rb.category}</span>
                        <h4 className="text-sm font-bold mt-1 line-clamp-2 group-hover:text-amber-700 transition-colors">{rb.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
