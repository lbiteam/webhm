import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import vanTulsiHoney from "@/assets/van-tulsi-honey.webp";
import organicHoney from "@/assets/organic-honey.webp";
import blackForestHoney from "@/assets/black-forest-honey.webp";
import himalayanHoney from "@/assets/himalayan-honey.webp";
import sidrHoney from "@/assets/sidr-honey.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const ProductsCarousel = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: t("productsCarousel.products.vanTulsi.name"),
      description: t("productsCarousel.products.vanTulsi.description"),
      weight: "250g",
      image: vanTulsiHoney,
    },
    {
      id: 2,
      name: t("productsCarousel.products.organic.name"),
      description: t("productsCarousel.products.organic.description"),
      weight: "250g",
      image: organicHoney,
    },
    {
      id: 3,
      name: t("productsCarousel.products.blackForest.name"),
      description: t("productsCarousel.products.blackForest.description"),
      weight: "250g",
      image: blackForestHoney,
    },
    {
      id: 4,
      name: t("productsCarousel.products.himalayan.name"),
      description: t("productsCarousel.products.himalayan.description"),
      weight: "250g",
      image: himalayanHoney,
    },
    {
      id: 5,
      name: t("productsCarousel.products.sidr.name"),
      description: t("productsCarousel.products.sidr.description"),
      weight: "250g",
      image: sidrHoney,
    },
  ];
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">{t("productsCarousel.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          {t("productsCarousel.description")}
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-honey text-foreground shadow-lg flex items-center justify-center hover:bg-honey-dark transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-honey text-foreground shadow-lg flex items-center justify-center hover:bg-honey-dark transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Products slider */}
          <div className="overflow-hidden mx-8">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-cream rounded-2xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 group">
                    {/* Product image */}
                    <div className="relative mb-6 overflow-hidden rounded-xl bg-white">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {t("productsCarousel.pureBadge")}
                      </div>
                    </div>
                    
                    {/* Product info */}
                    <h3 className="font-display text-xl font-medium text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {t("productsCarousel.netWeight")} {product.weight}
                      </span>
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-honey w-8' 
                    : 'bg-honey/30 hover:bg-honey/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;
