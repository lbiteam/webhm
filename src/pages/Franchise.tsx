import { Check, MapPin, Users, Store, Headphones, TrendingUp, Settings, BookOpen, Package, Share2, Search, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Bee from "@/components/Bee";
import iceCreamParlour from "@/assets/franchise/ice-cream-parlour.webp";
import iceCreamStanding from "@/assets/franchise/ice-cream-standing.webp";
import iceCreamCart from "@/assets/franchise/ice-cream-cart.webp";
import cafeOutlet from "@/assets/franchise/cafe-outlet.webp";
import cafeKiosk from "@/assets/franchise/cafe-kiosk.jpeg";
import cafeTrailer from "@/assets/franchise/cafe-trailer.jpeg";
import iceCreamPattern from "@/assets/our-franchise-system.webp";
import cartPattern from "@/assets/ourcarts.webp";
import iceCreamConePattern from "@/assets/ice-cream-pattern.png";
import elanphoto1 from "@/assets/cafe-1.webp";
import elanphoto2 from "@/assets/cafe-hm.webp";
import elanphoto3 from "@/assets/cafe-image.webp";
import elanphoto4 from "@/assets/cafe-2.webp";
import elanphoto5 from "@/assets/cafe-3.webp";
import storeOperatives from "@/assets/franchise/store operatives.json";

import { useState, useMemo, useEffect } from "react";

const franchiseModels = [
  {
    name: "Ice Cream Parlour",
    tagline: "Premium Experience",
    investment: "₹10-15 Lakhs",
    image: iceCreamParlour,
    color: "from-honey to-honey-dark",
    popular: true,
    features: [
      "Flagship store setup",
      "Complete product portfolio",
      "Premium interior design",
      "Full marketing package",
      "Regional exclusivity",
      "Priority support 24/7",
    ],
  },
  {
    name: "Ice Cream Standing",
    tagline: "Event Partner",
    investment: "₹75 thousand",
    image: iceCreamStanding,
    color: "from-amber-500 to-orange-600",
    features: [
      "Portable display unit",
      "Event-ready setup",
      "Full product range",
      "Marketing materials",
      "Territory exclusivity",
      "Dedicated support",
    ],
  },
  {
    name: "Ice Cream Cart",
    tagline: "Mobile Business",
    investment: "₹2.5 Lakhs",
    image: iceCreamCart,
    color: "from-emerald-400 to-teal-500",
    features: [
      "Custom branded cart",
      "Basic product range",
      "Training & support",
      "Marketing materials",
      "Flexible locations",
      "Low investment start",
    ],
  },
];

const supportFeatures = [
  {
    icon: BookOpen,
    title: "Launch & Setup",
    items: [
      "Location and market evaluation support",
      "In-house outlet design and layout planning",
      "Owner and staff training before opening",
      "Coordinated brand-led launch assistance",
     
    ],
  },
  {
    icon: Package,
    title: "Operations & Performance",
    items: [
      "Ongoing operational guidance and reviews",
      "Track performance with expert insights",
      "Process standardisation across outlets",
      "Support to improve efficiency",
    ],
  },
  {
    icon: Settings,
    title: "Technology & Systems",
    items: [
      "Integrated POS and billing solutions",
      "Inventory management for reduced wastage",
      "Sales tracking and business insights",
      "Tools that simplify daily operations",
    ],
  },
  {
    icon: Headphones,
    title: "Training & Audit Support",
    items: [
      "Periodic product and service audits",
      "Expert-led audits",
      "Feedback & improvement",
      "Quality assurance",
    ],
  },
  {
    icon: TrendingUp,
    title: "Marketing & Visibility",
    items: [
      "Central brand campaigns and promotions",
      "Online visibility support",
      "Local market activation strategies",
       "Launch & Promotional Support",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Presence",
    items: [
      "New flavour updates",
      "Store opening promotions",
      "Special offers visibility",
      "Customer engagement",
    ],
  },
];

// const cafePhotos = [
//   elanphoto1,
//   elanphoto2,
//   elanphoto3,
// ];

const uniqueFormats = [
  {
    name: "Outlet",
    size: "300 Sq.Ft. – 600 Sq.Ft.",
    image: cafeOutlet,
  },
  {
    name: "Indoor & Outdoor Kiosk",
    size: "10.5 Ft. x 10.5 Ft. (approx.)",
    image: cafeKiosk,
  },
  {
    name: "Honeyman Trailer",
    size: "15 Ft. x 8 Ft. (approx.)",
    image: cafeTrailer,
  },
];

const Franchise = () => {

  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [outletCarouselIndex, setOutletCarouselIndex] = useState(0);
  const itemsPerPage = 4;

  const outletImages = [elanphoto1, elanphoto2, elanphoto3, elanphoto4, elanphoto5];
  const imagesPerView = 4;

  // Responsive images per view
  const getImagesPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // Mobile
      if (window.innerWidth < 1024) return 2; // Tablet
      return 4; // Desktop
    }
    return 4;
  };

  const [responsiveImagesPerView, setResponsiveImagesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const newImagesPerView = getImagesPerView();
      setResponsiveImagesPerView(newImagesPerView);
      // Reset carousel if current index is out of bounds
      if (outletCarouselIndex >= outletImages.length - newImagesPerView + 1) {
        setOutletCarouselIndex(Math.max(0, outletImages.length - newImagesPerView));
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [outletCarouselIndex, outletImages.length]);

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

  const nextOutletSlide = () => {
    setOutletCarouselIndex((prev) => 
      (prev + 1) % (outletImages.length - responsiveImagesPerView + 1)
    );
  };

  const prevOutletSlide = () => {
    setOutletCarouselIndex((prev) => 
      prev === 0 ? outletImages.length - responsiveImagesPerView : prev - 1
    );
  };

  const filteredStores = useMemo(() => {
    return storeOperatives.filter(store => {
      const matchesSearch = searchTerm === "" || 
        store.City.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.Address.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = selectedRegion === "" || store.Region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchTerm, selectedRegion]);

  const totalPages = Math.ceil(filteredStores.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedStores = filteredStores.slice(startIndex, startIndex + itemsPerPage);

  const regions = [...new Set(storeOperatives.map(store => store.Region))].sort();

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedRegion]);
  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Header />
      
      {/* Hero Section with Video */}
      <section className="relative h-[80vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/franchise-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <span className="inline-block px-6 py-2 bg-honey/90 rounded-full text-foreground font-medium text-sm mb-6 animate-fade-in">
            Partner With Us
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Franchise <span className="text-honey">Opportunity</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8 animate-fade-in">
            Join India's fastest-growing premium ice cream brand and be a part of our sweet success story
          </p>
         
        </div>
      </section>

      {/* 100+ Outlets Counter */}
      <section className="py-16 bg-gradient-to-r from-honey to-honey-dark overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-4">
              <Store className="w-16 h-16 text-foreground" />
              <div>
                <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground">150+</h2>
                <p className="text-foreground/80 font-medium">Outlets Nationwide</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-20 bg-foreground/30" />
            <div className="flex items-center gap-4">
              <Users className="w-16 h-16 text-foreground" />
              <div>
                <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground">50K+</h2>
                <p className="text-foreground/80 font-medium">Happy Customers Daily</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-20 bg-foreground/30" />
            <div className="flex items-center gap-4">
              <MapPin className="w-16 h-16 text-foreground" />
              <div>
                <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground">25+</h2>
                <p className="text-foreground/80 font-medium">Cities Covered</p>
              </div>
            </div>
          </div>
        </div>
      </section>
 {/* Comprehensive Support Section */}

       <section className="py-24 bg-white relative overflow-hidden">
        {/* Background ice cream pattern with 10% opacity */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${iceCreamPattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="italic text-honey-dark">Built To Support You.</span> Designed To Scale.
            </h2>
            <div className="w-16 h-1 bg-honey mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportFeatures.map((support, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-honey/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <support.icon className="w-7 h-7 text-honey  transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-3">{support.title}</h3>
                    <ul className="space-y-2">
                      {support.items.map((item, iIndex) => (
                        <li key={iIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-honey mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Franchise Models - Apsara Style */}
      <section className="py-24 bg-cream relative overflow-x-hidden overflow-y-visible">
        {/* Background image with cream opacity */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${cartPattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-honey/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-honey-dark/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
           
            <h2 className="section-title">Franchise Models</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select the franchise model that best fits your investment capacity and business goals
            </p>
          </div>

          {/* Apsara-style layout with circular images */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
            {/* Left side - overlapping circular images */}
           <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">

              <div className="absolute left-0 top-0 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
                <img src={iceCreamParlour} alt="Ice Cream Parlour" className="w-full h-full object-cover" />
              </div>
              <div className="absolute left-12 top-24 sm:left-16 sm:top-20 md:left-28 md:top-28 w-28 h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-2xl z-20">
                <img src={iceCreamStanding} alt="Ice Cream Standing" className="w-full h-full object-cover" />
              </div>
              <div className="absolute left-4 top-44 sm:left-6 sm:top-48 md:left-12 md:top-56 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl z-30">
                <img src={iceCreamCart} alt="Ice Cream Cart" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Center title */}
            <div className="text-center lg:flex-1">
              <h3 className="font-display text-center text-2xl md:text-5xl font-bold text-foreground">
                Choose Your Models
              </h3>
              <div className="w-16 h-1 bg-honey mx-auto mt-4" />
            </div>

            {/* Right side - single large circular image */}
            <div className="w-full flex justify-center overflow-hidden">

              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img src={iceCreamParlour} alt="Honeyman Store" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Franchise Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {franchiseModels.map((model, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  model.popular ? 'ring-4 ring-honey md:-translate-y-4' : ''
                }`}
              >
                {model.popular && (
                  <div className="absolute top-4 right-4 bg-honey text-foreground text-xs font-bold px-3 py-1 rounded-full z-20">
                    MOST POPULAR
                  </div>
                )}
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={model.image} 
                    alt={model.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${model.color} opacity-60`} />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-white/80 text-sm">{model.tagline}</p>
                    <h3 className="font-display text-2xl font-bold">{model.name}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground text-sm">Investment</span>
                    <span className="font-bold text-lg text-honey-dark">{model.investment}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {model.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-honey/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-honey-dark" />
                        </div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-xl font-medium transition-all ${
                    model.popular 
                      ? 'bg-honey text-foreground hover:bg-honey-dark' 
                      : 'bg-cream text-foreground hover:bg-honey/20'
                  }`} onClick={() => window.location.href = '/contact-us'}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
     
      {/* Our Unique Format Section */}
      <section className="py-20 bg-gradient-to-r from-honey to-honey-dark overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Our Unique Format
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {uniqueFormats.map((format, index) => (
              <div key={index} className="group">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg mb-4">
                  <img 
                    src={format.image} 
                    alt={format.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {format.name}
                </h3>
                <p className="text-muted-foreground text-sm">{format.size}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

{/* Store Operatives Section */}
      <section className="py-24 bg-cream " id="store-locator">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-3 sm:px-4 py-2 bg-honey/20 rounded-full text-honey-dark font-medium text-xs sm:text-sm mb-4">
              Our Network
            </span>
            <h2 className="section-title">Store Operatives</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Explore our extensive network of store operatives across India
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search by city or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-honey focus:border-transparent text-sm sm:text-base"
              />
            </div>
            <div className="sm:w-64 relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full pl-9 sm:pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-honey focus:border-transparent appearance-none text-sm sm:text-base"
              >
                <option value="">All Regions</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              Showing {paginatedStores.length} of {filteredStores.length} stores
            </p>
          </div>

          {/* Stores Display - Table on desktop, Cards on mobile */}
          <div className="hidden md:block overflow-x-auto bg-white rounded-lg shadow-lg max-w-full">
            <table className="w-full min-w-full">
              <thead className="bg-honey/10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">S.No</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">City</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Region</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Address</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {paginatedStores.map((store, index) => (
                  <tr key={store["S.No"]} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">{store["S.No"]}</td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{store.City}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{store.Region}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground max-w-md">{store.Address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-4">
            {paginatedStores.map((store, index) => (
              <div key={store["S.No"]} className="bg-white rounded-lg shadow-lg p-4 border border-border">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{store.City}</h3>
                    <p className="text-sm text-muted-foreground">{store.Region}</p>
                  </div>
                  <span className="text-sm font-medium text-honey-dark bg-honey/10 px-2 py-1 rounded">
                    #{store["S.No"]}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{store.Address}</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 sm:px-4 py-2 border border-border rounded-lg hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  Previous
                </button>
                
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-2 sm:px-3 py-2 rounded-lg text-sm ${
                        currentPage === page
                          ? 'bg-honey text-white'
                          : 'border border-border hover:bg-muted'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 sm:px-4 py-2 border border-border rounded-lg hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      

      {/* <section className="py-24 bg-gradient-to-r from-honey to-honey-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-honey/20 rounded-full text-honey-dark font-medium text-sm mb-4">
              Our Outlets
            </span>
            <h2 className="section-title">Our Cafes Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a look at our beautifully designed cafes spread across India
            </p>
          </div>

          
          <div className="relative max-w-4xl mx-auto mb-8 bg-cream">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={cafePhotos[activePhotoIndex]} 
                alt="Cafe Gallery" 
                className="w-full h-full object-contain transition-all duration-500"
              />
            </div>
          </div>

         
          <div className="flex justify-center gap-4">
            {cafePhotos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setActivePhotoIndex(index)}
                className={`w-24 h-16 md:w-32 md:h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                  activePhotoIndex === index 
                    ? 'ring-4 ring-honey scale-105' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img src={photo} alt={`Cafe ${index + 1}`} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        </div>
      </section> */}


  {/* Our Outlets Gallery */}
      <section className="py-24 bg-white relative overflow-x-hidden overflow-y-visible"
      >
        {/* Decorative Bees */}
        <Bee className="absolute top-12 right-8 z-10" size={32} />
        <Bee className="absolute bottom-20 left-12 z-10" size={28} />
        <Bee className="absolute top-1/2 right-1/4 z-10" size={26} />
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-3 sm:px-4 py-2 bg-honey/20 rounded-full text-honey-dark font-medium text-xs sm:text-sm mb-4">
              Our Outlets
            </span>
            <h2 className="section-title">Our Outlets Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Discover our beautifully designed outlets across the country
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            {/* Carousel */}
            <div className="overflow-hidden rounded-2xl shadow-2xl w-full">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${outletCarouselIndex * (100 / responsiveImagesPerView)}%)` }}
              >
                {outletImages.map((image, index) => (
                  <div 
                    key={index} 
                    className={`flex-shrink-0 ${
                      responsiveImagesPerView === 1 ? 'w-full px-0' : 
                      responsiveImagesPerView === 2 ? 'w-1/2 px-1' : 
                      responsiveImagesPerView === 4 ? 'w-1/4 px-1 sm:px-2' : 'w-1/4 px-1 sm:px-2'
                    }`}
                  >
                    <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={image} 
                        alt={`Outlet ${index + 1}`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevOutletSlide}
              className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center text-honey-dark hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
              disabled={outletCarouselIndex === 0}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextOutletSlide}
              className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center text-honey-dark hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
              disabled={outletCarouselIndex >= outletImages.length - responsiveImagesPerView}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {Array.from({ length: outletImages.length - responsiveImagesPerView + 1 }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setOutletCarouselIndex(i)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    outletCarouselIndex === i 
                      ? 'bg-honey scale-125' 
                      : 'bg-honey/30 hover:bg-honey/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      

      {/* CTA Section - Compact */}
      <section className="py-12 bg-gradient-to-r from-honey to-honey-dark overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Sweet Journey?
          </h2>
          <p className="text-foreground/80 max-w-xl mx-auto mb-6">
            Join our growing family of successful franchise partners
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-foreground text-white px-6 py-3 rounded-xl font-medium hover:bg-foreground/90 transition-all" onClick={() => window.location.href = '/contact-us'}>
              Apply Now
            </button>
            <button className="border-2 border-foreground text-foreground px-6 py-3 rounded-xl font-medium hover:bg-foreground/10 transition-all" onClick={() => window.location.href = 'https://honeymanstore.com/wp-content/uploads/2025/12/franchise-pdf-1.pdf'}>
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Franchise;
