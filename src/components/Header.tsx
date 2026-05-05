import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/Honeyman-logo.webp";

const SUPPORT_TEL = "+91 9289947025";
const SUPPORT_DISPLAY = "+91 96503 05025";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full font-sans shadow-md">
      <div className="hidden lg:flex bg-white text-gray-500 text-[11px] py-2 border-b border-amber-100">
        <div className="container mx-auto px-6 flex justify-between items-center gap-4">
          <span className="font-medium">
            India&apos;s leading premium honey brand — now 180+ stores strong nationwide.
          </span>
          <div className="flex items-center flex-wrap justify-end gap-x-6 gap-y-1 shrink-0">
            <span className="flex items-center">
              <span className="mr-2 text-amber-500">📍</span> Gurugram, HQ 122018
            </span>
            <span className="flex items-center">
              <span className="mr-2 text-amber-500">✉</span> hello@honeyman.in
            </span>
            <span className="flex items-center">
              <span className="mr-2 text-amber-500">📞</span> {SUPPORT_DISPLAY}
            </span>
            <span className="flex items-center">
              <span className="mr-2 text-amber-500">🕐</span> Mon - Sat: 10:00 to 19:00
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#97430b] text-white flex items-center justify-between gap-2 px-3 sm:px-4 py-2 relative">
        {/* Left: Customer support */}
        <a
          href={`tel:${SUPPORT_TEL}`}
          className="hidden sm:flex flex-col items-center justify-center border border-white/60 rounded px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold shrink-0 hover:bg-white/10 transition-colors"
        >
          <div className="flex items-center gap-1 text-amber-300">
            <Phone size={14} fill="currentColor" strokeWidth={0} aria-hidden />
            <span className="text-xs sm:text-sm tracking-wide whitespace-nowrap">
              {SUPPORT_TEL}
            </span>
          </div>
          <div className="text-white tracking-wider mt-0.5 text-center leading-tight">
            FOR CUSTOMER SUPPORT
          </div>
        </a>

        {/* Mobile: compact phone */}
        <a
          href={`tel:${SUPPORT_DISPLAY}`}
          className="sm:hidden flex items-center justify-center rounded-full border border-white/60 w-10 h-10 shrink-0 text-amber-300 hover:bg-white/10 transition-colors"
          aria-label={`Call ${SUPPORT_DISPLAY}`}
        >
          <Phone size={18} fill="currentColor" strokeWidth={0} />
        </a>

        {/* Center: nav + logo */}
        <nav className="hidden lg:flex items-center justify-center gap-5 xl:gap-8 text-sm font-extrabold tracking-wider uppercase flex-1">
          <Link to="/" className="hover:text-amber-300 transition-colors">
            Home
          </Link>
          <Link to="/about-us" className="hover:text-amber-300 transition-colors">
            About
          </Link>

          <Link
            to="/"
            className="w-20 h-20 xl:w-24 xl:h-24 bg-white rounded-full flex items-center justify-center z-10 mx-1 xl:mx-2 shadow-lg transform translate-y-2 border-[3px] border-[#97430b] shrink-0"
            aria-label="Honeyman home"
          >
            <img
              src={logo}
              alt="Honeyman"
              className="rounded-full w-full h-full object-contain p-1"
            />
          </Link>

          <Link to="/blog" className="hover:text-amber-300 transition-colors">
            Blog
          </Link>
          <a
            href="https://honeymanstore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 transition-colors"
          >
            Store
          </a>
        </nav>

        {/* Mobile / tablet: logo center */}
        <div className="flex lg:hidden flex-1 justify-center min-w-0">
          <Link
            to="/"
            className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-[3px] border-white/90 shrink-0"
          >
            <img
              src={logo}
              alt="Honeyman"
              className="rounded-full w-full h-full object-contain p-0.5"
            />
          </Link>
        </div>

        {/* Right: enquiries (same number — single business line) */}
        <a
          href={`tel:${SUPPORT_TEL}`}
          className="hidden sm:flex flex-col items-center justify-center border border-white/60 rounded px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold shrink-0 hover:bg-white/10 transition-colors"
        >
          <div className="flex items-center gap-1 text-amber-300">
            <Phone size={14} fill="currentColor" strokeWidth={0} aria-hidden />
            <span className="text-xs sm:text-sm tracking-wide whitespace-nowrap">
              {SUPPORT_DISPLAY}
            </span>
          </div>
          <div className="text-white tracking-wider mt-0.5 text-center leading-tight">
            STORE & ORDERS
          </div>
        </a>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center border border-white/40 hover:bg-white/10 transition-colors shrink-0"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/20 bg-[#8a3d0a]">
          <nav className="px-4 py-3 space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-sm font-bold tracking-wide uppercase border-b border-white/10 hover:text-amber-300"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-sm font-bold tracking-wide uppercase border-b border-white/10 hover:text-amber-300"
            >
              About
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-sm font-bold tracking-wide uppercase border-b border-white/10 hover:text-amber-300"
            >
              Blog
            </Link>
            <a
              href="https://honeymanstore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 text-sm font-bold tracking-wide uppercase border-b border-white/10 hover:text-amber-300"
            >
              Store
            </a>
            <a
              href={`tel:${SUPPORT_TEL}`}
              className="flex items-center gap-2 py-3 text-sm font-bold text-amber-300"
            >
              <Phone size={16} fill="currentColor" strokeWidth={0} />
              {SUPPORT_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
