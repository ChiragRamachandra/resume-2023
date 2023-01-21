import React from 'react';
import { motion } from 'framer-motion';
type Props = {
	directionLeft?: boolean;
	name: string;
	url: string;
};

const Skill = ({ directionLeft, name, url }: Props) => {
	return (
		<div className='group relative flex cursor-pointer top-5'>
			<motion.img
				initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.2 }}
				src={url}
				alt={name}
				className='rounded-2xl border border-gray-500	object-cover h-12 w-12 xl:w-24 xl:h-24 md:w-20 md:h-20	filter group-hover:grayscale transition duration-300 ease-in-out'
			/>
			<div
				className='absolute opacity-0 group-hover:opacity-80	transition duration-300 ease-in-out group-hover:bg-white 
			h-12 w-12 xl:w-24 xl:h-24 md:w-20 md:h-20 
			rounded-2xl z-0'
			>
				<div className='flex items-center justify-center h-full'>
					<p className='text-xs md:text-xs font-bold text-black opacity-100 uppercase text-justify'>
						{name}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Skill;
