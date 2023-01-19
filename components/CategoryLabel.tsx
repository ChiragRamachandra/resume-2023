import Link from 'next/link';

export default function CategoryLabel({ children }: any) {
	const getColorValue = (children: string): string => {
		if (children === 'javascript') return 'yellow';
		if (children === 'css') return 'blue';
		if (children === 'python') return 'green';
		if (children === 'php') return 'purple';
		if (children === 'ruby') return 'red';
		return 'red';
	};

	return (
		<Link
			className={`px-2 py-1 bg-${getColorValue(
				children.toLowerCase()
			)}-600 text-gray-100 font-bold rounded`}
			href={`/blog/category/${children.toLowerCase()}`}
		>
			{children}
		</Link>
	);
}
