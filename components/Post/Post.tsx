import Link from 'next/link';
import Image from 'next/image';

export default function Post({ post, compact }: any) {
	return (
		<div className='w-full px-2 md:px-10 py-6 bg-[rgb(36,36,36)] rounded-lg shadow-sm shadow-gray-900/70 md:shadow-black/80 mt-6 hover:opacity-100 opacity-75 transition-opacity duration-100'>
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
			</div>

			<div className='mt-2'>
				<Link href={`/blog/${post.slug}`}>
					<span className='text-xl text-gray-300 font-bold hover:underline m-2 hover:decoration-[#1ecbe1]'>
						{post.frontmatter.title}
					</span>
				</Link>
				<p className='mt-2 text-gray-300 text-justify p-1'>
					{post.frontmatter.excerpt}
				</p>
			</div>

			{!compact && (
				<div className='flex justify-between items-center mt-6'>
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
