import Image from "next/image";
import { Header } from "./_components/Header";
import { About } from "./_components/About";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <About />
    </div>
  );
}
