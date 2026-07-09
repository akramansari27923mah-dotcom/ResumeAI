"use client"

const ResumeAnalysis = dynamic(() => import("@/dashboardComponents/AnalysisDetails"), {
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
import { LoaderCircle } from 'lucide-react';
import dynamic from 'next/dynamic';
import React, { useRef } from 'react'
import { useReactToPrint } from "react-to-print";


const AnalysisDetails = () => {
  const reportRef = useRef()

   const handelPrint = useReactToPrint({
    contentRef:reportRef,
    documentTitle: "Resume Report",
  })

 

  return (
    <div  ref={reportRef}>
    <ResumeAnalysis reportRef={reportRef} handelPrint={handelPrint} />
    </div>
  )
}

export default AnalysisDetails