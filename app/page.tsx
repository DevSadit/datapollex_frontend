
import Cta from "./components/Cta";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Status from "./components/Status";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <div className="">
       <Hero/>
       <Status/>
       <Features/>
       <Testimonial/>
       <Cta/>
      </div>
    </>
  );
}
