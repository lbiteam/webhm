import HoneyDrip from "./HoneyDrip";
import Bee from "./Bee";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <HoneyDrip position="top" />
      
      {/* Background decoration */}
      <div className="absolute inset-0 honeycomb-pattern opacity-30" />
      
      {/* Floating bees */}
      <Bee className="absolute top-32 left-[10%]" size={35} />
      <Bee className="absolute top-48 right-[15%]" size={28} />
      <Bee className="absolute bottom-32 left-[20%]" size={32} />
      
      {/* Honey jar decoration - right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 hidden lg:block">
        <div className="relative w-full h-full">
          <div className="absolute right-20 top-10 w-48 h-64 bg-gradient-to-b from-honey to-honey-dark rounded-t-3xl rounded-b-lg opacity-90 shadow-honey animate-float" />
          <div className="absolute right-24 top-4 w-40 h-8 bg-honey-dark/50 rounded-full" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-display text-6xl md:text-8xl font-medium text-foreground mb-6 leading-tight">
            <span className="italic">Our</span>
            <br />
            <span className="text-primary text-shadow-honey">Honey</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md leading-relaxed">
            Perfect for breakfast.
            <br />
            Good instead of sugar.
            <br />
            Tasty and healthy!
          </p>
          
          <button className="honey-btn text-lg">
            Choose
          </button>
        </div>
      </div>
      
      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="hsl(var(--cream-dark))"
            d="M0,100 L0,60 Q360,0 720,60 Q1080,120 1440,60 L1440,100 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
