import { render } from '@testing-library/react';
import Post from './Post';
import '@testing-library/jest-dom';

const mockPostData = {
	slug: 'Why did I build this website?',
	frontMatter: {
		title: 'Why did I build this website?',
		date: 'Mar 27, 2023',
		excerpt:
			'Why I built this website, how I built my new website, what do I intend to do with and what can you expect.',
		cover_image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
		category: 'JavaScript',
		author: 'Chirag Ramachandra',
		author_image:
			'http://1.gravatar.com/avatar/13ed42fe81958754e88d2189dea6fdc7',
	},
};

describe('Post', () => {
	it('renders Post', () => {
		render(<Post post={mockPostData} compact={true} />);
	});
});
