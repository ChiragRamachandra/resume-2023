import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import getExperienceData from 'data/experience';

type Props = {};

//implement smooth scrolling
const Experience = (props: Props) => {
	const experienceData = getExperienceData();
	return (
		<motion.div
			initial={{ x: -200, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.3 }}
			className='h-screen flex relative overflow-hidden flex-col 	text-left md:flex-row max-w-full px-10 	justify-evenly mx-auto items-center mb-1 pb-1 md:pb-4 md:mb-4'
		>
			<h3 className='uppercase absolute tracking-[20px] text-gray-500 text-2xl top-24 mb-2 pb-2'>
				Experience
			</h3>
			<div className='w-full flex space-x-5 overflow-x-scroll p-10 h-50 max-h-50 snap-x snap-mandatory top-24	scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1ecbe1]/80'>
				{experienceData.map((experience) => (
					<ExperienceCard
						key={experience.id}
						id={experience.id}
						imageUrl={experience.imageUrl}
						title={experience.title}
						company={experience.company}
						technologyImages={experience.technologyImages}
						startDate={experience.startDate}
						endDate={experience.endDate}
						experienceBulletPoint={experience.experienceBulletPoint}
					/>
				))}
			</div>
		</motion.div>
	);
};

export default Experience;
