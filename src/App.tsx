import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Franchise from "./pages/Franchise";
import Gifting from "./pages/Gifting";
import Products from "./pages/Products";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import HoneyBenefits from "./pages/blog/HoneyBenefits";
import OrganicVsWildHoney from "./pages/blog/OrganicVsWildHoney";
import HowToIdentifyPureHoney from "./pages/blog/HowToIdentifyPureHoney";
import AnalyticsTracker from "./components/AnalyticsTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnalyticsTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/gifting" element={<Gifting />} />
            <Route path="/products" element={<Products />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/blog" element={<Blog />} />
          <Route path="/blog/7-benefits-of-honey" element={<HoneyBenefits />} />
          <Route path="/blog/organic-vs-wild-honey" element={<OrganicVsWildHoney />} />
          <Route path="/blog/how-to-identify-pure-honey" element={<HowToIdentifyPureHoney />} /> */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
