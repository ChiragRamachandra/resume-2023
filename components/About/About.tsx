import React from 'react';
import { motion } from 'framer-motion';
import { SubHeading } from '../SubHeading';

type Props = {};

const About = (props: Props) => {
	return (
		<div className='flex flex-col text-center max-w-7xl justify-evenly mx-auto items-center p-5'>
			{/* <SubHeading>About</SubHeading> */}

			<div className='flex flex-col md:text-left md:flex-row justify-center items-center mt-12'>
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
						Turning <span className='text-[#1ecbe1]'>ideas</span> into reality.
					</h4>
					<p className='text-sm md:text-base text-justify'>
						I&apos;m a Senior Full Stack Engineer at Getty Images, where I
						transform visionary concepts into tangible, impactful products. My
						role goes beyond coding - I architect solutions, make strategic
						technical decisions, and ensure that every product I build not only
						works but thrives in the real world.
					</p>
					<p className='text-sm md:text-base text-justify'>
						What sets me apart is my ability to wear multiple hats - from
						technical architect to product strategist. I excel at understanding
						the big picture while maintaining attention to technical detail.
						Whether you need a complete product built from scratch or technical
						leadership for your existing project, I can step in as a tech lead
						to guide your vision to success.
					</p>
					<p className='text-sm md:text-base text-justify'>
						My approach combines technical excellence with product thinking. I
						don&apos;t just build features; I create solutions that solve real
						problems and deliver value. If you have an idea that needs to be
						brought to life, I&apos;m here to make it happen.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
