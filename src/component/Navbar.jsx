import React, { useState } from 'react'
import logo from '../assets/logo2.png'
import { Link as LinkRouter } from 'react-router-dom'

const Navbar = () => {
    const [show, setshow] = useState(false)
    return (
        <div>
            <nav className='bg-[#222] shadow shadow-[#3f3f3f] fixed top-0 left-0 right-0 text-white z-50 p-3 flex justify-between items-center'>
                <img src={logo} alt="" className='w-[15%] md:w-[6%] lg:w-[4%]' />
                <ul className={`flex h-full md:h-auto z-50 ${show ? 'show' : ''}`}>
                    <LinkRouter to={'/#top'}><li className='cursor-pointer'><a className='text-xl 2xl:text-2xl px-4 '> <button
                        className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                    >
                        Home
                    </button></a></li></LinkRouter>
                    <LinkRouter to={'/#about'}><li className='cursor-pointer'><a className='text-xl 2xl:text-2xl px-4'>
                        <button
                            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                        >
                            About
                        </button>
                    </a></li></LinkRouter>
                    <LinkRouter to={'/#skill'}><li className='cursor-pointer'><a className='text-xl 2xl:text-2xl px-4'>
                        <button
                            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                        >
                            Skill
                        </button>
                    </a></li></LinkRouter>
                    <LinkRouter to={"/#experience"}><li className='cursor-pointer'><a className='text-xl 2xl:text-2xl px-4'>
                        <button
                            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                        >
                            Experience
                        </button>
                    </a></li></LinkRouter>
                    <LinkRouter to={"/projects#top"}><li className='cursor-pointer'><a className='text-xl 2xl:text-2xl px-4'>
                        <button
                            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                        >
                            Projects
                        </button>
                    </a></li></LinkRouter>
                    <li className='cursor-default'><a className='text-xl 2xl:text-2xl px-4'>
                        <button
                            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                        >
                            Education
                        </button>
                    </a></li>
                    <li className='cursor-default'><a className='text-xl 2xl:text-2xl px-4'>
                        <button
                            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                        >
                            Contact
                        </button>
                    </a></li>
                </ul>
                <a className="rounded-full px-4 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#fff]  text-[#fff]">
                    <span className="absolute w-64 h-0 transition-all  origin-center rotate-45 -translate-x-20 bg-[#fff] top-1/2 group-hover:h-64 group-hover:-translate-y-32"></span>
                    <span className="relative text-[#fff] transition  group-hover:text-black 2xl:text-2xl">
                        <span className="relative inline-flex overflow-hidden">
                            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[170%] group-hover:skew-y-12">
                                Talk With Me📞
                            </div>
                            <div className="absolute translate-y-[170%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                                Talk With Me📞
                            </div>
                        </span>
                    </span>
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
