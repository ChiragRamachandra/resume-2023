import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import Layout from '@/components/Layout';
import CategoryLabel from '@/components/CategoryLabel';
import Image from 'next/image';

export default function PostPage({
	frontmatter: { title, category, date, cover_image, author, author_image },
	content,
	slug,
}) {
	return (
		<Layout title={title}>
			<div className='h-screen items-start'>
				<div className='w-full px-10 py-4 bg-[rgb(36,36,36)] rounded-lg mt-6'>
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
					<div className='flex justify-center items-center mt-4'>
						<h1 className='mb-7 uppercase tracking-[10px] text-gray-500 text-2xl md:text-4xl'>
							{title}
						</h1>
					</div>
				</div>
				<div className='w-full px-10 py-1 bg-[rgb(36,36,36)] rounded-lg flex flex-col'>
					<div className='p-4 flex flex-row items-center justify-center'>
						<Image
							width='0'
							height='0'
							sizes='50vh'
							src={cover_image}
							alt={cover_image}
							className='w-full lg:w-3/4 rounded h-auto items-center justify-center'
						/>
					</div>

					<div className='flex justify-between items-center bg-[rgb(36,36,36)] p-2 my-8 lg:px-48'>
						<div className='flex items-center'></div>
						<div className='mr-4 flex flex-row'>
							<div className='mx-2'>
								<CategoryLabel>{category}</CategoryLabel>
							</div>
							<div className='uppercase text-gray-500 text-sm'>{date}</div>
						</div>
					</div>

					<div className='blog-text mt-2 text-grey-300 bg-[rgb(36,36,36)] text-justify px-5 my-5 lg:px-48'>
						<div
							className='bg-[rgb(36,36,36)] text-base md:text-lg'
							dangerouslySetInnerHTML={{ __html: marked(content) }}
						></div>
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

export async function getStaticProps({ params: { slug } }) {
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
