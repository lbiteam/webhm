import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "hi" | "pun"|"ar"|"span";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Get language from localStorage or default to English
    const savedLanguage = localStorage.getItem("language") as Language;
    return savedLanguage || "en";
  });

  const [translations, setTranslations] = useState<Record<string, any>>({});

  useEffect(() => {
    // Load translations based on current language
    const loadTranslations = async () => {
      try {
        let translationsData;
        if (language === "en") {
          translationsData = (await import("../locales/en.json")).default;
        } else if (language === "hi") {
          translationsData = (await import("../locales/hi.json")).default;
        } else if (language === "pun") {
          translationsData = (await import("../locales/pun.json")).default;
        } else if (language === "ar") {
          translationsData = (await import("../locales/arab.json")).default;
        } else if (language === "span") {
          translationsData = (await import("../locales/span.json")).default;
        } else {
          translationsData = (await import("../locales/en.json")).default;
        }
        setTranslations(translationsData);
      } catch (error) {
        console.error(`Failed to load translations for ${language}:`, error);
        // Fallback to English if translation file doesn't exist
        try {
          const fallback = (await import("../locales/en.json")).default;
          setTranslations(fallback);
        } catch {
          setTranslations({});
        }
      }
    };
    
    loadTranslations();
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  };

  // Translation function
  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        // Return the key if translation not found
        return key;
      }
    }
    
    return typeof value === "string" ? value : key;
  };

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
