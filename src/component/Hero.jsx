import React, { useEffect } from 'react'
import me from '../assets/me2.jpg'
import arrow from '../assets/arrow.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { FaLongArrowAltDown } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import Bg from './bg/Bg';
const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <>

      <Bg />
      <div className='h-[90vh] md:h-[100vh] mt-20 md:mt-0' >
      <div id='top' className='pb-4 md:pb-20'></div>
        <div className='hidden md:flex md:flex-col absolute top-52 2xl:top-64 left-4 text-white text-3xl 2xl:text-4xl' data-aos="fade-right" data-aos-duration="1400">
          <FaFacebook className='m-4 cursor-pointer hover:text-[#eeeeee]' />
          <FaInstagram className='m-4 cursor-pointer hover:text-[#eeeeee]' />
          <FaXTwitter className='m-4 hover:text-[#eeeeee]  cursor-pointer' />
          <FaYoutube className='m-4 hover:text-[#eeeeee]  cursor-pointer' />
          <FaLinkedin className='m-4 hover:text-[#eeeeee]  cursor-pointer' />
        </div>
        <div className='flex items-center justify-center flex-col'>
          <img data-aos-duration="1600" data-aos="fade-up" src={me} className='rounded-full z-20 border border-white w-[60%] sm:w-[30%] md:w-[27%] lg:w-[18%] xl:w-[18%] 2xl:w-[20%] mt-10' />
        </div>
        <div className='text-[#fff] ] text-up'>
          <span data-aos-duration="1900" data-aos="fade-up" className='grid place-content-center'>
            <span className='text-xl 2xl:text-4xl'>I'm</span>
            <div data-aos="fade-up" className='text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-[clash]'>
              Abdullah Al Nirob
            </div>
            <center>
              <h1 data-aos-duration="2000" data-aos="fade-up" className='text-3xl 2xl:text-5xl 2xl:my-4'>Web Developer.</h1>
              <a href='#about'>
                <button data-aos-duration="2700" data-aos="fade-up" className="rounded-full px-4 py-2 2xl:py-4 2xl:px-4  m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#fff]  text-[#fff]">
                  <span className="absolute w-64 h-0 transition-all duration-500  origin-center rotate-45 -translate-x-20 bg-[#fff] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-[#fff] transition duration-500 group-hover:text-black text-xl xl:text-2xl ease">See my Magic!✨</span>
                </button>
              </a>
            </center>
          </span>
        </div>
        <div className="text-white hidden md:flex flex-col absolute right-10 arrow-up items-center justify-center text-3xl">
          <h3 className='text-xl'>SCROLL DOWN</h3>
          {/* <img src={arrow} alt="" /> */}
          <a href="#about"><img src={arrow} className='cursor-pointer arrow w-5' /></a>
        </div>
      </div>
    </>
  )
}

export default Hero
