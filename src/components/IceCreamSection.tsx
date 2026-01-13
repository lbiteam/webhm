import { useState, useEffect } from "react";
import icecreamCollection from "@/assets/icecream-collection.webp";
import icecreamHero from "@/assets/icecream-hero.webp";
import butterScotch from "@/assets/ice-creams/BUTTER SCOTCH (1).webp";
import chocoAlmonds from "@/assets/ice-creams/CHOCO ALMONDS.webp";
import strawberry from "@/assets/ice-creams/STRAWBERRY (1).webp";
import tiramisu from "@/assets/ice-creams/TIRAMISU (1) (1).webp";
import tutiFruti from "@/assets/ice-creams/TUTI FRUTI.webp";
import vanilla from "@/assets/ice-creams/VANILLA (1).webp";
import wildBlueberry from "@/assets/ice-creams/WILD BLUEBERRY (1).webp";
import { useLanguage } from "@/contexts/LanguageContext";

const IceCreamSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const iceCreamFlavors = [
    { image: butterScotch, name: t("iceCreamSection.flavors.butterScotch") },
    { image: chocoAlmonds, name: t("iceCreamSection.flavors.chocoAlmonds") },
    { image: strawberry, name: t("iceCreamSection.flavors.strawberry") },
    { image: tiramisu, name: t("iceCreamSection.flavors.tiramisu") },
    { image: tutiFruti, name: t("iceCreamSection.flavors.tutiFruti") },
    { image: vanilla, name: t("iceCreamSection.flavors.vanilla") },
    { image: wildBlueberry, name: t("iceCreamSection.flavors.wildBlueberry") },
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
          <div className="relative w-full overflow-hidden bg-gradient-to-r from-cream via-white to-cream rounded-2xl p-8">
            {/* Carousel container */}
            <div className="flex gap-6 animate-carousel" style={{
              animation: `scroll 20s linear infinite`,
              "--scroll-width": `${iceCreamFlavors.length * 200}px`,
            } as React.CSSProperties}>
              {/* First set of images */}
              {iceCreamFlavors.map((flavor, index) => (
                <div key={`set1-${index}`} className="flex-shrink-0 w-48 h-48">
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white flex items-center justify-center">
                    <img 
                      src={flavor.image} 
                      alt={flavor.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <p className="text-center mt-3 font-medium text-foreground text-sm">{flavor.name}</p>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {iceCreamFlavors.map((flavor, index) => (
                <div key={`set2-${index}`} className="flex-shrink-0 w-48 h-48">
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white flex items-center justify-center">
                    <img 
                      src={flavor.image} 
                      alt={flavor.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <p className="text-center mt-3 font-medium text-foreground text-sm">{flavor.name}</p>
                </div>
              ))}
            </div>

            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gradient-to-r from-cream via-white/50 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-cream via-white/50 to-transparent pointer-events-none z-10" />
          </div>

          {/* CSS Animation */}
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-200px * ${iceCreamFlavors.length} - 24px * ${iceCreamFlavors.length}));
              }
            }
          `}</style>
        </div>

        
      </div>
    </section>
  );
};

export default IceCreamSection;
