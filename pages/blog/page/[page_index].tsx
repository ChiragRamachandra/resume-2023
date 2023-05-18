import fs from 'fs';
import path from 'path';
import { Layout } from '@/components/Layout';
import { Post } from '@/components/Post';
import { Pagination } from '@/components/Pagination';
import { POSTS_PER_PAGE } from '@/data/blog';
import { getPosts } from '@/lib/posts';
import Posts from 'types/posts';
import { Footer } from '@/components/Footer';

interface BlogPageProps {
	posts: Posts[];
	numPages: number;
	currentPage: number;
}

const BlogPage = ({ posts, numPages, currentPage }: BlogPageProps) => {
	return (
		<Layout>
			<div className=' h-screen top-24'>
				<div className='flex justify-between flex-col md:flex-row'>
					<div className='m-4 md:m-10 text-center'>
						<h1 className='text-2xl uppercase text-gray-500 my-5 p-2 md:p-5 tracking-[15px]'>
							Blog
						</h1>

						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-4'>
							{posts.map((post: Posts, index: number) => (
								<Post key={index} post={post} />
							))}
						</div>
						<div className='flex flex-row items-center justify-center'>
							<Pagination currentPage={currentPage} numPages={numPages} />
						</div>
						<div className='mt-5 top-0'>
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default BlogPage;

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('posts'));
	const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
	let paths = [];

	for (let i = 1; i <= numPages; i++) {
		paths.push({
			params: { page_index: i.toString() },
		});
	}

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }: any) {
	const page = parseInt((params && params.page_index) || 1);
	const files = fs.readdirSync(path.join('posts'));
	const posts = getPosts();
	const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
	const pageIndex = page - 1;

	const orderedPosts = posts.slice(
		pageIndex * POSTS_PER_PAGE,
		(pageIndex + 1) * POSTS_PER_PAGE
	);

	return {
		props: {
			posts: orderedPosts,
			numPages,
			currentPage: page,
		},
	};
}
