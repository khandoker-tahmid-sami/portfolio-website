import ProjectList from "./ProjectList";

const ProjectSection = () => {
  return (
    <section className="container mx-auto max-w-8xl px-4 py-12">
      <div className="text-center">
        <h4 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
          <span className="">My Projects</span>
        </h4>
      </div>

      <ProjectList />
    </section>
  );
};

export default ProjectSection;
