"use client";

import { Badge } from "@/components/ui/badge";
import Me from "../../assets/me.jpg";
import { useMobile } from "@/hooks/useMobile";
import { cn } from "@/lib/utils";
export const Header = () => {
  const isMobile = useMobile();
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <h1 className={cn("text-[40px] font-extrabold tracking-tight", isMobile && "text-lg")}> Hi,I&apos;m Aditya </h1>
        <Badge variant={"secondary"} className="border-dashed border-2 border-muted-foreground text-xs">
          Full-Stack Developer{" "}
        </Badge>
      </div>
      <div>
        <img alt="profile" src={Me.src} className="rounded-full w-24 h-24" />
      </div>
    </div>
  );
};
