import Link from 'next/link';
import Image from 'next/image';
import CategoryLabel from './CategoryLabel';

export default function Post({ post, compact }: any) {
	return (
		<div className='w-full px-10 py-6 bg-[rgb(36,36,36)] rounded-lg shadow-md mt-6'>
			{!compact && (
				<Image
					src={post.frontmatter.cover_image}
					alt=''
					height={420}
					width={600}
					className='mb-4 rounded'
				/>
			)}
			<div className='flex justify-between items-center'>
				<span className='font-light text-gray-300'>
					{post.frontmatter.date}
				</span>
				<CategoryLabel>{post.frontmatter.category}</CategoryLabel>
			</div>

			<div className='mt-2'>
				<Link href={`/blog/${post.slug}`}>
					<span className='text-xl text-gray-300 font-bold hover:underline hover:decoration-[#1ecbe1]'>
						{post.frontmatter.title}
					</span>
				</Link>
				<p className='mt-2 text-gray-300 text-justify p-1'>
					{post.frontmatter.excerpt}
				</p>
			</div>

			{!compact && (
				<div className='flex justify-between items-center mt-6'>
					<div>{/* left corner if needed */}</div>
					<div className='flex items-center'>
						<Link href={`/blog/${post.slug}`}>
							<button className='heroButton'>Read More</button>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}
