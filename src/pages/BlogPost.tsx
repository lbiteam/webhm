import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import { getBlogById, blogs, blogCategories } from "@/data/blogs";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const blog = getBlogById(id || "");

  if (!blog) return <Navigate to="/blog" replace />;

  const relatedBlogs = blogs.filter((b) => b.category === blog.category && b.id !== blog.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
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

            {/* Blog Content */}
            <div
              className="prose prose-amber max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed"
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
    </div>
  );
};

export default BlogPost;
