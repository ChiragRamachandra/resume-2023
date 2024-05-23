import React from 'react';
import { ExperienceCard } from '../ExperienceCard';
import getExperienceData from 'data/experience';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {};

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SubHeading } from '../SubHeading';

//implement smooth scrolling
const Experience = (props: Props) => {
	const experienceData = getExperienceData();
	return (
		<div className='flex flex-col items-center p-4 '>
			<SubHeading>Experience</SubHeading>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={20}
				navigation
				scrollbar={{ draggable: true }}
				breakpointsBase='window'
				breakpoints={{
					440: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1280: { slidesPerView: 3 },
				}}
			>
				{experienceData.map((experience) => (
					<SwiperSlide
						key={experience.id}
						className='flex flex-col items-center justify-center p-6'
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
