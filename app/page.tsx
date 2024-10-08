import Image from "next/image";
import { Header } from "./_components/Header";
import { About } from "./_components/About";
import { Experience } from "./_components/Experience";
import { Skills } from "./_components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <About />
      <Experience />
      <Skills />
    </div>
  );
}
