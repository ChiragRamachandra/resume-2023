import { render, screen } from '@testing-library/react';
import Experience from './Experience';
import '@testing-library/jest-dom';

describe('Experience', () => {
	it('renders Experience', () => {
		render(<Experience />);
	});
});
