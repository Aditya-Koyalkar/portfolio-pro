"use client";

import Image from "next/image";
import { ExperienceInfo } from "../_data/ExpInfo";
import { useState } from "react";

export const Experience = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-[22px] font-extrabold">Experience</div>
      <div className="flex flex-col gap-3 mt-3">
        {ExperienceInfo.map((experience, index) => {
          const [showFullDescription, setShowFullDescription] = useState(false);
          const toggleDescription = () => {
            setShowFullDescription(!showFullDescription);
          };
          const truncatedDescription = experience.description.slice(0, 200);
          const isLongDescription = experience.description.length > 200;
          return (
            <div key={index} className="flex">
              <div className="p-3">
                <Image
                  src={experience.image}
                  height={50}
                  width={50}
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="font-bold md:text-[18px]">
                      {experience.company}
                    </div>
                    <div className="text-[12px] md:text-sm">
                      {experience.role}
                    </div>
                  </div>
                  <div className="text-sm text-slate-400">
                    {experience.timeline}
                  </div>
                </div>
                <div className="text-sm">
                  {showFullDescription
                    ? experience.description
                    : truncatedDescription + (isLongDescription ? "..." : "")}
                  {isLongDescription && (
                    <span
                      className="text-slate-500 ml-1 underline cursor-pointer"
                      onClick={toggleDescription}
                    >
                      {showFullDescription ? " Show Less" : " Show More"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
