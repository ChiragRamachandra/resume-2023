import { render } from '@testing-library/react';
import BackgroundCircles from './BackgroundCircles';
import '@testing-library/jest-dom';

describe('BackgroundCircles', () => {
	it('renders BackgroundCircles', () => {
		render(<BackgroundCircles />);
	});
});
