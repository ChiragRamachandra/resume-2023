import { render } from '@testing-library/react';
import Skills from './Skills';
import '@testing-library/jest-dom';

describe('Skills', () => {
	it('renders Skills', () => {
		render(<Skills />);
	});
});
