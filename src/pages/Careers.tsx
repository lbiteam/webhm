import { useState } from "react";
import { Loader2, Upload, Briefcase, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

type JobRole = "Social Media Executive" | "Influencer Marketing" | "Video Editor";

interface CareerFormState {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  coverLetter: string;
}

const JOB_OPENINGS: JobRole[] = [
  "Social Media Executive",
  "Influencer Marketing",
  "Video Editor",
];

const RESUME_BUCKET = "career-resumes";
const CAREERS_TABLE = "career_applications";

const emptyForm: CareerFormState = {
  fullName: "",
  email: "",
  phone: "",
  experience: "",
  coverLetter: "",
};

const Careers = () => {
  const { toast } = useToast();
  const [forms, setForms] = useState<Record<JobRole, CareerFormState>>({
    "Social Media Executive": { ...emptyForm },
    "Influencer Marketing": { ...emptyForm },
    "Video Editor": { ...emptyForm },
  });
  const [resumes, setResumes] = useState<Record<JobRole, File | null>>({
    "Social Media Executive": null,
    "Influencer Marketing": null,
    "Video Editor": null,
  });
  const [submittingRole, setSubmittingRole] = useState<JobRole | null>(null);
  const [activeRole, setActiveRole] = useState<JobRole | null>(null);

  const updateField = (role: JobRole, field: keyof CareerFormState, value: string) => {
    setForms((prev) => ({
      ...prev,
      [role]: {
        ...prev[role],
        [field]: value,
      },
    }));
  };

  const validateRoleForm = (role: JobRole) => {
    const form = forms[role];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim()) {
      throw new Error("Please fill all required fields.");
    }
    if (!emailRegex.test(form.email)) {
      throw new Error("Please enter a valid email.");
    }
    if (!resumes[role]) {
      throw new Error("Please upload your resume.");
    }
  };

  const uploadResume = async (role: JobRole, file: File) => {
    const fileExt = file.name.split(".").pop() || "pdf";
    const safeRole = role.toLowerCase().replace(/\s+/g, "-");
    const filePath = `${safeRole}/${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from(RESUME_BUCKET)
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      throw new Error(uploadError.message);
    }

    const { data } = supabase.storage.from(RESUME_BUCKET).getPublicUrl(filePath);
    return { filePath, publicUrl: data.publicUrl };
  };

  const submitApplication = async (role: JobRole, e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingRole(role);

    try {
      validateRoleForm(role);
      const file = resumes[role] as File;
      const { filePath, publicUrl } = await uploadResume(role, file);
      const form = forms[role];

      const { error } = await supabase.from(CAREERS_TABLE).insert({
        full_name: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        experience: form.experience.trim() || null,
        cover_letter: form.coverLetter.trim() || null,
        job_role: role,
        resume_file_path: filePath,
        resume_public_url: publicUrl,
      });

      if (error) {
        throw new Error(error.message);
      }

      setForms((prev) => ({ ...prev, [role]: { ...emptyForm } }));
      setResumes((prev) => ({ ...prev, [role]: null }));

      toast({
        title: "Application submitted",
        description: `Your application for ${role} has been submitted successfully.`,
      });
      setActiveRole(null);
    } catch (err: any) {
      toast({
        title: "Submission failed",
        description: err?.message || "Unable to submit application right now.",
        variant: "destructive",
      });
    } finally {
      setSubmittingRole(null);
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <section className="pt-28 md:pt-32 pb-12 bg-gradient-to-b from-honey/20 to-cream">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-honey/25 rounded-full text-honey-dark font-medium text-sm mb-4">
            Careers at Honeyman
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
            Join Our Growing Team
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are hiring for creative and growth-focused roles. Apply below and upload your resume directly.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-soft border border-border p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-honey/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-honey-dark" />
              </div>
              <h2 className="font-display text-2xl text-foreground">Current Openings</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {JOB_OPENINGS.map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setActiveRole(role)}
                  className="px-5 py-3 rounded-full border border-honey/30 bg-honey/10 text-honey-dark font-medium hover:bg-honey hover:text-foreground transition"
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeRole && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4"
          onClick={() => setActiveRole(null)}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Apply for</p>
                <h3 className="font-display text-3xl text-foreground">{activeRole}</h3>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setActiveRole(null)}
                className="p-2 rounded-full hover:bg-muted transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form className="space-y-4" onSubmit={(e) => submitApplication(activeRole, e)}>
              <div>
                <label className="text-sm font-medium text-foreground">Full Name *</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-border px-3 py-2 bg-background"
                  value={forms[activeRole].fullName}
                  onChange={(e) => updateField(activeRole, "fullName", e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">Email *</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-border px-3 py-2 bg-background"
                  value={forms[activeRole].email}
                  onChange={(e) => updateField(activeRole, "email", e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">Phone *</label>
                <input
                  type="tel"
                  className="mt-1 w-full rounded-lg border border-border px-3 py-2 bg-background"
                  value={forms[activeRole].phone}
                  onChange={(e) => updateField(activeRole, "phone", e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">Years of Experience</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-border px-3 py-2 bg-background"
                  value={forms[activeRole].experience}
                  onChange={(e) => updateField(activeRole, "experience", e.target.value)}
                  placeholder="e.g. 2 years"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">Resume (PDF/DOC) *</label>
                <label className="mt-1 flex items-center justify-center gap-2 border border-dashed border-border rounded-lg px-3 py-3 cursor-pointer hover:bg-muted/30 transition">
                  <Upload className="w-4 h-4" />
                  <span className="text-sm text-muted-foreground truncate">
                    {resumes[activeRole]?.name || "Click to upload resume"}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      setResumes((prev) => ({ ...prev, [activeRole]: file }));
                    }}
                  />
                </label>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">Cover Letter</label>
                <textarea
                  className="mt-1 w-full rounded-lg border border-border px-3 py-2 bg-background resize-none"
                  rows={4}
                  value={forms[activeRole].coverLetter}
                  onChange={(e) => updateField(activeRole, "coverLetter", e.target.value)}
                  placeholder="Tell us why you are a great fit."
                />
              </div>

              <button
                type="submit"
                disabled={submittingRole === activeRole}
                className="honey-btn w-full flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {submittingRole === activeRole ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Apply Now"
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Careers;
