import Image from "next/image";
import Profile from "../../assets/image.jpg";

export const Header = () => {
  return (
    <div className="flex items-center justify-between gap-8">
      <div className="">
        <div className="text-2xl font-bold">
          {" "}
          Hey, I&apos;m Aditya &#x1f44b;{" "}
        </div>
        <div className="text-sm mt-2 text-slate-400">
          Crafting seamless digital experiences as a full-stack wizard
        </div>
      </div>
      <div>
        <Image
          alt=""
          src={Profile}
          height={100}
          width={100}
          className="rounded-full"
        />
      </div>
    </div>
  );
};
