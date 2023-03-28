import { Project } from 'types';

const getProjectData = (): Project[] => {
	return [
		{
			id: 1,
			name: 'Owner and Tenant',
			imageURL: '/images/projects/oat.png',
			projectURL: 'https://www.ownerandtenant.com/',
			summary:
				'I led a team of developers and collaborated with cross-functional stakeholders to build a state-of-the-art real estate and property management platform called Owner & Tenant. With a complete tech stack and architecture, including Python, JavaScript, Node, and CSS, the platform served over 50K users and rapidly scaled.',
		},
		{
			id: 2,
			name: 'The Vintage',
			imageURL: '/images/projects/vintage.png',
			projectURL: 'https://www.thevintageckm.com/',
			summary:
				'I developed a dynamic and interactive website for The Vintage, a boutique luxury homestay, resulting in a 60% boost in sales through increased online presence, high traffic, page views, and reservations.',
		},
		{
			id: 3,
			name: 'Rainy',
			imageURL: '/images/projects/rainy.png',
			projectURL: 'https://www.rainyfilter.com/',
			summary:
				'I, as the sole developer, I built a website from end-to-end for a Rainwater Harvesting Company, with a dedicated focus on user experience. The front-end experience included dedicated product pages and rich imagery, resulting in an engaging platform for visitors.',
		},
		{
			id: 4,
			name: 'Raman Sports Academy',
			imageURL: '/images/projects/ramansports.png',
			projectURL: 'https://www.ramansportsacademy.com/',
			summary:
				"I created a simple yet effective website for a sporting academy that aimed to educate customers on various courses offered and methods to sign up. The website successfully showcased the academy's offerings, resulting in increased customer engagement and sign-ups.",
		},
		{
			id: 5,
			name: 'Consult Aspire',
			imageURL: '/images/projects/consultaspire.png',
			projectURL: 'https://consultaspire.com/',
			summary:
				'My end-to-end development of a website for a boutique consulting firm, specializing in helping students achieve their dreams of studying abroad, included a special focus on writing services. This resulted in increased customer engagement, driving more consult bookings and revenue growth of 40%.',
		},
	];
};

export default getProjectData;
