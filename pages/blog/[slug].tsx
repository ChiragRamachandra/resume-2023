import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import { Layout } from '@/components/Layout';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { Frontmatter } from 'types/posts';

interface PostPage {
	frontmatter: Frontmatter;
	content: string;
	slug: string;
}

export default function PostPage({
	frontmatter: { title, category, date, cover_image, author, author_image },
	content,
	slug,
}: PostPage) {
	return (
		<Layout title={title}>
			<div>
				<div className='px-4 py-4 mt-6'>
					{/* BREADCRUMB */}
					<div>
						<div className='flex items-start justify-start p-5'>
							<Link
								className='mx-1 uppercase text-gray-500 text-sm hover:underline decoration-[#1ecbe1]'
								href='/'
							>
								HOME /
							</Link>

							<Link
								className=' mx-1 uppercase text-gray-500 text-sm hover:underline decoration-[#1ecbe1]'
								href='/blog'
							>
								All Posts
							</Link>
						</div>
					</div>
				</div>

				<div className='flex justify-center items-center mt-4'>
					<h1 className='mb-7 uppercase tracking-[10px] text-gray-500 text-2xl px-4 md:text-4xl'>
						{title}
					</h1>
				</div>

				<div className='flex flex-row  items-center justify-center'>
					<Image
						width='40'
						height='40'
						sizes='50vh'
						src={cover_image}
						alt={cover_image}
						className='w-4/5 h-4/5 lg:w-3/4 lg:h-3/4 rounded items-center justify-center'
					/>
				</div>

				<div className='flex flex-col pl-6 pr-7 md:pl-10 md:pr-10 py-1'>
					<div className='flex flex-row justify-end items-center p-4 '>
						<div className='uppercase text-gray-500 text-sm'>{date}</div>
					</div>
				</div>

				<div className='flex flex-col pl-6 pr-7 md:pl-10 md:pr-10 py-1 blogTopLevel'>
					<div
						className='blog-text text-grey-300 m-2 md:text-lg text-justify'
						dangerouslySetInnerHTML={{ __html: marked(content) }}
					></div>

					<div className='mt-5'>
						<Footer />
					</div>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('posts'));

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.md', ''),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }: any) {
	const markdownWithMeta = fs.readFileSync(
		path.join('posts', slug + '.md'),
		'utf-8'
	);

	const { data: frontmatter, content } = matter(markdownWithMeta);
	return {
		props: {
			frontmatter,
			content,
			slug,
		},
	};
}
