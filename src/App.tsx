import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const comp = useRef(null);
  //Creates a reference for the root level element (used for scoping)

  // uselayouteffect triggers after all the dom mutations happens
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
        duration: 0.7,
      });

      t1.from("#welcome", {
        opacity: 0,
        duration: 1.5,
      });
    },
    { scope: comp }
  );

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen w-screen p-10 bg-gray-900 text-gray-200 absolute top-0 left-0 font-spaceGrotesk z-10 flex flex-col gap-10 tracking-tight items-center justify-center"
      >
        <h1 className="text-9xl" id="title-2">
          Jerry Shum
        </h1>
        <h1 className="text-9xl" id="title-3">
          Portfolio
        </h1>
      </div>
      <div className="h-screen flex bg-gray-50 justify-center place-items-center">
        <h1
          className="text-9xl font-bold text-gray-900 font-spaceGrotesk"
          id="welcome"
        >
          Hello World!
        </h1>
      </div>
    </div>
  );
}

export default App;
