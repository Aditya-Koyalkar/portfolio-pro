export const About = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-[22px] font-extrabold">About</div>
      <div className="text-sm">
        I&apos;m a Full Stack Developer currently interning at{" "}
        <a href="https://erino.io/" className="underline text-blue-400">
          Erino
        </a>
        , where I&apos;m working on developing a CRM platform from the ground up. Previously worked at{" "}
        <a href="https://proanalyser.in/" className="underline text-blue-400">
          ProAnalyser
        </a>{" "}
        and{" "}
        <a href="https://al-connect.in/" className="underline text-blue-400">
          Al-Connect
        </a>
        , where I played a key role in building MVPs.
      </div>
    </div>
  );
};
