import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Award, Globe, Store, Newspaper, Download, ShieldCheck, Headphones, CreditCard, Truck, Instagram, Facebook, Youtube, Globe2Icon, User2Icon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Bee from "@/components/Bee";

// Owner image
import ownerImage from "@/assets/owner-bees.jpg";
import productsImage from "@/assets/wide-range-of-purity-about.webp";

// Award images
import awardPm from "@/assets/awards/award-pm.webp";
import awardIndia from "@/assets/awards/award-india.webp";
import awardPunjab from "@/assets/awards/award-punjab.webp";
import awardYogi from "@/assets/awards/award-yogi.jpg";
import awardEntrepreneur from "@/assets/awards/award-entrepreneur.webp";
import awardMinister from "@/assets/awards/award-minister.webp";
import flipkart from "@/assets/Shopping logo/flipkart-logo.webp";
import Amazon from "@/assets/Shopping logo/amazon-logo.webp";
import Snapdeal from "@/assets/Shopping logo/snapdeal-logo.webp";
import blinkit from "@/assets/Shopping logo/blinkit-logo.webp";

// Catalogue & Media
import catalogueImage from "@/assets/honeyman-catalogue.webp";
import mediaAni from "@/assets/media/media-ani.webp";
import mediaLoktej from "@/assets/media/media-loktej.webp";

// Social Feed Images
import socialPost1 from "@/assets/about-us/Happy Man's Day.webp";
import socialPost2 from "@/assets/about-us/honeyman-acaia-honey.webp";
import socialPost3 from "@/assets/about-us/honeyman-black-forest.webp";
import socialPost4 from "@/assets/about-us/honeyman-chennai.webp";
import socialPost5 from "@/assets/about-us/honeyman-choose-sugar-over-honey.webp";
import socialPost6 from "@/assets/about-us/honeyman-choose-your-best-honey.webp";
import socialPost7 from "@/assets/about-us/honeyman-franchise-model.webp";
import socialPost8 from "@/assets/about-us/honeyman-himalyan.webp";
import socialPost9 from "@/assets/about-us/honeyman-hyderbad.webp";
import socialPost10 from "@/assets/about-us/honeyman-multiflower.webp";
import socialPost11 from "@/assets/about-us/honeyman-sauces.webp";
import socialPost12 from "@/assets/about-us/honeyman-world-no.1.webp";

const awards = [
  { image: awardPm, title: "Meeting with Hon'ble Prime Minister Narendra Modi" },
  { image: awardYogi, title: "CM Yogi Ji at Honeyman's Stall - Yuva Enclave 2025" },
  { image: awardPunjab, title: "Recognition from Government of Punjab" },
  { image: awardEntrepreneur, title: "Entrepreneur D2C 100 Award" },
  { image: awardMinister, title: "Meeting with Hon'ble Union Minister" },
  { image: awardIndia, title: "India Food Processing Expo" },
];

const platforms = [
  { name: "Flipkart", logo: flipkart },
  { name: "Amazon", logo: Amazon },
  { name: "Snapdeal", logo: Snapdeal },
  { name: "Blinkit", logo: blinkit },

];

const mediaLogos = [
  "ANI News",
  "The Print",
  "Ahmedabad Times",
  "Hindustan Times",
  "Economic Times",
  "Business Standard",
  "NDTV",
  "India Today",
];

const mediaArticles = [
  { image: mediaAni, title: "ANI News Coverage", source: "ANI" },
  { image: mediaLoktej, title: "Loktej English Coverage", source: "Loktej" },
];

