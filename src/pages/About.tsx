import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Award, Globe, Store, Newspaper, Download, ShieldCheck, Headphones, CreditCard, Truck, Instagram, Facebook, Youtube, Globe2Icon, User2Icon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Bee from "@/components/Bee";
import { useLanguage } from "@/contexts/LanguageContext";

// Owner image
import ownerImage from "@/assets/owner-bees.jpg";
import productsImage from "@/assets/wide-range-of-purity-about.webp";
import farmImage from "@/assets/Honey farm.webp";

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

const About = () => {
  const { t } = useLanguage();
  const [currentAward, setCurrentAward] = useState(0);
  const [currentPlatform, setCurrentPlatform] = useState(0);
  const [currentMedia, setCurrentMedia] = useState(0);
  const [currentGlobalShot, setCurrentGlobalShot] = useState(0);

  const awards = [
    { image: awardPm, title: t("aboutPage.awards.pm") },
    { image: awardYogi, title: t("aboutPage.awards.yogi") },
    { image: awardPunjab, title: t("aboutPage.awards.punjab") },
    { image: awardEntrepreneur, title: t("aboutPage.awards.entrepreneur") },
    { image: awardMinister, title: t("aboutPage.awards.minister") },
    { image: awardIndia, title: t("aboutPage.awards.india") },
  ];

  const platforms = [
  { name: "Flipkart", logo: flipkart, link: "https://www.flipkart.com/" },
  { name: "Amazon", logo: Amazon, link: "https://www.amazon.com/honeyman-indiahttps://www.amazon.in/s?k=HONEYMAN&crid=10WJOG836CU6E&sprefix=honeyman%2Caps%2C360&ref=nb_sb_noss_1" },
  { name: "Snapdeal", logo: Snapdeal, link: "https://www.snapdeal.com/search?clickSrc=top_searches&keyword=honeyman%20honey&categoryId=0&vertical=p&noOfResults=20&SRPID=topsearch&sort=rlvncy" },
  { name: "Blinkit", logo: blinkit, link: "https://blinkit.com/prn/honeyman-multi-flower-honey/prid/716424" },

];

const mediaLogos = [
  { name: "ANI News", link: "https://www.aninews.in/news/business/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion20250728140940/" },
  { name: "The Print", link: "https://theprint.in/ani-press-releases/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion/2704754/" },
  { name: "Big News Network", link: "https://www.bignewsnetwork.com/news/278472286/honeyman-revolutionizes-india-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion" },
  { name: "Jio News", link: "https://jionews.com/headline/68873c780780ab8622b6ccb4" },
  { name: "Google News", link: "https://news.google.com/search?q=Honeyman%20Revolutionizes&hl=en-IN&gl=IN&ceid=IN:en" },
  { name: "UP 18 News", link: "https://up18news.com/honeyman-revolutionizes-india-food-industry-with-honey-sweetned-products-announces-nationwide-franchise-expansion/" },
  { name: "RepublicNews Today", link: "https://republicnewstoday.com/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion/" },
  { name: "News21", link: "https://news21.co.in/index.php/2025/07/28/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion/" },
  // additional channels (row 2)
  { name: "Sangri Today", link: "https://www.sangritoday.com/spotlight/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion" },
  { name: "Startup News", link: "https://startupnews.fyi/2025/07/28/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion/" },
  { name: "Daily Bulletin", link: "https://dailybulletin.co.in/index.php/business/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion/" },
  { name: "The 24 Nation", link: "https://the24nation.com/2025/07/28/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion/" },
  { name: "The Big India", link: "https://thebigindia.co.in/index.php/2025/07/28/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion/" },
  { name: "PrimeNews TV", link: "https://primenewstv.com/index.php/2025/07/28/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion/" },
  { name: "DelhiNew Live", link: "https://www.delhilivenews.in/news/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion20250728140934" },
  { name: "Storywritter", link: "https://storywriter.co.in/index.php/2025/07/28/honeyman-revolutionizes-indias-food-industry-with-honey-sweetened-products-announces-nationwide-franchise-expansion/" },
];

  const mediaArticles = [
    { image: mediaAni, title: t("aboutPage.mediaArticles.ani"), source: "ANI" },
    { image: mediaLoktej, title: t("aboutPage.mediaArticles.loktej"), source: "Loktej" },
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
      title: t("aboutPage.features.1"),
    },
    {
      icon: Globe,
      title: t("aboutPage.features.2"),
    },
    {
      icon: Globe2Icon,
      title: t("aboutPage.features.3"),
    },
    {
      icon: User2Icon,
      title: t("aboutPage.features.4"),
    }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGlobalShot((prev) => (prev + 1) % mediaArticles.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAward((prev) => (prev + 1) % awards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Hash scroll functionality
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # symbol
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          // Small delay to ensure page is fully rendered
          setTimeout(() => {
            const headerOffset = 100; // Adjust based on your header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    // Scroll on mount
    scrollToHash();

    // Listen for hash changes
    const handleHashChange = () => {
      scrollToHash();
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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
                <span className="text-primary font-medium text-lg">{t("aboutPage.est")}</span>
                <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-2">
                  {t("aboutPage.title")}
                </h1>
                <p className="text-2xl text-honey-dark font-medium mt-2">
                  {t("aboutPage.subtitle")}
                </p>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {t("aboutPage.description1")} <strong className="text-foreground">{t("aboutPage.founderName")}</strong> {t("aboutPage.description1Cont")}
                </p>
                <p>
                  {t("aboutPage.description2")} <strong className="text-foreground">{t("aboutPage.sonName")}</strong>, {t("aboutPage.description2Cont")}
                </p>
                <p>
                  {t("aboutPage.description3")} <strong className="text-foreground">{t("aboutPage.mission")}</strong> {t("aboutPage.description3Cont")}
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <span className="text-4xl font-display font-bold text-primary">46+</span>
                  <p className="text-sm text-muted-foreground">{t("aboutPage.yearsLegacy")}</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-display font-bold text-primary">150+</span>
                  <p className="text-sm text-muted-foreground">{t("aboutPage.storesNationwide")}</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-display font-bold text-primary">300+</span>
                  <p className="text-sm text-muted-foreground">{t("aboutPage.skus")}</p>
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
                      {t("aboutPage.founderTitle")}
                    </h4>
                    <p className="text-primary font-medium">{t("aboutPage.founderSubtitle")}</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {t("aboutPage.founderRole")}
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
                  src={farmImage} 
                  alt="Our Products Collection" 
                  className="w-full h-full  object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              </div>
              
              <div className="absolute -bottom-12 left-6 right-6 bg-white rounded-xl shadow-lg p-6 border border-honey/20">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">{t("aboutPage.visionTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                {t("aboutPage.visionText")}<span className="text-primary font-semibold"> {t("aboutPage.visionBold1")}</span> {t("aboutPage.visionText2")} <span className="text-primary font-semibold"> {t("aboutPage.visionBold2")}</span> {t("aboutPage.visionText3")}
                </p>
              </div>
            </div>

            {/* Right: Features in Window Grid */}
            <div className="space-y-6">
              <h3 className="font-display text-3xl font-bold text-foreground">{t("aboutPage.whyChooseTitle")}</h3>
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
                {t("aboutPage.catalogueTitle")}
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                {t("aboutPage.catalogueDescription")}
              </p>
              <a 
                href="https://honeymanstore.com/wp-content/uploads/2025/12/Honeyman-Magazine-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-honey hover:bg-honey-dark text-foreground font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                {t("aboutPage.downloadCatalogue")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Are - Platform Logos */}
      <section className="py-20 bg-gradient-to-b from-honey/10 to-cream relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-2">{t("aboutPage.platformsTitle")}</h2>
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
                  onClick={() => window.open(platform.link, '_blank')}
                  className="max-h-20 max-w-48 object-contain drop-shadow-md group-hover:drop-shadow-lg rounded-lg"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-foreground font-semibold text-lg">{t("aboutPage.orderNow")}</p>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="relative overflow-hidden bg-[#8c3100]/90">
        {/* Section Title - Separate from Image */}
        <div className="py-8">
          <div className="flex items-center justify-center gap-4">
            <Award className="w-10 h-10 text-honey" />
            <h2 className="font-display text-4xl font-bold text-white">Awards & Recognition</h2>
          </div>
        </div>
        
        {/* Full-Screen Image Slider */}
        <div className="relative w-full h-[70vh] overflow-hidden">
          <div 
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentAward * 100}%)` }}
          >
            {awards.map((award, index) => (
              <div key={index} className="min-w-full h-full relative flex-shrink-0">
                <img 
                  src={award.image} 
                  alt={award.title}
                  className="w-full h-full object-contain bg-gradient-to-b from-[#8c3100]/90 to-[#6b2400]"
                />
                {/* Yellow Background Caption with White Text */}
                <div className="absolute bottom-0 left-0 right-0 bg-honey py-4 px-6">
                  <h3 className="text-white font-display text-xl md:text-2xl font-semibold text-center">
                    {award.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevAward}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button 
            onClick={nextAward}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-24  bg-gradient-to-b from-honey/10 to-cream relative overflow-hidden " id="media-coverage">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Newspaper className="w-10 h-10 text-primary" />
            <h2 className="font-display text-4xl font-bold text-foreground">{t("aboutPage.mediaTitle")}</h2>
          </div>
          
          <div className="space-y-12">
            {/* Full-width media screenshots auto-scroll */}
            <div className="relative max-w-6xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[460px] md:h-[560px]">
                <img 
                  src={mediaArticles[currentMedia].image} 
                  alt={mediaArticles[currentMedia].title}
                  className="w-full h-full object-cover object-center transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent p-6">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {mediaArticles[currentMedia].source}
                  </span>
                  <h3 className="text-white font-display text-lg font-semibold mt-2">
                    {mediaArticles[currentMedia].title}
                  </h3>
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {mediaArticles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMedia(index)}
                    className={`h-1 rounded-full transition-all ${index === currentMedia ? 'w-10 bg-primary' : 'w-4 bg-muted-foreground/40 hover:bg-muted-foreground/60'}`}
                  />
                ))}
              </div>
            </div>

            {/* Media Logos grid 16 (2 rows x 8) */}
            <div className="space-y-6 max-w-6xl mx-auto">
              <h3 className="font-display text-2xl font-semibold text-foreground text-center">
                {t("aboutPage.featuredIn")}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
                {mediaLogos.map((logo) => {
                  const content = (
                    <div 
                      className="bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center border border-honey/20"
                    >
                      <span className="font-semibold text-foreground text-xs md:text-sm leading-snug block">{logo.name}</span>
                    </div>
                  );
                  
                  return logo.link ? (
                    <a
                      key={logo.name}
                      href={logo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={logo.name}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Global Recognition block with two large auto-scroll shots */}
            <div className="bg-[#97430c] rounded-2xl p-6 md:p-10 shadow-xl max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-6 ">
                <Globe className="w-10 h-10 text-primary" />
                <div>
                  <h3 className="font-display text-white  text-xl md:text-2xl font-semibold text-foreground">
                    {t("aboutPage.globalRecognition")}
                  </h3>
                  <p className="text-muted-foreground text-white text-sm">{t("aboutPage.globalRecognitionText")}</p>
                </div>
              </div>

              {/* <div className="grid md:grid-cols-2 gap-4">
                {[0,1].map((offset) => {
                  const idx = (currentGlobalShot + offset) % mediaArticles.length;
                  return (
                    <div key={offset} className="relative rounded-xl overflow-hidden h-64 md:h-72 shadow-lg">
                      <img 
                        src={mediaArticles[idx].image} 
                        alt={`Global recognition ${idx + 1}`} 
                        className="w-full h-full object-cover transition-all duration-700"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent p-3">
                        <p className="text-white text-sm font-semibold">{mediaArticles[idx].title}</p>
                      </div>
                    </div>
                  );
                })}
              </div> */}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                <div className="bg-white/80 rounded-lg p-3 text-center shadow">
                  <span className="text-2xl font-display font-bold text-primary">50+</span>
                  <p className="text-xs text-muted-foreground">{t("aboutPage.mediaFeatures")}</p>
                </div>
                <div className="bg-white/80 rounded-lg p-3 text-center shadow">
                  <span className="text-2xl font-display font-bold text-primary">10+</span>
                  <p className="text-xs text-muted-foreground">{t("aboutPage.nationalAwards")}</p>
                </div>
                <div className="bg-white/80 rounded-lg p-3 text-center shadow">
                  <span className="text-2xl font-display font-bold text-primary">300+</span>
                  <p className="text-xs text-muted-foreground">Press Mentions</p>
                </div>
                <div className="bg-white/80 rounded-lg p-3 text-center shadow">
                  <span className="text-2xl font-display font-bold text-primary">100+</span>
                  <p className="text-xs text-muted-foreground">Cities Reached</p>
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
              {t("aboutPage.instagramTitle")}
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
          
          {/* Instagram Posts - 10 Square Images in 2 Rows of 5 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
            {socialFeedPosts.slice(0, 10).map((post, index) => (
              <a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-10"
              >
                {/* Square Instagram Post */}
                <div className="relative w-full aspect-square">
                  <img 
                    src={post.image} 
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 md:pb-6">
                    <div className="flex items-center gap-2 text-white font-semibold text-sm md:text-base">
                      <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="hidden sm:inline">View on Instagram</span>
                      <span className="sm:hidden">View</span>
                    </div>
                  </div>
                  
                  {/* Corner badge */}
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <Instagram className="w-3 h-3 md:w-5 md:h-5" />
                  </div>
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
