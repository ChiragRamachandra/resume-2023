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
						A <span className='text-[#1ecbe1]'>little</span> bit about me.
					</h4>
					<p className='text-sm md:text-base text-justify'>
						I am a Full Stack Developer currently employed at Getty Images,
						passionate about transforming ideas into functional products. With a
						wide range of skills and expertise, I am equipped to help bring your
						next project to life.
					</p>
					<p className='text-sm md:text-base text-justify'>
						My approach is to work smart and leverage existing tools and APIs to
						save time and effort. Throughout my projects, I incorporate agile
						principles to effectively manage timelines and expectations, and
						deliver high-quality results.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
