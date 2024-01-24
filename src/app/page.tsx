import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <main className="bg-slate-300 w-screen h-screen">
      <div>
        <h1>Hello World</h1>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
