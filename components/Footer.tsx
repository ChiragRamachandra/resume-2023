import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { PhoneIcon } from '@heroicons/react/24/solid';

type Props = {};

const Footer = ({}: Props) => {
	return (
		<footer className='sticky bottom-5 top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center'>
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className='flex flex-row items-center justify-center'
			>
				{/* Social Icons */}
				<PhoneIcon className='h-5 w-5 background text-gray-400' />
			</motion.div>
			<motion.div
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{ duration: 1.5 }}
				className='flex flex-row items-center cursor-pointer'
			>
				<SocialIcon
					target='_blank'
					className='cursor-pointer'
					network='email'
					fgColor='grey'
					bgColor='transparent'
				/>
				<p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
					get in touch
				</p>
			</motion.div>
		</footer>
	);
};
export default Footer;
