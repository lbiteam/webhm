import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Honeyman-logo.webp";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[hsl(var(--background)/0.95)] backdrop-blur-md border-b border-border/50">
      {/* Top bar */}
      <div className="hidden lg:flex bg-[hsl(var(--honey-dark))] text-[hsl(var(--honey-cream))] text-[11px] py-1.5">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <span className="font-medium">
            India's leading premium honey brand — now 160+ stores strong nationwide.
          </span>
          <div className="flex items-center space-x-6">
            <span>📍 Gurugram, HQ 122018</span>
            <span>✉ hello@honeyman.in</span>
            <span>📞 +91 96503 05025</span>
            <span>🕐 Mon - Sat: 10:00 to 19:00</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Honeyman" className="h-16 lg:h-24 w-auto animate-honey-drip" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-sm font-semibold text-foreground hover:text-[hsl(var(--honey-gold))] transition-colors">Home</Link>
            <Link to="/about" className="text-sm font-semibold text-foreground hover:text-[hsl(var(--honey-gold))] transition-colors">About</Link>
            <Link to="/wellness" className="text-sm font-semibold text-foreground hover:text-[hsl(var(--honey-gold))] transition-colors">Blog</Link>
            <a href="https://honeymanfranchise.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-foreground hover:text-[hsl(var(--honey-gold))] transition-colors">Franchise</a>
            <a href="https://honeymanstore.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-foreground hover:text-[hsl(var(--honey-gold))] transition-colors">Store</a>
            <a href="https://honeymangifting.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-foreground hover:text-[hsl(var(--honey-gold))] transition-colors">Gifting</a>
            <Link to="/contact" className="text-sm font-semibold text-foreground hover:text-[hsl(var(--honey-gold))] transition-colors">Contact</Link>
          </nav>

          {/* Social links desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a href="https://instagram.com/honeyman" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border hover:border-[hsl(var(--honey-gold))] hover:bg-[hsl(var(--honey-light))] transition-all flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://facebook.com/honeyman" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border hover:border-[hsl(var(--honey-gold))] hover:bg-[hsl(var(--honey-light))] transition-all flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://youtube.com/honeyman" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border hover:border-[hsl(var(--honey-gold))] hover:bg-[hsl(var(--honey-light))] transition-all flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--honey-light))] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-slide-down">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold">Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold">About</Link>
            <Link to="/wellness" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold">Blog</Link>
            <a href="https://honeymanfranchise.com" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm font-semibold">Franchise</a>
            <a href="https://honeymanstore.com" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm font-semibold">Store</a>
            <a href="https://honeymangifting.com" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm font-semibold">Gifting</a>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold">Contact</Link>
            <div className="flex items-center space-x-3 pt-3 border-t border-border">
              <a href="https://instagram.com/honeyman" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://facebook.com/honeyman" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://youtube.com/honeyman" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
