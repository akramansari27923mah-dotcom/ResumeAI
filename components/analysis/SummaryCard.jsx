import { FileText } from "lucide-react";
import React from "react";

const SummaryCard = ({ summary }) => {
  return (
    <div>
      {/* summary-container */}
      <div className="bg-white shadow p-5 rounded-2xl border-indigo-100/50  border flex flex-col justify-center gap-3">
        <div className="flex items-center gap-2">
          <FileText className="h-8 w-8 text-blue-600" />
          <span className="text-black font-bold">Professional summary</span>
        </div>
        <p className="text-black text-sm w-[70%]">{summary}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
