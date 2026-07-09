"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does ResumeAI analyze my resume?",
    answer:
      "ResumeAI uses AI to evaluate your resume's ATS compatibility, grammar, formatting, keywords, readability, and overall quality.",
  },
  {
    question: "Which file formats are supported?",
    answer:
      "You can upload PDF and DOCX files. More formats will be supported in future updates.",
  },
  {
    question: "Is my resume secure?",
    answer:
      "Yes. Your resume is encrypted during upload and is never shared with third parties.",
  },
  {
    question: "Can I analyze multiple resumes?",
    answer:
      "Yes. You can upload and analyze multiple resumes from your dashboard.",
  },
  {
    question: "Will I receive ATS improvement suggestions?",
    answer:
      "Absolutely. You'll receive keyword recommendations, formatting improvements, and personalized AI suggestions.",
  },
  {
    question: "Is ResumeAI free to use?",
    answer:
      "Yes. You can start with the free plan. Premium plans unlock advanced AI features and unlimited analyses.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState();

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Frequently Asked
            <span className="text-violet-600"> Questions</span>
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-slate-600 leading-7">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}