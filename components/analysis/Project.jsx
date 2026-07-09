import { FolderKanban, Code2, Sparkles } from "lucide-react";

const Projects = ({ projects }) => {
  if (!projects?.length) {
    return (
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <FolderKanban className="text-blue-600" />
          <h2 className="text-xl font-bold text-black">Projects</h2>
        </div>

        <p className="text-gray-500">No projects available.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-2">
        <FolderKanban className="text-blue-600" />
        <h2 className="text-xl font-bold text-black">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {projects?.map((project, index) => (
          <div
            key={index}
            className="rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
    
            <h3 className="text-lg font-semibold text-gray-900">
              {project?.name || "Untitled Project"}
            </h3>

            
            <p className="mt-3 text-sm leading-6 text-gray-600">
              {project?.description || "No description available."}
            </p>

        
            <div className="mt-5">
              <div className="mb-2 flex items-center gap-2">
                <Code2 size={18} className="text-blue-600" />
                <span className="font-medium text-black">Technologies</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project?.technologies?.length ? (
                  project?.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {tech}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-gray-500">
                    No technologies listed.
                  </span>
                )}
              </div>
            </div>

    
            {project?.impact && (
              <div className="mt-5 flex items-start gap-2 rounded-lg bg-green-50 p-3">
                <Sparkles
                  size={18}
                  className="mt-0.5 shrink-0 text-green-600"
                />
                <p className="text-sm text-green-700">{project.impact}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
