"use client";
import Image from "next/image";
import { ProjectData } from "../_data/ProjectData";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";

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
            <Image className="rounded-md h-[200px] w-full" src={project.image} height={300} width={300} alt="" />
            <div className="p-2 text-md">
              <div className="font-bold">{project.name}</div>
              <div className="text-sm mt-2 text-slate-400">{project.description}</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.map((skill, index) => (
                  <div key={index} className="p-1 text-[10px] bg-slate-600 rounded-md text-white">
                    {skill}
                  </div>
                ))}
              </div>
              <div className="flex gap-5 mt-4">
                <Link
                  target="_blank"
                  href={project.preview}
                  className="p-2 bg-slate-600 dark:bg-white flex items-center gap-2 text-white dark:text-black text-[10px] rounded-md"
                >
                  <CiGlobe className="w-4 h-4 text-slate-50 dark:text-slate-500" /> Preview
                </Link>
                <Link
                  target="_blank"
                  href={project.code}
                  className="p-2 bg-slate-600 dark:bg-white flex items-center gap-2 text-white dark:text-black text-[10px] rounded-md"
                >
                  <FaCode className="w-5 h-5 text-slate-50 dark:text-slate-500" /> Source
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
