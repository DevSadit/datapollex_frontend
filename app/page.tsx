import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Landing from "./components/Landing";
import Status from "./components/Status";

export default function Home() {
  return (
    <>
      <div className="">
       <Landing/>
       <Hero/>
       <Status/>
       <Features/>
       <About/>
      </div>
    </>
  );
}
