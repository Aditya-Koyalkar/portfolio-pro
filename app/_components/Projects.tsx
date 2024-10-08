"use client";
import Image from "next/image";
import { ProjectData } from "../_data/ProjectData";
import { motion } from "framer-motion";

export const Projects = () => {
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-3 md:grid-cols-2"
      >
        {ProjectData.map((project, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="rounded-md shadow-sm border border-slate-800 max-w-[500px]"
          >
            <Image
              className="rounded-md h-[200px] w-full"
              src={project.image}
              height={300}
              width={300}
              alt=""
            />
            <div className="p-2 text-md">
              <div className="font-bold">{project.name}</div>
              <div className="text-sm mt-2 text-slate-400">
                {project.description}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.map((skill, index) => (
                  <div
                    key={index}
                    className="p-1 text-[10px] bg-slate-600 rounded-md text-white"
                  >
                    {skill}
                  </div>
                ))}
              </div>
              <div className="flex gap-5 mt-4">
                <button className="p-2 bg-white text-black text-[10px] rounded-md">
                  Preview
                </button>
                <button className="p-2 bg-white text-black text-[10px] rounded-md">
                  Source
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
