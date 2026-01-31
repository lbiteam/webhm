import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Bee from "./Bee";
import { useLanguage } from "@/contexts/LanguageContext";

import himalayanHoney from "@/assets/Products/himalayan-honey.webp";
import blackForestHoney from "@/assets/Products/black-forest-honey.webp";
import kesarKahwa from "@/assets/Products/kesar-kahwa.webp";
import gingerKahwa from "@/assets/Products/ginger-kahwa.webp";
import badamKahwa from "@/assets/Products/Badam-kahwa.webp";
import strawberry from "@/assets/Products/strawberry.webp";
import orangeJam from "@/assets/Products/orange-jam.webp";
import pineapple from "@/assets/Products/pineapple.webp";
import amlaTonic from "@/assets/Products/amla-tonic.webp";
import honeyBanner from "@/assets/Products/honey-banner.webp";
import productBanner from "@/assets/Products/Product-explore.webp";
import icecreamjourney from "@/assets/icecreams/chocolate.webp"
import cafejourney from "@/assets/franchise/Cafe-image.webp"

export default function HoneymanTimeline() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const timelineYears = ["1971", "1985", "1995", "2005", "2010", "2013", "2015", "2018", "2023", "2025", "2026"];
  const timelineIcons = [
    himalayanHoney,
    blackForestHoney,
    kesarKahwa,
    gingerKahwa,
    badamKahwa,
    strawberry,
    orangeJam,
    pineapple,
    amlaTonic,
    cafejourney,
    icecreamjourney,
  ];

  const timeline = timelineYears.map((year, index) => ({
    year,
    title: t(`honeyjourney.timeline.${year}.title`),
    desc: t(`honeyjourney.timeline.${year}.desc`),
    icon: timelineIcons[index],
  }));

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const numItems = timeline.length;

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % numItems);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + numItems) % numItems);
  };

  // Split timeline into two rows for desktop
  const firstRow = timeline.slice(0, 6);
  const secondRow = timeline.slice(6);

  return (
    <section 
      ref={containerRef}
      className="relative py-16 md:py-20 overflow-hidden bg-cream"
    >
      {/* Floating Bees */}
      <motion.div
        className="absolute top-20 right-[15%] hidden lg:block"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Bee size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-[10%] hidden lg:block"
        animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Bee size={30} />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-[5%] hidden lg:block"
        animate={{ y: [0, 8, 0], x: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Bee size={25} />
      </motion.div>

      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          {t("honeyjourney.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto"  
        >
          {t("honeyjourney.subtitle")}
        </motion.p>
      </div>

      {/* Desktop View - Two Row Timeline */}
      <div className="hidden lg:block max-w-7xl mx-auto px-8">
        {/* First Row */}
        <div className="relative mb-8">
          <div className="flex justify-between items-start relative">
            {/* Connecting Line */}
            <div className="absolute top-[60px] left-[8%] right-[8%] h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full z-0" />
            
            {firstRow.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center relative z-10 w-[15%]"
              >
                {/* Year Badge - Using footer yellow color */}
                <div className="bg-[#ffe248] px-4 py-2 rounded-lg font-bold text-lg shadow-lg mb-3 text-honey-dark">
                  {item.year}
                </div>
                
                {/* Product Image Node */}
                <div className="w-20 h-20 rounded-full bg-white shadow-xl border-4 border-primary overflow-hidden mb-4 flex items-center justify-center">
                  <img 
                    src={item.icon} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Arrow indicator */}
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-primary mb-3" />
                
                {/* Text Content */}
                <div className="text-center px-2">
                  <h4 className="font-bold text-honey-dark text-sm mb-1 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-tight">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="relative mt-12">
          <div className="flex justify-center gap-8 items-start relative">
            {/* Connecting Line */}
            <div className="absolute top-[60px] left-[11.5%] right-[13%] h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full z-0" />
            
            {secondRow.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: (index + 6) * 0.1 }}
                className="flex flex-col items-center relative z-10 w-[16%]"
              >
                {/* Year Badge */}
                <div className="bg-[#ffe248] px-4 py-2 rounded-lg font-bold text-lg shadow-lg mb-3 text-honey-dark">
                  {item.year}
                </div>
                
                {/* Product Image Node */}
                <div className="w-20 h-20 rounded-full bg-white shadow-xl border-4 border-primary overflow-hidden mb-4 flex items-center justify-center">
                  <img 
                    src={item.icon} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Arrow indicator */}
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-primary mb-3" />
                
                {/* Text Content */}
                <div className="text-center px-2">
                  <h4 className="font-bold text-honey-dark text-sm mb-1 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-tight">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View - Carousel Style */}
      <div className="lg:hidden px-4">
        <div className="relative max-w-sm mx-auto">
          
          {/* Navigation Arrows */}
          <button
            onClick={prevItem}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-honey-dark" />
          </button>
          
          <button
            onClick={nextItem}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-honey-dark" />
          </button>

          {/* Timeline Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-6 mx-8"
          >
            {/* Year Badge */}
            <div className="flex justify-center mb-4">
              <div className="bg-[#ffe248] px-6 py-2 rounded-lg font-bold text-xl text-honey-dark shadow-lg">
                {timeline[currentIndex].year}
              </div>
            </div>
            
            {/* Product Image */}
            <div className="w-24 h-24 mx-auto rounded-full bg-white shadow-lg border-4 border-primary overflow-hidden mb-4">
              <img 
                src={timeline[currentIndex].icon} 
                alt={timeline[currentIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Title */}
            <h4 className="font-bold text-honey-dark text-lg mb-2 text-center">
              {timeline[currentIndex].title}
            </h4>
            
            {/* Description */}
            <p className="text-muted-foreground text-sm text-center leading-relaxed">
              {timeline[currentIndex].desc}
            </p>
          </motion.div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {timeline.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-secondary hover:bg-primary/50'
                }`}
                aria-label={`${timeline[index].year}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
