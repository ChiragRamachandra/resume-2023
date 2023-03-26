import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

type Props = {
	title?: string;
	keywords?: string;
	description?: string;
	children?: React.ReactNode;
};

const Layout = ({ title, keywords, description, children }: Props) => {
	return (
		<div className='bg-[rgb(36,36,36)] text-white h-screen  z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1ecbe1]/80'>
			<Head>
				<title>{title}</title>
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<section className='flex flex-col space-y-8 items-center justify-center text-center'>
				{children}
			</section>

			{/* <Footer /> */}

			{/* <div className='sticky bottom-14 p-3 flex items-end justify-end max-w-7xl mx-auto z-20 '>
				<Link href={'#hero'}>
					<ChevronUpIcon className='h-10 w-10 background mr-4 text-gray-400' />
				</Link>
			</div> */}
		</div>
	);
};
Layout.defaultProps = {
	title: 'Chirag Ramachandra',
	keywords: 'Fullstack Developer',
	description: 'Chirag Ramachandra',
};

export default Layout;
