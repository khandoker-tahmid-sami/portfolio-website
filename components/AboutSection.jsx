import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="container mx-auto">
      <h4 className="text-center text-5xl">About me</h4>
      <div className="grid items-center gap-12 md:grid-cols-2 py-8 px-4 lg:gap-16">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={"/Picture.jpg"}
            alt="khandoker Tahmid Sami"
            width={500}
            height={500}
            className="w-full rounded-3xl"
          />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default AboutSection;
