
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import { Routes, Route } from "react-router-dom"
import Projects from "./component/Projects"
import Footer from "./component/Footer"
import About from "./component/About"
import ScrollToAnchor from "./component/ScrollToAnchor"


const App = () => {
  return (
    <>
      <Navbar />
      <main
        className="relative before:absolute before:top-0 before:left-0 before:w-full
     before:h-full before:content-[''] before:opacity-[0.05] before:z-10 before:pointer-events-none
     before:bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/noise_yvdidf.gif')]"
      >
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={<Home />} className="mt-20" />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App