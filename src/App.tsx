import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function App() {
  const comp = useRef(null);
  //Creates a reference for the root level element (used for scoping)

  // uselayouteffect triggers after all the dom mutations happens
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1, #title-2, #title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1, #title-2, #title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 1.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen w-screen p-10 bg-gray-50 text-gray-700 absolute top-0 left-0 font-spaceGrotesk z-10 flex flex-col gap-10 tracking-tight"
      >
        <h1 className="text-9xl" id="title-1">
          Software Engineer
        </h1>
        <h1 className="text-9xl" id="title-2">
          Designer
        </h1>
        <h1 className="text-9xl" id="title-3">
          Student
        </h1>
      </div>
      <div className="h-screen flex bg-gray-950 justify-center place-items-center">
        <h1
          className="text-9xl font-bold text-gray-400 font-spaceGrotesk"
          id="welcome"
        >
          Hello World!
        </h1>
      </div>
    </div>
  );
}

export default App;
