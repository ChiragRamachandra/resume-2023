import React from 'react';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {};

export default function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: ['Hi My Name is Chirag', "I'm Awesome"],
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
					Software Engineer
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
					<Link href='#project'>
						<button className='heroButton'>Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
