import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import JerryOEC from "../assets/jerry_oec_resized.jpeg";
import JerryGame from "../assets/Jerry_Game_resized.jpeg";

function About() {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useGSAP(() => {
    const image = imageRef.current;
  }, []);

  return (
    <div className="relative h-screen w-full">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="uppercase font-league-spartan font-semibold text-9xl ">
          Who Am I?
        </h1>
        <span>Hello World!</span>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src={JerryOEC}
          className="h-[800px] w-[640px] rotate-3 object-cover rounded-[30px] border border-red-500 z-10"
          id="#sliding-image1"
          ref={imageRef1}
        />
        <img
          src={JerryGame}
          className="h-[800] w-[640] -rotate-3 object-cover rounded-[30px] border border-red-500 absolute top-0 left-0 z-20"
          id="#sliding-image2"
          ref={imageRef2}
        />
      </div>
    </div>
  );
}

export default About;
