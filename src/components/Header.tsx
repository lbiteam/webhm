import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/honeyman-new-logo.webp";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

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
          Home
        </Link>
      </li>
      <li>
        <Link 
          to="/about-us" 
          className="text-foreground/80 hover:text-primary transition-colors font-medium"
          onClick={() => mobile && setIsOpen(false)}
        >
          About
        </Link>
      </li>
      <li>
        <Link 
          to="/products" 
          className="text-foreground/80 hover:text-primary transition-colors font-medium"
          onClick={() => mobile && setIsOpen(false)}
        >
          Products
        </Link>
      </li>
      <li>
        <Link 
          to="/franchise" 
          className="text-foreground/80 hover:text-primary transition-colors font-medium"
          onClick={() => mobile && setIsOpen(false)}
        >
          Franchise
        </Link>
      </li>
      <li>
        <Link 
          to="/gifting" 
          className="text-foreground/80 hover:text-primary transition-colors font-medium"
          onClick={() => mobile && setIsOpen(false)}
        >
          Gifting
        </Link>
      </li>
      <li>
        <Link 
          to="/contact-us" 
          className="text-foreground/80 hover:text-primary transition-colors font-medium"
          onClick={() => mobile && setIsOpen(false)}
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 sm:px-6 h-24 flex item-center">
        <nav className="flex items-center justify-between w-full">
          <Link to="/" className="flex items-center gap-2 ">
            <img src={logo} alt="Honeyman" className="h-16 sm:h-12 md:h-20 w-auto object-contain scale-150" />
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <NavItems />
          </ul>

          <div className="flex items-center gap-4">
            <button className="honey-btn hidden md:block" onClick={() => window.location.href = 'https://honeymanstore.com/'} >
              Order Now
            </button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
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
                    Order Now
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
