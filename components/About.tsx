import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
	return (
		<div className='h-screen flex flex-col text-center max-w-7xl justify-evenly mx-auto items-center p-5'>
			<div className='my-6'>
				<h3 className='uppercase tracking-[20px] text-gray-500 text-2xl '>
					About
				</h3>
			</div>
			<div className='flex flex-col md:text-left md:flex-row justify-center items-center'>
				<div className='m-6 flex-shrink-0'>
					<motion.img
						loading='lazy'
						initial={{ x: -200, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3 }}
						className='-mb-15 -mt-10 md:mb-0 flex-shrink-0 w-36 h-36    rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[600px] xl:h-[600px]'
						src='/images/profile/chirag_ramachandra.jpg'
					/>
				</div>

				<div className='space-y-10 px-4 md:px-10 mr-2'>
					<h4 className='text-4xl font-semibold'>
						A <span className='text-[#1ecbe1]'>little</span> bit about me.
					</h4>
					<p className='text-sm md:text-base text-justify'>
						I am a Full Stack Developer, currently working with Getty Images. I
						enjoy building things and bringing ideas to life. I am equipped with
						the right skills to help you with your next project, let&apos;s
						create together.
					</p>
					<p className='text-sm md:text-base text-justify'>
						I believe in working smart and not reinventing the wheel, which
						leads me to work with a multitude of 3rd party tools/ APIs which are
						integrated into the web application. While working, I tend to
						implement principles of project management to properly allocate
						resources, manage time and expectations and deliver a high quality
						product!
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
