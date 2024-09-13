import React from 'react'

const Experience = () => {
	return (
		<>
		<section className="bg-white" style={{ overflowX: "hidden" }}>
		<div  id='experience' className='pb-[80px]'></div>
			<div className="container max-w-5xl lg:px-4 py-12 mx-auto">
				<div className="grid gap-2 md:gap-4 md:mx-4 sm:grid-cols-12">
					<div className="col-span-12 sm:col-span-3" data-aos="fade-right">
						<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-[#3b3b3b]">
							<h3 className="text-3xl font-semibold" >My Experience_</h3>
							<span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">abdullah al nirob</span>
						</div>
					</div>
					<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
						<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
							<div data-aos="fade-left" data-aos-duration="1200" className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#3b3b3b]">
								<h3 className="text-3xl lg:text-xl font-semibold tracking-wide">Connect agecy</h3>
			 					<time className="text-xs tracking-wide uppercase dark:text-gray-600">Aug 2024</time>
								<p className="mt-3 text-sm md:text-md">On August 13, I founded Connect Agency and have been working diligently to build and grow the agency ever since. With a strong commitment to delivering high-quality services, I strive to make Connect Agency a trusted name in web development, graphic design, and SEO. My dedication to excellence drives every project we undertake.</p>
							</div>
							<div data-aos="fade-left" data-aos-duration="1400" className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#3b3b3b]">
								<h3 className="text-3xl lg:text-xl font-semibold tracking-wide">Xtra Digital</h3>
								<time className="text-xs tracking-wide uppercase dark:text-gray-600">June 2024</time>
								<p className="mt-3 text-sm md:text-md">On June 21, I founded Extra Digital, a web development agency where I dedicated myself fully to building a strong foundation. Despite my efforts, I encountered some challenges that led me to temporarily close the agency. However, my passion for web development and my vision for Extra Digital remain unwavering. I am planning to relaunch the agency soon, with a renewed focus and determination to overcome any obstacles. My goal is to make Extra Digital a leading name in the industry, offering top-tier web development services.</p>
							</div>
							<div data-aos="fade-left" data-aos-duration="1000" className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#3b3b3b]">
								<h3 className="text-3xl lg:text-xl font-semibold tracking-wide">Always Code YouTube Channel</h3>
								<time className="text-xs tracking-wide uppercase dark:text-gray-600">Feb 2023</time>
								<p className="mt-3  text-sm md:text-md">On February 2023, I began uploading content about website development on my YouTube channel. Since then, I've grown my audience to over 115 subscribers. However, due to certain practical challenges, I haven't been able to maintain a consistent upload schedule. Despite this, I remain committed to sharing valuable content and aim to overcome these obstacles to provide regular updates for my viewers.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	)
}

export default Experience