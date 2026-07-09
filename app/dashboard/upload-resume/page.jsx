import { LoaderCircle } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";

export const metadata = {
  title: "Upload Resume | ResumeAI",
  description:
    "Upload your resume to receive an AI-powered analysis, ATS compatibility score, and personalized suggestions to improve your chances of landing interviews.",

  keywords: [
    "Upload Resume",
    "Resume Upload",
    "AI Resume Analyzer",
    "ATS Checker",
    "Resume Review",
    "ResumeAI",
  ],

  robots: {
    index: false,
    follow: false,
  },
};

const AnalyzerPage = dynamic(() => import("@/dashboardComponents/Analyzer"), {
  loading: () => (
    <div className="animate-pulse w-full h-150 flex justify-center items-center">
          <div className='text-xl flex justify-center items-center gap-2'>
            <LoaderCircle className='animate-spin' />
            <span>
              Loading...
            </span>
          </div>
        </div>
  )
})

const Analyzer = () => {
  return <AnalyzerPage />;
};

export default Analyzer;
