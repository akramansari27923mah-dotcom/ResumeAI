import { CodeXml } from "lucide-react";
import React from "react";

const SkillOverview = ({ technical, soft, tools,}) => {
  return (
    <div className="w-full shadow bg-white border border-indigo-100/50 p-3 rounded-2xl">
      <div className="flex items-center gap-2">
        <CodeXml className="text-indigo-400" />
        <span className="text-lg font-bold text-gray-800">Skills Overview</span>
      </div>

      <div className="mt-2">
        <h1 className="text-sm font-bold text-black">Technical Skills</h1>

        <div className="flex flex-wrap gap-2 mt-1">
          {technical?.map((item, ind) => (
            <div
              key={ind}
              className="px-3 py-1 rounded-md border border-gray-200 text-xs bg-gray-100 text-black font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <h1 className="text-sm font-bold text-black">Soft Skills</h1>

        <div className="flex flex-wrap gap-2 mt-1">
          {soft?.map((item, ind) => (
            <div
              key={ind}
              className="px-3 py-1 rounded-md border border-green-200 text-xs bg-green-100 text-green-500 font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <h1 className="text-sm font-bold text-black">Tools</h1>

        <div className="flex flex-wrap gap-2 mt-1">
          {tools?.map((item, ind) => (
            <div
              key={ind}
              className="px-3 py-1 rounded-md border border-indigo-200 text-xs bg-indigo-100 text-indigo-500 font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillOverview;
