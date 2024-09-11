import About from "./component/About"
import Experience from "./component/Experience"
import Footer from "./component/Footer"
import Hero from "./component/Hero"

import Navbar from "./component/Navbar"
import Skill from "./component/Skill"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Experience />
      <Footer/>
    </>
  )
}

export default App