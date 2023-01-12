import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
type Props = {};

const ExperienceCard = (props: Props) => {
	return (
		<div>
			<article
				className='flex flex-col rounded-lg items-center space-y-7 
		flex-shrink-0 w-[250px] md:w-[300px] xl:w-[700px] 
		snap-center  p-2 bg-[#292929] hover:opacity-100 opacity-40
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
					className='w-24 h-24 rounded-full xl:w-[200px] xl:h-[200px]
				object-cover object-center'
					src='/images/experience/getty_logo.jpeg'
					alt='company-logo'
				/>
				<div className='px-0 md:px-8'>
					<h4 className='text-xl font-light'>CEO of CHIRAG</h4>
					<p className='font-bold text-xl mt-1'>GETTY</p>
					<div className='flex space-x-2 my-2'>
						<Image
							height={18}
							width={18}
							src='/images/technology/ts_logo.png'
							alt='typescript'
							className='h-8 w-8'
						/>
						<Image
							height={18}
							width={18}
							src='/images/technology/ts_logo.png'
							alt='typescript'
							className='h-8 w-8'
						/>
					</div>
					<p className='uppercase py-2 text-gray-300'>
						March 2022 - April 2023
					</p>
					<div className='overflow-y-scroll h-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1ecbe1]/80'>
						<ul className='list-disc space-y-1 ml-1 text-sm md:text-lg'>
							<li>
								asdasdajsdfg asd gahjsdgv asd asd ajshdv ajsvd asd jahvd jasvd
								ja dasdjv asjdv jasd jvjvj
							</li>
							<li>
								asdasdajsdfg asd gahjsdgv asd asd ajshdv ajsvd asd jahvd jasvd
								ja dasdjv asjdv jasd jvjvj
							</li>
							<li>
								asdasdajsdfg asd gahjsdgv asd asd ajshdv ajsvd asd jahvd jasvd
								ja dasdjv asjdv jasd jvjvj
							</li>
							<li>
								asdasdajsdfg asd gahjsdgv asd asd ajshdv ajsvd asd jahvd jasvd
								ja dasdjv asjdv jasd jvjvj
							</li>
							<li>
								asdasdajsdfg asd gahjsdgv asd asd ajshdv ajsvd asd jahvd jasvd
								ja dasdjv asjdv jasd jvjvj
							</li>
							<li>
								asdasdajsdfg asd gahjsdgv asd asd ajshdv ajsvd asd jahvd jasvd
								ja dasdjv asjdv jasd jvjvj
							</li>
							<li>
								asdasdajsdfg asd gahjsdgv asd asd ajshdv ajsvd asd jahvd jasvd
								ja dasdjv asjdv jasd jvjvj
							</li>
							<li>
								asdasdajsdfg asd gahjsdgv asd asd ajshdv ajsvd asd jahvd jasvd
								ja dasdjv asjdv jasd jvjvj
							</li>
							<li>
								asdasdajsdfg asd gahjsdgv asd asd ajshdv ajsvd asd jahvd jasvd
								ja dasdjv asjdv jasd jvjvj
							</li>
							<li>
								asdasdajsdfg asd gahjsdgv asd asd ajshdv ajsvd asd jahvd jasvd
								ja dasdjv asjdv jasd jvjvj
							</li>
						</ul>
					</div>
				</div>
			</article>
		</div>
	);
};

export default ExperienceCard;
