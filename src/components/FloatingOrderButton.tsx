import { ShoppingCart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FloatingOrderButton = () => {
  const { t } = useLanguage();
  
  return (
    <a
      href="https://honeymanstore.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group animate-pulse hover:animate-none"
      aria-label="Order Now"
    >
      <div className="bg-gradient-to-r from-honey to-honey-dark text-white rounded-full shadow-2xl hover:shadow-honey transition-all duration-300 hover:scale-110 flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4">
        <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
        <span className="font-bold text-sm sm:text-base hidden sm:inline-block whitespace-nowrap">
          {t("floatingOrderButton.text")}
        </span>
      </div>
    </a>
  );
};

export default FloatingOrderButton;
