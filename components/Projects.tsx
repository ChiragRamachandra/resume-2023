import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getProjectData } from 'data';
import Link from 'next/link';

type Props = {};

const Projects = (props: Props) => {
	const allProjects = getProjectData();
	return (
		<motion.div
			initial={{ y: -50, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.3 }}
			className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 cursor-pointer'
		>
			<h3 className='uppercase absolute tracking-[20px] text-gray-500 text-2xl top-24'>
				Projects
			</h3>
			<div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1ecbe1]/80'>
				{allProjects.map((project) => {
					return (
						<div
							key={project.id}
							className='w-screen flex-shrink-0 snap-center flex flex-col space-y-4 items-center justify-center p-20 md:p-44 h-screen top-20'
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
							<div className='space-y-10 px-0 md:px-10 max-w-6xl'>
								<h4 className='text-4xl font-semibold text-center'>
									<span className='underline decoration-[#F7AB0A]/50'>
										<Link href={project.projectURL} target='_blank'>
											{project.name}{' '}
										</Link>
									</span>
								</h4>
								<p className='text-lg text-center md:text-left'>
									{project.summary}
								</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className='w-full absolute top-[30%] bg-[#1ecbe1]/5 left-0 h-[500px] -skew-y-12'></div>
		</motion.div>
	);
};

export default Projects;
