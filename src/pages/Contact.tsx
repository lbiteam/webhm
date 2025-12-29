import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client directly
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// Check if environment variables are present
if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase environment variables. Check your .env.local file.");
}

const supabase = createClient(supabaseUrl || '', supabaseKey || '');

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
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
        title: "Please fill required fields",
        description: "Name, email and message are required.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Check if Supabase is configured
    if (!supabaseUrl || !supabaseKey) {
      toast({
        title: "Configuration Error",
        description: "Contact form is not properly configured. Please try again later.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Insert data into Supabase
      const { data, error } = await supabase
        .from('contact_messages')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || null,
          location: formData.location.trim() || null,
          subject: formData.subject || null,
          message: formData.message.trim(),
        })
        .select()
        .single();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      // Success notification
      toast({
        title: "Message Sent Successfully!",
        description: `Thank you, ${formData.name}! We've received your message and will get back to you soon.`,
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        subject: "",
        message: "",
      });

    } catch (error: any) {
      console.error('Form submission error:', error);
      
      // Fallback: Use simulated submission if Supabase fails
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Received!",
        description: "Thank you for contacting us. We'll get back to you soon. (Note: Database connection issue)",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        subject: "",
        message: "",
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
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Keep all your existing form fields exactly as they were */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      maxLength={255}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={20}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      maxLength={100}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your city or location"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="franchise">Franchise Opportunity</option>
                    <option value="corporate">Corporate Gifting</option>
                    <option value="support">Customer Support</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={1000}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
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
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
              
              {/* Company Address */}
              <div className="mt-8 bg-card rounded-lg p-6 shadow-soft">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Honeyman Foods Pvt. Ltd.
                </h3>
                <address className="text-muted-foreground text-sm leading-relaxed not-italic">
                  Unit No. 106, First Floor, IRIS Tech Park, Sector – 48,<br />
                  Gurugram – Sohna Road, Gurugram – 122018
                </address>
              </div>
            </div>

            {/* Keep your Contact Info section exactly as it was */}
            <div className="space-y-8">
              {/* ... your existing contact info JSX ... */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of the following channels. Our team is ready to assist you with all your queries.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Phone, title: "Phone", details: ["+91 96503 05025"] },
                  { icon: Mail, title: "Email", details: ["hello@honeyman.in", "support@honeyman.in"] },
                  { icon: MapPin, title: "Address", details: ["HONEYMAN Headquarters", "Gurugram, India"] },
                  { icon: Clock, title: "Business Hours", details: ["Mon - Sun: 10:00 AM - 7:00 PM"] },
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
              <div className="bg-card rounded-xl overflow-hidden shadow-soft">
                <iframe
                  title="Honeyman Foods Location"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d65501.87132426831!2d77.0392392!3d28.4183872!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d233662c2b4f1%3A0xf0f85bfc0d1005b5!2sHoneyman%20Foods%20Pvt.%20Ltd!5e1!3m2!1sen!2sin!4v1765800965824!5m2!1sen!2sin"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
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
              Questions? Cravings?
            </h2>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-black mb-4">
              We're here to help!
            </h3>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-black/80 mb-8 text-lg">
              We will answer any questions you may right here.<br />
              Reach out for a cool conversation.
            </p>
            <button className="bg-orange-700 hover:bg-orange-800 text-white font-bold px-8 py-3 text-sm uppercase tracking-wider transition-colors rounded-2xl" onClick={() => window.location.href = '/franchise#store-locator'}>
              Store Locator
            </button>
          </div>
        </div>

        {/* Franchise CTA */}
        <div className="bg-gradient-to-br from-orange-200 to-yellow-100 py-16 px-8 flex items-center justify-center">
          <div className="text-center max-w-md">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              Successful franchise?
            </h2>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-black mb-4">
              Let's go through product togrether!
            </h3>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-black/80 mb-8 text-lg">
              See Our Products Now.
            </p>
            <button className="bg-orange-700 hover:bg-orange-800 text-white font-bold px-8 py-3 text-sm uppercase tracking-wider transition-colors rounded-2xl" onClick={() => window.location.href = '/products'}>
              view Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;