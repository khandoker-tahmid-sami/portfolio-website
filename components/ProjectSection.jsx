import { Roboto } from "next/font/google";
import ProjectList from "./ProjectList";

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const ProjectSection = () => {
  return (
    <section className="max-w-8xl px-4 py-12" id="projects">
      <div className="text-center">
        <h4 className="text-center text-3xl md:text-4xl font-semibold tracking-tight mb-8">
          <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            My projects
          </span>
        </h4>
      </div>

      <ProjectList />
    </section>
  );
};

export default ProjectSection;
