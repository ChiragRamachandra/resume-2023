import React from 'react';
import { motion } from 'framer-motion';
type Props = {
	directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
	return (
		<div className='group relative flex cursor-pointer top-5'>
			<motion.img
				initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.2 }}
				src='/images/technology/nextjs_logo.jpeg'
				className='rounded-2xl border border-gray-500	object-vocer h-16 w-16 xl:w-32 xl:h-32 md:w-28 md:h-28	filter group-hover:grayscale transition duration-300 ease-in-out'
			/>
			<div className='absolute opacity-0 group-hover:opacity-80	transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-2xl z-0'>
				<div className='flex items-center justify-center h-full'>
					<p className='text-xs md:text-lg font-bold text-black opacity-100'>
						Typescript
					</p>
				</div>
			</div>
		</div>
	);
};

export default Skill;
