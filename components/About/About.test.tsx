import { render, screen } from '@testing-library/react';
import About from './About';
import '@testing-library/jest-dom';

describe('About', () => {
	it('renders About', () => {
		render(<About />);
		const heading = screen.getByText('About');
		expect(heading).toBeInTheDocument();
	});
});
