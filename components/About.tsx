import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
	return (
		<motion.div
			initial={{ x: -200, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 1.2 }}
			className='h-screen flex relative flex-col
		 text-center md:text-left md:flex-row 
		 max-w-7xl justify-evenly mx-auto items-center p-5'
		>
			<h3
				className='uppercase absolute 
			tracking-[20px] text-gray-500 text-2xl top-24'
			>
				About
			</h3>

			<motion.img
				loading='lazy'
				initial={{ x: -200, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1.2 }}
				className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
				md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
				src='/images/chirag_ramachandra.jpg'
			/>
			<div className='space-y-10 px-10 md:px-10'>
				<h4 className='text-4xl font-semibold'>
					Here is a{' '}
					<span className='underline decoration-amber-400'>little</span>{' '}
					background
				</h4>
				<p className='text-sm'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
					error quidem corporis eveniet officiis animi, asperiores possimus nemo
					quasi, officia illum nulla enim ut. Aliquam quas minus ipsum iure
					consequuntur.
				</p>
			</div>
		</motion.div>
	);
};

export default About;
