import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Bee from "./Bee";
import productBanner from "@/assets/Products/Product_banner.webp";
import honeyBanner from "@/assets/Products/honey-banner.webp";
import himalayanHoney from "@/assets/honeyman_journey/Screenshot 2026-01-06 131207 copy.webp";
import blackForestHoney from "@/assets/Products/black-forest-honey.webp";
import kesarKahwa from "@/assets/honeyman_journey/Screenshot 2026-01-06 131149 copy.webp";
import gingerKahwa from "@/assets/Products/ginger-kahwa.webp";
import badamKahwa from "@/assets/honeyman_journey/award-entrepreneur.webp";
import strawberry from "@/assets/Products/strawberry.webp";
import orangeJam from "@/assets/honeyman_journey/Screenshot 2026-01-06 131409 copy.webp";
import pineapple from "@/assets/Products/pineapple.webp";
import amlaTonic from "@/assets/honeyman_journey/Screenshot 2026-01-06 131239 copy.webp";
import hivebg from "@/assets/honey-bg.webp";

const timeline = [
  { year: "1971", color: "#B45309", title: "The Legacy Begins", desc: "Founded in memory of S. Jagjit Singh Kapoor (Honeyking).", icon: himalayanHoney },
  { year: "1985", color: "#B45309", title: "Beekeeping Core", desc: "Established India's strongest beekeeping base & organic clusters.", icon: blackForestHoney },
  { year: "1995", color: "#B45309", title: "R&D & Quality", desc: "Set up advanced R&D labs ensuring international-grade purity.", icon: kesarKahwa },
  { year: "2005", color: "#B45309", title: "Global Leader", desc: "Exported 4000 tons of honey in a single day—a world record.", icon: gingerKahwa },
  { year: "2010", color: "#B45309", title: "World Recognition", desc: "Honored by Apimondia for Best Honey in the World.", icon: badamKahwa },
  { year: "2013", color: "#B45309", title: "Organic Excellence", desc: "Won Best Organic Honey in the World at BIOFACH, Germany.", icon: strawberry },
  { year: "2015", color: "#B45309", title: "Biggest Exporter", desc: "APEDA India's Largest Honey Exporter for 13+ years.", icon: orangeJam },
  { year: "2018", color: "#B45309", title: "Brand Innovation", desc: "Coca-Cola Trophy for Best Retail Concept in Mumbai.", icon: pineapple },
  { year: "2023", color: "#B45309", title: "D2C Excellence", desc: "Top 100 D2C Brands of the Year – 2023.", icon: amlaTonic },
  { year: "2025", color: "#B45309", title: "100+ Outlets", desc: "Successfully expanded to 100+ outlets across India.", icon: honeyBanner },
  { year: "2026", color: "#B45309", title: "Mission 1000+ 🚀", desc: "Scaling globally while educating the world about bees.", icon: productBanner },
];

