import { Link } from "react-router-dom";
import Bee from "./Bee";
import honeyDipper from "@/assets/honey-dipper.jpg";
import logo from "@/assets/honeyman-new-logo.webp";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const footerLinks = [
  { name: "Store", href: "/#products" },
  { name: "About Us", href: "/about-us" },
  { name: "Franchise", href: "/franchise" },
  { name: "Gifting", href: "/gifting" },
  { name: "Our Media", href: "/about-us#media" },
  { name: "Store Locator", href: "/franchise#store-locator" },
  { name: "Contact Us", href: "/contact-us" },
];

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/honeymanstore?igsh=dngwa2kwOHQwemY4", icon: Instagram },
  { name: "Facebook", href: "https://www.facebook.com/share/1DWS51coyk/", icon: Facebook },
  { name: "YouTube", href: "https://youtube.com/@honeymanstore?si=4MRShuPf2K9GA3Y0", icon: Youtube },
 
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Main footer content with background */}
      <div 
        className="relative pt-12 pb-8"
        style={{
          backgroundColor: '#ffe248',
          backgroundImage: `url(${honeyDipper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'soft-light',
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-[#8c3100]/90" />
        
        {/* Bees */}
        <Bee className="absolute top-6 left-[12%]" size={26} />
        <Bee className="absolute top-14 right-[18%]" size={22} />
        <Bee className="absolute bottom-20 left-[65%]" size={24} />
        <Bee className="absolute top-20 left-[40%]" size={20} />

        <div className="container mx-auto px-6 relative z-10">
          {/* Top Section - Logo and Social */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src={logo} 
                alt="Honeyman" 
                className="h-16 md:h-20 w-auto object-contain  scale-150"
              />
            </Link>

            {/* Follow Us - Right Side */}
            <div className="flex flex-col items-center md:items-end gap-3">
              <h4 className="font-display text-lg font-semibold text-white">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-amber-900/10 flex items-center justify-center hover:bg-amber-900 hover:text-amber-50 text-white transition-all duration-300 hover:scale-110 border border-amber-900/20"
                    title={link.name}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-amber-900/20 mb-6" />

          {/* Bottom Section - Navigation Links and Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-white hover:text-yellow-900 text-sm font-medium transition-colors duration-300 hover:underline underline-offset-4"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <a href="mailto:hello@honeyman.in" className="text-white hover:text-yellow-200 text-sm font-medium transition-colors">
                hello@honeyman.in
              </a>
              <a href="tel:+919650305025" className="text-white hover:text-yellow-200 text-sm font-medium transition-colors">
                +91 96503 05025
              </a>
            </div>
          </div>
        </div>

        {/* Honeycomb pattern overlay */}
        <div className="absolute bottom-20 left-0 right-0 h-24 pointer-events-none opacity-20">
          <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="footerHoneycomb" x="0" y="0" width="40" height="69.28" patternUnits="userSpaceOnUse">
                <polygon points="20,0 40,11.55 40,34.64 20,46.19 0,34.64 0,11.55" fill="none" stroke="hsl(30 30% 15%)" strokeWidth="1" opacity="0.4"/>
                <polygon points="20,46.19 40,57.74 40,80.83 20,92.38 0,80.83 0,57.74" fill="none" stroke="hsl(30 30% 15%)" strokeWidth="1" opacity="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footerHoneycomb)"/>
          </svg>
        </div>
      </div>

      {/* Copyright Bar - Yellow Background */}
      <div className="bg-[#f9dc8d] py-4">
        <div className="container mx-auto px-6">
          <p className="text-center text-[#2a1810] text-xs md:text-sm font-medium">
            © 2025 Honeyman. All rights reserved. | Designed & Developed with 🍯
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
