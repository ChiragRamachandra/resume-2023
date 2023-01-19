import React from 'react';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { getHeroBannerText } from 'data';

type Props = {};

export default function Hero({}: Props) {
	const [text] = useTypewriter({
		words: getHeroBannerText(),
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div
			className='h-screen flex flex-col space-y-8 
		items-center justify-center text-center overflow-hidden'
		>
			<BackgroundCircles />
			<Image
				priority
				loading='eager'
				className='relative rounded-full mx-auto object-cover'
				src='/images/chirag_ramachandra.jpg'
				alt='Picture of the author'
				width={150}
				height={150}
			/>
			<div className='z-20'>
				<h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
					Fullstack Developer
				</h2>
				<h1 className='text-5xl lg:text-6xl font-semibold px-10'>
					<span>{text}</span>
					<Cursor cursorColor='#F7F232' />
				</h1>
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
