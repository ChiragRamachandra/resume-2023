import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Chirag Ramachandra</title>
				<meta name='description' content='Fullstack developer' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* Header */}
			<Header />

			{/* Hero */}
			<section id='hero'>
				<Hero />
			</section>

			{/* About */}

			{/* Experience  */}

			{/* Skills */}

			{/* Projects  */}

			{/* Contact Me */}
		</div>
	);
}
