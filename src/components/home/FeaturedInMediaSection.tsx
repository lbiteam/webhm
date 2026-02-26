/**
 * Featured In Media – scrollable row of logo images from assets/media-logo.
 * Only images in that folder are shown. Each image is matched by filename (without extension)
 * to MEDIA_LINKS below for its link. Add or update links in MEDIA_LINKS; use "#" or any URL.
 */

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/**
 * Add/update links here. "name" must match the image filename without extension
 * (e.g. image "ani-news.webp" → name "ANI News" or "ani-news"). Set link to "#" if no link yet.
 */
const MEDIA_LINKS: { name: string; link: string }[] = [
  { name: "ANI News", link: "https://www.aninews.in/news/business/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion20250728140940/" },
  { name: "The Print", link: "https://theprint.in/ani-press-releases/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion/2704754/" },
  { name: "Big News Network", link: "https://www.bignewsnetwork.com/news/278472286/honeyman-revolutionizes-india-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion" },
  { name: "Jio News", link: "https://jionews.com/headline/68873c780780ab8622b6ccb4" },
  { name: "Google News", link: "https://news.google.com/search?q=Honeyman%20Revolutionizes&hl=en-IN&gl=IN&ceid=IN:en" },
  { name: "UP 18 News", link: "https://up18news.com/honeyman-revolutionizes-india-food-industry-with-honey-sweetned-products-announces-nationwide-franchise-expansion/" },
  { name: "RepublicNews Today", link: "https://republicnewstoday.com/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion/" },
  { name: "News21", link: "" },
  { name: "Sangri Today", link: "https://www.sangritoday.com/spotlight/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion" },
  { name: "Startup News", link: "https://startupnews.fyi/2025/07/28/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion/" },
  { name: "Daily Bulletin", link: "https://dailybulletin.co.in/index.php/business/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion/" },
  { name: "The 24 Nation", link: "https://the24nation.com/2025/07/28/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion/" },
  { name: "The Big India", link: "https://thebigindia.co.in/index.php/2025/07/28/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion/" },
  { name: "PrimeNews TV", link: "https://primenewstv.com/index.php/2025/07/28/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion/" },
  { name: "DelhiNew Live", link: "https://www.delhilivenews.in/news/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion20250728140934" },
  { name: "Storywritter", link: "https://storywriter.co.in/index.php/2025/07/28/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion/" },
];

const mediaBySlug = Object.fromEntries(
  MEDIA_LINKS.map((m) => [slugify(m.name), m])
);

const mediaLogoModules = import.meta.glob<string>(
  "@/assets/media-logo/*.{webp,png,jpg,jpeg,svg}",
  { eager: true, import: "default" }
);

const mediaItems: { src: string; link: string; alt: string }[] = [];
for (const path in mediaLogoModules) {
  const src = mediaLogoModules[path];
  if (typeof src !== "string") continue;
  const filename = path.replace(/^.*[/\\]/, "").replace(/\.[^.]+$/, "");
  const slug = slugify(filename);
  const match = mediaBySlug[slug];
  mediaItems.push({
    src,
    link: match ? match.link : "",
    alt: match ? match.name : filename,
  });
}

const FeaturedInMediaSection = () => (
  <section className="py-16 bg-white border-t border-amber-100 overflow-hidden">
    <div className="container mx-auto px-6 mb-10">
      <div className="text-center">
        <span className="section-title text-4xl md:text-5xl">
          Featured In Major Media
        </span>
      </div>
    </div>

    <div className="overflow-hidden relative w-full group">
      <div
        className="flex w-max gap-4 items-center media-scroll-track group-hover:[animation-play-state:paused]"
        style={{ animation: "media-scroll-ltr 60s linear infinite" }}
      >
        {[...mediaItems, ...mediaItems].map((item, i) => (
          <a
            key={`${item.alt}-${i}`}
            href={item.link}
            target={item.link === "#" ? undefined : "_blank"}
            rel={item.link === "#" ? undefined : "noopener noreferrer"}
            className="flex-shrink-0 w-[140px] md:w-[160px] h-[56px] md:h-[64px] flex items-center justify-center rounded-xl overflow-hidden bg-white border border-amber-100 hover:border-amber-300 shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1 p-2"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-contain"
            />
          </a>
        ))}
      </div>
    </div>

    <style>{`
      @keyframes media-scroll-ltr {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      .media-scroll-track:hover {
        animation-play-state: paused;
      }
    `}</style>
  </section>
);

export default FeaturedInMediaSection;
