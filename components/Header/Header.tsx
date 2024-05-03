import Link from 'next/link';
import React from 'react';
import { HomeIcon } from '@heroicons/react/24/solid';
import { SocialIcon } from 'react-social-icons';
import { getSocialsData } from 'data';
import { ModeToggle } from '../ModeToggle';

type Props = {};

const Header = (props: Props) => {
	const socialLinks = getSocialsData();
	return (
		<header className='w-full'>
			<div className='container mx-auto flex flex-wrap p-5 flex-row  justify-between items-center'>
				<Link href='/'>
					<HomeIcon className='h-8 w-8 background mr-4' />
				</Link>
				<nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
					{socialLinks.map((socialLink) => (
						<SocialIcon
							key={socialLink.id}
							target='_blank'
							url={socialLink.url}
							bgColor='transparent'
							fgColor='currentColor'
							className='text-black dark:text-white'
						/>
					))}
					<ModeToggle />
				</nav>
			</div>
		</header>
	);
};

export default Header;
