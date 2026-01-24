import { useState, useEffect } from "react";

// 1. Mission 2026 banner
import mission2026Mobile from "@/assets/website-banners/mission-2026-banner/800 X 1200 (7).webp";
import mission2026Tablet from "@/assets/website-banners/mission-2026-banner/1200 X 675 (5).webp";
import mission2026Desktop from "@/assets/website-banners/mission-2026-banner/1920 X 1080 (7).webp";

// 2. All products banner
import allProductsMobile from "@/assets/website-banners/all-products-banner/800 X 1200 (1).webp";
import allProductsTablet from "@/assets/website-banners/all-products-banner/1200 X 675 (1).webp";
import allProductsDesktop from "@/assets/website-banners/all-products-banner/1920 X 1080 (1).webp";

// 3. Ice cream banner
import iceCreamMobile from "@/assets/website-banners/ice-cream-banner/800 X 1200 (2).webp";
import iceCreamTablet from "@/assets/website-banners/ice-cream-banner/1200 X 675 (2).webp";
import iceCreamDesktop from "@/assets/website-banners/ice-cream-banner/1920 X 1080 (2).webp";

// 4. Honeys website banner
import honeysMobile from "@/assets/website-banners/honeys-website-banner/800 X 1200.webp";
import honeysTablet from "@/assets/website-banners/honeys-website-banner/1200 X 675.webp";
import honeysDesktop from "@/assets/website-banners/honeys-website-banner/1920 X 1080.webp";

// 5. Growing franchise banner
import growingFranchiseMobile from "@/assets/website-banners/Growing-franchise-banner/800 X 1200 (6).webp";
import growingFranchiseTablet from "@/assets/website-banners/Growing-franchise-banner/1200 X 675 (4).webp";
import growingFranchiseDesktop from "@/assets/website-banners/Growing-franchise-banner/1920 X 1080 (4).webp";

const slides = [
  {
    mobile: mission2026Mobile,
    tablet: mission2026Tablet,
    desktop: mission2026Desktop,
  },
  {
    mobile: allProductsMobile,
    tablet: allProductsTablet,
    desktop: allProductsDesktop,
  },
  {
    mobile: iceCreamMobile,
    tablet: iceCreamTablet,
    desktop: iceCreamDesktop,
  },
  {
    mobile: honeysMobile,
    tablet: honeysTablet,
    desktop: honeysDesktop,
  },
  {
    mobile: growingFranchiseMobile,
    tablet: growingFranchiseTablet,
    desktop: growingFranchiseDesktop,
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      {/* Background slides - below navbar; inset on tablet (md/lg) to avoid cut */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-24 left-0 right-0 bottom-0 md:left-6 md:right-6 lg:left-12 lg:right-12 xl:left-0 xl:right-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <picture className="block absolute inset-0 w-full h-full">
            <source
              media="(min-width: 1280px)"
              srcSet={slide.desktop}
            />
            <source
              media="(min-width: 1024px)"
              srcSet={slide.tablet}
            />
            <img
              src={slide.mobile}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
            />
          </picture>
          {/* {index === 0 && (
            <span
              className="absolute bottom-12 left-6 sm:left-8 md:left-12 lg:left-16 text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight"
              style={{ color: "#893c09" }}
            >
              157+ outlets
            </span>
          )} */}
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-primary/40 hover:bg-primary/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
