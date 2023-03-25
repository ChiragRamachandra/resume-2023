import Head from 'next/head';
import Header from '../components/HeaderBlog';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

import { ChevronUpIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Home() {
	return (
		<div className='bg-[rgb(36,36,36)] text-white h-screen  overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1ecbe1]/80 '>
			<Head>
				<title>Chirag Ramachandra</title>
				<meta name='description' content='Fullstack developer' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<section id='hero'>
				<Hero />
			</section>

			<section id='about'>
				<About />
			</section>

			<section id='experience' className='snap-center'>
				<Experience />
			</section>

			<section id='skills'>
				<Skills />
			</section>

			<section id='projects'>
				<Projects />
			</section>

			<div>
				<Footer />
			</div>

			<div className='sticky bottom-14 p-3 flex justify-end max-w-7xl mx-auto z-20 '>
				<Link href={'#hero'}>
					<ChevronUpIcon className='h-10 w-10 background mr-4 text-gray-400' />
				</Link>
			</div>
		</div>
	);
}
