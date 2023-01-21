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
				<h1 className='text-2xl uppercase text-gray-500 my-5 p-5 tracking-[15px]'>
					Latest Posts
				</h1>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-4'>
					{posts.map((post: any, index: any) => (
						<Post key={index} post={post} />
					))}
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	return {
		props: {
			posts: getPosts(),
		},
	};
}
