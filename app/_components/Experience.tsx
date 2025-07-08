"use client";

import Image from "next/image";
import { ExperienceInfo } from "../_data/ExpInfo";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useMobile } from "@/hooks/useMobile";
import { cn } from "@/lib/utils";

export const Experience = () => {
  const isMobile = useMobile();
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
  // const [showFullDescription, setShowFullDescription] = useState(Array(ExperienceInfo.length).fill(false));
  const [showLink, setShowLink] = useState(Array(ExperienceInfo.length).fill(false));
  // const toggleDescription = (index: number) => {
  //   setShowFullDescription((prevState) => prevState.map((item, i) => (i === index ? !item : item)));
  // };

  const handleMouseEnter = (index: number) => {
    setShowLink((prevState) => prevState.map((item, i) => (i === index ? true : item)));
  };

  const handleMouseLeave = (index: number) => {
    setShowLink((prevState) => prevState.map((item, i) => (i === index ? false : item)));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-xl font-extrabold">Experience</div>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-3 mt-3">
        {ExperienceInfo.map((experience, index) => {
          return (
            <motion.div variants={itemVariants} key={index} className="flex items-start">
              <div className="px-3 py-1">
                <Image src={experience.image} height={isMobile ? 25 : 40} width={isMobile ? 25 : 40} alt="" className="rounded-full" />
              </div>
              <div className="w-full flex flex-col gap-3">
                <div className="grid grid-cols-[75%_25%]">
                  <div className="flex flex-col gap-1">
                    <Link
                      target="_blank"
                      href={experience.link}
                      className="font-bold cursor-pointer text-sm"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                    >
                      {experience.company} {showLink[index] && <span className=" cursor-pointer font-bold">&gt;</span>}
                    </Link>
                    <Badge className={cn("text-nowrap w-fit text-xs")} variant={"secondary"}>
                      {experience.role}
                    </Badge>
                  </div>
                  <div className={cn("text-xs text-muted-foreground ", isMobile && "text-left")}>{experience.timeline}</div>
                </div>
                {/* <ul className="list-disc pl-5 text-sm space-y-1">
                  {(showFullDescription[index] ? experience.description : experience.description.slice(0, 3)).map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                {experience.description.length > 3 && (
                  <span className="text-slate-500 ml-1 underline cursor-pointer text-sm" onClick={() => toggleDescription(index)}>
                    {showFullDescription[index] ? "Show Less" : "Show More"}
                  </span>
                )} */}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
