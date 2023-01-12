import React from 'react';
import { motion } from 'framer-motion';
type Props = {
	directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
	return (
		<div className='group relative flex cursor-pointer'>
			<motion.img
				initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1.2 }}
				src='/images/technology/ts_logo.png'
				className='rounded-full border border-gray-500
				object-vocer w-24 h-24 xl:w-32 xl:h-32 md:w-28 md:h-28
				filter group-hover:grayscale transition duration-300 ease-in-out'
			/>
			<div
				className='absolute opacity-0 group-hover:opacity-80
			transition duration-300 ease-in-out group-hover:bg-white
			 h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'
			>
				<div className='flex items-center justify-center h-full'>
					<p className='text-lg font-bold text-black opacity-100'>Typescript</p>
				</div>
			</div>
		</div>
	);
};

export default Skill;
