"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Check, Users, Target, Lightbulb, Calendar, Mail, Building2, User, Zap } from "lucide-react";

const steps = [
  { id: 1, title: "About You" },
  { id: 2, title: "Your Challenge" },
  { id: 3, title: "Next Steps" },
];

const services = [
  { id: "strategy", label: "Content Strategy Design", description: "12-week program to transform your content" },
  { id: "advising", label: "Marketing Advising", description: "Strategic guidance for your marketing team" },
  { id: "influencer", label: "Influencer Marketing", description: "Leverage thought leaders for growth" },
  { id: "linkedin-ceo", label: "LinkedIn Strategy for CEOs", description: "Full-service executive positioning" },
  { id: "linkedin-team", label: "LinkedIn for B2B Leaders", description: "Private team training" },
  { id: "not-sure", label: "Not Sure Yet", description: "Let's figure it out together" },
];

const companySizes = [
  { id: "seed", label: "Seed / Early Stage" },
  { id: "series-a", label: "Series A-B" },
  { id: "series-c", label: "Series C+" },
  { id: "enterprise", label: "Enterprise" },
];

export default function StartPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    companySize: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const canProceedStep1 = formData.name && formData.email && formData.company;
  const canProceedStep2 = formData.service && formData.companySize;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-[var(--reed-green)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-[var(--reed-green)]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-display text-foreground mb-4">
            THANK YOU, {formData.name.split(" ")[0].toUpperCase()}!
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            We&apos;ve received your information and will be in touch within 24 hours to schedule a conversation.
          </p>
          <div className="bg-card border border-border rounded-2xl p-6 mb-8 text-left">
            <h3 className="font-semibold text-foreground mb-3">What happens next?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-[var(--reed-green)]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-[var(--reed-green)]">1</span>
                </span>
                <span>Devin will personally review your information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-[var(--reed-green)]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-[var(--reed-green)]">2</span>
                </span>
                <span>We&apos;ll reach out to schedule a 30-minute discovery call</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-[var(--reed-green)]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-[var(--reed-green)]">3</span>
                </span>
                <span>No obligation—just a conversation about your content</span>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-foreground hover:bg-muted transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="The Reeder"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
          <Link 
            href="/" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to site
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      currentStep >= step.id
                        ? "bg-[var(--reed-green)] text-black"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <span className={`text-xs mt-2 hidden sm:block font-medium ${
                    currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 sm:w-20 h-0.5 mx-2 transition-colors duration-300 ${
                      currentStep > step.id ? "bg-[var(--reed-green)]" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Steps */}
        <form onSubmit={handleSubmit}>
          {/* Step 1: About You */}
          {currentStep === 1 && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-display text-foreground mb-3">
                  LET&apos;S GET TO KNOW YOU
                </h1>
                <p className="text-muted-foreground">
                  Tell us a bit about yourself and your company.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--reed-green)] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Work Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@acme.com"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--reed-green)] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your SaaS Company"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--reed-green)] focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceedStep1}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--reed-green)] text-black font-bold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--reed-green-light)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  Continue
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Your Challenge */}
          {currentStep === 2 && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-display text-foreground mb-3">
                  WHAT BRINGS YOU HERE?
                </h1>
                <p className="text-muted-foreground">
                  Help us understand what you&apos;re looking for.
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-4">
                  What are you most interested in?
                </label>
                <div className="grid gap-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, service: service.id })}
                      className={`w-full p-4 rounded-xl border text-left transition-all duration-300 hover:scale-[1.01] ${
                        formData.service === service.id
                          ? "border-[var(--reed-green)] bg-[var(--reed-green)]/5 ring-2 ring-[var(--reed-green)]"
                          : "border-border bg-background hover:border-[var(--reed-green)]/50"
                      }`}
                    >
                      <div className="font-semibold text-foreground">{service.label}</div>
                      <div className="text-sm text-muted-foreground">{service.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-4">
                  What stage is your company?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {companySizes.map((size) => (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, companySize: size.id })}
                      className={`p-4 rounded-xl border text-center transition-all duration-300 hover:scale-[1.02] ${
                        formData.companySize === size.id
                          ? "border-[var(--reed-green)] bg-[var(--reed-green)]/5 ring-2 ring-[var(--reed-green)]"
                          : "border-border bg-background hover:border-[var(--reed-green)]/50"
                      }`}
                    >
                      <div className="font-semibold text-foreground text-sm">{size.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 px-6 py-4 border border-border rounded-full font-semibold hover:bg-muted transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceedStep2}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--reed-green)] text-black font-bold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--reed-green-light)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  Continue
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Next Steps */}
          {currentStep === 3 && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-display text-foreground mb-3">
                  ALMOST THERE!
                </h1>
                <p className="text-muted-foreground">
                  Anything else you&apos;d like us to know?
                </p>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Tell us more (optional)
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any specific challenges, goals, or questions you have..."
                  rows={4}
                  className="w-full px-4 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[var(--reed-green)] focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Summary */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Check className="h-5 w-5 text-[var(--reed-green)]" />
                  Your Summary
                </h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Name</dt>
                    <dd className="text-foreground font-semibold">{formData.name}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Company</dt>
                    <dd className="text-foreground font-semibold">{formData.company}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Interest</dt>
                    <dd className="text-foreground font-semibold">
                      {services.find(s => s.id === formData.service)?.label}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Stage</dt>
                    <dd className="text-foreground font-semibold">
                      {companySizes.find(s => s.id === formData.companySize)?.label}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Trust signals */}
              <div className="grid grid-cols-3 gap-4 text-center py-4">
                <div>
                  <Users className="h-6 w-6 text-[var(--reed-green)] mx-auto mb-2" />
                  <div className="text-xs text-muted-foreground">No Spam</div>
                </div>
                <div>
                  <Target className="h-6 w-6 text-[var(--reed-green)] mx-auto mb-2" />
                  <div className="text-xs text-muted-foreground">No Obligation</div>
                </div>
                <div>
                  <Lightbulb className="h-6 w-6 text-[var(--reed-green)] mx-auto mb-2" />
                  <div className="text-xs text-muted-foreground">Free Consultation</div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 px-6 py-4 border border-border rounded-full font-semibold hover:bg-muted transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Back
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--reed-green)] text-black font-bold rounded-full transition-all duration-300 hover:bg-[var(--reed-green-light)] hover:shadow-[0_0_30px_rgba(74,222,80,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Calendar className="h-5 w-5" />
                  Submit & Schedule Call
                </button>
              </div>
            </div>
          )}
        </form>

        {/* Bottom Trust Note */}
        <p className="text-center text-xs text-muted-foreground/60 mt-12">
          Your information is secure and will never be shared. We&apos;ll respond within 24 hours.
        </p>
      </main>
    </div>
  );
}

