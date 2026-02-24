import { useState, useEffect } from "react";

interface StoreOperative {
  City: string;
  Region?: string;
}

const cards = [
  {
    icon: "fa-graduation-cap",
    title: "Comprehensive Training",
    desc: "Everything you need to run a successful store before you open your doors.",
    items: [
      "2-week intensive onboarding at HQ",
      "Product knowledge & preparation",
      "Staff hiring & management training",
      "POS system & inventory management",
    ],
    accent: "from-amber-400 to-amber-500",
  },
  {
    icon: "fa-compass",
    title: "Operational Guidance",
    desc: "Ongoing support so you're never stuck, never guessing.",
    items: [
      "Dedicated franchise success manager",
      "Monthly performance reviews",
      "Supply chain & automated inventory",
      "Access to 160+ franchisee community",
    ],
    accent: "from-amber-500 to-orange-500",
  },
  {
    icon: "fa-clipboard-list",
    title: "Proven Business Model",
    desc: "You're not experimenting — you're copying a formula that works.",
    items: [
      "Tested pricing & product mix",
      "Location selection assistance",
      "Marketing templates & local campaigns",
      "Grand opening PR support",
    ],
    accent: "from-orange-500 to-amber-600",
  },
];

const WeSetYouUpSection = () => {
  const [operativeCities, setOperativeCities] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const module = await import("@/assets/franchise/store operatives.json");
        const data = (module?.default ?? module) as StoreOperative[] | undefined;
        if (cancelled || !Array.isArray(data)) {
          if (!cancelled && !Array.isArray(data)) setOperativeCities(["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata"]);
          return;
        }
        const cities = [...new Set(data.map((s) => (s.City || "").trim()).filter(Boolean))].sort(
          (a, b) => a.localeCompare(b)
        );
        if (!cancelled) setOperativeCities(cities);
      } catch {
        if (!cancelled) setOperativeCities(["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata"]);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return (
  <section className="py-24 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/30 relative overflow-hidden">
    {/* Subtle honeycomb / hexagon pattern */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden>
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L50 15V45L30 60L10 45V15L30 0Z' fill='none' stroke='%23d97706' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      {/* Header */}
      <div className="text-center mb-20">
        <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest border-2 border-amber-200 shadow-sm">
          <i className="fas fa-hexagon text-amber-500 text-sm" />
          You Are Never Alone
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-6 tracking-tight max-w-4xl mx-auto leading-tight">
          We Set You Up to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Succeed</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mt-6" />
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
          160+ successful franchisees didn&apos;t get there alone. Every step of your journey — from day one training to daily operations — Honeyman is beside you.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
        {cards.map((card, i) => (
          <div
            key={i}
            className="group relative bg-white rounded-3xl p-8 border-2 border-amber-100/80 shadow-[0_10px_40px_rgba(245,158,11,0.08)] hover:shadow-[0_20px_60px_rgba(245,158,11,0.18)] hover:-translate-y-3 hover:border-amber-300/60 transition-all duration-500 ease-out"
            style={{
              animation: "fade-in 0.6s ease-out forwards",
              animationDelay: `${i * 120}ms`,
              opacity: 0,
            }}
          >
            {/* Card glow on hover */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`} />
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-50 to-transparent rounded-bl-full group-hover:scale-125 transition-transform duration-500 rounded-tl-3xl" />
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center mb-6 shadow-md border border-amber-200/80 group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300">
                <i className={`fas ${card.icon} text-4xl text-amber-600 group-hover:text-amber-700 transition-colors`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {card.desc}
              </p>
              <ul className="space-y-3">
                {card.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start text-sm text-gray-700 font-medium gap-3 hover:text-amber-800 transition-colors"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 group-hover:bg-amber-200 transition-colors">
                      <i className="fas fa-check text-amber-600 text-xs" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Journey timeline - unchanged */}
      <div className="mb-24 bg-amber-50/50 p-10 rounded-3xl border border-amber-100">
        <h3 className="section-title text-2xl md:text-3xl text-center">
          Your Journey to Profitability
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative space-y-8 md:space-y-0">
          <div className="hidden md:block absolute top-6 left-[10%] w-[80%] h-1 bg-amber-200 -z-10" />
          {[
            { label: "W1", title: "Week 1-2", desc: "HQ Onboarding" },
            { label: "W3", title: "Week 3-6", desc: "Store Prep" },
            { label: "🚀", title: "Week 7", desc: "Grand Opening", rocket: true },
            { label: "M3", title: "Month 3+", desc: "Optimization" },
            { label: "💰", title: "Month 12-18", desc: "Full Payback" },
          ].map((step, i) => (
            <div key={i} className="text-center px-2 w-full md:w-1/5 relative">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border-4 shadow-md ${
                  step.rocket
                    ? "bg-gradient-to-br from-amber-400 to-amber-600 text-white border-white text-2xl scale-110"
                    : "bg-white text-amber-600 font-extrabold border-amber-200"
                }`}
              >
                {step.rocket ? <i className="fas fa-rocket" /> : step.label}
              </div>
              <h4 className="font-bold text-gray-900">{step.title}</h4>
              <p className={`text-xs mt-1 ${step.rocket ? "text-amber-600 font-bold" : "text-gray-500"}`}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Operative Cities - scrollable row */}
      <div className="mb-6">
        <h3 className="section-title text-2xl md:text-3xl text-center">
          Our Operative Cities
        </h3>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 text-sm md:text-base">
          We are present across India. Find Honeyman in these cities.
        </p>
      </div>
      <div className="overflow-hidden relative w-full group min-h-[52px] py-2">
        <div
          className="flex w-max gap-3 items-center cities-scroll-track group-hover:[animation-play-state:paused]"
          style={{ animation: operativeCities.length > 0 ? "cities-scroll 80s linear infinite" : "none" }}
        >
          {operativeCities.length > 0 ? (
            [...operativeCities, ...operativeCities].map((city, i) => (
              <div
                key={`${city}-${i}`}
                className="flex-shrink-0 px-5 py-2.5 rounded-full bg-white border-2 border-amber-200 text-amber-800 font-semibold text-sm shadow-md hover:border-amber-400 hover:shadow-lg transition-all duration-300 whitespace-nowrap"
              >
                {city}
              </div>
            ))
          ) : (
            <span className="text-gray-400 text-sm py-2">Loading cities…</span>
          )}
        </div>
      </div>

      <style>{`
        @keyframes cities-scroll {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .cities-scroll-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  </section>
  );
};

export default WeSetYouUpSection;
