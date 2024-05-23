import { Project } from 'types';

const getProjectData = (): Project[] => {
	return [
		{
			id: 1,
			name: 'Owner and Tenant',
			imageURL: '/images/projects/oat.png',
			projectURL: 'https://www.ownerandtenant.com/',
			summary:
				'I led a team of developers to create a cutting-edge real estate and property management platform called Owner & Tenant. Collaborating with cross-functional stakeholders, we built the platform using a comprehensive tech stack and architecture, including Python, JavaScript, Node, and CSS. As a result, the platform successfully served over 50,000 users and scaled rapidly.',
		},
		{
			id: 2,
			name: 'The Vintage',
			imageURL: '/images/projects/vintage.png',
			projectURL: 'https://www.thevintageckm.com/',
			summary:
				"I developed a dynamic and interactive website for The Vintage, a boutique luxury homestay. This project significantly boosted the business's online presence, leading to a 60% increase in sales through higher traffic, more page views, and increased reservations.",
		},
		{
			id: 3,
			name: 'Rainy',
			imageURL: '/images/projects/rainy.png',
			projectURL: 'https://www.rainyfilters.com/',
			summary:
				'As the sole developer, I built an end-to-end website for a Rainwater Harvesting Company. With a strong focus on user experience, the front-end featured dedicated product pages and rich imagery. This resulted in an engaging platform for visitors.',
		},
		{
			id: 4,
			name: 'Raman Sports Academy',
			imageURL: '/images/projects/ramansports.png',
			projectURL: 'https://www.ramansportsacademy.com/',
			summary:
				"I created a simple yet effective website for a sporting academy, aimed at educating customers on various courses offered and methods to sign up. The website successfully showcased the academy's offerings, resulting in increased customer engagement and sign-ups.",
		},
		{
			id: 5,
			name: 'Consult Aspire',
			imageURL: '/images/projects/consultaspire.png',
			projectURL: 'https://consultaspire.com/',
			summary:
				'I developed an end-to-end website for a boutique consulting firm specializing in helping students achieve their dreams of studying abroad. With a special focus on writing services, the website increased customer engagement, driving more consult bookings and achieving a 40% revenue growth.',
		},
	];
};

export default getProjectData;
