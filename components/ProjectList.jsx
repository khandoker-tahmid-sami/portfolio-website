import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { myProjects } from "@/data";

const ProjectList = () => {
  return (
    <div className="w-full flex justify-center">
      <Tabs
        defaultValue={myProjects?.[0]?.title}
        className="w-full max-w-5xl mx-auto  items-center"
      >
        <TabsList
          className="bg-transparent p-2 rounded-xl
            border border-white/10
            flex flex-wrap justify-center gap-2"
        >
          {myProjects.map((project, index) => (
            <TabsTrigger
              key={index}
              value={project.title}
              className="
                cursor-pointer px-4 py-2 rounded-lg
                text-white/80 hover:text-white
                bg-transparent hover:bg-white/5
                border border-white/10
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
        {/* <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent> */}
      </Tabs>
      {/* {myProjects?.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))} */}
    </div>
  );
};

export default ProjectList;
