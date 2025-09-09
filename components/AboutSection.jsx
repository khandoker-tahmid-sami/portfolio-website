import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="">
      <h4 className="text-center text-5xl">About me</h4>
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
