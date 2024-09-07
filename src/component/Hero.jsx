import React,{useEffect} from 'react'
// import logo from '../assets/logo.png'

import me from '../assets/me2.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Bg from './bg/bg';
const Hero = () => {
  useEffect(()=>{
   AOS.init({duration:1400})
  },[])
  return (
    <>
    <Bg/>
      <div className='h-[80vh] lg:h-[100vh] mt-20 md:mt-0'>
        <div className='flex items-center justify-center flex-col'>
          <img data-aos-delay="500" data-aos="fade-up" src={me} className='rounded-full border border-white w-[50%] sm:w-[30%] md:w-[27%] lg:w-[18%] xl:w-[18%] 2xl:w-[20%] mt-10' />
        </div>
        <div  data-aos="fade-up" className='text-[#fff]'>
          <span data-aos-delay="550" data-aos="fade-up" className='grid place-content-center'>
            <span className='text-xl 2xl:text-4xl'>I'm</span>
            <div data-aos="fade-up" className='text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-[clash]'>
              Abdullah Al Nirob
            </div>
            <center>
              <h1 data-aos-delay="600" data-aos="fade-up" className='my-2 text-3xl'>Web Developer.</h1>
              <a href='#about'>
                <button data-aos-delay="650" data-aos="fade-up" className="rounded-md px-4 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#fff]  text-[#fff]">
                  <span className="absolute w-64 h-0 transition-all duration-500  origin-center rotate-45 -translate-x-20 bg-[#fff] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-[#fff] transition duration-500 group-hover:text-black text-xl 2xl:text-2xl ease">See my Magic!</span>
                </button>
              </a>
            </center>
          </span>
        </div>
      </div>
    </>
  )
}

export default Hero
