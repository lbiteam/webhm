import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Languages } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/Honeyman-logo.webp";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const NavItems = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      <li>
        <Link 
          to="/" 
          className="text-foreground/80 hover:text-primary transition-colors font-medium"
          onClick={() => mobile && setIsOpen(false)}
        >
          {t("header.home")}
        </Link>
      </li>
      <li>
        <Link 
          to="/about-us" 
          className="text-foreground/80 hover:text-primary transition-colors font-medium"
          onClick={() => mobile && setIsOpen(false)}
        >
          {t("header.about")}
        </Link>
      </li>
      <li>
        <Link 
          to="/products" 
          className="text-foreground/80 hover:text-primary transition-colors font-medium"
          onClick={() => mobile && setIsOpen(false)}
        >
          {t("header.products")}
        </Link>
      </li>
      <li>
        <Link 
          to="/franchise" 
          className="text-foreground/80 hover:text-primary transition-colors font-medium"
          onClick={() => mobile && setIsOpen(false)}
        >
          {t("header.franchise")}
        </Link>
      </li>
      <li>
        <Link 
          to="/gifting" 
          className="text-foreground/80 hover:text-primary transition-colors font-medium"
          onClick={() => mobile && setIsOpen(false)}
        >
          {t("header.gifting")}
        </Link>
      </li>
      <li>
        <Link 
          to="/contact-us" 
          className="text-foreground/80 hover:text-primary transition-colors font-medium"
          onClick={() => mobile && setIsOpen(false)}
        >
          {t("header.contact")}
        </Link>
      </li>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 sm:px-6 h-24 flex item-center">
        <nav className="flex items-center justify-between w-full">
          <Link to="/" className="flex items-center gap-2 ">
            <img src={logo} alt="Honeyman" className="h-16 sm:h-12 md:h-20 w-auto object-contain scale-[1.75]" />
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            <NavItems />
          </ul>

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <Select value={language} onValueChange={(value) => setLanguage(value as "en" | "hi" | "pun" | "ar" | "span")}>
              <SelectTrigger className="w-[120px] h-10 border-border bg-background/50 hover:bg-background/80">
                <div className="flex items-center gap-2">
                  <Languages className="h-4 w-4" />
                  <SelectValue>
                    {language === "en" ? "English" : language === "hi" ? "हिंदी" : language === "pun" ? "Punjabi" : language === "ar" ? "Arabic" : language === "span" ? "Spanish" : "English"}
                  </SelectValue>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">हिंदी</SelectItem>
                <SelectItem value="pun">Punjabi</SelectItem>
                <SelectItem value="ar">Arabic</SelectItem>
                <SelectItem value="span">Spanish</SelectItem>
              </SelectContent>
            </Select>

            <button className="honey-btn hidden lg:block" onClick={() => window.location.href = 'https://honeymanstore.com/'} >
              {t("header.orderNow")}
            </button>

            {/* Mobile & Tablet Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <button className="p-2 text-foreground hover:text-primary transition-colors">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background border-l border-border">
                <div className="flex flex-col gap-8 mt-8">
                  <ul className="flex flex-col gap-6">
                    <NavItems mobile />
                  </ul>
                  <button className="honey-btn w-full" onClick={() => setIsOpen(false)}>
                    {t("header.orderNow")}
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
