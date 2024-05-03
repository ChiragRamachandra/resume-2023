import React from 'react';

type Props = {};

const Footer = ({}: Props) => {
	return (
		<footer className='p-2 flex flex-row items-center justify-between max-w-7xl mx-auto z-20 xl:items-center mb-8'>
			<div className='flex flex-row items-center justify-center'>
				<p className='inline-flex text-sm text-gray-500 px-4'>
					Chirag Ramachandra © 2024
				</p>
			</div>
			<div className='flex flex-col items-center cursor-pointer'>
				<div className='flex flex-row'>
					<p className='text-sm text-gray-500 px-4'>
						<a href='mailto:chirag.ramachandra@gmail.com'>
							chirag.ramachandra@gmail.com
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
