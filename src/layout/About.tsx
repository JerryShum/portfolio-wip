import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import jerryImage from "../assets/jerry_oec.webp";

function About() {
  const comp = useRef(null);
  //Creates a reference for the root level element (used for scoping)

  useGSAP(
    () => {
      const t1 = gsap.timeline();
      t1.from(["#title-1, #title-2, #title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      });
      t1.to(["#title-1, #title-2, #title-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.3,
      });
      t1.to("#intro-slider", {
        yPercent: "-100",
        duration: 0.6,
      });

      const currentDuration = t1.duration();
      console.log(currentDuration);
    },
    { scope: comp }
  );

  return (
    <div className="relative h-screen w-full px-20 " ref={comp}>
      <h1 className=" uppercase font-league-spartan font-semibold text-9xl mt-20">
        Who Am I?
      </h1>
      <img
        src={jerryImage}
        className="absolute top-1/2 left-1/2 w-1/3 border rounded-lg border-black "
      />
    </div>
  );
}

export default About;
