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
		<div className='flex flex-col items-center p-4 lg:my-36'>
			<h3 className='uppercase tracking-[20px] text-gray-500 text-2xl my-12 pb-2'>
				Experience
			</h3>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				navigation
				scrollbar={{ draggable: true }}
				breakpointsBase='window'
				breakpoints={{ 420: { slidesPerView: 2 }, 780: { slidesPerView: 3 } }}
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
	);
};

export default Experience;
