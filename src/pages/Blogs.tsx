import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { blogs, blogCategories, getBlogsByCategory } from "@/data/blogs";

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredBlogs = getBlogsByCategory(activeCategory);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="text-center mb-12 animate-slide-down">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "hsl(var(--honey-dark))" }}>
            Honeyman Blog
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the world of honey — health tips, recipes, bee keeping, and more.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "honey-gradient text-white shadow-lg scale-105"
                  : "bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              className="group rounded-2xl overflow-hidden bg-card border border-amber-100 hover:shadow-xl transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold honey-gradient text-white">
                    {blog.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{blog.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-amber-700 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{blog.excerpt}</p>
                <div className="mt-4 text-sm font-semibold text-amber-700 group-hover:text-amber-900 flex items-center gap-1">
                  Read More →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">No blogs found in this category.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Blogs;
