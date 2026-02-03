import { useState, useEffect } from "react";

// 1. Mission 2026 banner
import mission2026Mobile from "@/assets/website-banners/mission-2026-banner/banner-3.webp";
import mission2026Tablet from "@/assets/website-banners/mission-2026-banner/banner-mid.webp";
import mission2026Desktop from "@/assets/website-banners/mission-2026-banner/banner.webp";

// 2. All products banner


// 3. Ice cream banner


// 4. Honeys website banner


// 5. Growing franchise banner

const slides = [
  {
    mobile: mission2026Mobile,
    tablet: mission2026Tablet,
    desktop: mission2026Desktop,
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
    <section id="home" className="relative
    overflow-hidden
    pt-24
    h-[calc(100vh-6rem)]
    sm:h-[calc(100vh-6rem)]
    md:h-[900px]
    lg:h-[100vh]">
      {/* Background slides - below navbar; inset on tablet (md/lg) to avoid cut */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute
    top-24
    left-0
    right-0
    bottom-0
    md:top-24
    md:left-6
    md:right-6
    lg:left-12
    lg:right-12
    xl:left-0
    xl:right-0
    transition-opacity
    duration-1000
    ease-in-out ${
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
          {/* Left-side dark overlay - first slide only */}
          {index === 0 && (
            <>
              {/* Mobile: stronger, wider dark overlay for text contrast */}
              <div
                className="absolute inset-0 z-[1] pointer-events-none sm:hidden"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.2) 60%, transparent 85%)",
                }}
              />
              {/* Tablet/desktop: original overlay */}
              <div
                className="absolute inset-0 z-[1] pointer-events-none hidden sm:block"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 40%, transparent 70%)",
                }}
              />
            </>
          )}
          {/* 2026 mission text - first slide only, responsive */}
          {index === 0 && (
            <div className="absolute inset-0 z-[2] flex items-center pointer-events-none pl-6 sm:pl-8 md:pl-8 lg:pl-16 xl:pl-24">
              <div className="max-w-[85%] sm:max-w-[75%] md:max-w-[55%] lg:max-w-[45%]">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  leading-tight tracking-tight">   
                  <span className="text-yellow-400 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] sm:drop-shadow-md font-extrabold  font-poppins">2026 MISSON</span>
                  <br />
                  <span className="text-white  drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] sm:drop-shadow-sm font-poppins">1000+ OUTLETS </span>   
                      <br />
                  <span className="text-white font-extrabold drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] sm:drop-shadow-sm  font-poppins"> WORLDWIDE</span>
                </p>
                <p className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl  text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] sm:drop-shadow-md leading-tight">
                  India&apos;s Fastest Growing 
                </p>
                <p className="mt-0 sm:mt-0 md:mt-0 lg:mt-0 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl  text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] sm:drop-shadow-md leading-tight">
                  Franchise Business
                </p>
              </div>
            </div>
          )}
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
