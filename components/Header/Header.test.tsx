import { render } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';

describe('About', () => {
	it('renders About', () => {
		render(<Header />);
	});
});
