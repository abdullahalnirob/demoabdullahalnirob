import React, { useEffect } from "react";
import me from "../assets/me2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Bg from "./bg/Bg";
const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Bg />
      <div className="h-[90vh] md:h-[100vh] md:mt-0">
        <div id="top" className="pb-4 md:pb-20"></div>
        <div className="flex flex-col mt-[40%] md:mt-[2%] items-center justify-center md:justify-normal">
          <img
            src={me}
            className="w-1/2 md:w-1/6 rounded-full border-4 border-white shadow-2xl shadow-black"
            alt=""
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <div className="text-center md:text-left ml-10">
            <span
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-white text-xl"
            >
              I'm
              <br />
              <h1
                className="font-[clash] text-5xl md:text-7xl text-white font-bold"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Abdullah Al Nirob
              </h1>
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl text-white font-bold"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            Front-end Developer.
          </h2>
          <button
            data-aos="fade-up"
            data-aos-duration="1500"
            class="rounded-md px-3.5 my-2 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-white  text-white"
          >
            <a href="#about">
              <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span class="relative text-white text-xl transition duration-300 group-hover:text-black ease">
                Explore my Web
              </span>
            </a>
          </button>
        </div>
        <div data-aos="fade-right" data-aos-duration="1300" className="flex flex-row md:flex-col absolute top-[12%]  md:top-[9%] left-[25%] md:left-7 w-full">
          <div className="m-3">
            <FaFacebook className="text-xl cursor-pointer text-white" />
          </div>
          <div className="m-3">
            <FaInstagram className="text-xl cursor-pointer text-white" />
          </div>
          <div className="m-3">
            <FaTwitter className="text-xl cursor-pointer text-white" />
          </div>
          <div className="m-3">
            <FaLinkedin className="text-xl cursor-pointer text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
