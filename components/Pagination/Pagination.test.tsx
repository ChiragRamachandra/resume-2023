import { render } from '@testing-library/react';
import Pagination from './Pagination';
import '@testing-library/jest-dom';

describe('Pagination', () => {
	it('renders Pagination', () => {
		render(<Pagination currentPage={1} numPages={2} />);
	});
});
