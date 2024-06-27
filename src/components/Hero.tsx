import React from "react";
import { HiSparkles, HiStar } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="flex h-[70vh] w-screen items-center justify-center bg-body-gradient">
      <div className="flex max-w-4xl items-center justify-center">
        <div className="relative flex flex-col items-center justify-center gap-5 text-center md:gap-12">
          <h1 className="px-2 font-spicy-rice text-4xl leading-[4rem] text-primary sm:text-5xl md:leading-[7rem] lg:text-8xl">
            Hi. I’m Yelly.
            <br />
            Frontend Developer
          </h1>
          <p className="max-w-xl font-pompiere text-lg md:text-2xl">
            I’m a developer specializing in designing and building exceptional
            digital experiences.I am looking forward to collaborate with you!
          </p>
          <div className="absolute -top-10 right-0 hidden sm:block lg:top-0">
            <HiSparkles className="text-7xl text-white" />
          </div>
          <div className="absolute -bottom-10 left-0 hidden sm:block lg:bottom-0">
            <HiStar className="text-7xl text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
