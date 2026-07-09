import { LoaderCircle } from "lucide-react";
import dynamic from "next/dynamic";

export const metadata = {
  title: "History | ResumeAI",
  description:
    "View your resume analysis history, track ATS scores over time, and revisit previous AI-generated feedback and recommendations.",

  keywords: [
    "Resume History",
    "Analysis History",
    "ATS Score History",
    "ResumeAI Dashboard",
    "Resume Reports",
  ],

  robots: {
    index: false,
    follow: false,
  },
};

const HistoryPage = dynamic(() => import("@/dashboardComponents/History"), {
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
import React from "react";

const History = () => {
  return <HistoryPage />;
};

export default History;
