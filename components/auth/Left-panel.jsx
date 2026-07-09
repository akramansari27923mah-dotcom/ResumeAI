"use client";

import { FileText, Sparkles, ShieldCheck, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Sparkles,
    title: "AI Resume Analysis",
    description: "Get instant feedback and improve your resume with AI.",
  },
  {
    icon: TrendingUp,
    title: "Increase ATS Score",
    description: "Optimize your resume for applicant tracking systems.",
  },
  {
    icon: FileText,
    title: "Smart Suggestions",
    description: "Receive personalized recommendations for every section.",
  },
  {
    icon: ShieldCheck,
    title: "Private & Secure",
    description: "Your uploaded resumes are protected and encrypted.",
  },
];

export default function LeftPanel() {
  return (
    <section className="relative hidden overflow-hidden bg-linear-to-br from-violet-600 via-indigo-600 to-blue-600 lg:flex">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl" />

      <div className="relative flex h-full w-full flex-col justify-between p-12 text-white">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
            <FileText className="h-6 w-6" />
          </div>

          <h2 className="text-2xl font-bold">
            ResumeAI
          </h2>
        </div>

        {/* Heading */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="text-5xl font-extrabold leading-tight"
          >
            Land Your
            <br />
            Dream Job
            <br />
            Faster 🚀
          </motion.h1>

          <p className="max-w-md text-lg text-violet-100">
            Upload your resume and receive AI-powered feedback,
            ATS insights, keyword suggestions, and professional
            improvements in seconds.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 8 }}
              className="flex items-start gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur"
            >
              <div className="rounded-xl bg-white/20 p-3">
                <feature.icon className="h-6 w-6" />
              </div>

              <div>
                <h3 className="font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-1 text-sm text-violet-100">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resume Score Card */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="rounded-3xl bg-white p-6 text-gray-900 shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">
              Resume Score
            </h3>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              Excellent
            </span>
          </div>

          <div className="mt-6 flex items-center justify-between">

            <div className="flex h-28 w-28 items-center justify-center rounded-full border-10 border-violet-600 text-4xl font-bold">
              92
            </div>

            <div className="space-y-4 flex-1 pl-6">

              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span>ATS Score</span>
                  <span>92%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-200">
                  <div className="h-2 w-[92%] rounded-full bg-violet-600" />
                </div>
              </div>

              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span>Readability</span>
                  <span>88%</span>
                </div>

                <div className="h-2 rounded-full bg-gray-200">
                  <div className="h-2 w-[88%] rounded-full bg-green-500" />
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}