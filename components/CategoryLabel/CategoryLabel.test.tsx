import { render } from '@testing-library/react';
import CategoryLabel from './CategoryLabel';
import '@testing-library/jest-dom';

describe('CategoryLabel', () => {
	it('renders CategoryLabel', () => {
		render(<CategoryLabel> Category</CategoryLabel>);
	});
});
