import Bee from "@/components/Bee";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

// Product images
import himalayan from "@/assets/Products/himalayan-honey.webp";
import vantulsi from "@/assets/van-tulsi-honey.webp";
import blackForest from "@/assets/Products/black-forest-honey.webp";
import honeyBanner from "@/assets/Products/honey-banner.webp";
import jamsBanner from "@/assets/Products/jams-banner.webp";
import sauceBanner from "@/assets/Products/sauces-banner.webp";
import bbqSauce from "@/assets/Products/BBQ-sauce.webp";
import tomatoKetchup from "@/assets/Products/tamato-ketchup.webp";
import kalonjiSauce from "@/assets/Products/kalonji-sauce.webp";
import strawberry from "@/assets/Products/strawberry.webp";
import orangeJam from "@/assets/Products/orange-jam.webp";
import pineapple from "@/assets/Products/pineapple.webp";
import amla from "@/assets/Products/amla-tonic.webp";
import lemon from "@/assets/Products/lemon-tonic.webp";
import tulsi from "@/assets/Products/tulsi-tonic.webp";
import ginger from "@/assets/Products/ginger-kahwa.webp";
import badam from "@/assets/Products/Badam-kahwa.webp";
import kahwaBanner from "@/assets/Products/kahwa-banner.webp";
import kesar from "@/assets/Products/kesar-kahwa.webp";
import heroBanner from "@/assets/Products/Product_banner.webp";
import meliferaBanner from "@/assets/Products/melifera-banner.webp";
import sheaBodyButter from "@/assets/Products/Shea & Vitamin E Body butters.webp";
import vitaminCFaceWash from "@/assets/Products/Vitamin C Face washes.webp";
import wildAquaShowerGel from "@/assets/Products/Wild Aqua Shower Gel.webp";
import tonicsBanner from "@/assets/Products/tonics-banner.webp";
import iceCreamBanner from "@/assets/Products/ice-cream-banner.webp";
import butterscotch from "@/assets/ice-creams/BUTTER SCOTCH (1).webp";
import strawberryIceCream from "@/assets/ice-creams/STRAWBERRY (1).webp";
import tuttiFrutti from "@/assets/ice-creams/TUTI FRUTI.webp";
import vanilla from "@/assets/ice-creams/VANILLA (1).webp";
import chocoAlmonds from "@/assets/ice-creams/CHOCO ALMONDS.webp";
import tiramisu from "@/assets/ice-creams/TIRAMISU (1) (1).webp";
import wildBlueberry from "@/assets/ice-creams/WILD BLUEBERRY (1).webp";

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
}

const ProductCard = ({ product }: { product: Product }) => (
  <div className="group flex flex-col items-center text-center">
    <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500 border border-gray-100">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    <h4 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h4>
    <p className="text-xs text-gray-500 max-w-[180px] leading-relaxed">{product.description}</p>
  </div>
);

