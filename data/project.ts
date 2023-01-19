import { Project } from 'types';

const getProjectData = (): Project[] => {
	return [
		{
			id: 1,
			name: 'Owner and Tenant',
			imageURL: '/images/projects/oat.png',
			projectURL: 'https://www.ownerandtenant.com/',
			summary:
				'(360-degree real estate & property management platform). Solely responsible for the complete tech stack and architecture (Python, JavaScript, Node, CSS), enabling 50k usersand scaling rapidly. Led the technology team (4 developers, 1 designer) and closely collaborated with cross-functional stakeholders to build products with state-of-the-art front end and scalable backend.',
		},
		{
			id: 2,
			name: 'Vintage',
			imageURL: '/images/projects/vintage.png',
			projectURL: 'https://www.thevintageckm.com/',
			summary:
				'Developed dynamic and interactive website that ensured high traffic, page views and reservations for a boutique luxury homestay called The Vintage, online presence boosted sales by 60% (2020)',
		},
		{
			id: 3,
			name: 'Rainy',
			imageURL: '/images/projects/rainy.png',
			projectURL: 'https://www.rainyfilter.com/',
			summary: '',
		},
		{
			id: 4,
			name: 'Raman Sports',
			imageURL: '/images/projects/ramansports.png',
			projectURL: 'https://www.ramansportsacademy.com/',
			summary: '',
		},
		{
			id: 5,
			name: 'Consult Aspire',
			imageURL: '/images/projects/consultaspire.png',
			projectURL: 'https://consultaspire.com/',
			summary: '',
		},
	];
};

export default getProjectData;
