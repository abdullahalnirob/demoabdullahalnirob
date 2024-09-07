import logo from '../assets/logo.png'
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
// import { useEffect } from 'react';
const About = () => {
    // useEffect(()=>{
    //     AOS.init({duration:900})
    //    },[])
  return (
    <>
    <div id='about' style={{overflowX:"hidden"}} className="flex flex-col lg:flex-row  py-[130px]  justify-between px-8 md:px-14 items-center bg-[#fafafa]">
        <img src={logo} className='w-[400px] '/>
        <div className='lg:pl-20'>
            <p className='text-3xl text-[#ccc]'>Hey there I'm</p>
            <h1 className=' text-7xl font-[clash]'>Abdullah Al Nirob</h1>
            <h1 className='mt-3 text-5xl font-[clash]'>Web Develper</h1>
            <div className='grid grid-cols-3'>
                <li className='flex flex-col py-5' data-aos="zoom-in">
                <h1 className='font-[clash] bg-[#ccc] w-14 rounded-full text-4xl p-2'>02</h1>
                    <p className='text-[18px]'>Award winner</p>
                </li>
                <li className='flex flex-col py-5' data-aos="zoom-in">
                <h1 className='font-[clash] bg-[#ccc] w-14 rounded-full text-4xl p-2'>06</h1>
                    <p className='text-[18px]'>Clients</p>
                </li>
                <li className='flex flex-col py-5' data-aos="zoom-in">
                    <h1 className='font-[clash] bg-[#ccc] w-14 rounded-full text-4xl p-2'>03</h1>
                    <p className='text-[18px]'>Job done successfully</p>
                </li>
            </div>
            <p className='text-[#7e7e7e] py-2'>
            I’m Abdullah Al Nirob, a skilled Front-end Web Developer from Bangladesh, specializing in React.js, HTML, CSS, and JavaScript. I lead Connect Agency, where we provide top-notch web development services. I’m passionate about creating responsive and dynamic websites that enhance user experience. My goal is to deliver innovative solutions that help businesses thrive online.
            </p>
        </div>
    </div>
    </>
  )
}

export default About