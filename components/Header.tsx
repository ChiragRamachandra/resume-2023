import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
					url='https://www.facebook.com/ChiragRamachandra16/'
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
				<SocialIcon
					target='_blank'
					url='https://www.instagram.com/fullstack_webdev/'
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
					href='mailto:chirag.ramachandra@gmail.com'
					target='_blank'
					className='cursor-pointer'
					network='email'
					fgColor='grey'
					bgColor='transparent'
				/>
				<Link href='mailto:chirag.ramachandra@gmail.com' target='_blank'>
					<p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
						get in touch
					</p>
				</Link>
			</motion.div>
		</header>
	);
};
export default Header;
