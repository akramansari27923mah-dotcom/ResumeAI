import { LoaderCircle } from 'lucide-react'
import dynamic from 'next/dynamic'

export const metadata = {
  title: "Dashboard | ResumeAI",
  description:
    "Access your ResumeAI dashboard to upload resumes, review ATS scores, view analysis history, and receive AI-powered resume improvement suggestions.",

  keywords: [
    "Resume Dashboard",
    "ATS Score",
    "Resume History",
    "AI Resume Analysis",
    "ResumeAI Dashboard",
  ],

  robots: {
    index: false,
    follow: false,
  },
};


const DashboardPage = dynamic(() => import("@/dashboardComponents/Dashboard"), {
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

import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <DashboardPage />   
    </div>
  )
}

export default Dashboard