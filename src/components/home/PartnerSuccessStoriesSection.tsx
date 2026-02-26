import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Bee from "@/components/Bee";
import iceCreamParlour from "@/assets/franchise/ice-cream-parlour.webp";
import iceCreamStanding from "@/assets/franchise/ice-cream-standing.webp";
import iceCreamCart from "@/assets/franchise/ice-cream-cart.webp";
import cafeOutlet from "@/assets/franchise/cafe-outlet.webp";
import cafeKiosk from "@/assets/franchise/cafe-kiosk.jpeg";
import cafeTrailer from "@/assets/franchise/cafe-trailer.jpeg";
import iceCreamCartmodel from "@/assets/franchise/honeyman-cart-model-1.webp";
import iceCreamCartmodel2 from "@/assets/franchise/honeyman-cart-model-2.webp";
import iceCreamCartmodel3 from "@/assets/franchise/honeyman-ice-creamcart-model-3.webp";
import cafe from "@/assets/franchise/Cafe-image.webp";

const testimonials = [
  {
    quote:
      "I started with a single cart in 2023. The ROI was so quick I upgraded to a Parlour within 11 months. The product quality is unmatched.",
    name: "Pranav Chaudhary",
    location: "Hyderabad",
    initials: "RK",
    stars: 5,
    half: false,
  },
  {
    quote:
      "The support team is incredible. From interior design to the grand opening, they handled everything. I just had to focus on sales.",
    name: "Nitu Chopra",
    location: "Gurgaon",
    initials: "PD",
    stars: 5,
    half: false,
  },
  {
    quote:
      "We run a Cafe model in Bangalore. The best part is the automated supply chain. We never run out of stock even on weekends.",
    name: "Sachin segal",
    location: "Nanded",
    initials: "AM",
    stars: 5,
    half: true,
  },
];

/* Franchise page images – same as Franchise.tsx */
const franchiseImages = [
  iceCreamCart,
  iceCreamParlour,
  iceCreamStanding,
  cafe,
  cafeOutlet,
  cafeKiosk,
  cafeTrailer,
  iceCreamCartmodel,
  iceCreamCartmodel2,
  iceCreamCartmodel3,
  cafe,
  iceCreamCart,
  iceCreamParlour,
];

/* Avatar grid column config: [height classes for each image] – smaller sizes */
const avatarColumns = [
  ["h-[100px]", "h-[80px]"],
  ["h-[140px]", "h-[100px]"],
  ["h-[100px]", "h-[140px]"],
  ["h-[140px]"],
  ["h-[100px]", "h-[80px]"],
  ["h-[140px]", "h-[100px]"],
  ["h-[80px]", "h-[100px]"],
];

const columnTranslate = [
  "translate-y-6",
  "-translate-y-3",
  "translate-y-8",
  "translate-y-12",
  "translate-y-1",
  "translate-y-10",
  "-translate-y-1",
];

let imageIndex = 0;
function getGridImageList(): string[][] {
  const cols: string[][] = [];
  avatarColumns.forEach((heights) => {
    cols.push(heights.map(() => franchiseImages[imageIndex++ % franchiseImages.length]));
  });
  return cols;
}
const gridImages = getGridImageList();

const PartnerSuccessStoriesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-16 md:py-20 bg-orange-50/40 border-t border-amber-100 px-4 md:px-6 overflow-hidden">
      {/* Floating bees */}
      <Bee className="absolute top-12 left-[8%] z-10 pointer-events-none opacity-80 animate-float" size={28} />
      <Bee className="absolute top-24 right-[10%] z-10 pointer-events-none opacity-70 animate-float" size={24} />
      <Bee className="absolute bottom-32 left-[12%] z-10 pointer-events-none opacity-75 animate-float" size={26} />
      <Bee className="absolute bottom-20 right-[15%] z-10 pointer-events-none opacity-65 animate-float" size={22} />
      <Bee className="absolute top-1/2 left-[5%] z-10 pointer-events-none opacity-50 animate-float" size={20} />
      <Bee className="absolute top-1/3 right-[6%] z-10 pointer-events-none opacity-60 animate-float" size={24} />

      <div className="max-w-[880px] mx-auto relative z-0">
        {/* Avatar grid – plain body, no bordered div */}
        <div
          className="flex justify-center gap-3 h-[260px] mb-4 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        >
          {avatarColumns.map((heights, colIndex) => (
            <div
              key={colIndex}
              className={`flex flex-col gap-3 w-[90px] shrink-0 ${columnTranslate[colIndex]}`}
            >
              {heights.map((h, imgIndex) => (
                <img
                  key={imgIndex}
                  src={gridImages[colIndex][imgIndex]}
                  alt=""
                  className={`w-full rounded-xl object-cover shadow-md hover:scale-105 transition-transform duration-300 border border-amber-100/50 ${h}`}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Slider section */}
        <div className="text-center max-w-[640px] mx-auto">
          <div className="inline-block bg-amber-100/80 text-honey-dark px-4 py-2 rounded-[20px] text-sm font-medium mb-4">
            Testimonials
          </div>

          <div className="relative min-h-[140px] flex items-center justify-center mb-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 w-full transition-all duration-500 ease-out ${
                  i === currentSlide
                    ? "opacity-100 translate-x-0 relative pointer-events-auto"
                    : "opacity-0 translate-x-5 pointer-events-none"
                }`}
              >
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-3 tracking-tight">
                  &quot;{t.quote}&quot;
                </h2>
                <p className="text-base text-muted-foreground font-medium">
                  {t.name}
                  <span className="text-honey-dark/90"> — {t.location}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2.5 mb-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToSlide(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full border-0 cursor-pointer transition-all duration-300 ${
                  i === currentSlide ? "bg-honey-dark" : "bg-amber-200 hover:bg-amber-300"
                }`}
                style={i === currentSlide ? { transform: "scale(1.25)" } : undefined}
              />
            ))}
          </div>

          {/* <a
            href="/#franchise-form"
            className="inline-flex items-center gap-2 bg-honey hover:bg-honey-dark text-foreground font-medium py-3 px-6 rounded-[30px] text-sm transition-colors duration-300 hover:-translate-y-0.5 shadow-sm"
          >
            Read Success Stories
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default PartnerSuccessStoriesSection;
