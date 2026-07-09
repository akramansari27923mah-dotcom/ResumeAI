import {
  LayoutTemplate,
  FileText,
  SpellCheck,
  Search,
  Eye,
} from "lucide-react";

const ResumeFeedback = ({ resume_feedback }) => {
  const sections = [
    {
      title: "Formatting",
      icon: LayoutTemplate,
      data: resume_feedback?.formatting,
      color: "bg-blue-500",
      textColor: "text-blue-500"
    },
    {
      title: "Content",
      icon: FileText,
      data: resume_feedback?.content,
      color: "bg-green-500",
      textColor: "text-green-500"
    },
    {
      title: "Grammar",
      icon: SpellCheck,
      data: resume_feedback?.grammar,
      color: "bg-purple-500",
      textColor: "text-purple-500"
    },
    {
      title: "Keywords",
      icon: Search,
      data: resume_feedback?.keywords,
      color: "bg-orange-500",
      textColor: "text-orange-500"
    },
    {
      title: "Readability",
      icon: Eye,
      data: resume_feedback?.readability,
      color: "bg-pink-500",
      textColor: "text-pink-500"
    },
  ];

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-black">Resume Feedback</h2>

      <div className="grid gap-5 md:grid-cols-2">
        {sections?.map(({ title, icon: Icon, data, color, textColor }) => (
          <div
            key={title}
            className="rounded-xl border p-5 transition-all duration-300 hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon className="text-blue-600" size={20} />
                <h3 className="font-semibold text-black">{title}</h3>
              </div>

              <span className={`rounded-full ${textColor} px-3 py-1 text-sm font-semibold`}>
                {data?.score ?? 0}%
              </span>
            </div>

            <div className="mb-4 h-2 w-full rounded-full bg-gray-200">
              <div
                className={`h-full rounded-full ${color}`}
                style={{ width: `${data?.score ?? 0}%` }}
              />
            </div>

            <p className="text-sm leading-6 text-gray-600">
              {data?.feedback || "No feedback available."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeFeedback;