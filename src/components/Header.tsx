import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/Honeyman-logo.webp";

const SUPPORT_TEL = "+91 9289947025";
const SUPPORT_DISPLAY = "+91 96503 05025";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full font-sans shadow-md">
      {/* ── Top info bar (desktop only) ── */}
      <div className="hidden lg:flex bg-white text-gray-500 text-[11px] py-2 border-b border-amber-100">
        <div className="container mx-auto px-6 flex justify-between items-center gap-4">
          <span className="font-medium">
            India&apos;s leading premium honey brand — now 180+ stores strong
            nationwide.
          </span>
          <div className="flex items-center flex-wrap justify-end gap-x-6 gap-y-1 shrink-0">
            <span className="flex items-center">
              <span className="mr-2 text-amber-500">📍</span> Gurugram, HQ
              122018
            </span>
            <span className="flex items-center">
              <span className="mr-2 text-amber-500">✉</span>{" "}
              hello@honeyman.in
            </span>
            <span className="flex items-center">
              <span className="mr-2 text-amber-500">📞</span>{" "}
              {SUPPORT_DISPLAY}
            </span>
            <span className="flex items-center">
              <span className="mr-2 text-amber-500">🕐</span> Mon - Sat: 10:00
              to 19:00
            </span>
          </div>
        </div>
      </div>

      {/* ── Main header bar ── */}
      <div className="bg-[#97430b] text-white flex items-center gap-2 px-3 sm:px-4 md:px-5 lg:px-6 py-2 relative min-h-[3.25rem] sm:min-h-[3.5rem] md:min-h-[4rem] lg:min-h-[4.5rem]">
        {/* ── Left section ── */}
        <div className="flex items-center justify-start gap-2 lg:gap-4 lg:flex-1 lg:min-w-0">
          {/* Mobile: compact phone icon */}
          <a
            href={`tel:${SUPPORT_DISPLAY.replace(/\s/g, "")}`}
            className="sm:hidden flex items-center justify-center rounded-full border border-white/60 w-10 h-10 shrink-0 text-amber-300 hover:bg-white/10 transition-colors"
            aria-label={`Call ${SUPPORT_DISPLAY}`}
          >
            <Phone size={18} fill="currentColor" strokeWidth={0} />
          </a>

          {/* sm+: stylish phone badge, scaled down on smaller screens */}
          <a
            href={`tel:${SUPPORT_TEL}`}
            className="hidden sm:flex shrink-0 flex-col items-center justify-center py-0.5 origin-left scale-[0.52] md:scale-[0.68] lg:scale-100 hover:opacity-95 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fccc2c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#97430b] rounded-sm"
            aria-label={`Call customer support ${SUPPORT_TEL}`}
          >
            <div className="relative flex flex-col items-center gap-0 pb-0.5">
              <div className="relative z-[2] flex items-center gap-3 bg-[#fccc2c] text-[#4a2e15] font-black uppercase tracking-wide px-4 py-2 -rotate-3 border-[3px] border-[#4a2e15] shadow-[4px_6px_15px_rgba(0,0,0,0.15)] text-lg xl:text-xl whitespace-nowrap font-[Impact,Arial_Black,sans-serif]">
                <Phone
                  className="size-7 shrink-0 text-[#4a2e15]"
                  fill="currentColor"
                  strokeWidth={0}
                  aria-hidden
                />
                <span>{SUPPORT_TEL}</span>
              </div>
              <div className="relative z-[1] mt-2.5 bg-[#4a2e15] text-[#fccc2c] font-black uppercase tracking-[0.12em] px-5 py-1.5 rotate-2 border-[3px] border-[#fccc2c] shadow-[2px_4px_10px_rgba(0,0,0,0.2)] text-sm whitespace-nowrap font-[Impact,Arial_Black,sans-serif] leading-tight">
                For Customer Support
              </div>
            </div>
          </a>

          {/* "Join the revolution" — shown on xl+ where there is room */}
          <div
            className="hidden xl:flex relative flex-col items-center justify-center shrink-0 font-[Impact,Arial_Black,sans-serif] py-1 w-[11rem]"
            role="group"
            aria-label="Join the global revolution against refined sugar"
          >
            <div className="relative z-[3] -mb-1.5 bg-[#fccc2c] text-[#4a2e15] font-black uppercase px-3 py-0.5 -rotate-[4deg] border-2 border-[#4a2e15] shadow-[2px_3px_6px_rgba(0,0,0,0.15)] text-lg leading-none tracking-wide">
              JOIN
            </div>
            <div className="relative z-[2] bg-[#4a2e15] text-[#fccc2c] font-black uppercase tracking-[0.08em] px-3 py-1 shadow-[1px_2px_5px_rgba(0,0,0,0.2)] text-[11px] whitespace-nowrap text-center leading-none">
              The Global Revolution
            </div>
            <div className="relative z-[1] -mt-1.5 bg-[#fccc2c] text-[#4a2e15] font-black uppercase tracking-[0.06em] px-3 py-1 rotate-[3deg] border-2 border-[#4a2e15] shadow-[1px_2px_5px_rgba(0,0,0,0.2)] text-[11px] whitespace-nowrap leading-none">
              Against Refined Sugar
            </div>
          </div>
        </div>

        {/* ── Center: Logo (mobile / tablet) ── */}
        <div className="flex lg:hidden flex-1 justify-center min-w-0 px-1">
          <Link
            to="/"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-[3px] border-[#97430b] shrink-0 translate-y-0.5 sm:translate-y-1"
          >
            <img
              src={logo}
              alt="Honeyman"
              className="rounded-full w-full h-full object-contain p-0.5 sm:p-1"
            />
          </Link>
        </div>

        {/* ── Center: nav + logo (desktop, in normal flow so nothing overlaps) ── */}
        <nav
          className="hidden lg:flex shrink-0 items-center justify-center gap-4 xl:gap-6 2xl:gap-8 text-sm font-extrabold tracking-wider uppercase whitespace-nowrap"
          aria-label="Main navigation"
        >
          <Link to="/" className="hover:text-amber-300 transition-colors">
            Home
          </Link>
          <Link
            to="/about-us"
            className="hover:text-amber-300 transition-colors"
          >
            About
          </Link>
          <Link
            to="/"
            className="w-24 h-24 xl:w-28 xl:h-28 2xl:w-36 2xl:h-36 bg-white rounded-full flex items-center justify-center shadow-lg translate-y-1.5 xl:translate-y-2 2xl:translate-y-2.5 border-[3px] xl:border-4 border-[#97430b] shrink-0"
            aria-label="Honeyman home"
          >
            <img
              src={logo}
              alt="Honeyman"
              className="rounded-full w-full h-full object-contain p-1 xl:p-1.5 2xl:p-2"
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

        {/* ── Right section ── */}
        <div className="flex items-center justify-end gap-2 lg:gap-4 lg:flex-1 lg:min-w-0">
          {/* sm+: stylish franchise badge, scaled down on smaller screens */}
          <a
            href={`tel:${SUPPORT_DISPLAY.replace(/\s/g, "")}`}
            className="hidden sm:flex shrink-0 flex-col items-center justify-center py-0.5 origin-right scale-[0.52] md:scale-[0.68] lg:scale-100 hover:opacity-95 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fccc2c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#97430b] rounded-sm"
            aria-label={`Call for franchise enquiries ${SUPPORT_DISPLAY}`}
          >
            <div className="relative flex flex-col items-center gap-0 pb-0.5">
              <div className="relative z-[2] flex items-center gap-3 bg-[#fccc2c] text-[#4a2e15] font-black uppercase tracking-wide px-4 py-2 -rotate-3 border-[3px] border-[#4a2e15] shadow-[4px_6px_15px_rgba(0,0,0,0.15)] text-lg xl:text-xl whitespace-nowrap font-[Impact,Arial_Black,sans-serif]">
                <Phone
                  className="size-7 shrink-0 text-[#4a2e15]"
                  fill="currentColor"
                  strokeWidth={0}
                  aria-hidden
                />
                <span>{SUPPORT_DISPLAY}</span>
              </div>
              <div className="relative z-[1] mt-2.5 bg-[#4a2e15] text-[#fccc2c] font-black uppercase tracking-[0.12em] px-5 py-1.5 rotate-2 border-[3px] border-[#fccc2c] shadow-[2px_4px_10px_rgba(0,0,0,0.2)] text-sm whitespace-nowrap font-[Impact,Arial_Black,sans-serif] leading-tight">
                For Franchise Enquiries
              </div>
            </div>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center border border-white/40 hover:bg-white/10 transition-colors shrink-0"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile overlay ── */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden
        />
      )}

      {/* ── Mobile menu ── */}
      <div
        ref={menuRef}
        className={`lg:hidden relative z-50 border-t border-white/20 bg-[#8a3d0a] text-white overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-[28rem] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="px-4 sm:px-6 py-3 space-y-1" aria-label="Mobile navigation">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 text-sm font-bold tracking-wide uppercase border-b border-white/10 hover:text-amber-300 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 text-sm font-bold tracking-wide uppercase border-b border-white/10 hover:text-amber-300 transition-colors"
          >
            About
          </Link>
          <Link
            to="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 text-sm font-bold tracking-wide uppercase border-b border-white/10 hover:text-amber-300 transition-colors"
          >
            Blog
          </Link>
          <a
            href="https://honeymanstore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 text-sm font-bold tracking-wide uppercase border-b border-white/10 hover:text-amber-300 transition-colors"
          >
            Store
          </a>

          <div className="pt-2 space-y-2">
            <a
              href={`tel:${SUPPORT_TEL}`}
              className="flex items-center gap-2 py-2 text-sm font-bold text-amber-300 hover:text-amber-200 transition-colors"
            >
              <Phone size={16} fill="currentColor" strokeWidth={0} />
              <span>{SUPPORT_TEL}</span>
              <span className="ml-auto text-[10px] uppercase tracking-wider text-white/50 font-semibold">
                Support
              </span>
            </a>
            <a
              href={`tel:${SUPPORT_DISPLAY.replace(/\s/g, "")}`}
              className="flex items-center gap-2 py-2 text-sm font-bold text-amber-300 hover:text-amber-200 transition-colors"
            >
              <Phone size={16} fill="currentColor" strokeWidth={0} />
              <span>{SUPPORT_DISPLAY}</span>
              <span className="ml-auto text-[10px] uppercase tracking-wider text-white/50 font-semibold">
                Franchise
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
