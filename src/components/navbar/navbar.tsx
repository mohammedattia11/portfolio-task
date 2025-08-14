import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import myCv from "../../data/CV/Mohamed-Atia CV.pdf";
import { Button } from "../ui/button";
import NavList from "./NavList";
import NavItem from "./NavItem";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(function () {
    function scrollHandler() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  return (
    <nav
      className={clsx(
        "bg-main-color fixed z-10 flex w-full items-center justify-between px-8 py-5 text-stone-100 drop-shadow-md transition-all duration-300 md:px-32",
        isScrolled ? "lg:bg-main-color" : "lg:bg-transparent",
      )}
    >
      <a href="#" className="text-xl font-bold capitalize">
        atia{" "}
      </a>
      <div className="flex flex-row">
        <NavList/>
        <a
          href={myCv}
          download="Mohamed-atia-CV"
          className="ms-4 hidden lg:flex"
        >
          <Button size={"sm"} className="rounded-full">
            Download CV
          </Button>
        </a>
      </div>
      {isMenuOpen ? (
        <X
          onClick={() => setIsMenuOpen(false)}
          className="block cursor-pointer lg:hidden"
        />
      ) : (
        <Menu
          onClick={() => setIsMenuOpen(true)}
          className="block cursor-pointer lg:hidden"
        />
      )}
      {/* drop down menu */}
      <div
        className={`bg-main-color absolute top-12 left-0 w-full p-4 xl:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-start gap-3 text-lg font-semibold transition-all duration-300">
          <NavItem item="home" onClick={() => setIsMenuOpen(false)}/>
          <NavItem item="about" onClick={() => setIsMenuOpen(false)}/>
          <NavItem item="portfolio" onClick={() => setIsMenuOpen(false)}/>
          <NavItem item="skills" onClick={() => setIsMenuOpen(false)}/>
          <NavItem item="contact" onClick={() => setIsMenuOpen(false)}/>
          <NavItem item="blog" onClick={() => setIsMenuOpen(false)}/>
          <a href={myCv} download="Mohamed-atia-CV">
            <Button size={"lg"} className="rounded-full">
              Download CV
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
