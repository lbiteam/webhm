import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, User, Tag, ArrowLeft, ChevronRight, Search, Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { getRelatedBlogs, getRecentBlogs, blogPosts } from "@/data/blogData";

interface BlogTemplateProps {
  title: string;
  date: string;
  category: string;
  author: string;
  cover: string;
  metaDescription: string;
  slug: string;
  children: ReactNode;
}

const BlogTemplate = ({
  title,
  date,
  category,
  author,
  cover,
  metaDescription,
  slug,
  children,
}: BlogTemplateProps) => {
  const relatedBlogs = getRelatedBlogs(slug, 2);
  const recentBlogs = getRecentBlogs(4);

  // Derive categories with counts
  const categoryMap: Record<string, number> = {};
  blogPosts.forEach((p) => {
    categoryMap[p.category] = (categoryMap[p.category] || 0) + 1;
  });

  return (
    <>
      <Helmet>
        <title>{title} | Honeyman Blog</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-28 pb-16">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground truncate">{title}</span>
            </nav>

            {/* Main Layout: Sidebar Left + Content Right */}
            <div className="flex flex-col-reverse lg:flex-row gap-8">

              {/* LEFT SIDEBAR */}
              <aside className="w-full lg:w-80 shrink-0 space-y-8">

                {/* About Author Widget */}
                <div className="rounded-xl border border-border bg-card p-6 text-center">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground mb-4">About Author</h3>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                      <User className="w-10 h-10 text-primary" />
                    </div>
                    <h5 className="font-display text-base font-semibold text-foreground">{author}</h5>
                    <p className="text-sm text-muted-foreground mt-1">Passionate about honey, health & sustainability.</p>
                    <div className="flex gap-3 mt-4">
                      <a href="https://www.facebook.com/share/1DWS51coyk/" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="w-4 h-4" /></a>
                      <a href="https://www.instagram.com/honeymanstore" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
    
                      <a href="https://www.youtube.com/@honeymanstore" className="text-muted-foreground hover:text-primary transition-colors"><Youtube className="w-4 h-4" /></a>
                    </div>
                  </div>
                </div>

                {/* Search Widget */}
                <div className="rounded-xl bg-primary/10 p-6">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground mb-4">Search</h3>
                  <div className="relative">
                    <input
                      type="search"
                      placeholder="Search Here..."
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors">
                      <Search className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Recent Posts Widget */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentBlogs.map((post) => (
                      <Link
                        key={post.slug}
                        to={`/blog/${post.slug}`}
                        className="flex gap-3 group"
                      >
                        <img
                          src={post.cover}
                          alt={post.title}
                          className="w-[78px] h-[78px] rounded-lg object-cover shrink-0"
                          loading="lazy"
                        />
                        <div className="flex flex-col justify-center min-w-0">
                          <span className="text-xs text-muted-foreground uppercase">{post.date}</span>
                          <h4 className="text-sm font-medium text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Categories Widget */}
                {/* <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {Object.entries(categoryMap).map(([cat, count]) => (
                      <li key={cat}>
                        <Link
                          to="/blog"
                          className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-secondary/50 transition-colors"
                        >
                          <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">{cat}</span>
                          <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">{count}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div> */}

                {/* CTA Widget */}
                <div className="rounded-xl bg-primary p-6 text-center">
                  <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                    Get in touch <span className="block">with us...</span>
                  </h3>
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 rounded-full bg-background text-foreground text-sm font-medium hover:bg-secondary transition-colors"
                  >
                    Connect With Us <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Subscribe Widget */}
                {/* <div className="rounded-xl bg-primary/10 p-6">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground mb-2">Subscribe</h3>
                  <p className="text-sm text-muted-foreground mb-4">Stay informed about our promotions and new arrivals.</p>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-accent transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div> */}
              </aside>

              {/* RIGHT CONTENT */}
              <div className="flex-1 min-w-0">
                {/* Article */}
                <article className="single-blog">
                  {/* Cover Image */}
                  <figure className="rounded-xl overflow-hidden mb-8 shadow-honey">
                    <img
                      src={cover}
                      alt={title}
                      className="w-full h-64 sm:h-80 md:h-96 object-cover"
                      loading="lazy"
                    />
                  </figure>

                  {/* Header */}
                  <header className="mb-8">
                    <Link
                      to="/blog"
                      className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 hover:bg-primary/20 transition-colors"
                    >
                      {category}
                    </Link>
                    <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                      {title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-primary" />
                        <time>{date}</time>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4 text-primary" />
                        <span>{author}</span>
                      </div>
                    </div>
                  </header>

                  {/* Content */}
                  <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-6
                    [&_p]:text-base [&_p]:leading-7 [&_p]:text-muted-foreground
                    [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4
                    [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3
                    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-muted-foreground
                    [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:text-muted-foreground
                    [&_li]:text-base [&_li]:leading-7
                    [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-6 [&_blockquote]:py-4 [&_blockquote]:my-8 [&_blockquote]:bg-secondary/50 [&_blockquote]:rounded-r-lg [&_blockquote]:italic [&_blockquote]:text-foreground/80
                    [&_img]:rounded-lg [&_img]:shadow-soft [&_img]:my-6
                    [&_figcaption]:text-sm [&_figcaption]:text-muted-foreground [&_figcaption]:text-center [&_figcaption]:mt-2
                    [&_strong]:text-foreground [&_strong]:font-semibold
                  ">
                    {children}
                  </div>

                  {/* Footer / Share & Tags */}
                  <footer className="mt-12 pt-8 border-t border-border">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      {/* <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Share This:</h4>
                        <div className="flex gap-3">
                          <a href="https://www.facebook.com/share/1DWS51coyk/" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                            <Facebook className="w-4 h-4" />
                          </a>
                          <a href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                            <Linkedin className="w-4 h-4" />
                          </a>
                          <a href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                            <Twitter className="w-4 h-4" />
                          </a>
                        </div>
                      </div> */}
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4 text-primary" />
                        <div className="flex gap-2 flex-wrap">
                          <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground">honey</span>
                          <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground">health</span>
                          <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground">wellness</span>
                        </div>
                      </div>
                    </div>
                  </footer>
                </article>

                {/* Related Posts */}
                {relatedBlogs.length > 0 && (
                  <section className="mt-16">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-8">Related Posts</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {relatedBlogs.map((post) => (
                        <Link
                          key={post.slug}
                          to={`/blog/${post.slug}`}
                          className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-honey transition-all duration-300"
                        >
                          <figure className="overflow-hidden">
                            <img
                              src={post.cover}
                              alt={post.title}
                              className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          </figure>
                          <div className="p-5">
                            <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                            <h4 className="font-display text-lg font-semibold text-foreground mt-2 group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
                            <div className="flex items-center justify-between mt-3">
                              <span className="text-xs text-muted-foreground">{post.author}</span>
                              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                                Read More <ChevronRight className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {/* Back to Blog */}
                <div className="mt-12">
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to All Blogs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogTemplate;
