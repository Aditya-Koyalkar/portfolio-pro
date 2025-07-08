"use client";

import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
// import { FaXTwitter } from "react-icons/fa6";
import { ModeToggle } from "./ModeToggle";

export const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[250px] min md:w-[400px] fixed bottom-2 bg-slate-600/40  flex justify-around rounded-lg p-3">
        <div className="flex justify-between w-full p-1">
          <Link href={"/"} target="_blank">
            <IoHomeOutline className="w-5 h-5 hover:scale-110 cursor-pointer transition-all" />
          </Link>
          <a href="mailto:koyalkaraditya123@gmail.com" target="_blank">
            <MdOutlineMail className="w-5 h-5 hover:scale-110 cursor-pointer transition-all" />
          </a>{" "}
          <Link href={"https://github.com/Aditya-Koyalkar"} target="_blank">
            <FaGithub className="w-5 h-5 hover:scale-110 cursor-pointer transition-all" />
          </Link>
          <Link href={"https://www.linkedin.com/in/aditya-koyalkar/"} target="_blank">
            <IoLogoLinkedin className="w-5 h-5 hover:scale-110 cursor-pointer transition-all" />
          </Link>
          {/* <FaXTwitter className="w-5 h-5 hover:scale-110 cursor-pointer transition-all" /> */}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
