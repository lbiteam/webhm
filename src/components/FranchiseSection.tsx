import { Check } from "lucide-react";
import iceCreamPattern from "@/assets/franchise-bg  image.jpg";

const franchiseModels = [
  {
    name: "Basic",
    tagline: "Perfect Start",
    investment: "₹2.5-5 Lakhs",
    color: "from-emerald-400 to-teal-500",
    features: [
      "Small retail outlet",
      "Basic product range",
      "Training & support",
      "Marketing materials",
      "Territory exclusivity",
    ],
  },
  {
    name: "Medium",
    tagline: "Growing Business",
    investment: "₹8-12 Lakhs",
    color: "from-honey to-honey-dark",
    popular: true,
    features: [
      "Medium-sized store",
      "Full product range",
      "Comprehensive training",
      "Marketing support",
      "Territory exclusivity",
      "Dedicated account manager",
      "Ice cream counter option",
    ],
  },
  {
    name: "Bigger",
    tagline: "Premium Partner",
    investment: "₹15-30 Lakhs",
    color: "from-amber-600 to-orange-700",
    features: [
      "Flagship store",
      "Complete product portfolio",
      "Extensive training program",
      "Full marketing package",
      "Regional exclusivity",
      "Multiple outlet rights",
      "Ice cream parlor setup",
      "Priority support 24/7",
    ],
  },
];

const FranchiseSection = () => {
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
            Business Opportunity
          </span>
          <h2 className="section-title">Franchise Models Built To Scale</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
        
          Own the world’s first honey-based ice cream business, designed for various cities, budgets, and ambitions. Our system-driven, product-led model comes fully supported for consistent growth.


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
                  MOST POPULAR
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
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Have questions? We're here to help you start your franchise journey
          </p>
          <button className="honey-btn" onClick={() => window.location.href = '/franchise'}>
            Request Franchise Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
