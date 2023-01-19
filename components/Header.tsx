import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { HomeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import { getSocialsData } from 'data';

type Props = {};

const Header = ({}: Props) => {
	const socialLinks = getSocialsData();
	return (
		<header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
			{/* Home Icon */}
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
				viewport={{ once: true }}
				className='flex flex-row items-center'
			>
				<Link href='/'>
					<HomeIcon className='  h-8 w-8 background mr-4 text-gray-400' />
				</Link>
			</motion.div>
			{/* Social Icons */}
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
				className='flex flex-row items-center cursor-pointer pr-2'
			>
				{socialLinks.map((socialLink) => (
					<SocialIcon
						key={socialLink.id}
						target='_blank'
						url={socialLink.url}
						fgColor='grey'
						bgColor='transparent'
					/>
				))}

				{/* <SocialIcon
					href='"mailto:chirag.ramachandra@gmail.com"'
					target='_blank'
					className='cursor-pointer'
					network='email'
					fgColor='grey'
					bgColor='transparent'
				/> */}

				{/* <Link href='mailto:chirag.ramachandra@gmail.com' target='_blank'>
					<p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
						get in touch
					</p>
				</Link> */}
			</motion.div>
		</header>
	);
};
export default Header;
