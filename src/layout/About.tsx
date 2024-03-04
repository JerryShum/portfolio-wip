import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import JerryOEC from "../assets/jerry_oec_resized.jpeg";
import JerryGame from "../assets/Jerry_Game_resized.jpeg";

function About() {
  const aboutScope = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useGSAP(() => {
    const image1 = imageRef1.current;
    const image2 = imageRef2.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-start",
        markers: true,
        start: "top top",
        scrub: true,
        pin: true,
      },
    });

    tl.to(image1, {
      translateX: 700,
      duration: 20,
    });
    tl.to(
      image2,
      {
        translateX: -700,
        duration: 20,
      },
      "<"
    );
  }, []);

  return (
    <div className=" w-full bg-black" id="section-start" ref={aboutScope}>
      <div className="relative">
        <div className="h-screen flex flex-col justify-center items-center">
          <h1 className="uppercase font-league-spartan font-semibold text-9xl ">
            Who Am I?
          </h1>
          <p className="w-[500px] text-center font-archivo-narrow text-2xl">
            I believe in hard work and constantly pursue <br />
            self-improvement, which I strive to achieve through constant
            learning and overcoming challenges.
          </p>
          <span className="w-1/4 mt-10 border border-red-500"></span>
        </div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src={JerryOEC}
            className="h-[800px] w-[640px] rotate-2 object-cover rounded-[30px] z-10"
            id="#sliding-image"
            ref={imageRef1}
          />
          <img
            src={JerryGame}
            className="h-[800px] w-[640px] -rotate-2 object-cover rounded-[30px] absolute top-0 left-0 z-20"
            id="#sliding-image"
            ref={imageRef2}
          />
        </div>

        <div className="h-screen"></div>
      </div>
    </div>
  );
}

export default About;
