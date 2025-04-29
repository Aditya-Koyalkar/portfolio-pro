import Me from "../../assets/me.jpg";
export const Header = () => {
  return (
    <div className="flex items-center justify-between gap-8">
      <div className="">
        <div className="text-2xl font-bold"> Hey, I&apos;m Aditya &#x1f44b; </div>
        <div className="text-sm mt-2 text-slate-400">A Full stack developer | I love building smart, useful web apps that solve real problems.</div>
      </div>
      <div>{/* <img alt="profile" src={Me.src} className="rounded-full w-24 h-28" /> */}</div>
    </div>
  );
};
