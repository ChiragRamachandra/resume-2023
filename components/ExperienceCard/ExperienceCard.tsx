import React from 'react';
import Image from 'next/image';
import { Experience } from 'types';
import { Card, CardContent } from '../ui/card';

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
			<Card
				className=' dark:bg-zinc-800 border border-black 
			shadow-[6px_6px_0_0_#7e7e7e]
			dark:shadow-[8px_8px_0_0_#000] my-4'
			>
				<CardContent>
					<article className='flex flex-col items-center mt-8 flex-shrink-0  opacity-100	cursor-pointer overflow-hidden p-2 '>
						<Image
							height={200}
							width={200}
							className='w-28 h-28 rounded-full xl:w-[80px] xl:h-[80px]	object-cover object-center mt-2 mb-4'
							src={imageUrl}
							alt={`${company}-company-logo`}
						/>
						<div className='px-0 md:px-1'>
							<h3 className='text-xl font-semibold whitespace-pre-wrap mb-2 mt-4'>
								{title}
							</h3>
							<h4 className='text-lg mt-1 whitespace-pre-wrap my-2'>
								{company}
							</h4>
							<div className='flex space-x-2 my-4'>
								{technologyImages.map((technology, idx) => (
									<Image
										key={idx}
										height={50}
										width={50}
										src={technology}
										alt='language'
										className='h-6 w-6'
									/>
								))}
							</div>
							<p className='uppercase py-2 text-base'>{`${startDate} - ${endDate}`}</p>
							{/* <div className='overflow-y-scroll h-60 xl:h-76 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1ecbe1]/80'>
								{experienceBulletPoint.map((bulletPoint, idx) => (
									<p
										className='p-1 space-y-1 text-sm text-justify mr-3 whitespace-pre-wrap'
										key={idx}
									>
										{bulletPoint}
									</p>
								))}
							</div> */}
						</div>
					</article>
				</CardContent>
			</Card>
		</div>
	);
};

export default ExperienceCard;
