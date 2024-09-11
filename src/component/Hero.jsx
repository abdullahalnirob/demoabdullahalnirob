import React,{useEffect} from 'react'
// import logo from '../assets/logo.png'
import me from '../assets/me2.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import Bg from './bg/Bg';
const Hero = () => {
  useEffect(()=>{
   AOS.init({duration:1000})
  },[])
  return (
    <>
    <Bg/>
      <div className='h-[80vh] lg:h-[100vh] mt-20 md:mt-0'>
        <div className='hidden lg:flex flex-col absolute bottom-52 left-12 text-white text-3xl ' data-aos="fade-right" data-aos-duration="1400">
        <FaFacebook  className='m-2 cursor-pointer hover:text-[#eeeeee]'/>
        <FaInstagram className='m-2 cursor-pointer hover:text-[#eeeeee]'/>
        <FaXTwitter className='m-2 hover:text-[#eeeeee]  cursor-pointer'/>
        <FaYoutube className='m-2 hover:text-[#eeeeee]  cursor-pointer'/>
        <FaLinkedin className='m-2 hover:text-[#eeeeee]  cursor-pointer'/>
        </div>
        <div className='flex items-center justify-center flex-col'>
          <img data-aos-duration="1600" data-aos="fade-up" src={me} className='rounded-full border border-white w-[50%] sm:w-[30%] md:w-[27%] lg:w-[18%] xl:w-[18%] 2xl:w-[20%] mt-10' />
        </div>
        <div  data-aos="fade-up" className='text-[#fff]'>
          <span data-aos-duration="1700" data-aos="fade-up" className='grid place-content-center'>
            <span className='text-xl 2xl:text-4xl'>I'm</span>
            <div data-aos="fade-up" className='text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-[clash]'>
              Abdullah Al Nirob
            </div>
            <center>
              <h1 data-aos-duration="1800" data-aos="fade-up" className='my-2 text-3xl'>Web Developer.</h1>
              <a href='#about'>
                <button data-aos-duration="2000" data-aos="fade-up" className="rounded-full px-4 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#fff]  text-[#fff]">
                  <span className="absolute w-64 h-0 transition-all duration-500  origin-center rotate-45 -translate-x-20 bg-[#fff] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-[#fff] transition duration-500 group-hover:text-black text-xl 2xl:text-2xl ease">See my Magic!✨</span>
                </button>
              </a>
            </center>
          </span>
        </div>
        <div className="hidden lg:flex flex-col text-white absolute bottom-20 text-3xl items-center right-20" data-aos="fade-down" data-aos-duration="1500">
            <h3 className='text-xl'>SCROLL DOWN</h3>
          <a href="#about"><FaLongArrowAltDown className='cursor-pointer arrow'/></a>
        </div>
      </div>
    </>
  )
}

export default Hero
