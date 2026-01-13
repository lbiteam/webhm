import { Check } from "lucide-react";
import iceCreamPattern from "@/assets/franchise-bg  image.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const FranchiseSection = () => {
  const { t } = useLanguage();

  const franchiseModels = [
    {
      name: t("franchiseSection.models.basic.name"),
      tagline: t("franchiseSection.models.basic.tagline"),
      investment: t("franchiseSection.models.basic.investment"),
      color: "from-emerald-400 to-teal-500",
      features: [
        t("franchiseSection.models.basic.features.1"),
        t("franchiseSection.models.basic.features.2"),
        t("franchiseSection.models.basic.features.3"),
        t("franchiseSection.models.basic.features.4"),
        t("franchiseSection.models.basic.features.5"),
      ],
    },
    {
      name: t("franchiseSection.models.medium.name"),
      tagline: t("franchiseSection.models.medium.tagline"),
      investment: t("franchiseSection.models.medium.investment"),
      color: "from-honey to-honey-dark",
      popular: true,
      features: [
        t("franchiseSection.models.medium.features.1"),
        t("franchiseSection.models.medium.features.2"),
        t("franchiseSection.models.medium.features.3"),
        t("franchiseSection.models.medium.features.4"),
        t("franchiseSection.models.medium.features.5"),
        t("franchiseSection.models.medium.features.6"),
        t("franchiseSection.models.medium.features.7"),
      ],
    },
    {
      name: t("franchiseSection.models.bigger.name"),
      tagline: t("franchiseSection.models.bigger.tagline"),
      investment: t("franchiseSection.models.bigger.investment"),
      color: "from-amber-600 to-orange-700",
      features: [
        t("franchiseSection.models.bigger.features.1"),
        t("franchiseSection.models.bigger.features.2"),
        t("franchiseSection.models.bigger.features.3"),
        t("franchiseSection.models.bigger.features.4"),
        t("franchiseSection.models.bigger.features.5"),
        t("franchiseSection.models.bigger.features.6"),
        t("franchiseSection.models.bigger.features.7"),
        t("franchiseSection.models.bigger.features.8"),
      ],
    },
  ];
  return (
    <section id="franchise" className="py-24 bg-cream relative overflow-hidden">
      {/* Ice cream pattern background with shading */}
      <div className="absolute inset-0 opacity-15 bg-cover bg-center" style={{ backgroundImage: `url(${iceCreamPattern})` }} />
      <div className="absolute inset-0 bg-gradient-to-br from-cream/40 via-cream/60 to-cream/40" />
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-honey/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-honey-dark/10 rounded-full blur-3xl z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-honey/20 rounded-full text-honey-dark font-medium text-sm mb-4">
            {t("franchiseSection.badge")}
          </span>
          <h2 className="section-title">{t("franchiseSection.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          {t("franchiseSection.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {franchiseModels.map((model, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                model.popular ? 'ring-4 ring-honey md:-translate-y-4' : ''
              }`}
            >
              {/* Popular badge */}
              {model.popular && (
                <div className="absolute top-4 right-4 bg-honey text-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {t("franchiseSection.models.medium.popular")}
                </div>
              )}
              
              {/* Header */}
              <div className={`bg-gradient-to-r ${model.color} p-8 text-white`}>
                <p className="text-white/80 text-sm mb-1">{model.tagline}</p>
                <h3 className="font-display text-3xl font-bold mb-2">{model.name}</h3>
                <p className="text-white/90 font-medium">{model.investment}</p>
              </div>
              
              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4">
                  {model.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-honey/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-honey-dark" />
                      </div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full mt-8 py-3 rounded-xl font-medium transition-all ${
                  model.popular 
                    ? 'bg-honey text-foreground hover:bg-honey-dark' 
                    : 'bg-cream text-foreground hover:bg-honey/20'
                }`} onClick={() => window.location.href = '/contact-us'}>
                  {t("franchiseSection.getStarted")}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t("franchiseSection.helpText")}
          </p>
          <button className="honey-btn" onClick={() => window.location.href = '/franchise'}>
            {t("franchiseSection.requestInfo")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
