import { CodeXml, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="max-w-[340px] group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm
                 backdrop-blur-sm transition hover:border-indigo-500/30 hover:shadow-lg"
    >
      {/* image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* content */}
      <div className="p-5">
        <div className="flex flex-row justify-between">
          <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-indigo-300">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            <Link
              href={`${project.link}`}
              target="_blank"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15
                         bg-white/5 text-slate-300 transition hover:text-white hover:border-indigo-400/60
                         hover:bg-indigo-500/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
            >
              <CodeXml className="h-5 w-5" />
            </Link>
            <Link
              href={"/"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15
                         bg-white/5 text-slate-300 transition hover:text-white hover:border-indigo-400/60
                         hover:bg-indigo-500/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
            >
              <Eye className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <p className="mt-2 text-sm text-slate-400 line-clamp-3">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
