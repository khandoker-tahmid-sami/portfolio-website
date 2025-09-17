"use client";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="px-4 py-16">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* myselg */}
        <div className="space-y-5">
          <p className="text-xs tracking-widest text-zinc-400 uppercase">
            Developer
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Hello, I’m{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              Tahmid
            </span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-zinc-300">
            {/* <span className="sr-only">
                            I’m a Frontend Developer, React & Next.js Engineer, TypeScript Enthusiast, UI-focused Problem Solver.
                        </span> */}
            <span aria-hidden className="inline-block min-h-[1.6em]">
              I’m a{" "}
              <span className="bg-gradient-to-r from-indigo-300 to-cyan-200 bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={[
                    "Frontend Developer",
                    1400,
                    "React & Next.js Engineer",
                    1400,
                    "TypeScript Enthusiast",
                    1400,
                    "UI-focused Problem Solver",
                    1400,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </span>
          </p>
          <p className="text-zinc-400 max-w-prose">
            I build fast, accessible web apps with Next.js and Tailwind. Check
            out my latest projects and feel free to reach out.
          </p>

          <div className="flex flex-wrap lg:gap-3 items-center md:gap-2 bp320:gap-0.5">
            <Link
              href="#projects"
              className="rounded-full bg-white lg:px-5 lg:py-3 lg:text-sm md:px-4 md:py-2 bp320:text-[10px] bp320:px-2 bp320:py-2  border border-zinc-700 text-black font-medium hover:opacity-90"
            >
              view projects
            </Link>
            <Link
              href="#contact"
              className="rounded-full bg-white lg:px-5 lg:py-3 lg:text-sm md:px-4 md:py-2 bp320:text-[10px] bp320:px-2 bp320:py-2 border border-zinc-700 text-black font-medium hover:opacity-90"
            >
              contact me
            </Link>
            <Link
              href="/CV.pdf"
              download
              className="flex gap-1 items-center rounded-full bg-white lg:px-5 lg:py-3 lg:text-sm md:px-4 md:py-2 bp320:text-[10px] bp320:px-2 bp320:py-2 border border-zinc-700 text-black font-medium hover:opacity-90"
            >
              download resume
              <Download className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* heosection image */}
        <div className="relative mx-auto">
          {/* soft glow behind the photo */}
          <div
            aria-hidden
            className="absolute -inset-6 rounded-full blur-3xl opacity-30
                       bg-[conic-gradient(at_50%_50%,theme(colors.indigo.500),theme(colors.cyan.400),theme(colors.indigo.500))]"
          />

          <div className="relative size-72 sm:size-80 rounded-full overflow-hidden ring-4 ring-white/10 shadow-2xl">
            <Image
              src="/Developer.png"
              alt="Tahmid — developer portrait"
              fill
              priority
              sizes="(min-width: 768px) 20rem, 18rem"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
