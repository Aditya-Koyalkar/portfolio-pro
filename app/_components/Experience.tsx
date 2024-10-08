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
        staggerChildren: 0.2, // Time between each experience item animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start below
    visible: { opacity: 1, y: 0 }, // Move to original position
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="text-[22px] font-extrabold">Experience</div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-3 mt-3"
      >
        {ExperienceInfo.map((experience, index) => {
          const [showFullDescription, setShowFullDescription] = useState(false);
          const [showLink, setShowLink] = useState(false);
          const toggleDescription = () => {
            setShowFullDescription(!showFullDescription);
          };
          const truncatedDescription = experience.description.slice(0, 200);
          const isLongDescription = experience.description.length > 200;
          return (
            <motion.div variants={itemVariants} key={index} className="flex">
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
                    <Link
                      target="_blank"
                      href={experience.link}
                      className="font-bold cursor-pointer md:text-[18px]"
                      onMouseEnter={() => setShowLink(true)}
                      onMouseLeave={() => setShowLink(false)}
                    >
                      {experience.company}{" "}
                      {showLink && (
                        <span className=" cursor-pointer font-bold">&gt;</span>
                      )}
                    </Link>
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
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
