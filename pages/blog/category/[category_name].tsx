import fs from 'fs';
import path from 'path';
import { Layout } from '@/components/Layout';
import { Post } from '@/components/Post';
import { Footer } from '@/components/Footer';
import matter from 'gray-matter';
import { getPosts } from '@/lib/posts';
import Posts from 'types/posts';

interface CategoryBlogPageProps {
	posts: Posts[];
	categoryName: string;
}

export default function CategoryBlogPage({
	posts,
	categoryName,
}: CategoryBlogPageProps) {
	return (
		<Layout>
			<div className=' h-screen top-24'>
				<div className='flex justify-between flex-col md:flex-row'>
					<div className='m-10 text-center'>
						<h1 className='text-2xl uppercase text-gray-500 my-5 p-5 tracking-[5px]'>
							Posts in {categoryName}
						</h1>

						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-4'>
							{posts.map((post, index) => (
								<Post key={index} post={post} />
							))}
						</div>
						<div className='mt-5 top-0'>
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('posts'));

	const categories = files.map((filename) => {
		const markdownWithMeta = fs.readFileSync(
			path.join('posts', filename),
			'utf-8'
		);

		const { data: frontmatter } = matter(markdownWithMeta);

		return frontmatter.category.toLowerCase();
	});

	const paths = categories.map((category) => ({
		params: { category_name: category },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { category_name } }: any) {
	const files = fs.readdirSync(path.join('posts'));

	const posts = getPosts();

	// Filter posts by category
	const categoryPosts = posts.filter(
		(post) => post.frontmatter.category.toLowerCase() === category_name
	);

	return {
		props: {
			posts: categoryPosts,
			categoryName: category_name,
		},
	};
}
