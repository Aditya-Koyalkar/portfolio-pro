"use client";
import { SkillData } from "../_data/SkillData";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-wrap gap-2">
        {SkillData.map((skill, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Badge>{skill.name}</Badge>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
