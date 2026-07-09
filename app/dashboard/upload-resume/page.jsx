import { LoaderCircle } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";
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
