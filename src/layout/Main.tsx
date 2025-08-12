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
    <div>
      <Hero/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Blog/>
    </div> 
    <Footer/>
    </>
  )
}
