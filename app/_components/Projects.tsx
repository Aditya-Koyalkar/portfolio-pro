"use client";
import Image from "next/image";
import { ProjectData } from "../_data/ProjectData";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <div className="flex flex-col gap-2">
      <div className="text-xl font-extrabold">Projects</div>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {ProjectData.slice(0, visibleProjects).map((project, index) => (
          <motion.div variants={itemVariants} key={index} className="rounded-md shadow-sm border flex flex-col h-full">
            {project.video ? (
              <video className="w-full rounded-md h-40" src={project.video} autoPlay loop height={300} width={300} />
            ) : (
              <Image className="rounded-md w-full h-40" src={project.image} height={300} width={300} alt="" />
            )}
            <div className="p-2 flex flex-col flex-grow">
              <div className="font-bold">{project.name}</div>
              <div className="text-xs mt-2 text-muted-foreground">{project.description}</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.map((skill, index) => (
                  <Badge variant={"secondary"} key={index} className="text-xs h-4">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-5 mt-2">
                <Link
                  target="_blank"
                  href={project.preview}
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "outline",
                    }),
                    "border-dashed"
                  )}
                >
                  <CiGlobe className="w-4 h-4" /> Preview
                </Link>
                <Link
                  target="_blank"
                  href={project.code}
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "outline",
                    }),
                    "border-dashed"
                  )}
                >
                  <FaCode className="w-5 h-5" /> Source
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-center mt-3">
        {ProjectData.length > 2 && (
          <Button
            variant={"outline"}
            onClick={() => {
              if (visibleProjects == ProjectData.length) {
                setVisibleProjects(2);
              } else setVisibleProjects(ProjectData.length);
            }}
            size={"sm"}
            className="w-fit"
          >
            {visibleProjects == ProjectData.length ? "Show less Projects" : "Show More Projects"}
          </Button>
        )}
      </div>
    </div>
  );
};
