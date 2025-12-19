import Bee from "./Bee";
import founderImage from "@/assets/founder.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-cream relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 honeycomb-pattern opacity-30" />
      
      <Bee className="absolute top-20 right-[10%]" size={32} />
      <Bee className="absolute bottom-32 left-[8%]" size={24} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Founder Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-honey/30 to-honey-dark/20 rounded-3xl transform rotate-3" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-honey-dark/20 to-honey/30 rounded-3xl transform -rotate-3" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={founderImage} 
                  alt="Our Founder" 
                  className="w-full h-[500px] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                
                {/* Name tag */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <h4 className="font-display text-xl font-medium text-foreground">
                      3rd Generation Beekeeper
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Founder & Master Honey Artisan
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative honey drops */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-honey rounded-full opacity-60 blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-honey-dark rounded-full opacity-50 blur-sm" />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="section-title">About Us</h2>
            
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-medium text-foreground">
                Honeyman - 3rd Generation with Bees
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                B.Green production is a private honey Garden with its own production, we have been producing honey for 
                3 generations. We are committed to bringing you the purest, most natural honey products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The bees naturally collect nectar, and the honey retains its original characteristics and 
                health benefits. We don't use any artificial additives or preservatives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our family has been perfecting the art of beekeeping for decades, passing down traditional 
                knowledge combined with modern sustainable practices.
              </p>
            </div>
            
            <button className="honey-btn" onClick={() => window.location.href = '/about-us'}>
              Learn Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
