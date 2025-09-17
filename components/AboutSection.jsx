import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="" id="about">
      <h4 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">
        <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
          About me
        </span>
      </h4>
      <div className="grid items-center gap-12 md:grid-cols-2 py-8 px-4 lg:gap-16">
        <div className="w-44 sm:w-80">
          <Image
            src={"/Picture.jpg"}
            alt="khandoker Tahmid Sami"
            width={500}
            height={500}
            className="w-full rounded-full"
          />
        </div>
        <div>My details</div>
      </div>
    </section>
  );
};

export default AboutSection;
