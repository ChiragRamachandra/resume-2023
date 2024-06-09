import React from 'react';
import { SubHeading } from '../SubHeading';
import Posts from 'types/posts';
import { Post } from '../Post';
import { Button } from '../ui/button';
import Link from 'next/link';

type Props = {
	posts: Posts[];
};

const BlogSection = ({ posts }: Props) => {
	return (
		<div className='flex flex-col items-center justify-start p-4'>
			<SubHeading>Blog</SubHeading>
			<div className='w-full flex flex-col md:flex-row items-center justify-center '>
				<div className='grid md:grid-cols-2 gap-6 p-4 mx-6'>
					{posts.map((post: Posts, index: number) => (
						<Post key={index} post={post} />
					))}
				</div>
			</div>
			<div className='my-4'>
				<Link href='/blog'>
					<button className='heroButton'>View More</button>
				</Link>
			</div>
		</div>
	);
};

export default BlogSection;
