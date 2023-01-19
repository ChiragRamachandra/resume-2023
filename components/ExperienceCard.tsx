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
					className='w-24 h-24 rounded-full xl:w-[200px] xl:h-[200px]	object-cover object-center'
					src={imageUrl}
					alt={`${company}-company-logo`}
				/>
				<div className='px-0 md:px-8'>
					<h4 className='text-xl font-light'>{title}</h4>
					<p className='font-bold text-xl mt-1'>{company}</p>
					<div className='flex space-x-2 my-2'>
						{technologyImages.map((technology, idx) => (
							<Image
								key={idx}
								height={18}
								width={18}
								src={technology}
								alt='language'
								className='h-8 w-8'
							/>
						))}
					</div>
					<p className='uppercase py-2 text-gray-300'>
						{`${startDate} - ${endDate}`}
					</p>
					<div className='overflow-y-scroll h-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1ecbe1]/80'>
						<ul className='list-disc space-y-1 ml-1 text-sm md:text-lg'>
							{experienceBulletPoint.map((bulletPoint, idx) => (
								<li className='px-1' key={idx}>
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
