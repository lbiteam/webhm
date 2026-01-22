import Bee from "./Bee";
import founderImage from "@/assets/founder.webp";
import hivebg from "@/assets/honey-bg.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 bg-cream relative overflow-hidden">
      {/* Background image with low opacity and an overlay to soften it */}
      <div className="absolute inset-0 opacity-30">
        <img src={hivebg} alt="Hive background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-cream/50" />
      </div>
      
      <Bee className="absolute top-20 right-[10%] z-20" size={32} />
      <Bee className="absolute bottom-32 left-[8%] z-20" size={24} />
      
      <div className="container mx-auto px-6 relative z-20">
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
                  className="w-full h-[500px] object-cover object-center"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                
                {/* Name tag */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <h4 className="font-display text-xl font-medium text-foreground">
                      {t("aboutSection.founderTag")}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {t("aboutSection.founderSubtag")}
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
            <h2 className="section-title">{t("aboutSection.title")}</h2>
            
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-medium text-foreground">
                {t("aboutSection.subtitle")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
              {t("aboutSection.description1")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
              {t("aboutSection.description2")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
              {t("aboutSection.description3")}
              </p>
            </div>
            
            <button className="honey-btn" onClick={() => window.location.href = '/about-us'}>
              {t("aboutSection.button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
