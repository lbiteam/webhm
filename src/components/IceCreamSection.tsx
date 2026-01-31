import { useState, useEffect } from "react";
import icecreamCollection from "@/assets/icecream-collection.webp";
import icecreamHero from "@/assets/icecream-hero.webp";
import blueBerry from "@/assets/icecreams/BlueBerry.webp";
import chocolate from "@/assets/icecreams/chocolate.webp";
import mangoHoneyman from "@/assets/icecreams/Mango-honeyman.webp";
import americanNuts from "@/assets/icecreams/american-nuts.webp";
import tutiFruti from "@/assets/icecreams/tuti-frutti.webp";
import vanilla from "@/assets/icecreams/Vanilla-icecream.webp";
import kashmiriGulkand from "@/assets/icecreams/kashmiri-gulkand.webp";
import kesarIcecream from "@/assets/icecreams/kesar-icecream.webp";
import rajbhog from "@/assets/icecreams/rajbhog.webp";
import tiramisu from "@/assets/icecreams/tiramisu.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const IceCreamSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const iceCreamFlavors = [
    { image: blueBerry, name: t("iceCreamSection.flavors.wildBlueberry") || "Blueberry" },
    { image: chocolate, name: t("iceCreamSection.flavors.chocoAlmonds") || "Chocolate" },
    { image: mangoHoneyman, name: t("iceCreamSection.flavors.mangoHoneyman") || "Mango Honeyman" },
    { image: americanNuts, name: t("iceCreamSection.flavors.americanNuts") || "American Nuts" },
    { image: tutiFruti, name: t("iceCreamSection.flavors.tutiFruti") || "Tuti Fruti" },
    { image: vanilla, name: t("iceCreamSection.flavors.vanilla") || "Vanilla" },
    { image: kashmiriGulkand, name: t("iceCreamSection.flavors.kashmiriGulkand") || "Kashmiri Gulkand" },
    { image: kesarIcecream, name: t("iceCreamSection.flavors.kesarIcecream") || "Kesar Icecream" },
    { image: rajbhog, name: t("iceCreamSection.flavors.rajbhog") || "Rajbhog" },
    { image: tiramisu, name: t("iceCreamSection.flavors.tiramisu") || "Tiramisu" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (iceCreamFlavors.length * 2));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="icecream" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">{t("iceCreamSection.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          {t("iceCreamSection.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Collection Image */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={icecreamCollection} 
                alt="Honeyman Ice Cream Collection" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-2xl font-medium text-white mb-2">
                  {t("iceCreamSection.collectionTitle")}
                </h3>
                <p className="text-white/80 text-sm">
                  {t("iceCreamSection.collectionSubtitle")}
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-red-400 to-orange-400 rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={icecreamHero} 
                alt="Honeyman Premium Ice Cream" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-2xl font-medium text-white mb-2">
                  {t("iceCreamSection.premiumTitle")}
                </h3>
                <p className="text-white/80 text-sm">
                  {t("iceCreamSection.premiumSubtitle")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: "🍯", title: "Honey Sweetened", desc: "Natural honey instead of sugar" },
            { icon: "🥛", title: "Premium Cream", desc: "Rich and creamy texture" },
            { icon: "🍓", title: "Real Fruits", desc: "Fresh fruit ingredients" },
            { icon: "✨", title: "No Preservatives", desc: "Pure and natural" },
          ].map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-cream rounded-2xl shadow-soft hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h4 className="font-display text-lg font-medium text-foreground mb-1">
                {feature.title}
              </h4>
              <p className="text-muted-foreground text-sm">{feature.desc}</p>
            </div>
          ))}
        </div> */}

        {/* Full-Width Continuous Carousel */}
        <div className="mt-16 -mx-6 px-6">
          <div className="relative w-full overflow-hidden bg-cream rounded-2xl p-8 md:p-12">
            {/* Carousel container */}
            <div className="flex gap-8 md:gap-10 animate-carousel" style={{
              animation: `scroll 180s linear infinite`,
              "--scroll-width": `${iceCreamFlavors.length * 320}px`,
            } as React.CSSProperties}>
              {/* First set of images */}
              {iceCreamFlavors.map((flavor, index) => (
                <div key={`set1-${index}`} className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 group">
                  <div className="relative w-full h-full">
                    {/* Main container */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-cream flex items-center justify-center border-2 border-cream/50 group-hover:border-amber-300/50 group-hover:scale-105 transform transition-transform duration-500">
                      <img 
                        src={flavor.image} 
                        alt={flavor.name}
                        className="w-full h-full object-contain p-6 md:p-8 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Label */}
                    <p className="text-center mt-4 font-semibold text-foreground text-base md:text-lg transition-colors duration-300">
                      {flavor.name}
                    </p>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {iceCreamFlavors.map((flavor, index) => (
                <div key={`set2-${index}`} className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 group">
                  <div className="relative w-full h-full">
                    {/* Main container */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-cream flex items-center justify-center border-2 border-cream/50 group-hover:border-amber-300/50 group-hover:scale-105 transform transition-transform duration-500">
                      <img 
                        src={flavor.image} 
                        alt={flavor.name}
                        className="w-full h-full object-contain p-6 md:p-8 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Label */}
                    <p className="text-center mt-4 font-semibold text-foreground text-base md:text-lg transition-colors duration-300">
                      {flavor.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-cream via-cream/80 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-cream via-cream/80 to-transparent pointer-events-none z-10" />
          </div>

          {/* CSS Animation */}
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-320px * ${iceCreamFlavors.length} - 32px * ${iceCreamFlavors.length}));
              }
            }
            @media (min-width: 768px) {
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-400px * ${iceCreamFlavors.length} - 40px * ${iceCreamFlavors.length}));
                }
              }
            }
          `}</style>
        </div>

        
      </div>
    </section>
  );
};

export default IceCreamSection;
