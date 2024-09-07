import React, { useState } from 'react'
import logo from '../assets/logo2.png'
const Navbar = () => {
    const [show, setshow] = useState(false)
    return (
        <div>
            <nav className='bg-[#222] text-white z-50 p-3 flex justify-between items-center'>
                <img src={logo} alt="" className='w-[15%] md:w-[6%] lg:w-[4%]' />
                <ul className={`flex z-50 ${show ? 'show' : ''}`}>
                    <li><a href="#" className='text-xl 2xl:text-2xl px-4 hover:text-[#ccc] duration-300'>Home</a></li>
                    <li><a href="#about" className='text-xl 2xl:text-2xl px-4 hover:text-[#ccc] duration-300'>About</a></li>
                    <li><a href="#skill" className='text-xl 2xl:text-2xl px-4 hover:text-[#ccc] duration-300'>Skills</a></li>
                    <li><a href="#" className='text-xl 2xl:text-2xl px-4 hover:text-[#ccc] duration-300'>Projects</a></li>
                    <li><a href="#ex" className='text-xl 2xl:text-2xl px-4 hover:text-[#ccc] duration-300'>Experience</a></li>
                    <li><a href="#" className='text-xl 2xl:text-2xl px-4 hover:text-[#ccc] duration-300'>Education</a></li>
                    <li><a href="#" className='text-xl 2xl:text-2xl px-4 hover:text-[#ccc] duration-300'>Contact</a></li>
                </ul>
                <a className="rounded-md px-4 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#fff]  text-[#fff]">
                    <span className="absolute w-64 h-0 transition-all duration-500  origin-center rotate-45 -translate-x-20 bg-[#fff] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-[#fff] transition duration-500 group-hover:text-black 2xl:text-2xl ease">Talk With Me</span>
                </a>
                {
                    show ?
                        <svg onClick={() => setshow(!show)} className='cursor-pointer lg:hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#cccccc" fill="none">
                            <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        :
                        <svg onClick={() => setshow(!show)} className='cursor-pointer lg:hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#cccccc" fill="none">
                            <path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                }
            </nav>
        </div>
    )
}

export default Navbar
