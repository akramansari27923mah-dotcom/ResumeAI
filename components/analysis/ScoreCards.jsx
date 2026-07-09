import { removeFromLocalStorage } from "@/util/localstorage";
import { Download, FileSearch, Award, FileCheck, Brain, Trash } from "lucide-react";
import React from "react";
import { useResume } from "@/contexts/resume.context";

const ScoreCards = ({ overall_score, ats_score, confidence, handelPrint }) => {
  const {setResult} = useResume()
  const scoreAnalysis = [
    {
      name: "Overall Score",
      score: overall_score,
      icon: Award,
    },
    {
      name: "ATS Score",
      score: ats_score,
      icon: FileCheck,
    },
    {
      name: "Confidence",
      score: confidence,
      icon: Brain,
    },
  ];

  const getScoreColor = (score, type) => {
    if (type === "bgColor") {
      if (score >= 90) return "bg-green-500";
      if (score >= 80) return "bg-emerald-500";
      if (score >= 70) return "bg-yellow-500";
      if (score >= 60) return "bg-orange-500";
      return "bg-red-500";
    }
    if (type === "score") {
      if (score >= 90) return "text-green-500";
      if (score >= 80) return "text-emerald-500";
      if (score >= 70) return "text-yellow-500";
      if (score >= 60) return "text-orange-500";
      return "bg-red-500";
    }
  };

  const cleanReport = () => {
    removeFromLocalStorage('result')
    setResult(null)
  }

  return (
    <div>
      <header className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <FileSearch size={50} className="text-indigo-500" />
          <div className="flex flex-col justify-center">
            <span className="md:text-3xl text-sm text-black font-bold">
              Resume Analysis Report
            </span>
            <span className="text-xs text-gray-400">
              AI-Powered Resume Review
            </span>
          </div>
        </div>

    <div className="flex justify-center md:flex-row flex-col items-center gap-5">
        <button onClick={cleanReport} className="md:px-4 px-3 py-1 md:py-2 rounded-lg bg-red-100 text-red-500 border border-red-200/50 flex justify-center items-center gap-2 text-sm shadow shadow-red-200 font-bold transition-all duration-300 hover:scale-105 active:scale-100 cursor-pointer text-nowrap">
          <Trash className="w-4 h-4 md:w-5 md:h-5" />
          <span>Clean Report</span>
        </button>
        <div className="no-print">

        <button onClick={handelPrint} className="md:px-4 px-3 py-1 md:py-2 rounded-lg border border-indigo-100/50 flex justify-center items-center gap-2 text-indigo-500 text-sm shadow font-bold transition-all duration-300 hover:scale-105 active:scale-100 cursor-pointer text-nowrap">
          <Download className="w-4 h-4 md:w-5 md:h-5" />
          <span>Download Report</span>
        </button>
        </div>
    </div>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mt-5">
        {scoreAnalysis?.map((item, index) => {
          const Icon = item?.icon;

          return (
            <div key={index} className=" border rounded-2xl p-5 space-y-4">
              <div className="rounded-xl  flex items-center gap-4">
                <div className="rounded-full bg-blue-100 p-3">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <div>
                  <p className="text-sm text-gray-900 font-bold mb-2">
                    {item?.name}
                  </p>
                  <p>
                    <span
                      className={`text-4xl font-bold ${getScoreColor(item?.score, "score")}`}
                    >
                      {item?.score}
                    </span>
                    <span className="text-base text-black/50 font-semibold">/100</span>
                  </p>
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${getScoreColor(item?.score, "bgColor")}`}
                  style={{ width: `${item?.score}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScoreCards;
