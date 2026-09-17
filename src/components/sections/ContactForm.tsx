"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          data.error ||
            "Failed to submit inquiry. Please try again or call our 24/7 hotline."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network transmission error. Please try again or reach our 24/7 advisory hotline directly."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-surface-light border border-steel-muted p-8 rounded-[2px] space-y-4">
        <div className="border-l-2 border-ocean pl-3">
          <span className="text-xs uppercase tracking-wider text-ocean font-semibold">
            Dispatch Confirmed
          </span>
        </div>
        <h3 className="text-xl font-semibold text-navy">
          Inquiry Successfully Transmitted
        </h3>
        <p className="text-sm text-steel-dark leading-relaxed">
          Thank you for contacting South Side International Resources. Your inquiry has been routed to our senior maritime advisory team. An advisor will review your transmission and respond within 24 hours.
        </p>
        <div className="pt-2">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => {
              setFormData({ name: "", email: "", company: "", message: "" });
              setStatus("idle");
            }}
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-steel-muted p-6 sm:p-8 rounded-[2px] space-y-5 shadow-sm"
      noValidate
    >
      <div className="border-b border-steel-muted pb-4">
        <h3 className="text-lg font-semibold text-navy">
          Formal Advisory Inquiry
        </h3>
        <p className="text-xs text-steel mt-1">
          Direct communication channel to the SSIR Directorate. All inquiries are handled with strict institutional discretion.
        </p>
      </div>

      {status === "error" && (
        <div className="bg-red-50 border-l-2 border-red-700 p-3 text-xs text-red-800">
          {errorMessage}
        </div>
      )}

      {/* Invisible Anti-Spam Honeypot */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5"
        >
          Full Name <span className="text-red-600">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Capt. Alexander Wright"
          className="w-full px-3.5 py-2.5 text-sm bg-white border border-steel-border rounded-[2px] text-navy placeholder:text-steel focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5"
        >
          Corporate / Official Email <span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. a.wright@administration.gov"
          className="w-full px-3.5 py-2.5 text-sm bg-white border border-steel-border rounded-[2px] text-navy placeholder:text-steel focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
        />
      </div>

      {/* Company / Authority */}
      <div>
        <label
          htmlFor="company"
          className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5"
        >
          Organization / Maritime Administration <span className="text-red-600">*</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          value={formData.company}
          onChange={handleChange}
          placeholder="e.g. National Port Authority"
          className="w-full px-3.5 py-2.5 text-sm bg-white border border-steel-border rounded-[2px] text-navy placeholder:text-steel focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5"
        >
          Scope of Inquiry / Terms of Reference <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Please outline the advisory scope, port facility location, or regulatory compliance framework under consideration..."
          className="w-full px-3.5 py-2.5 text-sm bg-white border border-steel-border rounded-[2px] text-navy placeholder:text-steel focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy resize-y"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="md"
          className="w-full"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Transmitting..." : "Submit Formal Inquiry"}
        </Button>
      </div>

      <div className="text-[11px] text-steel text-center pt-1">
        Response timeline: Within 24 hours guaranteed &bull; 24/7 Hotline support
      </div>
    </form>
  );
};
