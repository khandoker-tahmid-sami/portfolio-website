import {
  Contact,
  Github,
  House,
  Linkedin,
  SquareChartGantt,
} from "lucide-react";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const FooterSection = () => {
  return (
    <footer className={`mt-4 border-t-2 border-white/10 ${roboto.className}`}>
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* brand / copyright */}
          <p className="text-sm text-slate-400 text-center md:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-medium text-white">Tahmid Sami</span>. All
            rights reserved.
          </p>

          {/* quick nav (optional) */}
          <nav
            className="relative isolate flex items-center gap-6 rounded-2xl border border-white/10
                bg-white/5 px-5 py-3 backdrop-blur-sm"
          >
            {/* Home (icon) */}
            <Link
              href="/"
              aria-label="Home"
              className="group relative inline-flex items-center justify-center text-slate-300
               transition transform-gpu hover:-translate-y-1 hover:scale-110 hover:text-white"
            >
              <House className="h-5 w-5" />
              {/* label */}
              <span
                className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2
                     rounded-md border border-white/15 bg-white/10 px-2 py-0.5
                     text-[11px] text-white opacity-0 translate-y-1
                     shadow-lg backdrop-blur-md whitespace-nowrap
                     transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0"
              >
                Home
              </span>
              {/* tiny arrow */}
              <span
                className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2
                     h-2 w-2 rotate-45 border border-white/15 bg-white/10
                     opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </Link>

            {/* Projects (text) */}
            <Link
              href="/projects"
              className="group relative inline-flex items-center text-slate-300
               transition transform-gpu hover:-translate-y-1 hover:scale-110 hover:text-white"
            >
              <SquareChartGantt />
              <span
                className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2
                     rounded-md border border-white/15 bg-white/10 px-2 py-0.5
                     text-[11px] text-white opacity-0 translate-y-1
                     shadow-lg backdrop-blur-md whitespace-nowrap
                     transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0"
              >
                Projects
              </span>
              <span
                className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2
                     h-2 w-2 rotate-45 border border-white/15 bg-white/10
                     opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </Link>

            {/* Contact (text) */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center text-slate-300
               transition transform-gpu hover:-translate-y-1 hover:scale-110 hover:text-white"
            >
              <Contact />
              <span
                className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2
                     rounded-md border border-white/15 bg-white/10 px-2 py-0.5
                     text-[11px] text-white opacity-0 translate-y-1
                     shadow-lg backdrop-blur-md whitespace-nowrap
                     transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0"
              >
                Contact
              </span>
              <span
                className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2
                     h-2 w-2 rotate-45 border border-white/15 bg-white/10
                     opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </Link>
          </nav>

          {/* socials */}
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/khandoker-tahmid-sami"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full
                         border border-white/15 bg-white/5 text-slate-300
                         transition hover:text-white hover:border-indigo-400/60 hover:bg-indigo-500/10
                         focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
            >
              <Github className="h-5 w-5" />
              <span
                className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2
                     rounded-md border border-white/15 bg-white/10 px-2 py-0.5
                     text-[13px] text-white opacity-0 translate-y-1
                     shadow-lg backdrop-blur-md whitespace-nowrap
                     transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0"
              >
                Github
              </span>
              <span
                className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2
                     h-2 w-2 rotate-45 border border-white/15 bg-white/10
                     opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/khandokertahmidsami/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className=" group relative inline-flex h-10 w-10 items-center justify-center rounded-full
                         border border-white/15 bg-white/5 text-slate-300
                         transition hover:text-white hover:border-indigo-400/60 hover:bg-indigo-500/10
                         focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
            >
              <Linkedin className="h-5 w-5" />
              <span
                className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2
                     rounded-md border border-white/15 bg-white/10 px-2 py-0.5
                     text-[13px] text-white opacity-0 translate-y-1
                     shadow-lg backdrop-blur-md whitespace-nowrap
                     transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0"
              >
                LinkedIn
              </span>
              <span
                className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2
                     h-2 w-2 rotate-45 border border-white/15 bg-white/10
                     opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
