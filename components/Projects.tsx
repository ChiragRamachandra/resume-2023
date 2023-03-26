import React from 'react';
import Image from 'next/image';
import { getProjectData } from 'data';
import Link from 'next/link';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type Props = {};

const Projects = (props: Props) => {
	const allProjects = getProjectData();
	return (
		<div className='flex flex-col items-center justify-center p-4 lg:my-28'>
			<h3 className='uppercase tracking-[20px] text-gray-500 text-2xl my-12 pb-2'>
				Projects
			</h3>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				navigation
				scrollbar={{ draggable: true }}
			>
				{allProjects.map((project) => {
					return (
						<SwiperSlide
							key={project.id}
							className='w-screen space-y-4 px-4  md:px-4 items-center justify-center '
						>
							<div className='flex flex-col items-center justify-center'>
								<Image
									width={400}
									height={400}
									src={project.imageURL}
									alt={project.name}
								/>
							</div>
							<div className='px-5 py-16'>
								<h4 className='py-8 text-2xl md:text-4xl font-semibold text-center'>
									<span className='text-[#F7AB0A]/75'>
										<Link href={project.projectURL} target='_blank'>
											{project.name}
										</Link>
									</span>
								</h4>
								<p className='text-base md:text-lg text-justify lg:pb-20'>
									{project.summary}
								</p>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Projects;

{
	/* <div className='h-screen relative flex overflow-hidden flex-col  text-left  max-w-full mx-auto items-center z-0 cursor-pointer'>
			<div className='my-6'>
				<h3 className='uppercase tracking-[20px] text-gray-500 text-2xl '>
					Projects
				</h3>
			</div>
			<div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1ecbe1]/80'>
				{allProjects.map((project) => {
					return (
						<div
							key={project.id}
							className='w-screen flex-shrink-0 snap-center flex flex-col space-y-4 px-4  md:px-4 items-center justify-center  h-screen'
						>
							<motion.div
								initial={{ y: -300, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.3 }}
							>
								<Image
									width={400}
									height={400}
									src={project.imageURL}
									alt={project.name}
								/>
							</motion.div>
							<div className='max-w-6xl'>
								<h4 className='text-2xl md:text-4xl font-semibold text-center'>
									<span className='underline decoration-[#F7AB0A]/50'>
										<Link href={project.projectURL} target='_blank'>
											{project.name}
										</Link>
									</span>
								</h4>
								<p className='text-sm md:text-base text-justify md:text-left'>
									{project.summary}
								</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className='w-full absolute top-[30%] bg-[#1ecbe1]/5 left-0 h-[500px] -skew-y-12'></div>
		</div> */
}
