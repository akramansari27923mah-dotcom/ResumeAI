"use client";

import {Upload, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      
      <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">


        <div className="my-6 flex items-center gap-2 rounded-full border bg-white px-5 py-2 shadow">
          <Sparkles className="h-4 w-4 text-violet-600" />

          <span className="text-sm font-medium text-black">
            AI Powered Resume Analyzer
          </span>
        </div>

        <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Land Your
          <span className="bg-linear-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
            {" "}
            Dream Job{" "}
          </span>
          Faster
        </h1>

        

        <p className="mt-8 max-w-2xl text-lg text-gray-600 md:text-xl">
          Upload your resume and receive an ATS score, AI-powered feedback,
          keyword suggestions, grammar fixes, and personalized improvements in
          seconds.
        </p>

        

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/dashboard/upload-resume"
            className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            <Upload size={18} />
            Upload Resume
          </Link>
        </div>

    

        <p className="mt-8 text-gray-500">
          {[...Array(5)].map((_,ind) => (
            <span key={ind}>
                ⭐
            </span>
          ))} Trusted by 1,000+ Job Seekers
        </p>

        

        <div className="my-10 w-full max-w-5xl rounded-3xl border bg-white p-8 shadow-2xl">
          <div className="grid gap-6 md:grid-cols-4">
            <Card title="ATS Score" value="92" />

            <Card title="Skill Match" value="87%" />

            <Card title="Keywords" value="18" />

            <Card title="Resume Grade" value="A+" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, value }) {
  return (
    <div className="rounded-2xl border p-6 text-center">
      <p className="text-sm text-gray-500">{title}</p>

      <h2 className="mt-3 text-4xl font-bold text-violet-600">{value}</h2>
    </div>
  );
}
