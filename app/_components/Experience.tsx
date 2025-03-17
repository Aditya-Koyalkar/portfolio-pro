"use client";

import Image from "next/image";
import { ExperienceInfo } from "../_data/ExpInfo";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const [showFullDescription, setShowFullDescription] = useState(Array(ExperienceInfo.length).fill(false));
  const [showLink, setShowLink] = useState(Array(ExperienceInfo.length).fill(false));
  const toggleDescription = (index: number) => {
    setShowFullDescription((prevState) => prevState.map((item, i) => (i === index ? !item : item)));
  };

  const handleMouseEnter = (index: number) => {
    setShowLink((prevState) => prevState.map((item, i) => (i === index ? true : item)));
  };

  const handleMouseLeave = (index: number) => {
    setShowLink((prevState) => prevState.map((item, i) => (i === index ? false : item)));
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="text-[22px] font-extrabold">Experience</div>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-3 mt-3">
        {ExperienceInfo.map((experience, index) => {
          const truncatedDescription = experience.description.slice(0, 200);
          const isLongDescription = experience.description.length > 200;

          return (
            <motion.div variants={itemVariants} key={index} className="flex items-start">
              <div className="px-3 py-1">
                <Image src={experience.image} height={50} width={50} alt="" className="rounded-full" />
              </div>
              <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-1">
                    <Link
                      target="_blank"
                      href={experience.link}
                      className="font-bold cursor-pointer md:text-[18px]"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                    >
                      {experience.company} {showLink[index] && <span className=" cursor-pointer font-bold">&gt;</span>}
                    </Link>
                    <div className="text-[12px] md:text-sm">{experience.role}</div>
                  </div>
                  <div className="text-sm text-slate-400">{experience.timeline}</div>
                </div>
                <div className="text-sm">
                  {showFullDescription[index] ? experience.description : truncatedDescription + (isLongDescription ? "..." : "")}
                  {isLongDescription && (
                    <span className="text-slate-500 ml-1 underline cursor-pointer" onClick={() => toggleDescription(index)}>
                      {showFullDescription[index] ? " Show Less" : " Show More"}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
