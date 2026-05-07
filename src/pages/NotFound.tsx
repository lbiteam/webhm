import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center justify-center">
        <div className="text-center animate-slide-up">
          <h1 className="mb-4 text-5xl md:text-6xl font-bold" style={{ color: "hsl(var(--honey-dark))" }}>
            404
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-lg honey-gradient text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
