import Image from "next/image";
import { SkillData } from "../_data/SkillData";

export const Skills = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-[22px] font-extrabold">Skills</div>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
        {SkillData.map((skill, index) => (
          <div key={index} className="relative group">
            <div className="mb-2 text-slate-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              {skill.name}
            </div>
            <Image src={skill.logo} height={50} width={50} alt={skill.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
