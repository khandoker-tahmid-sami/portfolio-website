import Image from "next/image";

import { aboutMe } from "@/aboutMe";

const AboutSection = () => {
  return (
 <section id="about" className="px-4 py-12">
      <h2 className="mb-8 text-center text-3xl md:text-7xl font-semibold tracking-tight">
        <span className="text-white bg-clip-text">
          About me
        </span>
      </h2>

      <div className="relative">
        {/* vertical timeline line */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-[6.5rem] md:left-[7.5rem] top-0 h-full w-px bg-white/10"
        />

        <ol className="space-y-10">
          {aboutMe.map((item, i) => (
            <li
              key={i}
              className="grid grid-cols-[6.5rem_1fr] md:grid-cols-[7.5rem_1fr] gap-6"
            >
              {/* left column: date */}
              <div className="text-right pr-3">
                <div className="text-sm md:text-base text-slate-400 tabular-nums">
                  {item.date}
                </div>
              </div>

              {/* right column: card */}
              <div className="relative rounded-xl border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur-sm">
                {/* dot on the line */}
                <span
                  aria-hidden
                  className="absolute -left-[1.05rem] md:-left-[1.2rem] top-2.5 h-2.5 w-2.5 rounded-full bg-indigo-400 ring-2 ring-indigo-400/30"
                />

                <h3 className="text-white text-base md:text-lg font-semibold">
                  {item.title} <span className="text-slate-400">at</span>{" "}
                  <span className="text-indigo-300">{item.company}</span>
                </h3>

                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm md:text-[15px] leading-relaxed text-slate-300">
                  {item.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default AboutSection;



    // <section className="" id="about">
    //   <h4 className="text-center text-3xl md:text-7xl font-semibold tracking-tight">
    //     <span className="text-white bg-clip-text">
    //       About me
    //     </span>
    //   </h4>
    //   <div className="grid items-center gap-12 md:grid-cols-2 py-8 px-4 lg:gap-16">
    //     {/* <div className="w-44 sm:w-80">
    //       <Image
    //         src={"/Picture.jpg"}
    //         alt="khandoker Tahmid Sami"
    //         width={500}
    //         height={500}
    //         className="w-full rounded-full"
    //       />
    //     </div>
    //     <div>My details</div> */}
    //   </div>
    // </section>
