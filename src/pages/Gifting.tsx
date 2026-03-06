import React from "react";
import { Heart, Briefcase, Sparkles, Leaf, Eye, ShoppingBag, Gift } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/gifting/Artboard 1.webp";
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
import basketImg from "@/assets/gifting/basket.webp";
import bottlesImg from "@/assets/gifting/bottles.webp";
import boxesImg from "@/assets/gifting/boxes.webp";
import roseBackground from "@/assets/gifting/rose-background.webp";
import rosePetals from "@/assets/gifting/HOLI-BG.webp";
import giftBag from "@/assets/gifting/honeyman-packaging.webp";
import signaturePackaging from "@/assets/gifting/Artboard 1 copy.webp";
const Gifting = () => {
  const { t } = useLanguage();

  const giftingCategories = [
    { id: 1, name: "Wedding", title: t("giftingPage.categories.wedding.title"), image: weddingCategory, icon: Heart },
    { id: 2, name: "Corporate", title: t("giftingPage.categories.corporate.title"), image: corporateCategory, icon: Briefcase },
    { id: 3, name: "Celebration", title: t("giftingPage.categories.celebration.title"), image: celebrationCategory, icon: Sparkles },
    { id: 4, name: "Wellness", title: t("giftingPage.categories.wellness.title"), image: wellnessCategory, icon: Leaf },
  ];

  const giftBoxImages = [giftBox1, giftBox2, giftBox3, giftBox4, giftBox5];

  const sweetsCategories = [
    { id: 1, name: t("giftingPage.sweetsCollection.baklawa.name"), description: t("giftingPage.sweetsCollection.baklawa.description"), image: baklawaRange },
    { id: 2, name: t("giftingPage.sweetsCollection.fusion.name"), description: t("giftingPage.sweetsCollection.fusion.description"), image: fusionSweets },
  ];

  const shopUrl = "https://honeymanstore.com/product-category/gifting/";

  return (
    <div className="min-h-screen bg-[#f5f5f5] gifting-page">
      <Header />

      {/* ========== CAROUSEL (gifting.html #myCarousel) ========== */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "85vh" }}>
        <div className="absolute inset-0">
          <img src={heroImage} alt="Gifting" className="w-full h-full object-cover" style={{ objectPosition: "center 40%" }} />
          <div className="absolute inset-0 " />
        </div>
        {/* <div className="absolute top-0 left-0 right-0 py-6 md:py-20 px-6 mt-2 carousel-caption">
          <h3 className="text-white font-semibold tracking-[0.25em] uppercase text-sm md:text-base mb-1">
            {t("giftingPage.heroBadge")}
          </h3>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-2 leading-tight" style={{ fontFamily: "Abril Fatface, Cinzel, serif" }}>
            {t("giftingPage.heroTitle")}
            <span className="block italic mt-1">{t("giftingPage.heroTitleHighlight")}</span>
          </h1>
          <div className="w-20 h-0.5 bg-white/90 mx-auto my-4 line" />
          <p className="text-white/95 text-sm md:text-base max-w-xl mx-auto mb-6">
            {t("giftingPage.heroDescription")}
          </p>
          <a href={shopUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-white text-[#2a1810] font-medium uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors">
            Shop now
          </a>
        </div> */}
      </section>


      <section className="wedding bg-[#f0eeeb] pt-12 pb-20 md:pb-24" id="showcase-3">
        <h1  className="text-3xl md:text-4xl text-[#2a1810] mb-6 leading-tight text-center" style={{ fontFamily: "'Playfair Display', serif" }} >
          {t("giftingPage.categories.title")}
        </h1>
        <h2 className="text-center text-[#5a4a42] text-lg mb-8 md:mb-12">— {t("giftingPage.categories.subtitle")} —</h2>
        <div className="gallery">
          <figure>
            {/* Reduce empty space by shrinking or removing unneeded wrappers and margins */}
            <div className="container wedding-content max-w-5xl mx-auto px-4 md:px-8 py-2 md:py-4 relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {giftingCategories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <div
                      key={cat.id}
                      className="product-wedding bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow rounded-lg"
                    >
                      <div className="product-image-wedding relative overflow-hidden aspect-[4/5] group">
                        <a
                          href={shopUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </a>
                        {/* <div className="product-icon-wedding absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 px-2 py-1 rounded">
                        
                        </div> */}
                      </div>
                      <div className="product-title-wedding p-3 text-center">
                        <h5 className="font-medium text-[#2a1810] m-0 leading-tight text-sm md:text-base">
                          <a
                            href={shopUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {cat.title}
                          </a>
                        </h5>
                        <div className="flex justify-center mt-1 text-[#dd385d]">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </figure>
        </div>
      </section>
     
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Left: full-bleed image */}
          <div className="h-[500px] lg:h-auto">
            <img src={giftBag} alt="Honeyman Gift Bag" className="w-full h-full object-cover" />
          </div>
          {/* Right: text content */}
          <div className="flex items-center bg-[#faf7f4] px-8 md:px-16 py-16">
            <div className="max-w-lg">
              <p className="uppercase tracking-[0.3em] text-[#b8860b] text-xs mb-6">who we are ?</p>
              <h2 className="text-3xl md:text-4xl text-[#2a1810] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Art of Gifting
              </h2>
              <p className="text-[#5a4a42] leading-relaxed mb-6 text-sm md:text-base">
                At Honeyman, we believe every gift should tell a story — a story of purity, tradition, and heartfelt warmth. Our curated gift collections bring together the finest honey, artisan sweets, and premium packaging to create unforgettable experiences for every occasion.
              </p>
              <p className="text-[#5a4a42] leading-relaxed mb-8 text-sm md:text-base">
                From intimate weddings to corporate celebrations, we craft each box with meticulous attention to detail, ensuring your gesture leaves a lasting impression.
              </p>
              <div className="flex items-center gap-4">
                <img src={giftBox5} alt="founder" className="w-14 h-14 rounded-full object-cover border-2 border-[#b8860b]/30" />
                <div>
                  <h4 className="text-[#2a1810] font-semibold text-sm">Honeyman</h4>
                  <span className="text-[#5a4a42] text-xs">Premium Gift Curators</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== WHO (gifting.html #showcase .who) – What We Offer ========== */}
      {/* <section className="who bg-[#fafafa] py-16 md:py-24" id="showcase">
        <div className="gallery max-w-6xl mx-auto px-6">
          <figure className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative overflow-hidden order-2 lg:order-1">
              <img src={bottlesImg} alt="What we offer" className="w-full h-auto object-cover max-h-[500px]" />
            </div>
            <div className="order-1 lg:order-2">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#2a1810] mb-1" style={{ fontFamily: "Abril Fatface, Cinzel, serif" }}>
                {t("giftingPage.whatWeOffer.title")}
              </h1>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#2a1810]/40 -mt-2 mb-6 h2" style={{ fontFamily: "Abril Fatface, Cinzel, serif" }}>
                {t("giftingPage.whatWeOffer.title")}
              </h1>
              <p className="text-[#5a4a42] text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                {t("giftingPage.whatWeOffer.subtitle")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: t("giftingPage.whatWeOffer.honeyBottles.title"), image: bottlesImg },
                  { title: t("giftingPage.whatWeOffer.giftBaskets.title"), image: basketImg },
                  { title: t("giftingPage.whatWeOffer.sweetBoxes.title"), image: boxesImg },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 media">
                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#dd385d]/30">
                      <img src={item.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-medium text-[#2a1810] text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </figure>
        </div>
      </section> */} 

<section className="relative h-[45vh] min-h-[350px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={signaturePackaging} alt="Sale" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#2a1810]/50" />
        </div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-6xl text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Signature Packaging
          </h2>
          <p className="text-white/80 max-w-lg mb-8 text-sm md:text-base">
            Every gift wrapped with elegance, crafted to create lasting impressions
          </p>
          <a href="https://honeymanstore.com/product-category/gifting/" className="px-10 py-3 bg-white text-[#2a1810] text-xs uppercase tracking-widest hover:bg-[#b8860b] hover:text-white transition-colors">
            Shop now
          </a>
        </div>
      </section>

      {/* ========== COLLECTION (gifting.html #showcase-2 .container.collection) ========== */}
      <section className="collection container max-w-7xl mx-auto px-6 py-16 md:py-24 bg-white" id="showcase-2">
        <h1  className="text-3xl md:text-4xl text-[#2a1810] mb-6 leading-tight text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
          {t("giftingPage.giftBoxesTitle")}
        </h1>
        <h2 className="text-center text-[#5a4a42] text-lg mb-10">— {t("giftingPage.giftBoxesSubtitle")} —</h2>
        <div className="gallery">
          <figure>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* banner-collec: one big image + overlay text */}
              <div className="banner-collec relative overflow-hidden min-h-[400px] md:min-h-[520px]">
                <img src={giftBox1} alt="Gift collection" className="w-full h-full object-cover absolute inset-0" />
                <div className="absolute inset-0 bg-[#2a1810]/40 flex flex-col justify-end p-8">
                  <h3 className="text-white font-semibold tracking-widest uppercase text-sm mb-1">Gifting</h3>
                  <h1 className="font-display text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: "Abril Fatface, Cinzel, serif" }}>Gift Boxes</h1>
                  <a href="https://honeymanstore.com/product-category/gifting/" target="_blank" rel="noopener noreferrer" className="inline-block w-fit px-6 py-2.5 bg-white text-[#2a1810] font-medium uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors">
                    Shop now
                  </a>
                </div>
              </div>
              {/* 2x2 product-collection */}
              <div className="grid grid-cols-2 gap-4">
                {[giftBox2, giftBox3, giftBox4, giftBox5].map((src, index) => (
                  <div key={index} className="product-collection group">
                    <div className="product-image-collec relative overflow-hidden aspect-square mb-3">
                      <a href="https://honeymanstore.com/product-category/gifting/" target="_blank" rel="noopener noreferrer">
                        <img src={src} alt={`Gift ${index + 2}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                      </a>
                      {/* <div className="product-icon-collec absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 px-3 py-2">
                        <a href="https://honeymanstore.com/product-category/gifting/" target="_blank" rel="noopener noreferrer" className="text-[#2a1810]"><Eye className="w-4 h-4" /></a>
                        <a href="https://honeymanstore.com/product-category/gifting/" target="_blank" rel="noopener noreferrer" className="text-[#2a1810]"><ShoppingBag className="w-4 h-4" /></a>
                      </div> */}
                    </div>
                    <div className="product-title-collec">
                      <h5 className="font-medium text-[#2a1810] text-sm"><a href="https://honeymanstore.com/product-category/gifting/" target="_blank" rel="noopener noreferrer">Gift Box</a></h5>
                      <a href="https://honeymanstore.com/product-category/gifting/" target="_blank" rel="noopener noreferrer" className="text-[#dd385d] text-xs uppercase tracking-wider mt-1 inline-block">Shop now</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </figure>
        </div>
      </section>

      {/* ========== WEDDING (gifting.html #showcase-3 .wedding) – Gift Categories ========== */}
     

      {/* ========== HOLIDAY (gifting.html #showcase-4 .holiday) – Sweets ========== */}
      <section className="py-20 bg-[#faf7f4]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl text-[#2a1810] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Premium Sweets Collection
            </h2>
            <p className="text-[#5a4a42] text-sm">— Handcrafted with pure honey and the finest ingredients —</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {sweetsCategories.map((cat) => (
              <div key={cat.id} className="group relative overflow-hidden rounded-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1810]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{cat.name}</h3>
                  <p className="text-white/80 text-sm mb-4">{cat.description}</p>
                  <a href="https://honeymanstore.com/product-category/gifting/" className="inline-block px-6 py-2.5 bg-white text-[#2a1810] text-xs uppercase tracking-widest hover:bg-[#b8860b] hover:text-white transition-colors">
                    Shop now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== COUNT (gifting.html .count) – CTA ========== */}
      <section className="py-20 bg-[#2a1810]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Choose Honeyman Gifts
            </h2>
            <p className="text-white/50 text-sm">— Every gift tells a story of purity, tradition, and warmth —</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Crafted with Love", desc: "Each gift box curated with attention to every detail" },
              { icon: Gift, title: "Premium Packaging", desc: "Elegant boxes that make unwrapping special" },
              { icon: Leaf, title: "100% Pure Honey", desc: "Only the finest natural honey from trusted sources" },
              { icon: Sparkles, title: "Fully Customizable", desc: "Personalize with custom messages and selections" },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 border border-[#b8860b]/40 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#b8860b]/10 transition-colors">
                  <item.icon className="w-7 h-7 text-[#b8860b]" />
                </div>
                <h3 className="text-white text-sm font-medium mb-2">{item.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / Newsletter Style ── */}
      <section className="py-20 bg-[#faf7f4]">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl text-[#2a1810] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Create the Perfect Gift?
          </h2>
          <p className="text-[#5a4a42] mb-8 text-sm">
            Contact us for bulk orders, custom packaging, and personalized gift solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contact-us" className="px-10 py-3 bg-[#2a1810] text-white text-xs uppercase tracking-widest hover:bg-[#1a0e08] transition-colors">
              Get a Quote
            </a>
            <a href="https://honeymanstore.com/wp-content/uploads/2025/12/HoneymanGifting-Catalog-1_compressed.pdf" className="px-10 py-3 border border-[#2a1810] text-[#2a1810] text-xs uppercase tracking-widest hover:bg-[#2a1810] hover:text-white transition-colors">
              Download Catalogue
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gifting;