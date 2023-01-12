import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
type Props = {};

const Skills = (props: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1.2 }}
			className='min-h-screen flex relative flex-col 
			text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10
			justify-center xl:space-y-0 mx-auto items-center'
		>
			<h3
				className='uppercase absolute 
			tracking-[20px] text-gray-500 text-2xl top-24'
			>
				Skills
			</h3>
			<h3
				className='uppercase absolute 
			tracking-[3px] text-gray-500 text-sm top-36'
			>
				{/* Hover over */}{' '}
			</h3>
			<div className='grid grid-cols-4 gap-5 p-1'>
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
				<Skill />
			</div>
		</motion.div>
	);
};

export default Skills;
