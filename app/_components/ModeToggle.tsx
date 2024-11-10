"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div>
      {theme === "dark" ? (
        <Sun
          onClick={() => setTheme("light")}
          className="h-[1.2rem] w-[1.2rem] cursor-pointer hover:scale-110 transition-all"
        />
      ) : (
        <Moon
          onClick={() => setTheme("dark")}
          className="h-[1.2rem] w-[1.2rem] cursor-pointer hover:scale-110 transition-all"
        />
      )}
    </div>
  );
}
