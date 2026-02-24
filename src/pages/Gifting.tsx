import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Gift, Heart, Briefcase, Sparkles, Leaf, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/gifting/Artboard 1 copy.webp";
import weddingCategory from "@/assets/gifting/wedding-category.webp";
import corporateCategory from "@/assets/gifting/corporate-category.webp";
import celebrationCategory from "@/assets/gifting/celebration-category.webp";
import wellnessCategory from "@/assets/gifting/wellness-category.webp";
import baklawaRange from "@/assets/gifting/baklawa-range.webp";
import fusionSweets from "@/assets/gifting/fusion-sweets.webp";
import giftBox1 from "@/assets/gifting/gift-box.webp";
import giftBox2 from "@/assets/gifting/gifting-3.webp";
import giftBox3 from "@/assets/gifting/gifting-2.webp";
import giftBox4 from "@/assets/gifting/gifting-1.webp";
import giftBox5 from "@/assets/gifting/gift-4box.webp";
import giftBag from "@/assets/gifting/honeyman-packaging.webp";


import holiDehan from "@/assets/calendar/holi-dehan.webp";
import holi from "@/assets/calendar/holi.webp";

import gudiPadwa from "@/assets/calendar/GUDI-PADWA.webp";
import ramdanMubarak from "@/assets/calendar/ramdan mubarak.webp";

import basketImg from "@/assets/gifting/basket.webp";
import bottlesImg from "@/assets/gifting/bottles.webp";
import boxesImg from "@/assets/gifting/boxes.webp";
import roseBackground from "@/assets/gifting/rose-background.webp";
import rosePetals from "@/assets/gifting/HOLI-BG.webp";


