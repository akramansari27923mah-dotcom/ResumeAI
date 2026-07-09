import React from "react";
import { ChevronRight } from "lucide-react";

const RecommendationCard = ({ title, icon: Icon, items, color }) => {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-2">
        <Icon className={color} size={22} />
        <h2 className="text-xl font-bold text-black">{title}</h2>
      </div>

      <div className="space-y-3">
        {items?.length ? (
          items?.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg border p-4 transition-all duration-300 hover:shadow-md"
            >
              <ChevronRight
                size={18}
                className={`${color} mt-0.5 shrink-0`}
              />
              <p className="text-sm leading-6 text-gray-700">{item}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No data available.</p>
        )}
      </div>
    </div>
  );
};

export default RecommendationCard;