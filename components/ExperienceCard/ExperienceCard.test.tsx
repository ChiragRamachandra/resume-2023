import { render } from '@testing-library/react';
import ExperienceCard from './ExperienceCard';
import '@testing-library/jest-dom';

describe('ExperienceCard', () => {
	it('renders ExperienceCard', () => {
		render(
			<ExperienceCard
				id={123}
				imageUrl={'fake/path'}
				title={'software developer'}
				company={'fake company'}
				technologyImages={['fake/path/image']}
				startDate={'startDateString'}
				endDate={'endDateString'}
				experienceBulletPoint={['point 1, point2']}
			/>
		);
	});
});
