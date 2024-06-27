import { aboutData } from "@/utils/about-data";
import Image, { StaticImageData } from "next/image";
import Dots from "@/app/assets/dots.svg";

interface AboutData {
  title: string;
  image: StaticImageData;
}

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-7xl items-center justify-center px-4 py-32 md:px-0"
    >
      <div className="flex max-w-7xl flex-col items-center justify-between gap-32 lg:flex-row">
        <div className="md:abilities relative">
          <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {aboutData?.map((item: AboutData, index: number) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-xl bg-white shadow-custom-shadow"
              >
                <Image src={item.image} alt="" />
                <p className="pb-2.5 font-pompiere text-xl text-secondary">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full max-w-96 flex-col items-center justify-center gap-3 text-center">
          <h2 className="font-spicy-rice text-3xl text-primary md:text-5xl">
            About me
          </h2>
          <p className="font-pompiere text-xl md:text-2xl">
            I am a self-taught developer with more than 2 year of experience in
            web development using ReactJS framework. I am proficient in
            programming languages such as JavaScript, TypeScript, CSS, and HTML.
            I am always eager to learn new technologies. With my technical
            abilities and creativity, I am confident that I can make a valuable
            contribution to the companies and clients I serve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
