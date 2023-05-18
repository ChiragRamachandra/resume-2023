import { render } from '@testing-library/react';
import ExperienceCard from './ExperienceCard';
import '@testing-library/jest-dom';

describe('ExperienceCard', () => {
	it('renders ExperienceCard', () => {
		render(
			<ExperienceCard
				id={123}
				imageUrl={'/images/experience/getty_logo.jpeg'}
				title={'software developer'}
				company={'fake company'}
				technologyImages={['/images/technology/ts_logo.png']}
				startDate={'startDateString'}
				endDate={'endDateString'}
				experienceBulletPoint={['point 1, point2']}
			/>
		);
	});
});
