import { Eye, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm
                 backdrop-blur-sm transition hover:border-indigo-500/30 hover:shadow-lg"
    >
      <div className="p-6">
        {/* Title + actions */}
        <div className="mb-5">
          <h3 className="text-xl font-semibold text-white transition-colors hover:text-indigo-300">
            {project.title}
          </h3>
        </div>

        {/* Two-column content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left: image + description (smaller image) */}
          <div >
            <div className="relative h-48 sm:h-56 md:h-80 w-full overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 420px, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={false}
              />
            </div>

            {project.description && (
              <p className="mt-3 text-[1.1rem] leading-relaxed text-slate-300">
                {project.description}
              </p>
            )}
          </div>

          {/* Right: Features + Technologies + buttons */}
          <div className="flex h-full flex-col">
            {project.features?.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-white/90">
                  Features
                </h4>
                <ul className="mt-2 list-disc list-inside space-y-1 text-lg text-slate-300">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.technologies?.length > 0 && (
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-white/90">
                  Technology Used
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-md text-slate-200 hover:border-indigo-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={project.view}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white
                           shadow-sm transition hover:bg-indigo-500 focus:outline-none focus:ring-2
                           focus:ring-indigo-600 focus:ring-offset-2"
              >
                <Eye className="h-5 w-5" />
                View
              </Link>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2
                           text-slate-200 transition hover:bg-white/5 focus:outline-none focus:ring-2
                           focus:ring-indigo-600 focus:ring-offset-2"
              >
                <Github className="h-5 w-5" />
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
