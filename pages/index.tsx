import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';
import { POSTS_HOME_PAGE } from '@/data/blog';
import { getPosts } from '@/lib/posts';
import Posts from 'types/posts';

import { ChevronUpIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { Divider } from '@/components/Divider';
import { BlogSection } from '@/components/BlogSection';

interface HomeProps {
	posts: Posts[];
}

export default function Home({ posts }: HomeProps) {
	return (
		<div className='  h-screen  z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#1ecbe1]/80 '>
			<Head>
				<title>Chirag Ramachandra</title>
				<meta name='description' content='Fullstack developer' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<section id='hero'>
				<Hero />
				<Divider />
			</section>

			<section id='about'>
				<About />
				<Divider />
			</section>

			<section id='experience'>
				<Experience />
				<Divider />
			</section>

			<section id='skills'>
				<Skills />
				<Divider />
			</section>

			<section id='projects'>
				<Projects />
			</section>

			<section>
				<BlogSection posts={posts} />
			</section>

			<div className='sticky bottom-14 flex justify-end max-w-7xl mx-auto z-20 '>
				<Link href={'#hero'}>
					<ChevronUpIcon className='h-10 w-10 background mr-3 text-gray-400' />
				</Link>
			</div>
			<Divider />
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	const posts = getPosts();
	const orderedPosts = posts.slice(0, POSTS_HOME_PAGE);

	return {
		props: {
			posts: orderedPosts,
		},
	};
}
