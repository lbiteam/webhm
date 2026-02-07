import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import TextSlider from "@/components/TextSlider";
import WhyUsSection from "@/components/WhyUsSection";
import ProductsCarousel from "@/components/ProductsCarousel";
import AboutSection from "@/components/AboutSection";
import IceCreamSection from "@/components/IceCreamSection";
import FranchiseSection from "@/components/FranchiseSection";
import GiftingSection from "@/components/GiftingSection";
import ReviewsSection from "@/components/ReviewsSection";
import HoneymanStoreSection from "@/components/HoneymanStoreSection";
import Footer from "@/components/Footer";
import Bee from "@/components/Bee";
import honeycombImage from "@/assets/index-gap-image.jpg";
import Honeyjourney from "@/components/Honeyjourney";
import roseflow from "@/assets/gifting/single-rose.webp";

/* Falling roses configuration - same as Gifting page */
const fallingPetals = [
  { left: "5%", size: 40, duration: 12, delay: 0 },
  { left: "15%", size: 48, duration: 15, delay: 2 },
  { left: "25%", size: 48, duration: 14, delay: 4 },
  { left: "35%", size: 46, duration: 18, delay: 1 },
  { left: "50%", size: 40, duration: 13, delay: 5 },
  { left: "60%", size: 44, duration: 11, delay: 3 },
  { left: "75%", size: 47, duration: 16, delay: 6 },
  { left: "85%", size: 42, duration: 20, delay: 2 },
  { left: "92%", size: 45, duration: 14, delay: 4 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Falling roses overlay - fixed, non-interactive */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {fallingPetals.map((petal, i) => (
          <div
            key={i}
            className="absolute animate-fall-rose"
            style={{
              left: petal.left,
              top: "-5%",
              width: petal.size,
              height: petal.size,
              animationDuration: `${petal.duration}s`,
              animationDelay: `${petal.delay}s`,
            }}
          >
            <img
              src={roseflow}
              alt=""
              className="w-full h-full object-contain opacity-90"
            />
          </div>
        ))}
      </div>
      <Header />
      <main>
        <HeroSlider />
        <TextSlider />
        
        
        
        
        <WhyUsSection />
        <Honeyjourney />
        <ProductsCarousel />
        <AboutSection />
        <IceCreamSection />
        <FranchiseSection />
        <GiftingSection />
       
        <HoneymanStoreSection />
        <ReviewsSection />
       
      </main>
      <Footer />
    </div>
  );
};

export default Index;
