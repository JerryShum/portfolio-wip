import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
  const welcome = useRef(null);
  //Creates a reference for the root level element (used for scoping)

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      timeline.from("#heading", {
        opacity: 0,
        duration: 1.5,
      });
    },
    { scope: welcome }
  );

  return (
    <div className="relative" ref={welcome}>
      <div
        className=" w-screen h-screen bg-Beigeish(BG)-Normal flex flex-col justify-center"
        ref={welcome}
      >
        <h1
          className=" text-9xl text-Charcoal(Text)-Normal font-bold text-center"
          id="heading"
        >
          Portfolio Page
        </h1>
      </div>
    </div>
  );
}

export default Hero;
