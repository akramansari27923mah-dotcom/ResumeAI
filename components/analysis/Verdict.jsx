import React from "react";
import { CheckCircle2, XCircle, TrendingUp } from "lucide-react";

const FinalVerdict = ({ final_verdict }) => {
  const { ready_for_job, confidence, message } = final_verdict || {};

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-bold text-black">Final Verdict</h2>

      <div
        className={`mb-5 flex items-center gap-3 rounded-lg p-4 ${
          ready_for_job
            ? "bg-green-50 text-green-700"
            : "bg-red-50 text-red-700"
        }`}
      >
        {ready_for_job ? <CheckCircle2 /> : <XCircle />}
        <div>
          <h3 className="font-semibold">
            {ready_for_job ? "Ready for Job" : "Needs Improvement"}
          </h3>
          <p className="text-sm">
            {ready_for_job
              ? "You can confidently apply for jobs."
              : "Improve your resume before applying."}
          </p>
        </div>
      </div>

      <div className="mb-5">
        <div className="mb-2 flex items-center justify-between text-black">
          <span className="flex items-center gap-2 ">
            <TrendingUp size={18} />
            Confidence
          </span>
          <span className="font-semibold">{confidence}%</span>
        </div>

        <div className="h-2 rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-blue-600"
            style={{ width: `${confidence}%` }}
          />
        </div>
      </div>

      <p className="rounded-lg bg-gray-50 p-4 text-sm leading-6 text-gray-700">
        {message}
      </p>
    </div>
  );
};

export default FinalVerdict;
