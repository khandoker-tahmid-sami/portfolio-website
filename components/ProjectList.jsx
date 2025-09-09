import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { myProjects } from "@/data";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <div className="w-full flex justify-center">
      <Tabs
        defaultValue={myProjects?.[0]?.title}
        className=" w-full max-w-5xl  mx-auto items-center"
      >
        <TabsList
          className="xs:mb-30 sm:mb-10 md:mb-0 bg-transparent  rounded-xl
            border border-white/20
            flex flex-wrap justify-center gap-3 hover:border-indigo-500/30"
        >
          {myProjects.map((project, index) => (
            <TabsTrigger
              key={index}
              value={project.title}
              className="
                cursor-pointer px-6 py-4 rounded-lg
                text-white/80 hover:text-white
                bg-transparent hover:bg-border-indigo-500/30
                border border-white/20
                transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60
                data-[state=active]:text-white
                data-[state=active]:bg-white/10
                data-[state=active]:border-white/20
              "
            >
              {project.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {myProjects.map((project, idx) => (
          <TabsContent
            key={project.title || idx}
            value={project.title}
            className="mt-6"
          >
            <ProjectCard project={project} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ProjectList;
