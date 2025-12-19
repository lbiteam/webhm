import { useEffect, useState } from "react";

const textSliderItems = [
  "🐝 100% Pure & Unfiltered Honey",
  "✨ No Heating to Cut Corners",
  "🌱 Gentle Bee Colony Management",
  "🌍 Sustainable Farming Practices",
  "⚡ No Processing for Taste!",
  "🔒 Focused Bee Conservation",
  "💯 100% Pure, No Additives",
];

const TextSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textSliderItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background py-3">
      {/* Desktop - Scrolling Text - Full Width */}
      <div className="hidden md:block w-screen -mx-[calc((100vw-100%)/2)]">
        <div className="flex gap-8 animate-scroll-left whitespace-nowrap px-6">
          {[...textSliderItems, ...textSliderItems].map((item, index) => (
            <div
              key={index}
              className="text-yellow-400 font-semibold text-sm flex items-center gap-3 flex-shrink-0"
            >
              <span>{item}</span>
              <span className="text-lg">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile - Carousel */}
      <div className="md:hidden px-6">
        <div className="text-center">
          <div className="text-yellow-400 font-semibold text-xs leading-tight min-h-6 flex items-center justify-center">
            {textSliderItems[currentIndex]}
          </div>
        </div>

        {/* Mobile navigation dots */}
        <div className="flex justify-center gap-1 pt-2">
          {textSliderItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                index === currentIndex ? "bg-yellow-400 scale-125" : "bg-yellow-400/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CSS for infinite scroll animation */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TextSlider;
