import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogData";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Honeyman - Pure Honey & Wellness</title>
        <meta name="description" content="Read the latest articles about honey, health, wellness, and beekeeping from Honeyman — India's most trusted honey brand." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-28 pb-16">
          {/* Hero Banner */}
          <section className="bg-gradient-honey py-12 md:py-16 mb-12">
            <div className="container mx-auto px-4 text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-3">
                🍯 Honeyman Blog
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
                Stories, tips & knowledge from the world of pure honey
              </p>
            </div>
          </section>

          {/* Blog Grid */}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-honey transition-all duration-300 flex flex-col"
                >
                  <figure className="overflow-hidden">
                    <img
                      src={post.cover}
                      alt={post.title}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </figure>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h2 className="font-display text-xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-3 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <time>{post.date}</time>
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        Read More <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;