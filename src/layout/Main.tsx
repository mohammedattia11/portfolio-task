import Footer from "../components/ui/footer"
import Header from "../components/ui/header"
import About from "../sections/about"
import Blog from "../sections/blog"
import Contact from "../sections/contact"
import Hero from "../sections/hero"
import Portfolio from "../sections/portfolio"
import Skills from "../sections/skills"

export default function Main() {
  return (
    <>
    <Header/>
      <Hero/>
    <div className="text-stone-100 bg-main-color w-11/12 lg:w-8/12  mx-auto">
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Blog/>
      {/* rotate image */}
      {/* <img src="https://codewithsadee.github.io/portfolio/assets/images/rotate-img.png" alt="" className="w-32 h-32 [animation:spin_9s_linear_infinite] [@keyframes_spin:{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}]" /> */}
    </div> 
    <Footer/>
    </>
  )
}
