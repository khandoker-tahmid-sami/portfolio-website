import { Roboto } from "next/font/google";
import ProjectList from "./ProjectList";

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const ProjectSection = () => {
  return (
    <section className="px-4 py-12" id="projects">
      <div className="text-center">
        <h4 className="text-center text-3xl md:text-7xl font-semibold tracking-tight mb-8">
          <span className="text-white bg-clip-text">
            My projects
          </span>
        </h4>
      </div>

      <ProjectList />
    </section>
  );
};

export default ProjectSection;
