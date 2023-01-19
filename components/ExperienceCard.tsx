import React from 'react';
import { motion } from 'framer-motion';
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
		<div>
			<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[250px] md:w-[300px] xl:w-[700px] 	snap-center  p-2 bg-[#292929] hover:opacity-100 opacity-40	cursor-pointer transition-opacity duration-200 overflow-hidden'>
				<motion.img
					initial={{
						y: -10,
						opacity: 0,
					}}
					transition={{ duration: 1.2 }}
					whileInView={{ y: 1, opacity: 1 }}
					viewport={{ once: true }}
					className='w-12 h-12 rounded-full xl:w-[75px] lg:h-[75px]	object-cover object-center mt-2'
					src={imageUrl}
					alt={`${company}-company-logo`}
				/>
				<div className='px-0 md:px-8'>
					<h4 className='text-lg font-bold font-light'>{title}</h4>
					<p className='font-bold text-lg mt-1'>{company}</p>
					<div className='flex space-x-2 my-2'>
						{technologyImages.map((technology, idx) => (
							<Image
								key={idx}
								height={10}
								width={10}
								src={technology}
								alt='language'
								className='h-4 w-4'
							/>
						))}
					</div>
					<p className='uppercase py-2 text-gray-300'>
						{`${startDate} - ${endDate}`}
					</p>
					<div className='overflow-y-scroll h-48 xl:h-64 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1ecbe1]/80'>
						<ul className='list-disc space-y-1 p-1 text-sm text-justify'>
							{experienceBulletPoint.map((bulletPoint, idx) => (
								<li
									className='p-2 list-disc space-y-1 text-sm text-justify mx-2'
									key={idx}
								>
									{bulletPoint}
								</li>
							))}
						</ul>
					</div>
				</div>
			</article>
		</div>
	);
};

export default ExperienceCard;
