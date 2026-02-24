export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    category: string;
    author: string;
    excerpt: string;
    cover: string;
    metaDescription: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      slug: "7-benefits-of-honey",
      title: "7 Amazing Benefits of Honey You Didn't Know",
      date: "February 11, 2026",
      category: "Health & Wellness",
      author: "Honeyman Team",
      excerpt: "Discover the incredible health benefits of pure honey — from boosting immunity to healing wounds naturally.",
      cover: "/images/blog/honey-benefits.jpg",
      metaDescription: "Learn 7 amazing health benefits of pure honey including immunity boost, wound healing, and natural energy. Backed by science.",
    },
    {
      slug: "organic-vs-wild-honey",
      title: "Organic Honey vs Wild Honey: What's the Difference?",
      date: "February 5, 2026",
      category: "Education",
      author: "Honeyman Team",
      excerpt: "Understanding the key differences between organic and wild honey to make a better choice for your health.",
      cover: "/images/blog/organic-vs-wild.jpg",
      metaDescription: "Explore the differences between organic honey and wild honey. Learn about sourcing, taste, nutrition, and which is right for you.",
    },
    {
      slug: "how-to-identify-pure-honey",
      title: "How to Identify Pure Honey: 5 Simple Tests",
      date: "January 28, 2026",
      category: "Tips & Tricks",
      author: "Honeyman Team",
      excerpt: "Learn easy at-home tests to check if your honey is pure and unadulterated. Never be fooled again!",
      cover: "/images/blog/pure-honey.jpg",
      metaDescription: "5 simple home tests to identify pure honey from adulterated honey. Learn the water test, flame test, and more.",
    },
  ];
  
  export function getBlogBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
  }
  
  export function getRecentBlogs(count: number = 3): BlogPost[] {
    return blogPosts.slice(0, count);
  }
  
  export function getRelatedBlogs(currentSlug: string, count: number = 2): BlogPost[] {
    return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, count);
  }