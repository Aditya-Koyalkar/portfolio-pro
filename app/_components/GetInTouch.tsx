import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
import { MdOutlineMail } from "react-icons/md";

export const GetInTouch = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl font-extrabold">Get in Touch</div>
      <div className="text-muted-foreground">
        Want to chat? just shoot me a dm via{" "}
        <Badge variant={"secondary"}>
          <a href="mailto:koyalkaraditya123@gmail.com" className="flex items-center gap-1">
            <MdOutlineMail />
            Gmail
          </a>
        </Badge>
        {/* <div className="w-full flex justify-center mt-4">
          <Button size={"sm"}>Download Resume</Button>
        </div> */}
      </div>
    </div>
  );
};
