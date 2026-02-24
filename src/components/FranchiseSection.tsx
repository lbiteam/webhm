import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";
import Bee from "@/components/Bee";
import iceCreamCart from "@/assets/franchise/ice-cream-cart.webp";
import iceCreamParlour from "@/assets/franchise/ice-cream-parlour.webp";
import cafeBanner from "@/assets/website-banners/mission-2026-banner/mid.webp";

type ModelKey = "basic" | "medium" | "bigger";

const modelImages: Record<ModelKey, string> = {
  basic: iceCreamCart,
  medium: iceCreamParlour,
  bigger: cafeBanner,
};

const modelMeta: Record<
  ModelKey,
  {
    name: string;
    tagline: string;
    investment: string;
    cardFeatures: string[];
    features: string[];
  }
> = {
  basic: {
    name: "Ice Cream Cart",
    tagline: "Affordable Investment",
    investment: "₹3.20 Lakhs",
    cardFeatures: [
      "Custom branded cart",
      "Basic product range",
      "Low investment start",
    ],
    features: [
      "Small retail footprint with high mobility",
      "Basic yet profitable product range",
      "Training & operational support",
      "Marketing materials and launch support",
      "Location flexibility with territory focus",
    ],
  },
  medium: {
    name: "Ice Cream Parlour",
    tagline: "Flagship Store",
    investment: "₹10-15 Lakhs",
    cardFeatures: [
      "Flagship parlour setup",
      "Premium interior design",
      "Regional exclusivity",
    ],
    features: [
      "Medium-sized, high-footfall parlour",
      "Full product portfolio",
      "Comprehensive training for staff",
      "Strong marketing and launch campaigns",
      "Territory exclusivity",
      "Dedicated account manager",
      "Ice cream counter and dine‑in capability",
    ],
  },
  bigger: {
    name: "Cafe Honeyman",
    tagline: "Premium Cafe ",
    investment: "₹25-30 Lakhs",
    cardFeatures: [
      "Full product range",
      "Territory exclusivity",
      "Dedicated account manager",
    ],
    features: [
      "Flagship cafe outlet with dine‑in",
      "Complete product portfolio including beverages & food",
      "Extensive training and onboarding program",
      "Full marketing and branding package",
      "Regional exclusivity",
      "Scope for multiple outlets",
      "Ice cream parlour + cafe hybrid model",
      "Priority support around the clock",
    ],
  },
};

