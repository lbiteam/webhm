import realisticBee from "@/assets/bee.webp";
import hivebg from "@/assets/honey-bg.webp";

const features = [
  {
    title: "The best price on the market",
    description: "You will be impressed with the quality.",
    icon: "🪙",
  },
  {
    title: "We care about our customers",
    description: "We will deliver our products anywhere.",
    icon: "📦",
  },
  {
    title: "We produce the finest types of honey",
    description: "You will be surprised by the variety of flavors!",
    icon: "🍯",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-10 bg-cream relative overflow-hidden">
      {/* background image with low opacity and an overlay to soften it */}
      <div className="absolute inset-0 z-10 opacity-30">
        <img src={hivebg} alt="Hive background" className="w-full h-full object-cover " />
        <div className="absolute inset-0 bg-cream/50" />
      </div>

      <div className="container mx-auto px-6">
        {/* Two column layout - Bee left (1/3), Content right (2/3) */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">

          {/* Left: Bee - 1/3 width on md+ */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 h-12 bg-gradient-to-b from-honey via-honey-dark to-honey-dark/80 rounded-[50%] blur-md opacity-70" />
              <img
                src={realisticBee}
                alt="Honey Bee"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain drop-shadow-2xl relative z-10 animate-float"
              />
            </div>
          </div>

          {/* Right: Content - 2/3 width on md+ */}
          <div className="w-full md:w-2/3 px-2 md:px-6 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-honey mb-2 uppercase tracking-wide">
            One of India’s Trusted Pure & Organic Honey Brands
            </h2>
            <p className="text-xs text-muted-foreground mb-4">Honeyman is one of India’s leading honey brands offering 100% pure, raw & organic honey sourced directly from Indian beekeepers.</p>

            <p className="text-sm md:text-base text-foreground mb-6 leading-relaxed">
            Honeyman is one of India’s trusted honey brands, offering pure, raw and organic honey sourced responsibly from Indian beekeepers. By protecting honey bees and following sustainable practices, we deliver chemical-free honey that supports both human health and nature’s balance.


            </p>

           
          </div>
        </div>

        {/* Decorative honey drops */}
        <div className="absolute top-20 right-1/4 w-4 h-6 bg-gradient-to-b from-honey-light to-honey rounded-full opacity-40 animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-16 left-1/4 w-3 h-5 bg-gradient-to-b from-honey-light to-honey rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default WhyUsSection;
