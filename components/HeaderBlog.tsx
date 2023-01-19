import Link from 'next/link';
import React from 'react';
import { HomeIcon } from '@heroicons/react/24/solid';
import { SocialIcon } from 'react-social-icons';
import { getSocialsData } from 'data';

type Props = {};

const HeaderBlog = (props: Props) => {
	const socialLinks = getSocialsData();
	return (
		<header className='bg-[rgb(36,36,36)] text-gray-100 w-full'>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<Link href='/'>
					<HomeIcon className='  h-8 w-8 background mr-4 text-gray-400' />
				</Link>
				<nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
					{socialLinks.map((socialLink) => (
						<SocialIcon
							key={socialLink.id}
							target='_blank'
							url={socialLink.url}
							fgColor='grey'
							bgColor='transparent'
						/>
					))}
				</nav>
			</div>
		</header>
	);
};

export default HeaderBlog;
