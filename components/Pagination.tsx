import Link from 'next/link';

interface PaginationProps {
	currentPage: number;
	numPages: number;
}

const Pagination = ({ currentPage, numPages }: PaginationProps) => {
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage = `/blog/page/${currentPage - 1}`;
	const nextPage = `/blog/page/${currentPage + 1}`;

	if (numPages === 1) return <></>;

	return (
		<div className='mt-5'>
			<ul className='flex p-2 list-none my-2'>
				{!isFirst && (
					<Link href={prevPage}>
						<li
							className='relative block leading-tight  bg-[#e6e6e6] m-1 cursor-pointer rounded
						px-6 py-2 border border-[#242424] 
		 uppercase text-xs tracking-widest text-gray-700 
		transition-all hover:border-[#1ecbe1]/80 hover:text-[#1ecbe1]/80'
						>
							Previous
						</li>
					</Link>
				)}
				{Array.from({ length: numPages }, (_, i) => (
					<Link href={`/blog/page/${i + 1}`} key={`page-${i}`}>
						<li
							className='relative block leading-tight  bg-[#e6e6e6] m-1 cursor-pointer rounded
						px-4 py-2 border border-[#242424] 
		 uppercase text-xs tracking-widest text-gray-700 
		transition-all hover:border-[#1ecbe1]/80 hover:text-[#1ecbe1]/80'
						>
							{i + 1}
						</li>
					</Link>
				))}

				{!isLast && (
					<Link href={nextPage}>
						<li
							className='relative block leading-tight  bg-[#e6e6e6] m-1 cursor-pointer rounded
						px-6 py-2 border border-[#242424] 
		 uppercase text-xs tracking-widest text-gray-700 
		transition-all hover:border-[#1ecbe1]/80 hover:text-[#1ecbe1]/80'
						>
							Next
						</li>
					</Link>
				)}
			</ul>
		</div>
	);
};

export default Pagination;
