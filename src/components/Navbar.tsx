import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Navbar() {
  const navbar = useRef(null);

  gsap.registerPlugin(TextPlugin);

  useGSAP(
    () => {
      const links = gsap.utils.toArray("#navLink");
      const tl = gsap.timeline();

      tl.from(links, {
        translateY: -200,
        duration: 1,
        stagger: 0.5,
      });

      // links.forEach((link) => {
      //   link.addEventListener("mouseenter", () => {
      //     gsap.to(links, {
      //       opacity: 0.5,
      //       duration: 0.5,
      //     });

      //     gsap.to(link, {
      //       duration: 0.5,
      //       opacity: 1,
      //       scale: 1.5,
      //     });
      //   });

      //   link.addEventListener("mouseleave", () => {
      //     gsap.to(link, {
      //       duration: 0.5,
      //       opacity: 1,
      //       scale: 1,
      //     });
      //   });
      // });
    },
    { scope: navbar }
  );

  return (
    <div className="items-center justify-end border border-red-500 ">
      <nav
        className="flex flex-col gap-2 text-Charcoal(Text)-Normal text-2xl font-normal text-right"
        ref={navbar}
      >
        <a href="#" className="" id="navLink">
          <span>About</span>
        </a>
        <a href="#" className="" id="navLink">
          <span>Works</span>
        </a>
        <a href="#" className="" id="navLink">
          <span>Contact </span>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
