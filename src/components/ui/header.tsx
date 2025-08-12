import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(function () {
    function scrollHandler() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  return (
    <header
      className={`fixed w-full ${
        isScrolled ? "bg-main-color" : "bg-transparent"
      } transition-all duration-300 `}
    >
      <Navbar />
    </header>
  );
}
