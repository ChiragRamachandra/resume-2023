import React from 'react';
import Image from 'next/image';
type Props = {
	directionLeft?: boolean;
	name: string;
	url: string;
};

const Skill = ({ name, url }: Props) => {
	return (
		<div className='group relative flex cursor-pointer top-5'>
			<Image
				width={100}
				height={100}
				src={url}
				alt={name}
				className='rounded-2xl border border-gray-500	object-cover 
				h-20 w-20 md:w-28 md:h-28 lg:w-24 lg:h-24 
				filter group-hover:grayscale transition duration-300 ease-in-out'
			/>
			<div
				className='absolute opacity-0 group-hover:opacity-80	transition duration-300 ease-in-out group-hover:bg-white 
			h-20 w-20 md:w-28 md:h-28 lg:w-24 lg:h-24 
			rounded-2xl z-0'
			>
				<div className='flex items-center justify-center h-full'>
					<p className='text-xs md:text-xs font-bold text-black opacity-100 text-justify'>
						{name}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Skill;