export default function Products() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden pt-24 bg-[#f9dc8d]/40">
  <div className="relative w-full h-[400px] md:h-[700px] lg:h-[800px]">
    <img 
      src={heroBanner} 
      alt="Honeyman Hero" 
      className="absolute inset-0 w-full h-full object-cover md:object-contain lg:object-cover"
    />
  </div>
</section>

      {/* --- DISCOUNT SLIDER --- */}
      <section className="relative overflow-hidden bg-[#8c3100] py-4">
        <Bee className="absolute top-2 left-[10%] z-10" size={20} />
        <Bee className="absolute bottom-2 right-[15%] z-10" size={18} />
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3">
            <span className="text-white font-bold text-lg md:text-xl animate-pulse">🎉</span>
            <p className="text-white font-bold text-base md:text-lg text-center">
              {t("productsPage.discountBanner")}
            </p>
            <span className="text-white font-bold text-lg md:text-xl animate-pulse">🎉</span>
          </div>
        </div>
      </section>

    

      {/* --- HONEY: Banner Left, 3 Products Right --- */}
      <section className="py-20 bg-[#ffe248]/20 relative">
        <Bee className="absolute top-10 right-[5%] opacity-30" size={24} />
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/3">
              <img src={honeyBanner} alt="Honey" className="rounded-3xl shadow-lg h-[450px] w-full object-cover" />
            </div>
            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <ProductCard product={{id: 'h1', name: t("productsPage.honey.himalayan.name"), image: himalayan, description: t("productsPage.honey.himalayan.description")}} />
              <ProductCard product={{id: 'h2', name: t("productsPage.honey.blackForest.name"), image: blackForest, description: t("productsPage.honey.blackForest.description")}} />
              <ProductCard product={{id: 'h3', name: t("productsPage.honey.organicRaw.name"), image: vantulsi, description: t("productsPage.honey.organicRaw.description")}} />
            </div>
          </div>
        </div>
      </section>
        {/* --- ICE CREAM: Products Left, Banner Right --- */}
        <section className="py-20 bg-[#f9dc8d]/40 relative">
          <Bee className="absolute bottom-20 left-[8%] opacity-30" size={22} />
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Products on Left */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <ProductCard product={{id: 'ic1', name: t("productsPage.iceCream.butterscotch.name"), image: butterscotch, description: t("productsPage.iceCream.butterscotch.description")}} />
              <ProductCard product={{id: 'ic2', name: t("productsPage.iceCream.strawberry.name"), image: strawberryIceCream, description: t("productsPage.iceCream.strawberry.description")}} />
              <ProductCard product={{id: 'ic3', name: t("productsPage.iceCream.tuttiFrutti.name"), image: tuttiFrutti, description: t("productsPage.iceCream.tuttiFrutti.description")}} />
            </div>
            {/* Banner on Right */}
            <div className="w-full lg:w-1/3">
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                <img src={iceCreamBanner} alt="Premium Ice Cream" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" />
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- JAMS: Banner Left, 3 Products Right --- */}
      <section className="py-20 bg-[#ffe248]/10 relative">
        <Bee className="absolute top-16 left-[12%] opacity-25" size={20} />
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/3">
              <img src={jamsBanner} alt="Jams" className="rounded-3xl shadow-lg h-[450px] w-full object-cover" />
            </div>
            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <ProductCard product={{id: 'j1', name: t("productsPage.jams.strawberry.name"), image: strawberry, description: t("productsPage.jams.strawberry.description")}} />
              <ProductCard product={{id: 'j2', name: t("productsPage.jams.orange.name"), image: orangeJam, description: t("productsPage.jams.orange.description")}} />
              <ProductCard product={{id: 'j3', name: t("productsPage.jams.pineapple.name"), image: pineapple, description: t("productsPage.jams.pineapple.description")}} />
            </div>
          </div>
        </div>
      </section>

 

    

      {/* --- KAHWA: Products Left, Banner Right --- */}
      <section className="py-20 bg-[#ffe248]/15 relative">
        <Bee className="absolute bottom-16 right-[8%] opacity-25" size={24} />
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* 2 Products on Left */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <ProductCard product={{id: 'k1', name: t("productsPage.kahwa.ginger.name"), image: ginger, description: t("productsPage.kahwa.ginger.description")}} />
              <ProductCard product={{id: 'k2', name: t("productsPage.kahwa.badam.name"), image: badam, description: t("productsPage.kahwa.badam.description")}} />
              <ProductCard product={{id: 'k3', name: t("productsPage.kahwa.kesari.name"), image: kesar, description: t("productsPage.kahwa.kesari.description")}} />
            </div>
            {/* Banner on Right */}
            <div className="w-full lg:w-1/3">
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                <img src={kahwaBanner} alt="Kahwa" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" />
               
              </div>
            </div>
          </div>
        </div>
      </section>
    

      {/* --- MELLIFERA BEAUTY: Banner Left, Products Right --- */}
      <section className="py-20 bg-[#f9dc8d]/35 relative">
        <Bee className="absolute top-20 left-[6%] opacity-30" size={22} />
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/3">
              <img src={meliferaBanner} alt="Mellifera Beauty" className="rounded-3xl shadow-lg h-[450px] w-full object-cover" />
            </div>
            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <ProductCard product={{id: 'm1', name: t("productsPage.beauty.shea.name"), image: sheaBodyButter, description: t("productsPage.beauty.shea.description")}} />
              <ProductCard product={{id: 'm2', name: t("productsPage.beauty.vitaminC.name"), image: vitaminCFaceWash, description: t("productsPage.beauty.vitaminC.description")}} />
              <ProductCard product={{id: 'm3', name: t("productsPage.beauty.showerGel.name"), image: wildAquaShowerGel, description: t("productsPage.beauty.showerGel.description")}} />
            </div>
          </div>
        </div>
      </section>
        {/* --- TONICS: Products Left, Banner Right --- */}
        <section className="py-20 bg-[#ffe248]/20 relative">
          <Bee className="absolute bottom-12 left-[10%] opacity-30" size={20} />
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* 3 Products on Left */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <ProductCard product={{id: 't1', name: t("productsPage.tonics.amla.name"), image: amla, description: t("productsPage.tonics.amla.description")}} />
              <ProductCard product={{id: 't2', name: t("productsPage.tonics.lemon.name"), image: lemon, description: t("productsPage.tonics.lemon.description")}} />
              <ProductCard product={{id: 't3', name: t("productsPage.tonics.tulsi.name"), image: tulsi, description: t("productsPage.tonics.tulsi.description")}} />
            </div>
            {/* Banner on Right */}
            <div className="w-full lg:w-1/3">
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                <img src={tonicsBanner} alt="Wellness Tonics" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" />
               
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- SAUCES: Banner Left, 3 Products Right --- */}
      <section className="py-20 bg-[#f9dc8d]/30 relative">
        <Bee className="absolute top-12 right-[10%] opacity-30" size={26} />
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/3">
              <img src={sauceBanner} alt="Sauces" className="rounded-3xl shadow-lg h-[450px] w-full object-cover" />
            </div>
            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <ProductCard product={{id: 's1', name: t("productsPage.sauces.bbq.name"), image: bbqSauce, description: t("productsPage.sauces.bbq.description")}} />
              <ProductCard product={{id: 's2', name: t("productsPage.sauces.ketchup.name"), image: tomatoKetchup, description: t("productsPage.sauces.ketchup.description")}} />
              <ProductCard product={{id: 's3', name: t("productsPage.sauces.kalonji.name"), image: kalonjiSauce, description: t("productsPage.sauces.kalonji.description")}} />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER MESSAGE --- */}
      <section className="bg-[#8c3100] py-16 text-center relative overflow-hidden">
        <Bee className="absolute top-8 left-[15%] z-10" size={28} />
        <Bee className="absolute bottom-8 right-[12%] z-10" size={24} />
        <Bee className="absolute top-1/2 left-[8%] z-10" size={22} />
        <div className="container mx-auto px-6 relative z-20">
          <h2 className="text-3xl font-black text-white mb-4">{t("productsPage.footerTitle")}</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto font-medium">
            {t("productsPage.footerDescription")}
          </p>
          <a 
            href="https://honeymanstore.com" 
            className="inline-block bg-[#ffe248] text-[#8c3100] font-black px-12 py-4 rounded-full shadow-lg hover:bg-[#f9dc8d] transition-colors uppercase tracking-widest"
          >
            {t("productsPage.goToStore")}
          </a>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}