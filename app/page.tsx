import { Header } from "./_components/Header";
import { About } from "./_components/About";
import { Experience } from "./_components/Experience";
import { Skills } from "./_components/Skills";
import { Projects } from "./_components/Projects";
import { Navbar } from "./_components/NavBar";
import { Education } from "./_components/Education";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 pb-16">
      <Header />
      <Separator />
      <About />
      <Separator />
      <Experience />
      <Separator />
      <Education />
      <Separator />
      <Skills />
      <Separator />
      <Projects />
      <Navbar />
    </div>
  );
}
