import { GraduationCap, School, Calendar } from "lucide-react";

const Education = ({ education }) => {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-2">
        <GraduationCap className="text-green-600" />
        <h2 className="text-xl font-bold text-black">Education</h2>
      </div>

      {education?.map((item, index) => (
        <div
          key={index}
          className="rounded-xl border p-4 transition hover:shadow-md"
        >
          <h3 className="text-lg font-semibold text-black">{item?.degree}</h3>

          <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <School size={16} />
              {item?.institution}
            </span>

            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {item?.year}
            </span>
          </div>

          <p className="mt-4 text-gray-600">
            {item?.field || "Field of study not provided."}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Education;
