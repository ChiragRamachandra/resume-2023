import React from 'react';

type Props = {
	children: React.ReactNode;
};

const SubHeading = ({ children }: Props) => {
	return (
		<div className='flex flex-col text-center mt-6 mb-14 p-2 w-full'>
			<h2 className='uppercase font-bold lg:text-3xl text-gray-500 text-2xl'>
				{children}
			</h2>
		</div>
	);
};

export default SubHeading;
