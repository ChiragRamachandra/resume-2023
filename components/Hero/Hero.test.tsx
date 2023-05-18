import { render } from '@testing-library/react';
import Hero from './Hero';
import '@testing-library/jest-dom';

describe('Hero', () => {
	it('renders Hero', () => {
		render(<Hero />);
	});
});
