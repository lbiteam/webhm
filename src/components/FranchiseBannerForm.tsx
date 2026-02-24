import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const zohoClientId = import.meta.env.VITE_ZOHO_CLIENT_ID;
const zohoClientSecret = import.meta.env.VITE_ZOHO_CLIENT_SECRET;
const zohoRefreshToken = import.meta.env.VITE_ZOHO_REFRESH_TOKEN;

const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

interface BannerFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  preferredModel: string;
}

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  location: string;
  subject: string;
  message: string;
}

const createZohoLead = async (payload: ContactPayload): Promise<boolean> => {
  try {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "";
    const apiEndpoint = apiBaseUrl
      ? `${apiBaseUrl}/api/zoho-lead`
      : "/api/zoho-lead";
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (response.status === 404) return false;
    if (!response.ok) return false;
    const result = await response.json();
    return result.success === true;
  } catch {
    return false;
  }
};

const inputClass =
  "w-full px-4 py-3 mt-1 rounded-xl bg-amber-50/50 border border-amber-100 focus:border-amber-500 focus:bg-white focus:ring-0 transition text-gray-900 placeholder:text-gray-400";
const labelClass =
  "text-xs font-bold text-amber-600 uppercase tracking-wide";

const FranchiseBannerForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState<BannerFormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    preferredModel: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: t("contactPage.toast.requiredFields"),
        description: "Please enter your name, email and phone number.",
        variant: "destructive",
      });
      return;
    }

    if (!supabaseUrl || !supabaseKey) {
      toast({
        title: t("contactPage.toast.configError"),
        description: t("contactPage.toast.configErrorDesc"),
        variant: "destructive",
      });
      return;
    }

    const subject = formData.preferredModel
      ? `Franchise - ${formData.preferredModel}`
      : "Franchise - Check Availability";
    const message = `Preferred model: ${formData.preferredModel || "Not selected"}. City: ${formData.city || "Not provided"}.`;

    const payload: ContactPayload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      location: formData.city.trim() || "",
      subject,
      message,
    };

    setIsSubmitting(true);
    let supabaseSuccess = false;
    let zohoSuccess = false;
    const errors: string[] = [];

    try {
      if (supabase) {
        const { error } = await supabase
          .from("contact_messages")
          .insert({
            name: payload.name,
            email: payload.email,
            phone: payload.phone,
            location: payload.location || null,
            subject: payload.subject,
            message: payload.message,
          })
          .select()
          .single();
        if (error) {
          console.error("Supabase error:", error);
          errors.push("Supabase: " + error.message);
        } else {
          supabaseSuccess = true;
        }
      }

      if (zohoClientId && zohoClientSecret && zohoRefreshToken) {
        const zohoResult = await createZohoLead(payload);
        if (zohoResult) zohoSuccess = true;
        else errors.push("Zoho CRM: Failed to create lead");
      }

      if (supabaseSuccess || zohoSuccess) {
        toast({
          title: t("contactPage.toast.success"),
          description: t("contactPage.toast.successDesc").replace("{name}", formData.name),
          duration: 5000,
        });
        setFormData({ name: "", email: "", phone: "", city: "", preferredModel: "" });
      } else {
        toast({
          title: t("contactPage.toast.error") || "Submission Error",
          description:
            errors.length > 0
              ? errors.join("; ")
              : t("contactPage.toast.errorDesc") || "Failed to submit. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
        setFormData({ name: "", email: "", phone: "", city: "", preferredModel: "" });
      }
    } catch (err: unknown) {
      console.error("Form submission error:", err);
      toast({
        title: t("contactPage.toast.error") || "Error",
        description:
          (err as Error)?.message ||
          t("contactPage.toast.errorDesc") ||
          "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_20px_50px_rgba(217,119,6,0.3)] p-8 w-full max-w-md relative z-10 border-t-8 border-amber-500">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-extrabold text-gray-900">Check Availability</h3>
        <p className="text-gray-500 text-sm mt-2">
          Get the detailed franchise brochure directly to your inbox.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              maxLength={100}
              required
              placeholder="John Doe"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              maxLength={255}
              required
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label className={labelClass}>
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            maxLength={20}
            required
            placeholder="+91 98765 43210"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            maxLength={100}
            placeholder="e.g. Mumbai, Delhi"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Preferred Model</label>
          <select
            name="preferredModel"
            value={formData.preferredModel}
            onChange={handleChange}
            className={`${inputClass} text-gray-700`}
          >
            <option value="">Select model</option>
            <option value="Smart Cart (₹3.20L)">Smart Cart (₹3.20L)</option>
            <option value="Ice Cream Parlour (₹10-15L)">Ice Cream Parlour (₹10-15L)</option>
            <option value="Cafe Store (₹25-30L)">Cafe Store (₹25-30L)</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-bold text-lg py-4 rounded-xl transition shadow-lg shadow-amber-500/30 mt-4 flex justify-center items-center gap-2 disabled:opacity-70"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Send className="w-4 h-4" />
              Request Callback
            </>
          )}
        </button>
        <p className="text-center text-xs text-gray-400 mt-3">
          <i className="fas fa-lock mr-1 text-amber-300" /> 100% Data Privacy Guaranteed.
        </p>
      </form>
    </div>
  );
};

export default FranchiseBannerForm;
