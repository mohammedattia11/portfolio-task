import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import myCv from "../../data/CV/Mohamed-Atia CV.pdf"
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
        "flex bg-main-color z-10 justify-between items-center py-3 px-8 md:px-32 text-stone-100 drop-shadow-md fixed w-full transition-all duration-300",
        isScrolled ? "lg:bg-main-color" : "lg:bg-transparent"
      )}
    >
      <a href="#" className="capitalize text-xl font-bold">
        atia{" "}
      </a>
      <div className="flex flex-row">
        <ul className="hidden lg:flex  items-center gap-12 font-semibold text-base">
          <li className="p-1 hover:text-secondary-color transition-all duration-300">
            <a href="#home">Home</a>
          </li>
          <li className="p-1 hover:text-secondary-color transition-all duration-300">
            <a href="#about">About</a>
          </li>
          <li className="p-1 hover:text-secondary-color transition-all duration-300">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="p-1 hover:text-secondary-color transition-all duration-300">
            <a href="#skills">Skills</a>
          </li>
          <li className="p-1 hover:text-secondary-color transition-all duration-300">
            <a href="#contact">Contact</a>
          </li>
          <li className="p-1 hover:text-secondary-color transition-all duration-300">
            <a href="#blog">Blog</a>
          </li>
        </ul>
        <a href={myCv} download="Mohamed-atia-CV" className="hidden lg:flex ms-4">
          <Button size={"sm"} className="rounded-full">
          Download CV
        </Button>
        </a>
      </div>
      {isMenuOpen ? (
        <X
          onClick={() => setIsMenuOpen(false)}
          className="block lg:hidden cursor-pointer"
        />
      ) : (
        <Menu
          onClick={() => setIsMenuOpen(true)}
          className="block lg:hidden cursor-pointer"
        />
      )}
      {/* drop down menu */}
      <div
        className={`absolute xl:hidden top-12 left-0 w-full bg-main-color p-4 ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-start gap-3 font-semibold text-lg transition-all duration-300">
          <li className="list-none text-center hover:text-secondary-color duration-300 transition-all cursor-pointer">
            <a  href="#home">Home</a>
          </li>
          <li className="list-none text-center hover:text-secondary-color duration-300 transition-all cursor-pointer">
            <a onClick={()=>setIsMenuOpen(false)} href="#about">About</a>
          </li>
          <li className="list-none text-center hover:text-secondary-color duration-300 transition-all cursor-pointer">
            <a onClick={()=>setIsMenuOpen(false)} href="#portfolio">Portfolio</a>
          </li>
          <li className="list-none text-center hover:text-secondary-color duration-300 transition-all cursor-pointer">
            <a onClick={()=>setIsMenuOpen(false)} href="#skills">Skills</a>
          </li>
          <li className="list-none text-center hover:text-secondary-color duration-300 transition-all cursor-pointer">
            <a onClick={()=>setIsMenuOpen(false)} href="#contact">Contact</a>
          </li>
          <li className="list-none text-center hover:text-secondary-color duration-300 transition-all cursor-pointer">
            <a onClick={()=>setIsMenuOpen(false)} href="#blog">Blog</a>
          </li>
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
