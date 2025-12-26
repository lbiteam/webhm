import Bee from "@/components/Bee";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full overflow-hidden pt-24 bg-[#f9dc8d]/40" style={{ marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0 }}>
        <div className="w-full h-[500px] md:h-[700px] lg:h-[800px]">
          <img
            src={heroBanner}
            alt="Honeyman Hero"
            className="w-full h-full object-cover block"
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
              10% DISCOUNT BEFORE NEW YEAR
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
              <ProductCard product={{id: 'h1', name: 'Himalayan Honey', image: himalayan, description: 'Wild nectar from high altitude blossoms.'}} />
              <ProductCard product={{id: 'h2', name: 'Black Forest', image: blackForest, description: 'Dense, dark honey with woody undertones.'}} />
              <ProductCard product={{id: 'h3', name: 'Organic Raw', image: vantulsi, description: 'Unprocessed and unfiltered purity.'}} />
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
              <ProductCard product={{id: 'ic1', name: 'Butterscotch', image: butterscotch, description: 'Creamy caramel delight sweetened with honey.'}} />
              <ProductCard product={{id: 'ic2', name: 'Strawberry', image: strawberryIceCream, description: 'Fresh berry sweetness, zero refined sugar.'}} />
              <ProductCard product={{id: 'ic3', name: 'Tutti Frutti', image: tuttiFrutti, description: 'Fruit medley with natural honey.'}} />
              
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
              <ProductCard product={{id: 'j1', name: 'Strawberry Jam', image: strawberry, description: 'Rich berry chunks and honey.'}} />
              <ProductCard product={{id: 'j2', name: 'Orange Marmalade', image: orangeJam, description: 'Zesty peel and citrus sweetness.'}} />
              <ProductCard product={{id: 'j3', name: 'Pineapple Jam', image: pineapple, description: 'A tropical honey-infused delight.'}} />
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
              <ProductCard product={{id: 'k1', name: 'Ginger Kahwa', image: ginger, description: 'Traditional spice and honey mix.'}} />
              <ProductCard product={{id: 'k2', name: 'Badam Kahwa', image: badam, description: 'Rich almond and saffron warmth.'}} />
              <ProductCard product={{id: 'k3', name: 'Kesari Kahwa', image: kesar, description: 'Rich kesari and saffron warmth.'}} />
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
              <ProductCard product={{id: 'm1', name: 'Shea & Vitamin E Body Butter', image: sheaBodyButter, description: 'Infused with honey for deep nourishment.'}} />
              <ProductCard product={{id: 'm2', name: 'Vitamin C Face Wash', image: vitaminCFaceWash, description: 'Brightening cleanser with honey infusion.'}} />
              <ProductCard product={{id: 'm3', name: 'Wild Aqua Shower Gel', image: wildAquaShowerGel, description: 'Refreshing cleanse with natural honey.'}} />
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
              <ProductCard product={{id: 't1', name: 'Amla Tonic', image: amla, description: 'Vitamin C Boost for immunity.'}} />
              <ProductCard product={{id: 't2', name: 'Lemon Tonic', image: lemon, description: 'Refreshing detox and energy.'}} />
              <ProductCard product={{id: 't3', name: 'Tulsi Honey', image: tulsi, description: 'Ancient herbal healing blend.'}} />
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
              <ProductCard product={{id: 's1', name: 'BBQ Honey Sauce', image: bbqSauce, description: 'Smoky and sweet honey-infused BBQ sauce.'}} />
              <ProductCard product={{id: 's2', name: 'Tomato Ketchup with Honey', image: tomatoKetchup, description: 'Classic ketchup sweetened with natural honey.'}} />
              <ProductCard product={{id: 's3', name: 'Kalonji Tamatar Chutney', image: kalonjiSauce, description: 'Spiced tomato chutney with kalonji seeds.'}} />
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
          <h2 className="text-3xl font-black text-white mb-4">LOVE OUR COLLECTION?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto font-medium">
            Discover our complete product range, check live availability, and place your order directly at our official store.
          </p>
          <a 
            href="https://honeymanstore.com" 
            className="inline-block bg-[#ffe248] text-[#8c3100] font-black px-12 py-4 rounded-full shadow-lg hover:bg-[#f9dc8d] transition-colors uppercase tracking-widest"
          >
            Go to Honeymanstore.com
          </a>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}