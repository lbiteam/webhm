import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useMemo, useRef } from "react";
import aboutUsBanner from "@/assets/about-us.webp";
import about1 from "@/assets/about-1.webp";
import about2 from "@/assets/about-2.webp";
import aboutSir from "@/assets/about-sir.webp";
import aboutUsProduct1 from "@/assets/about-us-product-1.webp";
import aboutUsProduct2 from "@/assets/about-us-product-2.webp";
import aboutUsProduct3 from "@/assets/about-us-product-3.webp";
import aboutUsProduct4 from "@/assets/about-us-product-4.webp";
import aboutUsProduct5 from "@/assets/about-us-product-5.webp";
import locationUpdateBg from "@/assets/location-update.webp";
import aboutBusinessBg from "@/assets/about-business.webp";
import storeOperatives from "@/assets/store operatives.json";
import AvailableOnSection from "@/components/AvailableOnSection";

const timeline = [
  // { year: "1971", title: "The Legacy Begins", desc: "Founded in memory of S. Jagjit Singh Kapoor (Honeyking)." },
  // { year: "1985", title: "Beekeeping Core", desc: "Established India's strongest beekeeping base & organic clusters." },
  // { year: "1995", title: "R&D & Quality", desc: "Set up advanced R&D labs ensuring international-grade purity." },
  // { year: "2005", title: "Global Leader", desc: "Exported 4000 tons of honey in a single day—a world record." },
  { year: "2010", title: "World Recognition", desc: "Honored by Apimondia for Best Honey in the World." },
  // { year: "2013", title: "Organic Excellence", desc: "Won Best Organic Honey in the World at BIOFACH, Germany." },
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

/** PR / article URLs — same order as `News logo/Artboard 1.png` … `Artboard 18.png`. Leave "" until you have the link. */
const MEDIA_COVERAGE_PR_LINKS: string[] = [
  "https://www.aninews.in/news/business/with-150-franchises-and-a-fully-integrated-infrastructure-honeyman-redefines-the-rs-4000-crore-indian-honey-market20260323165752/", 
  "https://www.business-standard.com/content/press-releases-ani/with-150-franchises-and-a-fully-integrated-infrastructure-honeyman-redefines-the-rs-4-000-crore-indian-honey-market-126032400009_1.html",
  "https://theprint.in/ani-press-releases/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion/2704754/", 
  "https://www.tribuneindia.com/news/business/with-150-franchises-and-a-fully-integrated-infrastructure-honeyman-redefines-the-rs-4000-crore-indian-honey-market-2-2/", 
  "https://www.theweek.in/wire-updates/business/2026/03/23/with-150-franchises-and-a-fully-integrated-infrastructure-honeyman-redefines-the-rs-4-000-crore-indian-honey-market.html", 
  "https://www.ptinews.com/press-release/with-150-franchises-and-a-fully-integrated-infrastructure-honeyman-redefines-the-rs-4-000-crore-indian-honey-market/3492003", 
  "https://thewire.in/ptiprnews/with-150-franchises-and-a-fully-integrated-infrastructure-honeyman-redefines-the-rs-4000-crore-indian-honey-market", 
  "https://asiannews.in/with-150-franchises-and-a-fully-integrated-infrastructure-honeyman-redefines-the-rs-4000-crore-indian-honey-market/", //
  "https://www.ians.in/vmpl/with-150-franchises-and-a-fully-integrated-infrastructure-honeyman-redefines-the-rs-4000-crore-indian-honey-market", // 
  "https://www.uptoday.news/news/with-150-franchises-and-a-fully-integrated-infrastructure-honeyman-redefines-the-rs-4000-crore-indian-honey-market20260323165748/", // 
  "https://www.sangritoday.com/spotlight/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion", // 
  "https://www.indianeconomicobserver.com/news/with-150-franchises-and-a-fully-integrated-infrastructure-honeyman-redefines-the-rs-4000-crore-indian-honey-market20260323165748/", // 
  "https://www.lokmattimes.com/business/with-150-franchises-and-a-fully-integrated-infrastructure-honeyman-redefines-the-rs-4000-crore-indian-honey-market/", // 
  "https://thehindustanexpress.co.in/with-150-franchises-and-a-fully-integrated-infrastructure-honeyman-redefines-the-rs-4000-crore-indian-honey-market/", // 
  "https://www.uaetimes.news/news/with-150-franchises-and-a-fully-integrated-infrastructure-honeyman-redefines-the-rs-4000-crore-indian-honey-market20260323165748/", // 
  "https://newsindianbulletin.co.in/with-150-franchises-and-a-fully-integrated-infrastructure-honeyman-redefines-the-rs-4000-crore-indian-honey-market/", // 
  "http://dhunt.in/13QB0W", // 
  "https://indiabuzznews.co.in/with-150-franchises-and-a-fully-integrated-infrastructure-honeyman-redefines-the-rs-4000-crore-indian-honey-market/", // 
];

const About = () => {
  const journeyRef = useRef<HTMLDivElement>(null);
  const cities = useMemo(() => {
    const normalized = storeOperatives
      .map((entry) => (typeof entry.City === "string" ? entry.City.trim() : ""))
      .filter(Boolean);

    return Array.from(new Set(normalized));
  }, []);
  const awardImages = useMemo(() => {
    const modules = import.meta.glob("/src/assets/awards/*.{png,jpg,jpeg,webp,avif,svg}", {
      eager: true,
      import: "default",
    }) as Record<string, string>;

    return Object.entries(modules)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([path, src]) => ({
        src,
        alt: path.split("/").pop()?.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ") || "Award",
      }));
  }, []);

  const mediaCoverageTiles = useMemo(() => {
    const modules = import.meta.glob("/src/assets/News logo/*.png", {
      eager: true,
      import: "default",
    }) as Record<string, string>;

    const artboardNum = (path: string) => {
      const m = path.match(/Artboard\s+(\d+)/i);
      return m ? parseInt(m[1], 10) : 0;
    };

    const logos = Object.entries(modules)
      .sort(([aPath], [bPath]) => artboardNum(aPath) - artboardNum(bPath))
      .map(([, src]) => src);

    return MEDIA_COVERAGE_PR_LINKS.map((prUrl, i) => ({
      prUrl: prUrl.trim(),
      logoSrc: logos[i] ?? "",
      alt: `Media logo ${i + 1}`,
    }));
  }, []);

  useEffect(() => {
    const cards = journeyRef.current?.querySelectorAll(".timeline-card");
    const dots = journeyRef.current?.querySelectorAll(".timeline-dot");
    const allTimelineNodes = [...(cards ?? []), ...(dots ?? [])];

    const revealAll = () => {
      allTimelineNodes.forEach((el) => el.classList.add("visible"));
    };

    if (allTimelineNodes.length === 0) return;

    if (typeof IntersectionObserver === "undefined") {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards?.forEach((el) => observer.observe(el));
    dots?.forEach((el) => observer.observe(el));

    const fallbackTimer = window.setTimeout(revealAll, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main>
        {/* HERO (ported from sample-text sections) */}
        <section
          className="relative overflow-hidden pt-20 md:pt-28 pb-14 md:pb-16"
          style={{
            backgroundImage: `url(${aboutUsBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* subtle noise overlay */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Black gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/40 pointer-events-none z-0" />

          {/* floating elements */}
          <div className="absolute rounded-full opacity-20 animate-pulse top-[12%] left-[8%] w-28 h-28" style={{ background: "hsl(var(--honey-dark))" }} />
          <div className="absolute rounded-full opacity-20 animate-pulse top-[22%] right-[12%] w-20 h-20" style={{ background: "hsl(var(--honey-amber))" }} />
          <div className="absolute rounded-full opacity-20 animate-pulse bottom-[28%] left-[15%] w-14 h-14" style={{ background: "hsl(var(--honey-dark))" }} />
          <div className="absolute rounded-full opacity-20 animate-pulse bottom-[18%] right-[8%] w-24 h-24" style={{ background: "hsl(var(--honey-amber))" }} />
          <div className="absolute rounded-full opacity-20 animate-pulse top-[55%] left-[6%] w-10 h-10" style={{ background: "hsl(var(--honey-light))" }} />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-slide-down">
            <div
              className="inline-flex items-center gap-2 rounded-full px-6 py-2 border border-white/20 bg-black/25 backdrop-blur shadow-sm text-sm font-semibold tracking-widest uppercase text-white"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF8F00] animate-pulse" />
              India's Premium Honey Brand
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.05] text-white">
              Join the <span className="text-[#FF8F00]">GLOBAL REVOLUTION AGAINST REFINED SUGAR</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
             Every time you reject the bleached calories of refined sugar

in favor of the raw power of honey, you take a stand. You are voting against a system

built on refined sugar and choosing your own vitality. Refined sugar has held our health hostage for too long.
            </p>
            <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            By eliminating refined sugar, you protect your family’s future. Honeyman is leading this global movement, replacing industrial processing

with nature’s purest fuel. Stop being a victim of refined sugar. 
            </p>
            <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
           
In 1980, Late Sardar Jagjit Singh Kapoor began a journey in Doraha, Punjab that transformed the honey industry. A 13-time Leading Exporter Award winner, he pioneered the Inaugural Honey Train, moving 4,000 MT of honey to 50+ countries.

Today, the third generation of the Kapoor family carries this legacy forward through HONEYMAN, delivering high-purity honey from their own bee farms and a world of 300+ honey-sweetened products.
            </p>


            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <a
                href="#journey"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-white shadow-lg transition transform hover:-translate-y-0.5"
                style={{
                  background: "#ff8f00",
                }}
              >
                Explore Our Journey
              </a>
              <a
                href="#franchise"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full font-bold transition transform hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1.5px solid rgba(255,255,255,0.45)",
                  color: "#fff",
                  backdropFilter: "blur(10px)",
                }}
              >
                Join the Family
              </a>
            </div>
          </div>

          {/* Stats strip (sample-style) */}
          <div className="max-w-4xl mx-auto px-4 mt-12 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-center animate-slide-up stagger-2">
              {[
                { num: "46+", label: "Years of Legacy" },
                { num: "180+", label: "Stores Nationwide" },
                { num: "300+", label: "SKU's" },
              ].map((s, idx) => (
                <div
                  key={s.label}
                  className="bg-white/60 backdrop-blur rounded-2xl p-6 border border-white/50 shadow-sm hover:shadow-md transition-shadow"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold" style={{ color: "#97430b" }}>
                    {s.num}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-16 bg-white relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={journeyRef}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative animate-slide-right about-images">
                <div className="rounded-3xl overflow-hidden border border-amber-100 shadow-xl img-card">
                  <div
                    className="w-full aspect-[4/3] flex items-center justify-center text-7xl img-card-main"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--honey-light)), hsl(var(--honey-dark)))",
                      color: "white",
                    }}
                  >
                    <img 
                      src={about1} 
                      alt="About Honeyman"
                      className="w-full h-full object-cover"
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div
                  className="absolute -bottom-6 -right-6 w-28 h-28 rounded-3xl shadow-lg border-4 border-white flex items-center justify-center text-5xl img-card-small overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--honey-dark)), hsl(var(--honey-amber)))",
                  }}
                >
                  <img 
                    src={about2} 
                    alt="About Honeyman"
                    className="w-full h-full object-cover"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>

              <div className="animate-slide-left">
                <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: "hsl(var(--honey-gold))" }}>
                  About Us
                </div>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold" style={{ color: "hsl(var(--honey-dark))" }}>
                  Crafted for Purity. Built for Scale.
                </h2>

                <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
                At Honeyman, our mission is bold and unwavering — to create the world's largest and most trusted ecosystem of natural honey and honey-based products. From Indian households to international markets, we're redefining how the world experiences sweetness. For us, honey isn't just a product; it's a universal symbol of health, sustainability, and positive change.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
                With 46+ years of heritage, 180+ stores nationwide, and a thriving Cafe Honeyman experience, we've grown into more than a brand — we're a movement built on purity, trust, and tradition.
                </p>

                {/* <div className="mt-6 flex flex-wrap gap-3 about-tags">
                  {whyChoose.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold border border-amber-100 bg-[hsl(var(--honey-cream))] text-[hsl(var(--honey-dark))]"
                    >
                      {item}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </section>
          {/* TEAM — full-width image */}
          <section id="team" className="w-full overflow-hidden">
          <img
            src={aboutSir}
            alt="Honeyman leadership and team"
            className="w-full h-auto block"
            loading="lazy"
            decoding="async"
          />
        </section>

        {/* JOURNEY */}
        <section id="journey" className="py-16" style={{ background: "hsl(var(--honey-cream))" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 animate-slide-down">
              <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: "hsl(var(--honey-gold))" }}>
                Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "hsl(var(--honey-dark))" }}>
                From a Legacy to Leadership
              </h2>
            </div>

            <div className="relative timeline">
              {/* Vertical line */}
              <div
                className="absolute left-4 sm:left-6 top-0 bottom-0 w-[3px] rounded-full"
                style={{
                  background: "linear-gradient(to bottom, hsl(var(--honey-amber)), hsl(var(--honey-dark)) 60%, transparent)",
                }}
              />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div key={item.year} className="relative pl-12 sm:pl-14">
                    {/* Dot */}
                    <div
                      className="timeline-dot absolute left-4 sm:left-6 top-5 w-4 h-4 rounded-full border-2 border-white shadow"
                      style={{
                        background: "hsl(var(--honey-amber))",
                        transitionDelay: `${i * 0.08}s`,
                      }}
                    />

                    <div
                      className="timeline-card bg-white rounded-2xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition-shadow"
                      style={{ transitionDelay: `${i * 0.08}s` }}
                    >
                      <div className="text-sm font-bold tracking-widest uppercase" style={{ color: "hsl(var(--honey-gold))" }}>
                        {item.year}
                      </div>
                      <h3 className="font-bold text-lg mt-2" style={{ color: "hsl(var(--honey-dark))" }}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      

        {/* PROCESS */}
        <section id="process" className="py-16" style={{ background: "hsl(var(--honey-cream))" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 animate-slide-down">
              <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: "hsl(var(--honey-gold))" }}>
                How We Operate
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "hsl(var(--honey-dark))" }}>
                Our Proven Process
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
                Six pillars that power every Honeyman experience — from sourcing to the last sip.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { num: "01", icon: "🌿", title: "Product Sourcing & R&D", desc: "We don’t just buy ingredients; we curate them. Our dedicated R&D team focuses on premium sourcing and continuous innovation to ensure Honeyman stays ahead of the market in both quality and purity." },
                { num: "02", icon: "📋", title: "Standardized Recipes", desc: "Consistency is our secret ingredient. We’ve developed a refined, sugar-free ecosystem with standardized recipes that ensure the same perfect taste and sweetness in every serving, at every location." },
                { num: "03", icon: "🎓", title: "Staff Training System", desc: "A great brand is built by great people. We provide a structured training program for your team, ensuring that every store delivers the same high-standard Honeyman experience to every guest." },
                { num: "04", icon: "🏪", title: "Outlet Setup Model", desc: "We take the stress out of launching. Our turnkey setup model helps entrepreneurs transition from signing the agreement to opening their doors quickly and confidently." },
                { num: "05", icon: "⚙️", title: "Daily Operations Support", desc: "You are in business for yourself, but not by yourself. We provide ongoing guidance and regular audits to keep your outlet running at peak performance and maintain high operational standards." },
                { num: "06", icon: "😊", title: "Customer Experience Delivery", desc: "We believe in creating fans, not just customers. By obsessing over every touchpoint—from the first greeting to the last sip—we ensure loyal, repeat customers for your business." },
              ].map((p, idx) => (
                <div key={p.num} className="bg-white rounded-2xl border border-amber-100 p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: "linear-gradient(90deg, hsl(var(--honey-amber)), hsl(var(--honey-dark)))" }} />
                  <div className="text-5xl font-black opacity-20" style={{ fontFamily: "inherit", color: "hsl(var(--honey-amber))" }}>
                    {p.num}
                  </div>
                  <div className="text-3xl mt-2">{p.icon}</div>
                  <div className="font-bold text-lg mt-2" style={{ color: "hsl(var(--honey-dark))" }}>
                    {p.title}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section id="philosophy" className="py-16" style={{ background: "linear-gradient(135deg, hsl(var(--honey-cream)), hsl(var(--honey-light)))" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="animate-slide-left">
                <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: "hsl(var(--honey-gold))" }}>
                  Product Philosophy
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "hsl(var(--honey-dark))" }}>
                  Ingredients Behind Every Perfect Cup
                </h2>

                <div className="mt-6 space-y-4">
                  {[
                    { icon: "✨", title: "Premium Ingredients", desc: "Never compromise. Sourcing designed for quality and consistency at scale." },
                    { icon: "🎯", title: "Consistent Taste", desc: "Recipe systems ensure your favourites taste the same every day, every store." },
                    { icon: "📊", title: "Scalable Recipes", desc: "Built for high-volume operations without losing the artisan touch." },
                   
                    { icon: "🛡️", title: "Hygienic Preparation", desc: "Quality-first kitchens and daily checks for safe, satisfying experiences." },
                  ].map((x, idx) => (
                    <div key={x.title} className="flex gap-4 bg-white/70 backdrop-blur border border-white/70 rounded-2xl p-5 hover:translate-x-1 transition transform">
                      <div className="text-2xl flex-shrink-0 mt-1">{x.icon}</div>
                      <div>
                        <div className="font-bold" style={{ color: "hsl(var(--honey-dark))" }}>{x.title}</div>
                        <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{x.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-slide-right">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { src: aboutUsProduct1, alt: "Product 1" },
                    { src: aboutUsProduct2, alt: "Product 2" },
                    { src: aboutUsProduct3, alt: "Product 3" },
                    { src: aboutUsProduct4, alt: "Product 4" },
                  ].map((img, idx) => (
                    <div
                      key={img.alt}
                      className="rounded-3xl shadow-sm border border-white/40 aspect-[4/3] flex items-center justify-center bg-white"
                      style={{ padding: "10px" }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        width={180}
                        height={180}
                        className="object-cover rounded-2xl w-full h-full"
                        draggable={false}
                      />
                    </div>
                  ))}
                  <div
                    className="col-span-2 rounded-3xl shadow-sm border border-white/40 h-72 bg-white"
                  >
                    <img
                      src={aboutUsProduct5}
                      alt="Product 5"
                      width={345}
                      height={100}
                      className="object-cover rounded-2xl w-full h-full"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AvailableOnSection />

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 animate-slide-down">
              <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: "hsl(var(--honey-gold))" }}>
                By The Numbers
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "hsl(var(--honey-dark))" }}>
                Achievements & Social Proof
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: "50+", label: "Media Features" },
                { num: "10+", label: "National Awards" },
                { num: "300+", label: "Press Mentions" },
                { num: "25+", label: "Cities Reached" },
              ].map((s, idx) => (
                <div
                  key={s.label}
                  className="text-center p-8 rounded-3xl bg-[hsl(var(--honey-cream))] border border-amber-100 hover:-translate-y-1 transition-transform shadow-sm"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <div className="text-4xl md:text-5xl font-black" style={{ color: "hsl(var(--honey-dark))" }}>
                    {s.num}
                  </div>
                  <div className="text-sm font-bold mt-3 text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              {[
                "🏆 Best Honey in the World (Apimondia)",
                "🌿 Best Organic Honey (BIOFACH)",
                "🚀 Largest Honey Exporter (APEDA)",
                "💎 Top 100 D2C Brand (2023)",
              ].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center rounded-full px-5 py-2 text-sm font-bold bg-gradient-to-r from-[hsl(var(--honey-amber))] to-[hsl(var(--honey-dark))] text-white shadow-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PRESENCE */}
        <section
          id="presence"
          className="py-16 relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(var(--honey-cream) / 0.6), hsl(var(--honey-light) / 0.86)), url(${locationUpdateBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10 animate-slide-down">
              <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: "hsl(var(--honey-gold))" }}>
                Growth & Presence
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "hsl(var(--honey-dark))" }}>
                Spreading Across India
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
                From metros to Tier-2 cities — Honeyman is where your customers are.
              </p>
            </div>

            <div className="relative w-[340px] h-[340px] mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-[hsl(var(--honey-amber))]/60 animate-pulse" style={{ animationDelay: "0s", animationDuration: "2.4s" }} />
              <div className="absolute inset-[30px] rounded-full border-2 border-amber-500/50 animate-pulse" style={{ animationDelay: "0.5s", animationDuration: "2.4s" }} />
              <div className="absolute inset-[65px] rounded-full border-2 border-amber-950/30 animate-pulse" style={{ animationDelay: "1s", animationDuration: "2.4s" }} />
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[140px] h-[140px] flex flex-col items-center justify-center text-5xl shadow-lg"
                style={{ background: "#fb9c0c" }}
              >
                🗺️
                <span className="mt-2 text-xs font-bold tracking-widest" style={{ color: "hsl(var(--honey-dark))", background: "rgba(255,255,255,0.6)", borderRadius: 999, padding: "4px 10px" }}>
                  180+ OUTLETS
                </span>
              </div>
            </div>

            <div className="mt-10 city-carousel" aria-label="Honeyman cities">
              <div className="city-carousel-track">
                {[...cities, ...cities].map((c, idx) => (
                  <span
                    key={`${c}-${idx}`}
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold bg-white border border-amber-200 text-[hsl(var(--honey-dark))] whitespace-nowrap"
                  >
                    <span className="w-2 h-2 rounded-full bg-[hsl(var(--honey-amber))]" />
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FRANCHISE */}
        <section
          id="franchise"
          className="py-16 relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(18, 11, 2, 0.85) 0%, rgba(70, 35, 7, 0.78) 50%, rgba(28, 16, 5, 0.82) 100%), url(${aboutBusinessBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-left">
                <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: "hsl(var(--honey-cream))" }}>
                  Franchise Opportunity
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">
                  Build Your Business with Honeyman
                </h2>
                <p className="text-white/70 mt-4 leading-relaxed">
                  Join a proven ecosystem with strong unit economics, full operational support, and a brand built on purity.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-3">
                  {[
                    "✅ Proven business model with trusted quality",
                    "💰 Strong unit economics – ROI-driven approach",
                    "🎓 Full training & onboarding support",
                    "📦 Ingredient & supply chain support",
                    "📱 Digital marketing & brand support",
                  ].map((x) => (
                    <div key={x} className="bg-white/7 border border-white/10 rounded-2xl p-4 flex items-start gap-3">
                      <div className="text-lg mt-0.5">{x.split(" ")[0]}</div>
                      <div className="text-white/90 font-bold text-sm leading-relaxed">{x.replace(x.split(" ")[0] + " ", "")}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://honeymanfranchise.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-7 py-3 rounded-full font-bold transition shadow-lg"
                    style={{ background: "#fb9c0c", color: "#000" }}
                  >
                    Apply for Franchise
                  </a>
                  <a
                    href="https://honeymanstore.com/wp-content/uploads/2026/04/Honeyman_Franchise.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-7 py-3 rounded-full font-bold transition border"
                    style={{ background: "transparent", color: "hsl(var(--honey-cream))", borderColor: "rgba(255,255,255,0.35)" }}
                  >
                    Download Brochure
                  </a>
                </div>
              </div>

              <div className="animate-slide-right">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: "₹4-30L+", label: "Investment Range" },
                    { num: "21-30 Days", label: "Outlet Setup Time" },
                    { num: "15-18 Months", label: "ROI Timeline" },
                    { num: "24/7", label: "Marketing Support" },
                    { num: "24/7", label: "Operations Support" },
                    { num: "180+", label: "Stores Across India" },
                  ].map((m) => (
                    <div key={m.label} className="bg-white/7 border border-white/10 rounded-2xl p-5 text-center">
                      <div className="text-2xl font-black" style={{ color: "  #fb9c0c" }}>
                        {m.num}
                      </div>
                      <div className="text-xs font-bold mt-2 text-white">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MEDIA COVERAGE (sample-style tiles) */}
        <section id="media" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 animate-slide-down">
              <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: "hsl(var(--honey-gold))" }}>
                Media Coverage
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "hsl(var(--honey-dark))" }}>
                As Seen In
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
                Trusted and featured by India's respected media houses.
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
              {mediaCoverageTiles.map((item, idx) => {
                const tile = (
                  <div className="media-tile bg-[hsl(var(--honey-cream))] border border-amber-100 rounded-2xl sm:rounded-3xl h-20 sm:h-24 flex items-center justify-center px-2 sm:px-4 py-2 sm:py-3">
                    {item.logoSrc ? (
                      <img
                        src={item.logoSrc}
                        alt={item.alt}
                        className="max-w-full max-h-9 sm:max-h-10 w-auto object-contain opacity-90 hover:opacity-100 transition"
                      />
                    ) : (
                      <div className="text-center font-bold text-[10px] sm:text-xs text-muted-foreground leading-snug px-1">
                        Logo {idx + 1}
                      </div>
                    )}
                  </div>
                );

                return item.prUrl ? (
                  <a
                    key={`media-${idx}`}
                    href={item.prUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--honey-gold))] rounded-2xl sm:rounded-3xl"
                  >
                    {tile}
                  </a>
                ) : (
                  <div key={`media-${idx}`}>{tile}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* DELIVERY (sample-style platforms; adapted to store availability) */}
        {/* <section id="delivery" className="py-16 bg-white text-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 animate-slide-down">
              <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: "hsl(var(--honey-gold))" }}>
                Order & Visit
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "hsl(var(--honey-dark))" }}>
                Available at Your Favourite Places
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
                Loved by customers nationwide — find Honeyman in stores and order through your preferred channels.
              </p>
            </div>

            <div className="flex justify-center gap-4 flex-wrap">
              {[
                { icon: "🏪", name: "Honeyman Stores", sub: "160+ Outlets Nationwide" },
                { icon: "🛒", name: "Online Ordering", sub: "Easy purchase & quick delivery" },
                { icon: "🎁", name: "Gifting Partners", sub: "Curated sugar-free gifting" },
              ].map((p) => (
                <div key={p.name} className="bg-[hsl(var(--honey-cream))] border border-amber-100 rounded-3xl p-6 w-full sm:w-80 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-4xl">{p.icon}</div>
                    <div className="text-left">
                      <div className="font-bold text-lg" style={{ color: "hsl(var(--honey-dark))" }}>
                        {p.name}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{p.sub}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-muted-foreground font-semibold">
              Loved by customers across platforms
            </div>
          </div>
        </section> */}
        {/* AWARDS & RECOGNITION */}
        <section id="awards" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 animate-slide-down">
              <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: "hsl(var(--honey-gold))" }}>
                Awards & Recognition
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "hsl(var(--honey-dark))" }}>
                Celebrated Across Markets
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
                Milestones and recognitions that reflect our commitment to quality, trust, and growth.
              </p>
            </div>

            <div className="awards-carousel" aria-label="Awards image carousel">
              <div className="awards-carousel-track">
                {[...awardImages, ...awardImages].map((img, idx) => (
                  <div
                    key={`${img.src}-${idx}`}
                    className="w-[240px] h-[200px] shrink-0 rounded-2xl border border-amber-100 bg-[hsl(var(--honey-cream))] p-2 shadow-sm"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover rounded-xl"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* FINAL CTA */}
        <section
          id="cta-final"
          className="py-32 md:py-32 text-center relative overflow-hidden "
          style={{
            background: "#fb9c0c",
          }}
        >
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-white" style={{ color: "white" }}>
              Let's Grow Together
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              Start your journey with a brand built on purity — and still expanding.
            </p>
            <div className="mt-8 flex items-center justify-center">
              <a
                href="#franchise"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full font-black transition shadow-lg"
                style={{ background: "hsl(var(--honey-dark))", color: "hsl(var(--honey-cream))" }}
              >
                Get Started &rarr;
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
