"use client";
import Image from "next/image";
import { SkillData } from "../_data/SkillData";
import { motion } from "framer-motion";

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="text-[22px] font-extrabold">Skills</div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-4 md:grid-cols-8 gap-3"
      >
        {SkillData.map((skill, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center group"
            variants={itemVariants}
          >
            <div className="mb-2 text-slate-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              {skill.name}
            </div>
            <Image src={skill.logo} height={50} width={50} alt={skill.name} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
