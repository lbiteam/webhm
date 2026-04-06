import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client directly
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// Zoho CRM Configuration
const zohoClientId = import.meta.env.VITE_ZOHO_CLIENT_ID;
const zohoClientSecret = import.meta.env.VITE_ZOHO_CLIENT_SECRET;
const zohoRefreshToken = import.meta.env.VITE_ZOHO_REFRESH_TOKEN;
const zohoApiDomain = import.meta.env.VITE_ZOHO_API_DOMAIN || 'https://www.zohoapis.com'; // or .in for India
const zohoRegion = import.meta.env.VITE_ZOHO_REGION || 'com'; // 'com' or 'in'

// Check if environment variables are present
if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase environment variables. Check your .env.local file.");
}

if (!zohoClientId || !zohoClientSecret || !zohoRefreshToken) {
  console.warn("Missing Zoho CRM environment variables. Zoho integration will be skipped.");
}

const supabase = createClient(supabaseUrl || '', supabaseKey || '');

const DEFAULT_COUNTRY_CODE = "+91";

/** Common dialing codes (default India); used for mandatory country-code dropdown. */
const DIALING_CODES: { value: string; label: string }[] = [
  { value: "+91", label: "India (+91)" },
  { value: "+1", label: "United States (+1)" },
  { value: "+44", label: "United Kingdom (+44)" },
  { value: "+971", label: "UAE (+971)" },
  { value: "+966", label: "Saudi Arabia (+966)" },
  { value: "+974", label: "Qatar (+974)" },
  { value: "+965", label: "Kuwait (+965)" },
  { value: "+973", label: "Bahrain (+973)" },
  { value: "+968", label: "Oman (+968)" },
  { value: "+65", label: "Singapore (+65)" },
  { value: "+60", label: "Malaysia (+60)" },
  { value: "+61", label: "Australia (+61)" },
  { value: "+64", label: "New Zealand (+64)" },
  { value: "+86", label: "China (+86)" },
  { value: "+81", label: "Japan (+81)" },
  { value: "+82", label: "South Korea (+82)" },
  { value: "+66", label: "Thailand (+66)" },
  { value: "+84", label: "Vietnam (+84)" },
  { value: "+62", label: "Indonesia (+62)" },
  { value: "+63", label: "Philippines (+63)" },
  { value: "+92", label: "Pakistan (+92)" },
  { value: "+880", label: "Bangladesh (+880)" },
  { value: "+94", label: "Sri Lanka (+94)" },
  { value: "+977", label: "Nepal (+977)" },
  { value: "+975", label: "Bhutan (+975)" },
  { value: "+33", label: "France (+33)" },
  { value: "+49", label: "Germany (+49)" },
  { value: "+39", label: "Italy (+39)" },
  { value: "+34", label: "Spain (+34)" },
  { value: "+31", label: "Netherlands (+31)" },
  { value: "+41", label: "Switzerland (+41)" },
  { value: "+353", label: "Ireland (+353)" },
  { value: "+27", label: "South Africa (+27)" },
  { value: "+254", label: "Kenya (+254)" },
  { value: "+234", label: "Nigeria (+234)" },
  { value: "+20", label: "Egypt (+20)" },
];

function formatFullPhone(countryCode: string, localPhone: string): string {
  const cc = countryCode.trim();
  const local = localPhone.replace(/\s/g, "").trim();
  if (!cc && !local) return "";
  if (!local) return cc;
  return `${cc} ${local}`;
}

// Zoho CRM API Function - Calls serverless function to avoid CORS
const createZohoLead = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Determine API endpoint based on environment
    // For production: use relative path /api/zoho-lead
    // For local dev with Vercel CLI: use /api/zoho-lead
    // For local dev without Vercel: you can set VITE_API_BASE_URL to a backend URL
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
    const apiEndpoint = apiBaseUrl 
      ? `${apiBaseUrl}/api/zoho-lead`
      : '/api/zoho-lead';

    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Handle 404 - API endpoint not available (local dev without Vercel CLI)
    if (response.status === 404) {
      console.warn('Zoho API endpoint not found. Skipping Zoho CRM integration. Use Vercel CLI for local development.');
      return false;
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Zoho API error response:', errorData);
      throw new Error(`Zoho API error: ${response.statusText}`);
    }

    const result = await response.json();
    return result.success === true;
  } catch (error: any) {
    // Handle network errors (endpoint doesn't exist)
    if (error.message?.includes('Failed to fetch') || error.message?.includes('Not Found')) {
      console.warn('Zoho API endpoint not available. Skipping Zoho CRM integration.');
      return false;
    }
    console.error('Error creating Zoho lead:', error);
    return false;
  }
};

