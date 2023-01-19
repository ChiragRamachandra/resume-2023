import Link from 'next/link';
import Layout from '../../components/Layout';
import { getPosts } from '@/lib/posts';
import Post from '@/components/Post';

type Props = Array<BlogPosts>;

type BlogPosts = {
	slug: string;
	frontmatter: FrontMatter;
};

type FrontMatter = {
	title: string;
	date: string;
	excerpt: string;
	cover_image: string;
	category: string;
	author: string;
	author_image: string;
};

export default function Home({ posts }: any) {
	return (
		<Layout>
			<div className='h-screen top-24'>
				<h1 className='text-5xl border-b-4 p-5 font-bold'>Latest Posts</h1>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
					{posts.map((post: any, index: any) => (
						<Post key={index} post={post} />
					))}
				</div>

				<Link href='/blog'>
					<span
						className='block text-center border
					 border-gray-500 text-gray-800 rounded-md py-4 my-5 
					transition duration-500 ease select-none hover:text-white
					 hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full'
					>
						All Posts
					</span>
				</Link>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	console.log('POSTS', getPosts().slice(0, 6));
	return {
		props: {
			posts: getPosts(),
		},
	};
}