export default function HoneymanTimeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const totalWidth = 1800;
  const numItems = timeline.length;
  
  // Calculate x positions for each node - evenly spaced
  const nodePositions = timeline.map((_, index) => {
    if (numItems === 1) return totalWidth / 2;
    return (totalWidth / (numItems - 1)) * index;
  });
  
  // Create wave path that passes through each node position at y=80
  const createWavePath = () => {
    const centerY = 80;
    const points = nodePositions.map((x) => ({ x, y: centerY }));
    
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const midX = (prev.x + curr.x) / 2;
      const controlY = i % 2 === 0 ? 10 : 150;
      path += ` Q ${midX} ${controlY}, ${curr.x} ${curr.y}`;
    }
    return path;
  };
  
  const pathData = createWavePath();

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % numItems);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + numItems) % numItems);
  };

  return (
    <section className="relative py-10 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${hivebg})` }}
      />
      <div className="absolute inset-0 bg-[#FFFCF5]/80" />
      
      <div className="relative z-10">
      {/* Floating bees - hidden on mobile */}
      <div className="hidden lg:block absolute top-16 left-[8%] z-20 animate-float">
        <Bee size={28} />
      </div>
      <div className="hidden lg:block absolute top-32 right-[10%] z-20 animate-float" style={{ animationDelay: '1s' }}>
        <Bee size={24} />
      </div>
      <div className="hidden lg:block absolute bottom-24 left-[12%] z-20 animate-float" style={{ animationDelay: '2s' }}>
        <Bee size={26} />
      </div>
      <div className="hidden lg:block absolute bottom-16 right-[8%] z-20 animate-float" style={{ animationDelay: '0.5s' }}>
        <Bee size={22} />
      </div>
      
      {/* HEADER - Centered */}
      <div className="text-center mb-16">
        <h2 className="section-title">
          🐝 Honeyman Journey
        </h2>
        <p className="text-muted-foreground">From Legacy to Global Mission</p>
      </div>

      {/* Desktop View - Full Timeline */}
      <div className="hidden lg:block overflow-x-auto hide-scrollbar">
        <div className="min-w-[1900px] px-20 relative h-[600px] flex flex-col justify-center mx-auto">

          <div className="relative mt-20 h-full">
            {/* SVG LAYER - Centered vertically where all nodes will be */}
            <svg className="absolute top-1/2 left-0 w-full h-[160px] -translate-y-1/2" viewBox="0 0 1800 160" fill="none" preserveAspectRatio="xMidYMid meet">
              {/* Gray Track Background */}
              <path d={pathData} stroke="#E5E7EB" strokeWidth="4" strokeLinecap="round" />
              
              {/* Animated Honey Line - Goes through center where all nodes are */}
              <motion.path
                d={pathData}
                stroke="#F59E0B"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 6, ease: "easeInOut" }}
              />

              {/* THE FLYING BEE along the path */}
              <motion.g
                initial={{ offsetDistance: "0%" }}
                whileInView={{ offsetDistance: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 6, ease: "easeInOut" }}
                style={{ offsetPath: `path('${pathData}')` }}
              >
                <text fontSize="24" y="10" x="0">🐝</text>
              </motion.g>
            </svg>

            {/* CONTENT GRID - Nodes positioned exactly on wave path */}
            <div className="relative z-10 w-full h-full">
              {timeline.map((item, index) => {
                const isEven = index % 2 === 0;
                const xPosition = nodePositions[index];
                const xPercent = (xPosition / totalWidth) * 100;
                
                return (
                  <div 
                    key={index} 
                    className="absolute h-full flex flex-col items-center justify-center"
                    style={{ left: `${xPercent}%`, transform: 'translateX(-50%)' }}
                  >
                    
                    {/* Content above center line (for even indices) */}
                    {isEven && (
                      <div className="absolute top-0 flex flex-col items-center">
                        {/* Year Label */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.5 }}
                          style={{ backgroundColor: item.color }}
                          className="px-4 py-1 rounded shadow-lg text-white font-bold mb-4"
                        >
                          {item.year}
                        </motion.div>
                        
                        {/* Title and Description */}
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.5 + 0.3 }}
                          className="text-center mb-4 w-[160px]"
                        >
                          <h4 className="text-[13px] font-black text-amber-900 uppercase leading-tight">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-gray-600 mt-1 font-medium italic">
                            {item.desc}
                          </p>
                        </motion.div>
                      </div>
                    )}

                    {/* The Point/Node - Positioned exactly on wave path with product icon */}
                    <div className="relative z-20">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.5 + 0.2 }}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-amber-500 shadow-lg overflow-hidden flex items-center justify-center p-1"
                      >
                        <img 
                          src={item.icon} 
                          alt={item.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </motion.div>
                    </div>

                    {/* Content below center line (for odd indices) */}
                    {!isEven && (
                      <div className="absolute bottom-0 flex flex-col items-center">
                        {/* Year Label */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.5 }}
                          style={{ backgroundColor: item.color }}
                          className="px-4 py-1 rounded shadow-lg text-white font-bold mt-4"
                        >
                          {item.year}
                        </motion.div>
                        
                        {/* Title and Description */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.5 + 0.3 }}
                          className="text-center mt-4 w-[160px]"
                        >
                          <h4 className="text-[13px] font-black text-amber-900 uppercase leading-tight">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-gray-600 mt-1 font-medium italic">
                            {item.desc}
                          </p>
                        </motion.div>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View - Single Item with Arrows */}
      <div className="lg:hidden px-4">
        <div className="relative max-w-md mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevItem}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg border-2 border-amber-300 transition-all active:scale-95"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-amber-700" />
          </button>
          
          <button
            onClick={nextItem}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg border-2 border-amber-300 transition-all active:scale-95"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-amber-700" />
          </button>

          {/* Timeline Item */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl p-4 md:p-6 shadow-xl border-2 border-amber-200 mt-8 mx-12 md:mx-16"
          >
            {/* Product Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-4 border-amber-500 shadow-lg overflow-hidden flex items-center justify-center p-1">
                <img 
                  src={timeline[currentIndex].icon} 
                  alt={timeline[currentIndex].title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            
            {/* Year Label */}
            <div
              style={{ backgroundColor: timeline[currentIndex].color }}
              className="inline-block px-4 py-2 rounded-lg shadow-md text-white font-bold mb-4"
            >
              {timeline[currentIndex].year}
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-black text-amber-900 uppercase mb-3">
              {timeline[currentIndex].title}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              {timeline[currentIndex].desc}
            </p>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {timeline.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-amber-500 w-8'
                      : 'bg-amber-200 hover:bg-amber-300'
                  }`}
                  aria-label={`Go to ${timeline[index].year}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Simple Wave Line for Mobile */}
          <div className="relative h-1 bg-amber-100 rounded-full mt-6 mx-4">
            <motion.div
              className="h-full bg-amber-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentIndex + 1) / numItems) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}