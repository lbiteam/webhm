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

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
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
        <ReviewsSection />
       
      </main>
      <Footer />
    </div>
  );
};

export default Index;
