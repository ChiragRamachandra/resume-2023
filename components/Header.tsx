import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

const Header = ({}: Props) => {
	return (
		<header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
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
				className='flex flex-row items-center'
			>
				{/* Social Icons */}
				<SocialIcon
					target='_blank'
					url='https://twitter.com/ChiragRamchndra'
					fgColor='grey'
					bgColor='transparent'
				/>
				<SocialIcon
					target='_blank'
					url='https://www.youtube.com/@chiragramachandra'
					fgColor='grey'
					bgColor='transparent'
				/>
				<SocialIcon
					target='_blank'
					url='https://github.com/ChiragRamachandra'
					fgColor='grey'
					bgColor='transparent'
				/>
				<SocialIcon
					target='_blank'
					url='https://www.linkedin.com/in/chiragram/'
					fgColor='grey'
					bgColor='transparent'
				/>
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
				className='flex flex-row items-center cursor-pointer pr-2'
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
		</header>
	);
};
export default Header;