const socialFeedPosts = [
  { image: socialPost1, link: "https://www.instagram.com/p/DRO5DCdE2Bx/?igsh=Mm53NmtzOWx2NGVi" },
  { image: socialPost2, link: "https://www.instagram.com/p/DP251a9EyCR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { image: socialPost3, link: "https://www.instagram.com/p/DP0YGRYk0xV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { image: socialPost4, link: "https://www.instagram.com/p/DSSUFe5E9_I/?igsh=MTBoNjlzNWhoNTZiOA=" },
  { image: socialPost5  , link: "https://www.instagram.com/p/DQLhcEdE0Td/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { image: socialPost6, link: "https://www.instagram.com/p/DQOo0A_Ex6Y/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { image: socialPost7, link: "https://www.instagram.com/p/DRUYlfeEwzD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { image: socialPost8, link: "https://www.instagram.com/p/DPWNXiuEzbF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { image: socialPost9, link: "https://www.instagram.com/p/DSUAU6Uk6i1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { image: socialPost10, link: "https://www.instagram.com/p/DPf6Em5k-sy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { image: socialPost11, link: "https://www.instagram.com/p/DRRDKZBE9EN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { image: socialPost12, link: "https://www.instagram.com/p/DRUXlNqk1OZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
 
];

const features = [
  {
    icon: ShieldCheck,
    title: " 45+ Years of Trust & Expertise",
  },
  {
    icon: Globe,
    title: "World's Largest Refined Sugar-Free Ecosystem",
  },
  {
    icon: Globe2Icon,
    title: "100% Pure & Natural Honey",
  },
  {
    icon: User2Icon,
    title: "Empowering Entrepreneurs, Building Communities",
  }
];

const About = () => {
  const [currentAward, setCurrentAward] = useState(0);
  const [currentPlatform, setCurrentPlatform] = useState(0);
  const [currentMedia, setCurrentMedia] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatform((prev) => (prev + 1) % platforms.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMedia((prev) => (prev + 1) % mediaArticles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextAward = () => setCurrentAward((prev) => (prev + 1) % awards.length);
  const prevAward = () => setCurrentAward((prev) => (prev - 1 + awards.length) % awards.length);
  const nextMedia = () => setCurrentMedia((prev) => (prev + 1) % mediaArticles.length);
  const prevMedia = () => setCurrentMedia((prev) => (prev - 1 + mediaArticles.length) % mediaArticles.length);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-honey/10 to-cream relative overflow-hidden">
        <div className="absolute inset-0 honeycomb-pattern opacity-20" />
        <Bee className="absolute top-40 right-[15%]" size={40} />
        <Bee className="absolute bottom-20 left-[10%]" size={28} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <span className="text-primary font-medium text-lg">Est. 1980</span>
                <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-2">
                  HONEYMAN
                </h1>
                <p className="text-2xl text-honey-dark font-medium mt-2">
                  A Legacy of Purity
                </p>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Rooted in Punjab since 1980, the late <strong className="text-foreground">Sardar Jagjit Singh Kapoor</strong> founded HONEYMAN on a commitment to purity, transforming a local apiary into a global leader.
                </p>
                <p>
                  Today, after 45 years, his son, <strong className="text-foreground">Mr. Shahzada Singh Kapoor</strong>, a global honey authority, drives a revolutionary vision: building India's most trusted consumer wellness brand.
                </p>
                <p>
                  His mission is creating <strong className="text-foreground">The World's Largest Ecosystem of Refined Sugar-Free Products</strong>, sweetened only with pure, natural honey.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <span className="text-4xl font-display font-bold text-primary">45+</span>
                  <p className="text-sm text-muted-foreground">Years of Legacy</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-display font-bold text-primary">123+</span>
                  <p className="text-sm text-muted-foreground">Stores Nationwide</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-display font-bold text-primary">100%</span>
                  <p className="text-sm text-muted-foreground">Pure Natural</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-honey/40 to-honey-dark/30 rounded-3xl transform rotate-3" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-honey-dark/30 to-honey/40 rounded-3xl transform -rotate-3" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={ownerImage} 
                  alt="Mr. Shahzada Singh Kapoor - The Bee Whisperer" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg">
                    <h4 className="font-display text-xl font-bold text-foreground">
                      Mr. Shahzada Singh Kapoor
                    </h4>
                    <p className="text-primary font-medium">Global Honey Authority</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Founder & Visionary Leader, HONEYMAN
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-honey rounded-full opacity-60 blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-honey-dark rounded-full opacity-50 blur-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Combined Vision & Features Section */}
      <section className="py-20 bg-cream relative overflow-hidden">
        {/* Background image with shading - positioned to show bottom of image */}
        <div className="absolute inset-0 opacity-25 bg-bottom bg-no-repeat" style={{ backgroundImage: `url(${productsImage})`, backgroundSize: 'cover', backgroundPosition: 'center bottom' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/60 via-cream/40 to-cream/60" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left: Vision with Background Image */}
            <div className="relative pt-12">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96">
                <img 
                  src={productsImage} 
                  alt="Our Products Collection" 
                  className="w-full h-full  object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              </div>
              
              <div className="absolute -bottom-12 left-6 right-6 bg-white rounded-xl shadow-lg p-6 border border-honey/20">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                Our vision is<span className="text-primary font-semibold"> bold and unapologetic</span>  to build <span className="text-primary font-semibold"> the world's largest and most trusted ecosystem of honey-based products,</span> redefining how sweetness is consumed across the globe. From Indian households to international markets, we aim to make honey the universal symbol of health, sustainability, and positive change.

                </p>
              </div>
            </div>

            {/* Right: Features in Window Grid */}
            <div className="space-y-6">
              <h3 className="font-display text-3xl font-bold text-foreground">Why Choose Honeyman</h3>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow border border-honey/20 hover:border-honey/40"
                  >
                    <div className="w-12 h-12 rounded-full bg-honey/20 flex items-center justify-center mb-3">
                      <feature.icon className="w-6 h-6 text-honey-dark" />
                    </div>
                    <p className="font-medium text-foreground text-sm leading-snug">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue Download Section */}
      <section className="py-16 bg-[#8c3100]/90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-honey rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-honey rounded-full" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* floating bees over the catalogue area */}
          <Bee className="absolute -left-6 top-8 z-20 animate-float" size={40} />
          <Bee className="absolute right-10 top-6 z-20 animate-float" size={32} />
          <Bee className="absolute left-1/2 -translate-x-1/2 bottom-6 z-20 animate-float" size={28} />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative max-w-sm mx-auto md:mx-0">
              <div className="absolute -inset-4 bg-honey/30 rounded-2xl transform rotate-6" />
              <img 
                src={catalogueImage} 
                alt="Honeyman Catalogue" 
                className="relative rounded-xl shadow-2xl w-full"
              />
            </div>
            
            <div className="text-center md:text-left space-y-6">
              <h2 className="font-display text-4xl font-bold text-white">
                Explore Our Products
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Download our complete product catalogue to discover the full range of 
                HONEYMAN's premium honey products and wellness essentials.
              </p>
              <a 
                href="https://honeymanstore.com/wp-content/uploads/2025/12/Honeyman-Magazine-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-honey hover:bg-honey-dark text-foreground font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                Download Catalogue
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Are - Platform Logos */}
      <section className="py-20 bg-gradient-to-b from-honey/10 to-cream relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-2">Happiness Delivered to your footsteps</h2>

       
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
            {platforms.map((platform) => (
              <div 
                key={platform.name}
                className="group relative flex items-center justify-center h-24 transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <img 
                  src={platform.logo} 
                  alt={platform.name}
                  className="max-h-20 max-w-48 object-contain drop-shadow-md group-hover:drop-shadow-lg rounded-lg"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-foreground font-semibold text-lg">Order now and get it delivered instantly! 🚚</p>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 bg-[#8c3100]/90 relative overflow-hidden">
        <div className="absolute inset-0 honeycomb-pattern opacity-10" />
        
        {/* Decorative Bees */}
        <Bee className="absolute top-12 left-8 z-10" size={32} />
        <Bee className="absolute top-32 right-12 z-10" size={28} />
        <Bee className="absolute bottom-20 left-1/4 z-10" size={30} />
        <Bee className="absolute bottom-32 right-1/4 z-10" size={26} />
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Award className="w-10 h-10 text-primary" />
            <h2 className="font-display text-4xl font-bold text-background">Awards & Recognition</h2>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Main Award Display */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b from-honey/10 to-cream">
              <img 
                src={awards[currentAward].image} 
                alt={awards[currentAward].title}
                className="w-full h-[500px] object-contain bg-gradient-to-b from-honey/10 to-cream"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground to-transparent p-6">
                <h3 className="text-white font-display text-xl font-semibold text-center">
                  {awards[currentAward].title}
                </h3>
              </div>
            </div>
            
            {/* Navigation */}
            <button 
              onClick={prevAward}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button 
              onClick={nextAward}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
            
            {/* Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {awards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAward(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentAward ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Award Thumbnails */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-12 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <button
                key={index}
                onClick={() => setCurrentAward(index)}
                className={`rounded-lg overflow-hidden transition-all ${
                  index === currentAward 
                    ? 'ring-4 ring-primary ring-offset-2 scale-105' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img 
                  src={award.image} 
                  alt={award.title}
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-24  bg-gradient-to-b from-honey/10 to-cream relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Newspaper className="w-10 h-10 text-primary" />
            <h2 className="font-display text-4xl font-bold text-foreground">Media Coverage</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Media Articles Carousel */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={mediaArticles[currentMedia].image} 
                  alt={mediaArticles[currentMedia].title}
                  className="w-full h-[400px] object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground to-transparent p-6">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {mediaArticles[currentMedia].source}
                  </span>
                  <h3 className="text-white font-display text-lg font-semibold mt-2">
                    {mediaArticles[currentMedia].title}
                  </h3>
                </div>
              </div>
              
              {/* Navigation */}
              <button 
                onClick={prevMedia}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button 
                onClick={nextMedia}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
              
              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {mediaArticles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMedia(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentMedia ? 'bg-primary w-6' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Media Logos & Global Presence */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Featured In
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {mediaLogos.map((logo, index) => (
                    <div 
                      key={logo}
                      className="bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="font-semibold text-foreground text-xs">{logo}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-honey/20 to-honey-dark/10 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Globe className="w-10 h-10 text-primary" />
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Global Recognition
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  HONEYMAN has been recognized by national and international media for its commitment to quality, purity, and innovation.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/80 rounded-lg p-3 text-center">
                    <span className="text-2xl font-display font-bold text-primary">50+</span>
                    <p className="text-xs text-muted-foreground">Media Features</p>
                  </div>
                  <div className="bg-white/80 rounded-lg p-3 text-center">
                    <span className="text-2xl font-display font-bold text-primary">10+</span>
                    <p className="text-xs text-muted-foreground">National Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Feeds Section */}
      <section className="py-20 bg-[#f9dc8d] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Instagram Captures
            </h2>
           
            {/* Social Media Links */}
            {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="https://www.instagram.com/honeyman_india/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/honeymanindia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
              <a 
                href="https://www.youtube.com/@honeyman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                <Youtube className="w-5 h-5" />
                YouTube
              </a>
            </div> */}
          </div>
          
          {/* Instagram Feed Grid - 6x2 Layout No Gaps */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-0 max-w-7xl mx-auto overflow-hidden rounded-lg shadow-lg">
            {socialFeedPosts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden aspect-square transition-all duration-300 hover:scale-110 hover:z-10 hover:shadow-2xl"
              >
                {/* Image */}
                <img 
                  src={post.image} 
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <Instagram className="w-4 h-4" />
                    <span>View</span>
                  </div>
                </div>
                
                {/* Corner badge */}
                <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
          
          {/* CTA */}
       
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
