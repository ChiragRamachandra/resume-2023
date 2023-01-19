import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
	return (
		<motion.div
			initial={{ x: -200, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.3 }}
			className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center p-5'
		>
			<h3 className='uppercase absolute tracking-[20px] text-gray-500 text-2xl top-24'>
				About
			</h3>

			<motion.img
				loading='lazy'
				initial={{ x: -200, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.3 }}
				className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
				src='/images/chirag_ramachandra.jpg'
			/>
			<div className='space-y-10 px-10 md:px-10'>
				<h4 className='text-4xl font-semibold'>
					Here is a{' '}
					<span className='underline decoration-[#1ecbe1]'>little</span>{' '}
					background
				</h4>
				<p className='text-sm'>
					I am a Full Stack Developer, currently working with Getty Images. I
					enjoy building things and bringing ideas to life. I am equipped with
					the right skills to help you with your next project, let&apos;s create
					together.
				</p>
				<p className='text-sm'>
					I believe in working smart and not reinventing the wheel, which leads
					me to work with a multitude of 3rd party tools/ APIs which are
					integrated into the web application. While working, I tend to
					implement principles of project management to properly allocate
					resources, manage time and expectations and deliver a high quality
					product!
				</p>
			</div>
		</motion.div>
	);
};

export default About;
