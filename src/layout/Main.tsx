import Footer from "../components/ui/footer";
import Header from "../components/ui/header";
import About from "../sections/about";
import Blog from "../sections/blog";
import Contact from "../sections/contact";
import Hero from "../sections/hero";
import Portfolio from "../sections/portfolio";
import Skills from "../sections/skills";

export default function Main() {
  return (
    <>
      <Header />
      <Hero />
      <div className="bg-main-color mx-auto w-11/12 text-stone-100 lg:w-7/12">
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <Blog />
      </div>
      <Footer />
    </>
  );
}
