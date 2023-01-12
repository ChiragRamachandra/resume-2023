import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

//implement smooth scrolling
const Experience = (props: Props) => {
	return (
		<motion.div
			initial={{ x: -200, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1.2 }}
			className='h-screen flex relative overflow-hidden flex-col 
			text-left md:flex-row max-w-full px-10 
			justify-evenly mx-auto items-center'
		>
			<h3
				className='uppercase absolute 
			tracking-[20px] text-gray-500 text-2xl top-24'
			>
				Experience
			</h3>
			<div
				className='w-full flex space-x-5 overflow-x-scroll p-10
			 	snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1ecbe1]/80'
			>
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
			</div>
		</motion.div>
	);
};

export default Experience;
