import { myProjects } from "@/data";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {myProjects?.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
