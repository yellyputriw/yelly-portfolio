"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image, { StaticImageData } from "next/image";
import LinePattern from "@/app/assets/line.svg";
import ProjectList from "./ProjectList";

const Project = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      },
    );
    return () => {
      {
      }
      pin.kill();
    };
  }, []);

  return (
    <div id="project">
      <section className="hidden overflow-hidden md:block">
        <div ref={triggerRef} className="">
          <div
            ref={sectionRef}
            className="relative flex h-screen w-[400vw] flex-row"
          >
            <div className="mx-auto flex h-screen w-[32vw] items-center justify-center">
              <div className="w-full">
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-center font-spicy-rice text-5xl text-[#042140]">
                    Some Things I’ve Built
                  </h2>
                  <Image src={LinePattern} alt="" />
                </div>
              </div>
            </div>

            <ProjectList />
          </div>
        </div>
      </section>
      <div className="block md:hidden">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center font-spicy-rice text-3xl text-[#042140] md:text-5xl">
              Some Things I’ve Built
            </h2>
            <Image src={LinePattern} alt="" />
          </div>
          <ProjectList />
        </div>
      </div>
    </div>
  );
};

export default Project;
