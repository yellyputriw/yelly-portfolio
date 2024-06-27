import { projectData } from "@/utils/project-data";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProjectItem {
  image: StaticImageData;
  title: string;
  description: string;
  tools: string[];
}

const ProjectList = () => {
  return (
    <>
      {projectData?.map((item: ProjectItem, index: number) => (
        <div
          key={index}
          className="mx-4 my-4 flex items-center justify-center md:mx-auto md:my-0 md:h-screen md:w-[50vw]"
        >
          <div className="grid h-2/4 w-full grid-cols-1 items-center gap-8 rounded-3xl bg-white p-8 shadow-custom-shadow md:grid-cols-2">
            <Image src={item.image} alt="test" width={542} height={420} />
            <div className="flex w-full flex-col items-start justify-start gap-4">
              <h6 className="font-pompiere text-3xl text-[#f358a8] md:text-4xl">
                {item.title}
              </h6>
              <p className="text-base">{item.description} </p>
              <div className="flex flex-wrap items-center gap-2">
                {item.tools.map((tool: string) => (
                  <span
                    key={tool}
                    className="whitespace-nowrap rounded bg-[#B4E4FF] px-2.5 py-0.5 text-xs font-medium text-[#00639b]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectList;
