import { render } from '@testing-library/react';
import Projects from './Projects';
import '@testing-library/jest-dom';

describe('Projects', () => {
	it('renders Projects', () => {
		render(<Projects />);
	});
});
