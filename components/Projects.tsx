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
			<h3 className='uppercase tracking-[20px] text-gray-500 text-2xl mb-12 mt-12 pb-20'>
				Projects
			</h3>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				navigation
				scrollbar={{ draggable: true }}
			>
				{allProjects.map((project) => {
					return (
						<SwiperSlide
							key={project.id}
							className='w-screen space-y-4 px-4  md:px-4 items-center justify-center lg:px-20'
						>
							<div className='flex flex-col items-center justify-center'>
								<Image
									width={400}
									height={400}
									src={project.imageURL}
									alt={project.name}
								/>
							</div>
							<div className='px-5 pt-12 pb-16 md:px-20 lg:px-28'>
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
