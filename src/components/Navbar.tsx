import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Navbar() {
  const navbar = useRef(null);

  gsap.registerPlugin(TextPlugin);

  useGSAP(
    () => {
      const links = gsap.utils.toArray("#nav-link");

      gsap.from("#nav-link", {
        translateX: 200,
        opacity: 0.1,
        duration: 1,
        stagger: 0.5,
      });

      links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          gsap.to(links, {
            opacity: 0.5,
            duration: 0.5,
          });

          gsap.to(link, {
            opacity: 1,
            duration: 0.5,
            scale: 1.5,
          });
        });

        link.addEventListener("mouseleave", () => {
          gsap.to(links, {
            opacity: 1,
            duration: 0.5,
          });

          gsap.to(link, {
            duration: 0.5,
            scale: 1,
          });
        });
      });
    },
    { scope: navbar }
  );

  return (
    <div className="items-center justify-end  " ref={navbar}>
      <nav className="flex flex-col gap-2 text-Charcoal(Text)-Normal text-2xl font-normal text-right">
        <a href="#" className="" id="nav-link">
          <span>About</span>
        </a>
        <a href="#" className="" id="nav-link">
          <span>Works</span>
        </a>
        <a href="#" className="" id="nav-link">
          <span>Contact </span>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