const Gifting = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const giftingCategories = [
    {
      id: 1,
      name: "Wedding",
      title: t("giftingPage.categories.wedding.title"),
      subtitle: t("giftingPage.categories.wedding.subtitle"),
      image: weddingCategory,
      icon: Heart,
    },
    {
      id: 2,
      name: "Corporate",
      title: t("giftingPage.categories.corporate.title"),
      subtitle: t("giftingPage.categories.corporate.subtitle"),
      image: corporateCategory,
      icon: Briefcase,
    },
    {
      id: 3,
      name: "Celebration",
      title: t("giftingPage.categories.celebration.title"),
      subtitle: t("giftingPage.categories.celebration.subtitle"),
      image: celebrationCategory,
      icon: Sparkles,
    },
    {
      id: 4,
      name: "Wellness",
      title: t("giftingPage.categories.wellness.title"),
      subtitle: t("giftingPage.categories.wellness.subtitle"),
      image: wellnessCategory,
      icon: Leaf,
    },
  ];

  const giftBoxImages = [giftBox1, giftBox2, giftBox3, giftBox4,giftBox5];

  const sweetsCategories = [
    {
      id: 1,
      name: t("giftingPage.sweetsCollection.baklawa.name"),
      description: t("giftingPage.sweetsCollection.baklawa.description"),
      image: baklawaRange,
    },
    {
      id: 2,
      name: t("giftingPage.sweetsCollection.fusion.name"),
      description: t("giftingPage.sweetsCollection.fusion.description"),
      image: fusionSweets,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % giftingCategories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % giftingCategories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + giftingCategories.length) % giftingCategories.length);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] relative">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden h-[60vh] min-h-[500px] sm:h-[75vh] sm:min-h-[650px] md:h-[75vh] md:min-h-[800px] lg:h-[85vh] lg:min-h-[50px]">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={heroImage} 
            alt="Gifting Collection" 
            className="w-full h-full object-cover"
            style={{ 
              objectPosition: 'center 40%'
            }}
          />
          <div className="absolute inset-0 " />
        </div>
        {/* Happy Valentine Day - slightly center right */}
        {/* <div className="absolute right-[10%] sm:right-[12%] md:right-[15%] lg:right-[18%] xl:right-[20%] top-[60%] -translate-y-1/2 z-10 text-right">
          <div
            className="text-white font-medium tracking-wide leading-tight"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">The Season</span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">  of Love is Here</span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"></span>
       
          </div>
          <p className="text-white/90 text-xl sm:text-sm mt-3 sm:mt-4 max-w-[180px] sm:max-w-[220px] ml-auto italic font-sans">
             happy valentine's week!
          </p>
        </div> */}
        {/* <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl pt-20">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-primary/60"></div>
              <span className="text-primary font-medium tracking-widest uppercase text-sm">{t("giftingPage.heroBadge")}</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              {t("giftingPage.heroTitle")}
              <span className="block text-primary italic">{t("giftingPage.heroTitleHighlight")}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              {t("giftingPage.heroDescription")}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-primary text-white rounded-lg font-medium uppercase tracking-wider text-sm hover:bg-primary/90 transition-all flex items-center gap-3" onClick={() => window.open('https://honeymanstore.com/product-category/gifting/', '_blank')}>
                <Gift className="w-5 h-5" />
                {t("giftingPage.exploreCollection")}
              </button>
           
            </div>
          </div>
        </div> */}
        
        {/* Decorative element */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#faf8f5] to-transparent"></div> */}
      </section>

      {/* Holi Promotional Banner */}
      <section className="py-4 relative overflow-hidden bg-gradient-to-r from-[#87CEEB] via-[#ffb6c1] to-[#fef08a]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-10 text-3xl animate-pulse">🎨</div>
          <div className="absolute top-0 right-10 text-3xl animate-pulse">🌈</div>
          <div className="absolute top-1 left-1/4 text-2xl">🪷</div>
          <div className="absolute top-1 right-1/4 text-2xl">🌸</div>
          <div className="absolute bottom-1 left-1/3 text-2xl">🎁</div>
          <div className="absolute bottom-1 right-1/3 text-2xl">🍯</div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-6">
            <div className="hidden md:flex items-center gap-2 bg-white/90 px-4 py-2 rounded-lg border border-[#c2410c]/30 shadow-sm">
              <span className="text-amber-700 font-bold text-sm uppercase tracking-wider">Free Delivery</span>
            </div>
            <p className="text-center font-medium text-sm md:text-base text-[#1e293b]">
              🎨 <span className="font-bold">Celebrate Holi with Sweet Gifts</span> — <span className="font-cinzel text-[#7c2d12]">Spread colours of joy with honey &amp; sweets. Free delivery</span> on orders above ₹999
            </p>
            <div className="hidden md:flex items-center gap-2 bg-white/90 px-4 py-2 rounded-lg border border-[#c2410c]/30 shadow-sm">
              <span className="text-amber-700 font-bold text-sm uppercase tracking-wider">Free Delivery</span>
            </div>
          </div>
        </div>
      </section>

      

      {/* Festival & occasion calendar – fixed labels (no language switch) */}
      <section className="py-16 bg-[#faf8f5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-[#2a1810] mb-3">
              Festivals &amp; Occasions
            </h2>
            <p className="text-[#5a4a42]">
              Sweeten the moments that matter
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { date: "03", month: "MAR", ord: "RD", name: "Holika Dahan", image: holiDehan, color: "from-amber-500 to-orange-500" },
              { date: "04", month: "MAR", ord: "TH", name: "Holi", image: holi, color: "from-amber-500 to-orange-500" },
              { date: "19", month: "MAR", ord: "TH", name: "Gudi Padwa", image: gudiPadwa, color: "from-amber-500 to-amber-600" },
              { date: "20", month: "MAR", ord: "TH", name: "Ramadan Mubarak", image: ramdanMubarak, color: "from-amber-500 to-amber-600" },
            ].map((celebration, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`absolute top-0 left-0 right-0 bg-gradient-to-r ${celebration.color} text-white text-center py-2 text-xs font-bold uppercase tracking-wider`}>
                  <span className="text-lg font-cinzel">{celebration.date}</span>
                  <sup className="text-[10px] ml-0.5 font-cinzel">{celebration.ord}</sup>
                  <span className="ml-1 font-cinzel">{celebration.month}</span>
                </div>
                <div className="pt-14 pb-4 px-4">
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#f5f0eb] to-[#e8e0d8] rounded-xl mb-4 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={celebration.image}
                      alt={celebration.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-cinzel text-[#2a1810] text-center text-sm md:text-base">
                    {celebration.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* What We Offer */}
      <section 
          className="py-20 relative bg-cover  bg-no-repeat"
          style={{ backgroundImage: `url(${roseBackground})` }}
        >
        <div className="absolute inset-0 bg-[#faf8f5]/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-[#dd385d]"></div>
              <Star className="w-5 h-5 text-[#dd385d]" />
              <div className="h-px w-16 bg-[#dd385d]"></div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#2a1810] mb-4">
              {t("giftingPage.whatWeOffer.title")}
            </h2>
            <p className="text-[#5a4a42] max-w-2xl mx-auto text-lg">
              {t("giftingPage.whatWeOffer.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t("giftingPage.whatWeOffer.honeyBottles.title"), desc: t("giftingPage.whatWeOffer.honeyBottles.desc"), image: bottlesImg },
              { title: t("giftingPage.whatWeOffer.giftBaskets.title"), desc: t("giftingPage.whatWeOffer.giftBaskets.desc"), image: basketImg },
              { title: t("giftingPage.whatWeOffer.sweetBoxes.title"), desc: t("giftingPage.whatWeOffer.sweetBoxes.desc"), image: boxesImg },
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#f5f0eb] to-[#e8e0d8] flex items-center justify-center relative overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[#2a1810]/0 group-hover:bg-[#2a1810]/10 transition-colors duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-2xl text-[#2a1810] mb-2">{item.title}</h3>
                  <p className="text-[#5a4a42] mb-4">{item.desc}</p>
                  {/* <button className="text-primary font-medium uppercase tracking-wider text-sm hover:text-primary/80 transition-colors">
                    View Collection →
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gift Boxes Gallery */}
      <section className="py-16 bg-[#faf8f5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-[#dd385d]"></div>
              <Star className="w-5 h-5 text-[#dd385d]" />
              <div className="h-px w-16 bg-[#dd385d]"></div>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-[#2a1810] mb-4">
              {t("giftingPage.giftBoxesTitle")}
            </h2>
            <p className="text-[#5a4a42] max-w-2xl mx-auto text-base">
              {t("giftingPage.giftBoxesSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left: Large image */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={giftBoxImages[0]} 
                  alt="Gift Box 1"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1810]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Right: 2x2 grid with 4 images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={giftBoxImages[1]} 
                    alt="Gift Box 2"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a1810]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={giftBoxImages[2]} 
                    alt="Gift Box 3"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a1810]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={giftBoxImages[3]} 
                    alt="Gift Box 4"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a1810]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={giftBoxImages[4]}
                    alt="Gift Box 5"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a1810]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* Gift Categories */}
      <section 
        className="py-24 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${rosePetals})` }}
      >
        <div className="absolute inset-0 bg-[#faf8f5]/60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#dd385d] font-medium tracking-widest uppercase text-sm">{t("giftingPage.categories.badge")}</span>
            <h2 className="font-display text-4xl md:text-5xl text-[#2a1810] mt-4 mb-4">
              {t("giftingPage.categories.title")}
            </h2>
            <p className="text-[#5a4a42] max-w-2xl mx-auto">
              {t("giftingPage.categories.subtitle")}
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {giftingCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={category.id} className="min-w-full px-2 sm:px-4">
                      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden group rounded-2xl bg-[#2a1810]/10">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="w-full h-full object-contain sm:object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2a1810]/40 via-[#2a1810]/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                          <div className="flex items-center gap-3 mb-4">
                            {/* <div className="w-12 h-12 bg-primary/90 flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div> */}
                            <div className="h-px flex-1 bg-white/30"></div>
                          </div>
                        
                          <p className="text-white/80 text-lg mb-6">{category.subtitle}</p>
                          {/* <button className="px-8 py-3 bg-white text-[#2a1810] font-medium uppercase tracking-wider text-sm hover:bg-primary hover:text-white transition-colors">
                            Explore {category.name}
                          </button> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 border border-[#2a1810]/20 flex items-center justify-center text-[#2a1810] hover:bg-[#dd385d] hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {giftingCategories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 transition-all duration-300 ${
                      index === currentSlide 
                        ? "bg-[#dd385d] w-12" 
                        : "bg-[#2a1810]/20 w-6 hover:bg-[#2a1810]/40"
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 border border-[#2a1810]/20 flex items-center justify-center text-[#2a1810] hover:bg-[#dd385d] hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Gift Bag Banner */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={giftBag} 
            alt="Honeyman Gift Bag" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2a1810]/40" />
        </div>
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center text-center">
          <div>
            <h2 className="font-display text-4xl md:text-6xl text-white mb-6">
              {t("giftingPage.signaturePackaging.title")}
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-xl mx-auto mb-8">
              {t("giftingPage.signaturePackaging.description")}
            </p>
            <button className="px-10 py-4 bg-[#710002] text-white  rounded-xl font-medium uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors" onClick={() => window.open('https://honeymanstore.com/shop', '_blank')}>
              {t("giftingPage.signaturePackaging.button")}
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-gradient-to-r from-[#87CEEB] via-[#ffb6c1] to-[#710002]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              {t("giftingPage.whyChoose.title")}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t("giftingPage.whyChoose.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: t("giftingPage.whyChoose.features.1.title"), desc: t("giftingPage.whyChoose.features.1.desc") },
              { icon: Gift, title: t("giftingPage.whyChoose.features.2.title"), desc: t("giftingPage.whyChoose.features.2.desc") },
              { icon: Leaf, title: t("giftingPage.whyChoose.features.3.title"), desc: t("giftingPage.whyChoose.features.3.desc") },
              { icon: Sparkles, title: t("giftingPage.whyChoose.features.4.title"), desc: t("giftingPage.whyChoose.features.4.desc") },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 border border-[#dd385d]/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#dd385d]/10 transition-colors">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display text-xl text-white mb-3">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sweets Collection */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-[#dd385d]"></div>
              <span className="text-[#dd385d] font-medium tracking-widest uppercase text-sm">{t("giftingPage.sweetsCollection.badge")}</span>
              <div className="h-px w-16 bg-[#dd385d]"></div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#2a1810] mb-4">
              {t("giftingPage.sweetsCollection.title")}
            </h2>
            <p className="text-[#5a4a42] max-w-2xl mx-auto">
              {t("giftingPage.sweetsCollection.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sweetsCategories.map((category) => (
              <div 
                key={category.id} 
                className="group relative overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a1810]/90 via-[#2a1810]/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-2">{category.name}</h3>
                  <p className="text-white/80 mb-6">{category.description}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#87CEEB] via-[#ffb6c1] to-[#fef08a]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-[#83171a] mb-6">
            {t("giftingPage.ctaTitle")}
          </h2>
          <p className="text-[#83171a]/90 max-w-xl mx-auto mb-10 text-lg">
            {t("giftingPage.ctaDescription")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-4 bg-white text-[#8e1534] rounded-xl font-medium uppercase tracking-wider text-sm hover:bg-white/90 transition-colors" onClick={() => window.open('/contact-us', '_blank')}>
              {t("giftingPage.getQuote")}
            </button>
            <button className="px-10 py-4 border-2 border-white text-white rounded-xl font-medium uppercase tracking-wider text-sm hover:bg-white/10 transition-colors" onClick={() => window.open('https://honeymanstore.com/wp-content/uploads/2025/12/HoneymanGifting-Catalog-1_compressed.pdf', '_blank')}>
              {t("giftingPage.downloadCatalogue")}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gifting;
