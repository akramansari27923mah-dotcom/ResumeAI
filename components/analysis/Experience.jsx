import { Briefcase, Building2, Calendar } from "lucide-react";

const Experience = ({ experience }) => {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-2">
        <Briefcase className="text-blue-600" />
        <h2 className="text-xl font-bold text-black">Experience</h2>
      </div>

      {experience?.length > 0 ? (
        experience?.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border p-4 transition hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-black">
              {item?.role || "Role Not Provided"}
            </h3>

            <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Building2 size={16} />
                {item?.company || "Company Not Provided"}
              </span>

              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {item?.duration || "Duration Not Provided"}
              </span>
            </div>

            <p className="mt-4 text-gray-600">
              {item?.description || "No description available."}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No experience added.</p>
      )}
    </div>
  );
};

export default Experience;