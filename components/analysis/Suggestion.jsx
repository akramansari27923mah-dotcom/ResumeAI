import React from "react";
import { Tags } from "lucide-react";

const Suggestion = ({ keyword_suggestions }) => {
  return (
    <div className="w-full bg-white shadow border border-indigo-100/50 p-3 rounded-2xl">
      <div className="flex items-center gap-2">
        <Tags className="text-indigo-500" />
        <h1 className="text-black font-bold text-pretty">Suggested Keywords</h1>
      </div>
      <div className="mt-3 flex items-center gap-2 flex-wrap">
        {keyword_suggestions?.map((item, ind) => (
          <div key={ind}>
            <span className="px-3 py-1 rounded-md border border-indigo-200 text-xs bg-indigo-100 text-indigo-500 font-semibold">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestion;
