import { Upload, BrainCircuit, BadgeCheck } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: Upload,
    title: "Upload Your Resume",
    description:
      "Upload your PDF or DOCX resume securely in just one click.",
  },
  {
    id: "02",
    icon: BrainCircuit,
    title: "AI Analyzes Your Resume",
    description:
      "Our AI reviews your resume, checks ATS compatibility, grammar, keywords, and formatting.",
  },
  {
    id: "03",
    icon: BadgeCheck,
    title: "Improve & Download",
    description:
      "Receive personalized suggestions, improve your resume, and apply with confidence.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Analyze your resume in
            <span className="text-violet-600"> 3 simple steps</span>
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Upload your resume, let AI do the work, and get actionable
            suggestions in seconds.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-20 grid gap-10 md:grid-cols-3">

          {/* Connecting line (Desktop) */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-violet-200 md:block" />

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Step Number */}
              <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white shadow-lg">
                {step.id}
              </div>

              {/* Icon */}
              <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100">
                <step.icon className="h-8 w-8 text-violet-600" />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}