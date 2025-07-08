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
    <div className="flex flex-col gap-2">
      <div className="text-xl font-extrabold">Education</div>
      <div className="flex flex-col gap-3 mt-3">
        <div className="flex items-start">
          <div className="px-3 py-1">
            <Image src={AVNLogo} height={isMobile ? 25 : 40} width={isMobile ? 25 : 40} alt="" className="rounded-full" />
          </div>
          <div className="w-full flex flex-col gap-3">
            <div className="grid grid-cols-[75%_25%]">
              <div className="flex flex-col gap-1">
                <Link
                  onMouseEnter={() => setshowArrow(true)}
                  onMouseLeave={() => setshowArrow(false)}
                  target="_blank"
                  href={"https://avniet.ac.in/"}
                  className={cn("font-bold cursor-pointer text-sm")}
                >
                  AVN Institute of Engineering and Technology {showArrow && <span className=" cursor-pointer font-bold">&gt;</span>}
                </Link>
                <div className="text-xs">Btech in Computer Science and Engineering</div>
              </div>
              <div className={cn("text-xs text-muted-foreground text-nowrap")}>June 2021 - June 2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
