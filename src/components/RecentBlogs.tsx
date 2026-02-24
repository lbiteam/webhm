import { Link } from "react-router-dom";
import { Calendar, ChevronRight, ArrowRight } from "lucide-react";
import { getRecentBlogs } from "@/data/blogData";

const RecentBlogs = () => {
  const recentPosts = getRecentBlogs(3);

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground italic mb-3">
            🍯 From Our Blog
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tips, stories & knowledge from the world of pure honey
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-honey transition-all duration-300 flex flex-col"
            >
              <figure className="overflow-hidden">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </figure>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {post.category}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <time>{post.date}</time>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/blog"
            className="honey-btn inline-flex items-center gap-2"
          >
            View All Blogs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;