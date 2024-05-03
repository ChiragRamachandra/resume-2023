import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

export default function Hero({}: Props) {
	return (
		<div
			className='h-screen flex flex-col  
		items-center justify-center text-center overflow-hidden'
		>
			<Image
				priority
				loading='eager'
				className='relative rounded-full mx-auto object-cover'
				src='/images/profile/chirag_ramachandra.jpg'
				alt='Picture of the author'
				width={250}
				height={250}
			/>
			<div className='z-20'>
				<h1 className='text-2xl lg:text-4xl font-bold uppercase text-gray-500 py-4 tracking-[5px]'>
					Chirag Ramachandra
				</h1>
				<h2 className='text-lg lg:text-2xl uppercase text-gray-500 tracking-[20px]'>
					Fullstack Developer
				</h2>

				<div className='pt-5'>
					<Link href='#about'>
						<button className='heroButton'>About</button>
					</Link>
					<Link href='#experience'>
						<button className='heroButton'>Experience</button>
					</Link>
					<Link href='#skills'>
						<button className='heroButton'> Skills</button>
					</Link>
					<Link href='#projects'>
						<button className='heroButton'>Projects</button>
					</Link>
					<Link href='/blog'>
						<button className='heroButton'>Blog</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