const FranchiseSection = () => {
  const { pathname } = useLocation();
  const [selectedModel, setSelectedModel] = useState<ModelKey | null>(null);

  const models = [
    {
      key: "basic",
      popular: false,
      headerBg: "bg-stone-700",
      titleColor: "text-white",
      subtitleColor: "text-honey",
      buttonStyle: "border border-honey text-honey hover:bg-honey hover:text-black",
    },
    {
      key: "medium",
      popular: true,
      headerBg: "bg-honey",
      titleColor: "text-black",
      subtitleColor: "text-black/75",
      buttonStyle: "bg-honey text-black font-bold hover:bg-honey-dark",
    },
    {
      key: "bigger",
      popular: false,
      headerBg: "bg-stone-700",
      titleColor: "text-white",
      subtitleColor: "text-honey",
      buttonStyle: "border border-honey text-honey hover:bg-honey hover:text-black",
    },
  ] as const;

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedModel(null);
    };
    if (selectedModel) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onEscape);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEscape);
    };
  }, [selectedModel]);

  return (
    <section id="franchise-models" className="py-20 bg-[#fff7ed] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl">
            Our Franchise Models
          </h2>
          <p className="text-gray-400 mt-2">
            Choose the format that fits your budget and location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((m) => {
            const meta = modelMeta[m.key];
            const cardFeatures = meta.cardFeatures.length
              ? meta.cardFeatures
              : meta.features.slice(0, 3);
            return (
              <div
                key={m.key}
                className={`bg-stone-800 rounded-2xl overflow-hidden border transition transform hover:-translate-y-2 ${
                  m.popular
                    ? "border-2 border-honey scale-105 shadow-2xl relative"
                    : "border-stone-700 hover:border-honey"
                }`}
              >
                {m.popular && (
                  <div className="absolute top-0 right-0 bg-honey text-black text-xs font-bold px-3 py-1">
                    MOST POPULAR
                  </div>
                )}
                <div className={`${m.headerBg} p-4 text-center`}>
                  <h3 className={`text-xl font-bold ${m.titleColor}`}>{meta.name}</h3>
                  <p className={`text-sm font-semibold ${m.subtitleColor}`}>
                    {meta.tagline}
                  </p>
                </div>
                <div className="p-8">
                  <div className="text-center mb-6">
                    <span className="text-gray-400 text-sm">
                      Investment
                    </span>
                    <div className="text-3xl font-bold text-white">
                      {meta.investment}
                    </div>
                   
                  </div>
                  <ul className="space-y-3 text-gray-300 text-sm mb-8">
                    {cardFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <i className="fas fa-check text-honey mt-1 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setSelectedModel(m.key)}
                    className={`block w-full text-center py-3 rounded transition ${m.buttonStyle}`}
                  >
                    Know More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Model detail modal */}
      {selectedModel && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedModel(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="model-modal-title"
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-shrink-0 flex items-center justify-between px-4 py-3 border-b border-amber-100 bg-amber-50/50">
              <h2 id="model-modal-title" className="text-lg font-bold text-gray-900">
                {modelMeta[selectedModel].name}
              </h2>
              <button
                type="button"
                onClick={() => setSelectedModel(null)}
                className="w-10 h-10 rounded-full bg-amber-100 hover:bg-amber-200 text-gray-700 flex items-center justify-center transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-y-auto flex-1 min-h-0 relative bg-gradient-to-b from-amber-50/80 to-orange-50/60">
              {/* Bees in modal */}
              <Bee className="absolute top-8 right-6 z-10 pointer-events-none opacity-70" size={22} />
              <Bee className="absolute top-1/3 left-4 z-10 pointer-events-none opacity-50" size={18} />
              <Bee className="absolute bottom-32 right-8 z-10 pointer-events-none opacity-60" size={20} />
              <div className="aspect-[4/3] w-full bg-amber-50 overflow-hidden">
                <img
                  src={modelImages[selectedModel]}
                  alt={modelMeta[selectedModel].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-amber-600 font-semibold uppercase tracking-wide mb-1">
                  Investment
                </p>
               
                <p className="text-2xl font-bold text-gray-900 mb-6">
                  {modelMeta[selectedModel].investment}
                </p>

                {/* Long-form English descriptions per model */}
                {selectedModel === "basic" && (
                  <div className="space-y-4 text-sm text-gray-700 leading-relaxed rounded-2xl bg-amber-50/70 border border-amber-100 p-5 md:p-6 relative">
                    <p>
                      <strong>Bring the Sweetness to the Streets:</strong> The Honeyman Ice Cream Cart is a
                      low‑investment, highly mobile franchise model designed for maximum reach and
                      irresistible profitability.
                    </p>
                    <p>
                      With over <strong>160+ successful locations</strong> already thriving across India, Honeyman is
                      a trusted household name. Now you can take our signature honey‑infused ice creams
                      directly to the crowds—local markets, corporate parks, events and more.
                    </p>
                    <h3 className="font-semibold text-amber-600 mt-4">Why choose a Honeyman Ice Cream Cart?</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong>The power of the Honeyman brand:</strong> Step into a rapidly expanding network of
                        160+ successful outlets with ready brand trust.
                      </li>
                      <li>
                        <strong>Low investment, high margins:</strong> Avoid heavy rentals and fit‑outs for a faster
                        ROI.
                      </li>
                      <li>
                        <strong>Guilt‑free, premium indulgence:</strong> Naturally sweetened with premium Honeyman
                        honey—healthier desserts that practically sell themselves.
                      </li>
                      <li>
                        <strong>Ultimate mobility:</strong> Go where the demand is—festivals, campuses, busy
                        streets, private events and more.
                      </li>
                    </ul>
                    <h3 className="font-semibold text-amber-600 mt-4">Unmatched franchisee support</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong>Turnkey cart setup</strong> – fully branded and ready‑to‑operate from day one.
                      </li>
                      <li>
                        <strong>Product supply & logistics</strong> – automated inventory restocking from our
                        central kitchens.
                      </li>
                      <li>
                        <strong>Marketing & digital support</strong> – local SEO, geo‑targeted ads, and social
                        campaigns.
                      </li>
                      <li>
                        <strong>Operational training</strong> – complete training on handling, service and
                        maintenance.
                      </li>
                    </ul>
                    <h3 className="font-semibold text-amber-600 mt-4">What you need to get started</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Minimal storage space for backup inventory and overnight cart parking.</li>
                      <li>Easily operated by 1–2 trained staff members.</li>
                      <li>Passion and a friendly attitude to build a profitable local business.</li>
                    </ul>
                  </div>
                )}

                {selectedModel === "medium" && (
                  <div className="space-y-4 text-sm text-gray-700 leading-relaxed rounded-2xl bg-amber-50/70 border border-amber-100 p-5 md:p-6 relative">
                    <p>
                      <strong>Scoop up success:</strong> The Honeyman Ice Cream Parlour is a premium, brick‑and‑mortar
                      franchise designed for entrepreneurs who want to dominate the dessert market in their city.
                    </p>
                    <p>
                      With <strong>160+ successful locations</strong> across India, Honeyman already commands strong
                      trust and loyalty. Your parlour becomes the go‑to destination for honey‑infused ice creams,
                      decadent sundaes, gourmet thick shakes and more.
                    </p>
                    <h3 className="font-semibold text-amber-600 mt-4">
                      Why invest in a Honeyman Ice Cream Parlour?
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong>Unbeatable USP:</strong> Naturally sweetened with premium honey—health‑conscious yet
                        indulgent.
                      </li>
                      <li>
                        <strong>Expanded menu, higher revenue:</strong> Waffles, sundaes, shakes and coffee pairings
                        drive higher average bills.
                      </li>
                      <li>
                        <strong>Brand power:</strong> Join a trusted FMCG network with built‑in customer trust.
                      </li>
                      <li>
                        <strong>All‑season appeal:</strong> Comfortable interiors and a diverse menu keep footfall
                        strong all year round.
                      </li>
                    </ul>
                    <h3 className="font-semibold text-amber-600 mt-4">
                      End‑to‑end franchise support
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Store design & fit‑out with branded interiors and layouts.</li>
                      <li>Smart POS.</li>
                      <li>Aggressive local marketing and digital campaigns.</li>
                      <li>Comprehensive training for hospitality, upselling and hygiene.</li>
                      <li>Seamless supply chain for proprietary ingredients and packaging.</li>
                    </ul>
                    <h3 className="font-semibold text-amber-600 mt-4">
                      What we look for in a parlour partner
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>250–600 sq. ft. carpet area in a high‑potential location.</li>
                      <li>High streets, malls, food courts or dense residential clusters.</li>
                      <li>Ability to manage a small team of 3–5 people.</li>
                      <li>Drive to deliver a premium guest experience.</li>
                    </ul>
                  </div>
                )}

                {selectedModel === "bigger" && (
                  <div className="space-y-4 text-sm text-gray-700 leading-relaxed rounded-2xl bg-amber-50/70 border border-amber-100 p-5 md:p-6 relative">
                    <p>
                      <strong>Brew something extraordinary:</strong> Cafe Honeyman is a premium cafe format where
                      expertly crafted coffee meets the pure sweetness of our signature honey.
                    </p>
                    <p>
                      As customers move away from artificial syrups and refined sugar, Cafe Honeyman offers a
                      sophisticated, health‑conscious alternative without compromising on taste—backed by our{" "}
                      <strong>160+ locations</strong> across India.
                    </p>
                    <h3 className="font-semibold text-amber-600 mt-4">
                      The Cafe Honeyman advantage
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong>A menu unlike any other:</strong> Honey‑glazed lattes, artisanal teas, honey‑infused
                        pastries and savoury bites.
                      </li>
                      <li>
                        <strong>Dual revenue streams:</strong> Dine‑in cafe + retail sales of Honeyman FMCG products.
                      </li>
                      <li>
                        <strong>Premium ambience:</strong> Warm, modern interiors built for professionals, friends and
                        families to connect.
                      </li>
                    </ul>
                    <h3 className="font-semibold text-amber-600 mt-4">
                      Next‑level support & technology
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Smart POS.</li>
                      <li>Digital marketing and local SEO to keep footfall consistent.</li>
                      <li>Turnkey design, build‑out and equipment setup.</li>
                      <li>Masterclass‑level training for baristas and service teams.</li>
                    </ul>
                    <h3 className="font-semibold text-amber-600 mt-4">
                      Ideal Cafe Honeyman partner
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>800–1,500 sq. ft. in a prime, visible location.</li>
                      <li>High streets, tech parks, malls or premium neighbourhoods.</li>
                      <li>Ability to lead a 6–10 member hospitality team.</li>
                      <li>Vision to build a community‑driven, premium cafe destination.</li>
                    </ul>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setSelectedModel(null);
                    if (pathname === "/") {
                      setTimeout(() => {
                        document.getElementById("franchise-form")?.scrollIntoView({ behavior: "smooth" });
                      }, 150);
                    } else {
                      window.location.href = "/#franchise-form";
                    }
                  }}
                  className="block w-full text-center py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-lg transition shadow-lg"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FranchiseSection;
