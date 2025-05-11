"use client";
import Image from "next/image";
import { ProjectData } from "../_data/ProjectData";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(2);
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

  return (
    <div className="flex flex-col gap-1">
      <div className="text-[22px] font-extrabold">Projects</div>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {ProjectData.slice(0, visibleProjects).map((project, index) => (
          <motion.div variants={itemVariants} key={index} className="rounded-md shadow-sm border border-slate-300 max-w-[500px]">
            {project.video ? (
              <video className="w-full" src={project.video} autoPlay loop />
            ) : (
              <Image className="rounded-md h-[200px] w-full object-cover" src={project.image} height={300} width={300} alt="" />
            )}
            <div className="p-2 text-md">
              <div className="font-bold">{project.name}</div>
              <div className="text-[12px] mt-2 text-slate-400">{project.description}</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.map((skill, index) => (
                  <Badge variant={"secondary"} key={index}>
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-5 mt-4">
                <Link
                  target="_blank"
                  href={project.preview}
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  <CiGlobe className="w-4 h-4" /> Preview
                </Link>
                <Link
                  target="_blank"
                  href={project.code}
                  className={buttonVariants({
                    size: "sm",
                    variant: "secondary",
                  })}
                >
                  <FaCode className="w-5 h-5" /> Source
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {visibleProjects < ProjectData.length && (
        <div
          onClick={() => setVisibleProjects(ProjectData.length)}
          className="mt-4 p-2 text-white text-center underline text-[14px] rounded-md cursor-pointer"
        >
          Show More
        </div>
      )}
    </div>
  );
};
