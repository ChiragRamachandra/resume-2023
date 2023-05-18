import { render } from '@testing-library/react';
import Post from './Post';
import '@testing-library/jest-dom';

describe('Post', () => {
	it('renders Post', () => {
		render(<Post />);
	});
});
