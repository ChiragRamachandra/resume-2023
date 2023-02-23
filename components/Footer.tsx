import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
// import { PhoneIcon } from '@heroicons/react/24/solid';

type Props = {};

const Footer = ({}: Props) => {
	return (
		<footer className='p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center'>
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
					duration: 0.5,
				}}
				className='flex flex-row items-center justify-center'
			>
				<p className='inline-flex text-sm text-gray-400 px-4'>
					Chirag Ramachandra © 2023
				</p>
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
				transition={{ duration: 0.5 }}
				className='flex flex-col items-center cursor-pointer'
			>
				<div className='flex flex-row'>
					<p className='uppercase hidden md:inline-flex text-sm text-gray-400 px-4'>
						<a href='tel:+(1)-647-6795831'>+1 647 679 5831</a>
					</p>
					<SocialIcon
						target='_blank'
						url='https://wa.me/918951831967'
						fgColor='grey'
						bgColor='transparent'
						network='whatsapp'
					/>
					{/* <PhoneIcon className='h-5 w-5 background mr-4 text-gray-400' /> */}
				</div>
			</motion.div>
		</footer>
	);
};
export default Footer;
