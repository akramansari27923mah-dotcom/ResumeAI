import React from "react";
import { TriangleAlert, CircleAlert } from "lucide-react";

const Section = ({ title, items, Icon, color }) => (
  <div>
    <div className="mb-3 flex items-center gap-2">
      <Icon className={`h-5 w-5 ${color?.icon}`} />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>

    <div className="space-y-3">
      {items?.map((item, index) => (
        <div
          key={index}
          className={`flex items-start gap-3 rounded-xl border p-4 transition-all duration-300 hover:shadow-md ${color.card}`}
        >
          <Icon className={`mt-1 h-5 w-5 shrink-0 ${color?.icon}`} />
          <p className="text-sm leading-6 text-gray-700">{item}</p>
        </div>
      ))}
    </div>
  </div>
);

const Weakness = ({ weaknesses, missing_information }) => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Section
        title="Weaknesses"
        items={weaknesses}
        Icon={TriangleAlert}
        color={{
          icon: "text-orange-500",
          card:
            "border-orange-200 bg-orange-50 hover:bg-orange-100",
        }}
      />

      <Section
        title="Missing Information"
        items={missing_information}
        Icon={CircleAlert}
        color={{
          icon: "text-red-500",
          card:
            "border-red-200 bg-red-50 hover:bg-red-100",
        }}
      />
    </div>
  );
};

export default Weakness;