import Header from "@/components/Header";
import Footer from "@/components/Footer";

const timeline = [
  { year: "1971", title: "The Legacy Begins", desc: "Founded in memory of S. Jagjit Singh Kapoor (Honeyking)." },
  { year: "1985", title: "Beekeeping Core", desc: "Established India's strongest beekeeping base & organic clusters." },
  { year: "1995", title: "R&D & Quality", desc: "Set up advanced R&D labs ensuring international-grade purity." },
  { year: "2005", title: "Global Leader", desc: "Exported 4000 tons of honey in a single day—a world record." },
  { year: "2010", title: "World Recognition", desc: "Honored by Apimondia for Best Honey in the World." },
  { year: "2013", title: "Organic Excellence", desc: "Won Best Organic Honey in the World at BIOFACH, Germany." },
  { year: "2015", title: "Biggest Exporter", desc: "APEDA India's Largest Honey Exporter for 13+ years." },
  { year: "2018", title: "Brand Innovation", desc: "Coca-Cola Trophy for Best Retail Concept in Mumbai." },
  { year: "2023", title: "D2C Excellence", desc: "Top 100 D2C Brands of the Year – 2023." },
  { year: "2025", title: "160+ Outlets", desc: "Successfully expanded to 160+ outlets across India." },
];

const whyChoose = [
  "46+ Years of Trust & Expertise",
  "World's Largest Refined Sugar-Free Ecosystem",
  "100% Raw & Natural Honey",
  "Empowering Entrepreneurs, Building Communities",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(var(--honey-light)), hsl(var(--honey-cream)))" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-down">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "hsl(var(--honey-gold))" }}>Est. 1980</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: "hsl(var(--honey-dark))" }}>
              A Legacy of Purity
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Rooted in Punjab since 1980, the late <strong>Sardar Jagjit Singh Kapoor</strong> founded HONEYMAN on a commitment to purity, transforming a local apiary into a global leader.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
              Today, his son <strong>Mr. Shahzada Singh Kapoor</strong>, a global honey authority, drives a revolutionary vision: building <strong>The World's Largest Ecosystem of Refined Sugar-Free Products</strong>, sweetened only with pure, natural honey.
            </p>
          </div>

          {/* Stats */}
          <div className="max-w-4xl mx-auto px-4 mt-12 grid grid-cols-3 gap-6 text-center animate-slide-up stagger-2">
            {[
              { num: "46+", label: "Years of Legacy" },
              { num: "160+", label: "Stores Nationwide" },
              { num: "300+", label: "SKU's" },
            ].map((s) => (
              <div key={s.label} className="bg-white/60 backdrop-blur rounded-2xl p-6 border border-amber-200">
                <div className="text-3xl md:text-4xl font-bold" style={{ color: "hsl(var(--honey-amber))" }}>{s.num}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-right">
              <h2 className="text-3xl font-bold mb-6" style={{ color: "hsl(var(--honey-dark))" }}>Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our vision is bold and unapologetic — to build the world's largest and most trusted ecosystem of honey-based products, redefining how sweetness is consumed across the globe. From Indian households to international markets, we aim to make honey the universal symbol of health, sustainability, and positive change.
              </p>
            </div>
            <div className="animate-slide-left">
              <h2 className="text-3xl font-bold mb-6" style={{ color: "hsl(var(--honey-dark))" }}>Why Choose Honeyman</h2>
              <ul className="space-y-4">
                {whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full honey-gradient flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-muted-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16" style={{ background: "hsl(var(--honey-cream))" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-slide-down" style={{ color: "hsl(var(--honey-dark))" }}>
              Our Journey
            </h2>
            <div className="relative">
              {/* Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-amber-300 hidden md:block" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div
                    key={item.year}
                    className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 animate-slide-up`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}>
                      <div className="bg-white rounded-xl p-5 border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-sm font-bold" style={{ color: "hsl(var(--honey-gold))" }}>{item.year}</span>
                        <h3 className="font-bold text-lg mt-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 rounded-full honey-gradient border-2 border-white shadow shrink-0 z-10" />
                    <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? "md:order-2" : ""}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media Recognition */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-slide-down" style={{ color: "hsl(var(--honey-dark))" }}>
            Media & Recognition
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            HONEYMAN has been recognized by national and international media for its commitment to quality, purity, and innovation.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-slide-up">
            {[
              { num: "50+", label: "Media Features" },
              { num: "10+", label: "National Awards" },
              { num: "300+", label: "Press Mentions" },
              { num: "100+", label: "Cities Reached" },
            ].map((s) => (
              <div key={s.label} className="bg-card rounded-2xl p-6 border border-amber-100">
                <div className="text-3xl font-bold" style={{ color: "hsl(var(--honey-amber))" }}>{s.num}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
