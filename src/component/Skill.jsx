import { ImHtmlFive } from "react-icons/im";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiReactrouter } from "react-icons/si";
// import { div } from "framer-motion/client";
const Skill = () => {
  return (
    <div  id="skill">
    <div className="py-20" data-aos-duration="800" data-aos="fade-up">
      <h1 className="font-[clash] text-5xl text-center text-white">My Skills</h1>
      <p className="px-5 xl:px-80 sm:px-12 md:px-24 text-center py-2 text-[#ccc]">
        I am proficient in creating responsive and dynamic web applications using HTML, CSS, JavaScript, and React.js. My expertise lies in delivering user-friendly interfaces that enhance the overall user experience.
      </p>
      <div  data-aos-duration="900" data-aos="fade-up" className="px-5 sm:px-20 md:px-36 mt-10">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex-col">
            <h1 className="text-2xl text-white">Front end</h1>
            <div className="bg-white box hover:bg-black duration-500 cursor-pointer hover:text-white mt-2 shadow-md px-5 py-8 rounded-xl">
              <ImHtmlFive className="text-3xl" />
              <h1 className="text-xl">Html</h1>
            </div>
            <div className="bg-white box hover:bg-black duration-500 cursor-pointer hover:text-white mt-2 shadow-md px-5 py-8 rounded-xl">
              <FaCss3 className="text-3xl" />
              <h1 className="text-xl">CSS</h1>
            </div>
            <div className="bg-white box hover:bg-black duration-500 cursor-pointer hover:text-white mt-2 shadow-md px-5 py-8 rounded-xl">
              <RiTailwindCssFill className="text-3xl" />
              <h1 className="text-xl">Tailwind Css</h1>
            </div>
            <div className="bg-white box hover:bg-black duration-500 cursor-pointer hover:text-white mt-2 shadow-md px-5 py-8 rounded-xl">
              <FaJs className="text-3xl" />
              <h1 className="text-xl">JavaScript</h1>
            </div>
            <div className="bg-white box hover:bg-black duration-500 cursor-pointer hover:text-white mt-2 shadow-md px-5 py-8 rounded-xl">
              <FaReact className="text-3xl" />
              <h1 className="text-xl">React</h1>
            </div>
          </div>
          <div className="flex-col">
            <h1 className="text-2xl text-white">Back end</h1>
            <div className="bg-white box hover:bg-black duration-500 cursor-pointer hover:text-white mt-2 shadow-md px-5 py-8 rounded-xl">
              <SiFirebase className="text-3xl" />
              <h1 className="text-xl">Firebase</h1>
            </div>
            <div className="bg-white box hover:bg-black duration-500 cursor-pointer hover:text-white mt-2 shadow-md px-5 py-8 rounded-xl">
              <TbApi className="text-3xl" />
              <h1 className="text-xl">Rest API's</h1>
            </div>
          </div>
          <div className="flex-col">
            <h1 className="text-2xl text-white">Tools</h1>
            <div className="bg-white box hover:bg-black duration-500 cursor-pointer hover:text-white mt-2 shadow-md px-5 py-8 rounded-xl">
              <VscVscode className="text-3xl" />
              <h1 className="text-xl">Vs code</h1>
            </div>
            <div className="bg-white box hover:bg-black duration-500 cursor-pointer hover:text-white mt-2 shadow-md px-5 py-8 rounded-xl">
              <SiReactrouter className="text-3xl" />
              <h1 className="text-xl">React Rouer Dom</h1>
            </div>
            <div className="bg-white box hover:bg-black duration-500 cursor-pointer hover:text-white mt-2 shadow-md px-5 py-8 rounded-xl">
              <FaGithub className="text-3xl" />
              <h1 className="text-xl">Github</h1>
            </div>
            <div className="bg-white box hover:bg-black duration-500 cursor-pointer hover:text-white mt-2 shadow-md px-5 py-8 rounded-xl">
              <FaGitAlt className="text-3xl" />
              <h1 className="text-xl">Git</h1>
            </div>
            <div className="bg-white box hover:bg-black duration-500 cursor-pointer hover:text-white mt-2 shadow-md px-5 py-8 rounded-xl">
              <IoLogoVercel className="text-3xl" />
              <h1 className="text-xl">Vercel</h1>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
