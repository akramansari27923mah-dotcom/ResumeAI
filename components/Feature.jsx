import {
  Brain,
  FileSearch,
  BadgeCheck,
  Sparkles,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Resume Analysis",
    description:
      "Analyze your resume with AI and receive detailed feedback in seconds.",
  },
  {
    icon: FileSearch,
    title: "ATS Score Checker",
    description:
      "See how well your resume performs with Applicant Tracking Systems.",
  },
  {
    icon: Sparkles,
    title: "Smart Suggestions",
    description:
      "Improve wording, grammar, and formatting with personalized recommendations.",
  },
  {
    icon: BadgeCheck,
    title: "Keyword Optimization",
    description:
      "Find missing keywords to increase your chances of getting interviews.",
  },
  {
    icon: BarChart3,
    title: "Detailed Reports",
    description:
      "Track ATS score, readability, grammar, and resume strength visually.",
  },
  {
    icon: ShieldCheck,
    title: "Private & Secure",
    description:
      "Your uploaded resumes are encrypted and never shared with anyone.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-24" id="features">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Everything you need to build a
            <span className="text-violet-600"> job-winning resume</span>
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            AI-powered tools that analyze, optimize, and improve your resume
            before you apply.
          </p>
        </div>

    
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 transition group-hover:bg-violet-600">
                <feature.icon className="h-8 w-8 text-violet-600 group-hover:text-white" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}