import { render } from '@testing-library/react';
import Skill from './Skill';
import '@testing-library/jest-dom';

describe('Skill', () => {
	it('renders Skill', () => {
		render(<Skill name={'fake skill'} url={'/fake/path'} />);
	});
});
