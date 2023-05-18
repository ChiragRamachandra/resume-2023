import { render } from '@testing-library/react';
import Layout from './Layout';
import '@testing-library/jest-dom';

describe('Layout', () => {
	it('renders Layout', () => {
		render(<Layout />);
	});
});
