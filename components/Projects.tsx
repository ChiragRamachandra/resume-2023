import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

const Projects = (props: Props) => {
	const allProjects = [1, 2, 3, 4, 5];
	return (
		<motion.div
			initial={{ y: -50, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1.2 }}
			className='h-screen relative flex overflow-hidden flex-col text-left 
			md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
		>
			<h3
				className='uppercase absolute 
			tracking-[20px] text-gray-500 text-2xl top-24'
			>
				Projects
			</h3>
			<div
				className='relative w-full flex overflow-x-scroll 
			overflow-y-hidden snap-x snap-mandatory z-20 
			 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1ecbe1]/80'
			>
				{allProjects.map((project, idx) => {
					return (
						<div
							key={idx}
							className='w-screen flex-shrink-0 snap-center 
						flex flex-col space-y-4 items-center justify-center 
						p-20 md:p-44 h-screen top-20'
						>
							<motion.div
								initial={{ y: -300, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 1.2 }}
							>
								<Image
									width={300}
									height={300}
									src='/images/chirag_ramachandra.JPG'
									alt='profile'
								/>
							</motion.div>
							<div className='space-y-10 px-0 md:px-10 max-w-6xl'>
								<h4 className='text-4xl font-semibold text-center'>
									<span className='underline decoration-[#F7AB0A]/50'>
										Case Study{idx + 1}
									</span>
									: CP {project}
								</h4>
								<p className='text-lg text-center md:text-left'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
									doloribus illum alias consequatur excepturi natus possimus
									quis voluptatibus hic dolor, atque aspernatur expedita
									deleniti deserunt suscipit! A similique laboriosam voluptate?
								</p>
							</div>
						</div>
					);
				})}
			</div>
			<div
				className='w-full absolute top-[30%] bg-[#1ecbe1]/5 left-0 h-[500px] 
			-skew-y-12'
			></div>
		</motion.div>
	);
};

export default Projects;