interface ContactFormData {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  location: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    countryCode: DEFAULT_COUNTRY_CODE,
    phone: "",
    location: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: t("contactPage.toast.requiredFields"),
        description: t("contactPage.toast.requiredFieldsDesc"),
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: t("contactPage.toast.invalidEmail"),
        description: t("contactPage.toast.invalidEmailDesc"),
        variant: "destructive",
      });
      return;
    }

    const countryCode = formData.countryCode.trim() || DEFAULT_COUNTRY_CODE;
    if (!countryCode) {
      toast({
        title: t("contactPage.toast.requiredFields"),
        description: t("contactPage.toast.requiredFieldsDesc"),
        variant: "destructive",
      });
      return;
    }

    const localPhone = formData.phone.replace(/\s/g, "").trim();
    if (!localPhone) {
      toast({
        title: t("contactPage.toast.requiredFields"),
        description: t("contactPage.toast.requiredFieldsDesc"),
        variant: "destructive",
      });
      return;
    }

    const fullPhone = formatFullPhone(countryCode, formData.phone);

    // Check if Supabase is configured
    if (!supabaseUrl || !supabaseKey) {
      toast({
        title: t("contactPage.toast.configError"),
        description: t("contactPage.toast.configErrorDesc"),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    let supabaseSuccess = false;
    let zohoSuccess = false;
    const errors: string[] = [];

    try {
      // Submit to Supabase
      if (supabaseUrl && supabaseKey) {
        try {
          const { data, error } = await supabase
            .from('contact_messages')
            .insert({
              name: formData.name.trim(),
              email: formData.email.trim(),
              phone: fullPhone || null,
              location: formData.location.trim() || null,
              subject: formData.subject || null,
              message: formData.message.trim(),
            })
            .select()
            .single();

          if (error) {
            console.error('Supabase error:', error);
            errors.push('Supabase: ' + error.message);
          } else {
            supabaseSuccess = true;
          }
        } catch (error: any) {
          console.error('Supabase submission error:', error);
          errors.push('Supabase: ' + (error.message || 'Unknown error'));
        }
      }

      // Submit to Zoho CRM via serverless function
      if (zohoClientId && zohoClientSecret && zohoRefreshToken) {
        try {
          const zohoResult = await createZohoLead({ ...formData, phone: fullPhone });
          if (zohoResult) {
            zohoSuccess = true;
          } else {
            errors.push('Zoho CRM: Failed to create lead');
          }
        } catch (error: any) {
          console.error('Zoho CRM submission error:', error);
          errors.push('Zoho CRM: ' + (error.message || 'Unknown error'));
        }
      }

      // Show success: redirect to thank-you page instead of toast
      if (supabaseSuccess || zohoSuccess) {
        setFormData({
          name: "",
          email: "",
          countryCode: DEFAULT_COUNTRY_CODE,
          phone: "",
          location: "",
          subject: "",
          message: "",
        });
        navigate("/thank-you");
        return;
      } else {
        // If both failed, show error but still reset form
        toast({
          title: t("contactPage.toast.error") || "Submission Error",
          description: errors.length > 0 
            ? errors.join('; ') 
            : t("contactPage.toast.errorDesc") || "Failed to submit. Please try again.",
          variant: "destructive",
          duration: 5000,
        });

        // Still reset form even on error
        setFormData({
          name: "",
          email: "",
          countryCode: DEFAULT_COUNTRY_CODE,
          phone: "",
          location: "",
          subject: "",
          message: "",
        });
      }

    } catch (error: any) {
      console.error('Form submission error:', error);
      
      toast({
        title: t("contactPage.toast.error") || "Error",
        description: error.message || t("contactPage.toast.errorDesc") || "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      
    } finally {
      setIsSubmitting(false);
    }
  };

  // Rest of your component remains exactly the same...
  // [Keep all your existing JSX code below]
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Keep your existing JSX */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        {/* ... your existing JSX ... */}
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">
                {t("contactPage.sendMessage")}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Keep all your existing form fields exactly as they were */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t("contactPage.name")} <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      maxLength={100}
                      required={true}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder={t("contactPage.namePlaceholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t("contactPage.email")} 
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      maxLength={255}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder={t("contactPage.emailPlaceholder")}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <span className="block text-sm font-medium text-foreground mb-2">
                      {t("contactPage.phone")} <span className="text-destructive">*</span>
                    </span>
                    <div className="flex gap-2">
                      <label htmlFor="countryCode" className="sr-only">
                        Country code
                      </label>
                      <select
                        id="countryCode"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        required
                        className="shrink-0 w-[min(11rem,42vw)] sm:w-40 px-3 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        {DIALING_CODES.map(({ value, label }) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        required
                        autoComplete="tel-national"
                        className="min-w-[300px] flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder={t("contactPage.phonePlaceholder")}
                      />
                    </div>
                  </div>
                 
                </div>
                
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                      {t("contactPage.location")}
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder={t("contactPage.locationPlaceholder")}
                    />
                  </div>


                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    {t("contactPage.subject")}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">{t("contactPage.selectSubject")}</option>
                    <option value="general">{t("contactPage.subjects.general")}</option>
                    <option value="franchise">{t("contactPage.subjects.franchise")}</option>
                    <option value="corporate">{t("contactPage.subjects.corporate")}</option>
                    <option value="support">{t("contactPage.subjects.support")}</option>
                  
                  
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t("contactPage.message")} <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={1000}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder={t("contactPage.messagePlaceholder")}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="honey-btn w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t("contactPage.sending")}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t("contactPage.sendMessageButton")}
                    </>
                  )}
                </button>
              </form>
              
              {/* Company Address */}
              <div className="mt-8 bg-card rounded-lg p-6 shadow-soft">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {t("contactPage.companyName")}
                </h3>
                <address className="text-muted-foreground text-sm leading-relaxed not-italic" dangerouslySetInnerHTML={{ __html: t("contactPage.companyAddress") }} />
              </div>
            </div>

            {/* Keep your Contact Info section exactly as it was */}
            <div className="space-y-8">
              {/* ... your existing contact info JSX ... */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">
                  {t("contactPage.contactInfoTitle")}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t("contactPage.contactInfoDescription")}
                </p>
              </div>

              <div className="grid sm:grid-cols-1 gap-6">
                {[
                  { icon: Phone, title: t("contactPage.contactMethods.phone.title"), details: ["+91 96503 05025"] },
                  { icon: Mail, title: t("contactPage.contactMethods.email.title"), details: ["hello@honeyman.in", "support@honeyman.in"] },
                  { icon: MapPin, title: t("contactPage.contactMethods.address.title"), details: [t("contactPage.contactMethods.address.details.0"), t("contactPage.contactMethods.address.details.1")] },
                  { icon: Clock, title: t("contactPage.contactMethods.hours.title"), details: [t("contactPage.contactMethods.hours.details.0")] },
                ].map((info, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-soft hover:shadow-honey transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Map */}
              {/* <div className="bg-card rounded-xl overflow-hidden shadow-soft">
                <iframe
                  title="Honeyman Foods Location"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3427.998106927928!2d76.05981427558201!3d30.774632574564013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQ2JzI4LjciTiA3NsKwMDMnNDQuNiJF!5e0!3m2!1sen!2sin!4v1774937811804!5m2!1sen!2sin"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Store Locator & Franchise CTA */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Store Locator */}
        <div className="bg-gradient-to-r from-honey to-honey-dark py-16 px-8 flex items-center justify-center">
          <div className="text-center max-w-md">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              {t("contactPage.storeLocator.title")}
            </h2>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-black mb-4">
              {t("contactPage.storeLocator.subtitle")}
            </h3>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-black/80 mb-8 text-lg">
              {t("contactPage.storeLocator.description")}
            </p>
            <button className="bg-orange-700 hover:bg-orange-800 text-white font-bold px-8 py-3 text-sm uppercase tracking-wider transition-colors rounded-2xl" onClick={() => window.location.href = '/franchise#store-locator'}>
              {t("contactPage.storeLocator.button")}
            </button>
          </div>
        </div>

        {/* Franchise CTA */}
        <div className="bg-gradient-to-br from-orange-200 to-yellow-100 py-16 px-8 flex items-center justify-center">
          <div className="text-center max-w-md">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              {t("contactPage.exploreRange.title")}
            </h2>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-black mb-4">
              {t("contactPage.exploreRange.subtitle")}
            </h3>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-black/80 mb-8 text-lg">
              {t("contactPage.exploreRange.description")}
            </p>
            <button className="bg-orange-700 hover:bg-orange-800 text-white font-bold px-8 py-3 text-sm uppercase tracking-wider transition-colors rounded-2xl" onClick={() => window.location.href = '/products'}>
              {t("contactPage.exploreRange.button")}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;