import React from 'react';
import Image from 'next/image';
import { Experience } from 'types';

const ExperienceCard = ({
	id,
	imageUrl,
	title,
	company,
	technologyImages,
	startDate,
	endDate,
	experienceBulletPoint,
}: Experience) => {
	return (
		<div key={id}>
			<article className='flex flex-col items-center space-y-7 flex-shrink-0 bg-[#292929] opacity-100	cursor-pointer overflow-hidden p-8 '>
				<Image
					height={200}
					width={200}
					className='w-24 h-24 rounded-full xl:w-[60px] xl:h-[60px]	object-cover object-center mt-2'
					src={imageUrl}
					alt={`${company}-company-logo`}
				/>
				<div className='px-0 md:px-8'>
					<h4 className='text-lg font-bold whitespace-pre-wrap'>{title}</h4>
					<p className='font-bold text-lg mt-1 whitespace-pre-wrap'>
						{company}
					</p>
					<div className='flex space-x-2 my-2'>
						{technologyImages.map((technology, idx) => (
							<Image
								key={idx}
								height={40}
								width={40}
								src={technology}
								alt='language'
								className='h-4 w-4'
							/>
						))}
					</div>
					<p className='uppercase py-2 text-gray-300'>
						{`${startDate} - ${endDate}`}
					</p>
					<div className='overflow-y-scroll h-60 xl:h-76 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1ecbe1]/80'>
						{experienceBulletPoint.map((bulletPoint, idx) => (
							<p
								className='p-1 space-y-1 text-sm text-justify mr-3 whitespace-pre-wrap'
								key={idx}
							>
								{bulletPoint}
							</p>
						))}
					</div>
				</div>
			</article>
		</div>
	);
};

export default ExperienceCard;
