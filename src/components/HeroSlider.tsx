import { useState, useEffect } from "react";
import honeyTea from "@/assets/honey-tea.jpg";
import honeyPour from "@/assets/honey-pour.jpg";
import honeyGranola from "@/assets/honey-granola.jpg";
import HoneyDrip from "./HoneyDrip";
import Bee from "./Bee";

const slides = [
  {
    video: "/videos/hero-honey.webm",
    title: "World's First ",
    subtitle: "Ice Cream",
    description: "Made Only with Pure Honey. No refined sugar."
  },
  {
     image: honeyTea,
    title: " India's Largest",
    subtitle: "Ranges Of Honey",
    description: "A Legacy Since 1980, Trusted by Generations"
  },
  
  {
    image: honeyPour,
    title: "World's Largest",
    subtitle: "Ecosystem",
    description: "of Refined Sugar-Free Products"
  },
  {
    image: honeyGranola,
    title: "Own a Fastest",
    subtitle: "Growing Franchise.",
    description: "150+ outlets. 4 models. Complete support."
  }
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
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      <HoneyDrip position="top" />
      
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {'video' in slide && slide.video ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={slide.video} type="video/webm" />
            </video>
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/80 to-transparent" />
        </div>
      ))}
      
      {/* Honeycomb overlay pattern */}
      <div className="absolute inset-0 honeycomb-pattern opacity-20" />
      
      {/* Floating bees */}
      <Bee className="absolute top-32 left-[10%] z-20" size={35} />
      <Bee className="absolute top-48 right-[15%] z-20" size={28} />
      <Bee className="absolute bottom-40 left-[25%] z-20" size={32} />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex items-center min-h-screen">
        <div className="max-w-2xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute"
              }`}
            >
              {index === currentSlide && (
                <>
                  <h1 className="font-display text-5xl md:text-7xl font-medium text-foreground mb-6 leading-tight">
                    <span className="italic">{slide.title}</span>
                    <br />
                    <span className="text-primary text-shadow-honey">{slide.subtitle}</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md leading-relaxed">
                    {slide.description}
                  </p>
                  
                 
                </>
              )}
            </div>
          ))}
        </div>
      </div>

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
          />
        ))}
      </div>
      
      {/* Wave decoration at bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="hsl(var(--cream-dark))"
            d="M0,100 L0,60 Q360,0 720,60 Q1080,120 1440,60 L1440,100 Z"
          />
        </svg>
      </div> */}
    </section>
  );
};

export default HeroSlider;
