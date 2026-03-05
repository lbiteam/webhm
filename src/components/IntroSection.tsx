import logo from "@/assets/Honeyman-logo.webp";

const IntroSection = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 md:py-20 px-4 animate-fade-in text-center">
      <img src={logo} alt="Honeyman" className="h-20 md:h-28 mx-auto mb-8 animate-float" />
      <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-slide-up mb-6">
        Delivering Purity Since 1980
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
        From hive to home, Honeyman brings you the finest natural honey and honey-based products. 
        Whether you're looking to own a franchise, shop premium products, or send the perfect gift — 
        we've got something sweet for everyone.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-10 animate-slide-up stagger-2">
        <div className="text-center">
          <span className="text-3xl md:text-4xl font-bold text-[hsl(var(--honey-gold))]">160+</span>
          <p className="text-sm text-muted-foreground mt-1">Stores Nationwide</p>
        </div>
        <div className="w-px bg-border" />
        <div className="text-center">
          <span className="text-3xl md:text-4xl font-bold text-[hsl(var(--honey-gold))]">40+</span>
          <p className="text-sm text-muted-foreground mt-1">Years of Trust</p>
        </div>
        <div className="w-px bg-border" />
        <div className="text-center">
          <span className="text-3xl md:text-4xl font-bold text-[hsl(var(--honey-gold))]">100%</span>
          <p className="text-sm text-muted-foreground mt-1">Pure & Natural</p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
