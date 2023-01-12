import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
type Props = {};

const ExperienceCard = (props: Props) => {
	return (
		<article
			className='flex flex-col rounded-lg items-center space-y-7 
		flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] 
		snap-center  p-10 bg-[#292929] hover:opacity-100 opacity-40
		cursor-pointer transition-opacity duration-200 overflow-hidden'
		>
			<motion.img
				initial={{
					y: -10,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ y: 1, opacity: 1 }}
				viewport={{ once: true }}
				className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
				object-cover object-center'
				src='/images/experience/getty_logo.jpeg'
				alt='company-logo'
			/>
			<div className='px-0 md:px-10'>
				<h4 className='text-4xl font-light'>CEO of CHIRAG</h4>
				<p className='font-bold text-2xl mt-1'>GETTY</p>
				<div className='flex space-x-2 my-2'>
					<Image
						height={40}
						width={40}
						src='/images/technology/ts_logo.png'
						alt='typescript'
						className='h-10 w-10 rounded-full'
					/>
				</div>
				<p className='uppercase py-5 text-gray-300'>
					Started work.. - Ended...
				</p>
				<ul className='list-disc space-y-4 ml-5 text-lg'>
					{/* can make this vertically scrollable if needed */}
					<li>Summary Summary Summary Summary Summary</li>
					<li>Summary Summary Summary Summary Summary</li>
					<li>Summary Summary Summary Summary Summary</li>
					<li>Summary Summary Summary Summary Summary</li>
				</ul>
			</div>
		</article>
	);
};

export default ExperienceCard;
