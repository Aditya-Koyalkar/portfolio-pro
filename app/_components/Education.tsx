"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AVNLogo from "../../assets/avn.png";
import { useMobile } from "@/hooks/useMobile";
import { cn } from "@/lib/utils";
export const Education = () => {
  const isMobile = useMobile();
  const [showArrow, setshowArrow] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <div className="text-[22px] font-extrabold">Education</div>
      <div className="flex flex-col gap-3 mt-3">
        <div className="flex items-start">
          <div className="px-3 py-1">
            <Image src={AVNLogo} height={isMobile ? 25 : 50} width={isMobile ? 25 : 50} alt="" className="rounded-full" />
          </div>
          <div className="w-full flex flex-col gap-3">
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <Link
                  onMouseEnter={() => setshowArrow(true)}
                  onMouseLeave={() => setshowArrow(false)}
                  target="_blank"
                  href={"https://avniet.ac.in/"}
                  className={cn("font-bold cursor-pointer md:text-[18px]", isMobile && "text-sm")}
                >
                  AVN Institute of Engineering and Technology {showArrow && <span className=" cursor-pointer font-bold">&gt;</span>}
                </Link>
                <div className="text-[12px] md:text-sm">Btech in Computer Science and Engineering</div>
              </div>
              <div className={cn("text-sm text-slate-400 text-nowrap", isMobile && "text-[10px]")}>June 2021 - June 2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
