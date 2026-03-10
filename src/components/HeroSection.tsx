import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import franchise1 from "@/assets/cafe-1.webp";
import franchise2 from "@/assets/cafe-image.webp";
import storeProducts from "@/assets/store-products (2).webp";
import storeProducts3 from "@/assets/store-products(3).webp";
import gifting1 from "@/assets/gifting-1.webp";
import gifting2 from "@/assets/gifting-2.webp";
import gifting3 from "@/assets/gifting-3.webp";


interface PanelData {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  linkText: string;
  images: string[];
  bgColor: string;
  overlayColor: string;
}

const panels: PanelData[] = [
  {
    title: "Franchise",
    subtitle: "Own a Honeyman Cafe",
    description: "Join India's fastest growing honey franchise. 160+ stores and counting.",
    link: "https://honeymanfranchise.com",
    linkText: "Explore Franchise",
    images: [franchise1, franchise2],
    bgColor: "from-amber-900/80 to-amber-700/60",
    overlayColor: "",
  },
  {
    title: "Store",
    subtitle: "Premium Honey Products",
    description: "Pure, natural honey and specialty products delivered to your doorstep.",
    link: "https://honeymanstore.com",
    linkText: "Shop Now",
    images: [storeProducts, storeProducts3],
    bgColor: "from-yellow-800/80 to-yellow-600/60",
    overlayColor: "",
  },
  {
    title: "Gifting",
    subtitle: "The Art of Gifting",
    description: "Premium honey gift boxes for every occasion. Crafted with love.",
    link: "https://honeymangifting.com",
    linkText: "Send a Gift",
    images: [gifting1, gifting2,gifting3],
    bgColor: "from-rose-900/80 to-amber-800/60",
    overlayColor: "",
  },
];

const HeroSection = () => {
  const [activeSlides, setActiveSlides] = useState([0, 0, 0]);
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);

  useEffect(() => {
    const intervals = panels.map((panel, panelIndex) => {
      if (panel.images.length <= 1) return null;
      return setInterval(() => {
        setActiveSlides((prev) => {
          const next = [...prev];
          next[panelIndex] = (next[panelIndex] + 1) % panel.images.length;
          return next;
        });
      }, 4000 + panelIndex * 1000);
    });
    return () => intervals.forEach((i) => i && clearInterval(i));
  }, []);

  return (
    <section className="w-full animate-fade-in">
      {/* Desktop: 3 columns side by side */}
      <div className="hidden md:grid md:grid-cols-3 h-[85vh] gap-1  overflow-hidden">
        {panels.map((panel, index) => (
          <a
            key={panel.title}
            href={panel.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative overflow-hidden group cursor-pointer transition-all duration-700 ${
              hoveredPanel === index ? "md:col-span-1 scale-[1.02]" : ""
            }`}
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
            onMouseEnter={() => setHoveredPanel(index)}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            {/* Sliding images */}
            {panel.images.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                alt={panel.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                  activeSlides[index] === imgIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"
                } group-hover:scale-110`}
              />
            ))}

            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10 text-white ">
              <div className={`transform transition-all duration-500 ${
                hoveredPanel === index ? "translate-y-0 opacity-100" : "translate-y-2"
              }`}>
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-300 mb-2 block animate-slide-up">
                  {panel.subtitle}
                </span>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 leading-tight">
                  {panel.title}
                </h2>
                <p className={`text-sm lg:text-base text-white/80 mb-6 max-w-xs transition-all duration-500 ${
                  hoveredPanel === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}>
                  {panel.description}
                </p>
                <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 backdrop-blur-sm text-sm font-semibold hover:bg-white/20 transition-all duration-300 ${
                  hoveredPanel === index ? "opacity-100 translate-y-0" : "opacity-70 translate-y-2"
                }`}>
                  {panel.linkText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Slide indicators */}
              {panel.images.length > 1 && (
                <div className="flex gap-1.5 mt-6">
                  {panel.images.map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        activeSlides[index] === dotIndex
                          ? "w-8 bg-amber-400"
                          : "w-2 bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>

      {/* Mobile: stacked vertically */}
      <div className="md:hidden space-y-3">
        {panels.map((panel, index) => (
          <a
            key={panel.title}
            href={panel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block h-[55vh] rounded-2xl overflow-hidden group animate-slide-up"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {panel.images.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                alt={panel.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  activeSlides[index] === imgIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-300 mb-1">
                {panel.subtitle}
              </span>
              <h2 className="text-3xl font-bold mb-2">{panel.title}</h2>
              <p className="text-sm text-white/80 mb-4">{panel.description}</p>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 backdrop-blur-sm text-sm font-semibold w-fit">
                {panel.linkText}
                <ArrowRight className="w-4 h-4" />
              </div>
              {panel.images.length > 1 && (
                <div className="flex gap-1.5 mt-4">
                  {panel.images.map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        activeSlides[index] === dotIndex ? "w-6 bg-amber-400" : "w-2 bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
