import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import getExperienceData from 'data/experience';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {};

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//implement smooth scrolling
const Experience = (props: Props) => {
	const experienceData = getExperienceData();
	return (
		<div className='flex flex-col items-center p-4'>
			<h3 className='uppercase tracking-[20px] text-gray-500 text-2xl top-24 mb-4 pb-2'>
				Experience
			</h3>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				navigation
				scrollbar={{ draggable: true }}
				breakpointsBase='window'
				breakpoints={{ 420: { slidesPerView: 3 } }}
			>
				{experienceData.map((experience) => (
					<SwiperSlide
						key={experience.id}
						className='bg-[rgb(36,36,36)] text-white flex flex-col items-center justify-center p-6'
					>
						<ExperienceCard
							id={experience.id}
							imageUrl={experience.imageUrl}
							title={experience.title}
							company={experience.company}
							technologyImages={experience.technologyImages}
							startDate={experience.startDate}
							endDate={experience.endDate}
							experienceBulletPoint={experience.experienceBulletPoint}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>

		// <div className='h-screen flex relative overflow-hidden flex-col 	text-left md:flex-row max-w-full px-10 	justify-evenly mx-auto items-center mb-1 pb-1 md:pb-4 md:mb-4'>
		// 	<h3 className='uppercase absolute tracking-[20px] text-gray-500 text-2xl top-24 mb-2 pb-2'>
		// 		Experience
		// 	</h3>

		// 	<div className='w-full flex space-x-5 mt-16 overflow-x-scroll p-10 snap-x snap-mandatory	scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1ecbe1]/80'>
		// 		{experienceData.map((experience) => (
		// 			<ExperienceCard
		// 				key={experience.id}
		// 				id={experience.id}
		// 				imageUrl={experience.imageUrl}
		// 				title={experience.title}
		// 				company={experience.company}
		// 				technologyImages={experience.technologyImages}
		// 				startDate={experience.startDate}
		// 				endDate={experience.endDate}
		// 				experienceBulletPoint={experience.experienceBulletPoint}
		// 			/>
		// 		))}
		// 	</div>
		// </div>
	);
};

export default Experience;

// //TRANSITION
// initial={{ x: -200, opacity: 0 }}
// whileInView={{ x: 0, opacity: 1 }}
// viewport={{ once: true }}
// transition={{ duration: 0.3 }}
