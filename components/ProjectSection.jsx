import ProjectList from "./ProjectList";

const ProjectSection = () => {
  return (
    <section className="container mx-auto max-w-8xl px-4 py-12">
      <div className="text-center">
        <h4 className="text-3xl md:text-4xl font-semibold tracking-tight">
          <span className="">My Projects</span>
        </h4>
        {/* <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500/80" /> */}
      </div>

      <ProjectList />
    </section>
  );
};

export default ProjectSection;
