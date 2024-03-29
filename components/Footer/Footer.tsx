import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {};

const Footer = ({}: Props) => {
	return (
		<footer className='p-2 flex flex-row items-center justify-between max-w-7xl mx-auto z-20 xl:items-center mb-6'>
			<div className='flex flex-row items-center justify-center'>
				<p className='inline-flex text-base text-gray-400 px-4'>
					Chirag Ramachandra © 2023
				</p>
			</div>
			<div className='flex flex-col items-center cursor-pointer'>
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
			</div>
		</footer>
	);
};
export default Footer;
