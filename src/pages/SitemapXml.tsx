import { blogs } from "@/data/blogs";

const SitemapXml = () => {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://example.com";
  const today = new Date().toISOString().split("T")[0];

  const staticRoutes = ["/about-us", "/blog", "/privacy-policy"];
  const blogRoutes = blogs.map((blog) => `/blog/${blog.id}`);

  const urls = [...staticRoutes, ...blogRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${path === "/blog" || path.startsWith("/blog/") ? "weekly" : "monthly"}</changefreq>
    <priority>${path === "/blog" || path.startsWith("/blog/") ? "0.8" : "0.7"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return (
    <pre className="whitespace-pre-wrap break-words p-4 text-sm bg-white text-black min-h-screen overflow-auto">
      {xml}
    </pre>
  );
};

export default SitemapXml;
