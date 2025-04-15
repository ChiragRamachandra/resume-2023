import { Project } from 'types';

const getProjectData = (): Project[] => {
	return [
		{
			id: 0,
			name: 'CollegePass',
			imageURL: '/images/projects/collegepass.png',
			projectURL: 'https://www.collegepass.org/',
			summary:
				'As a co-founder and Head of Technology at CollegePass, I architected and built the entire platform from ground up, scaling it to serve 60,000+ students. Built with a JavaScript-centric stack for rapid team scaling, complemented by Python for ML models. Key achievements include: (1) Established complete digital presence including AWS infrastructure setup and SEO optimization (2) Developed a comprehensive internal dashboard for business analytics and user management (3) Engineered a scalable video platform integrating Zoom for webinars and classes, with automated recording and archiving (4) Created an advanced testing platform for SAT/ACT preparation with automated scoring and personalized improvement plans (5) Built a student management system featuring college shortlisting, admission chance prediction, and SOP/Essay review workflows. Successfully grew the tech team to 6 members, implementing agile methodologies and establishing coding standards. The platform became a one-stop solution for international college admissions, significantly improving student success rates.',
		},
		{
			id: 1,
			name: 'The Vintage',
			imageURL: '/images/projects/vintage.png',
			projectURL: 'https://www.thevintageckm.com/',
			summary:
				"I developed a dynamic and interactive website for The Vintage, a boutique luxury homestay in Chikmagalur, Karnataka. I created a responsive design that showcases the property's unique features through immersive imagery and smooth animations. Implemented a custom booking system and integrated payment gateways. The project significantly boosted the business's online presence, leading to a 60% increase in sales through higher traffic, more page views, and increased reservations. Key achievements include reducing page load time by 40% through image optimization and implementing SEO best practices that improved search rankings by 70%.",
		},
		{
			id: 2,
			name: 'Rainy',
			imageURL: '/images/projects/rainy.png',
			projectURL: 'https://www.rainyfilters.com/',
			summary:
				'As the sole developer, I built an end-to-end website for Rainy, a leading Rainwater Harvesting Company. Leveraging NextJS and Lambda serverless architecture, I developed a comprehensive platform featuring an interactive product catalog, detailed installation guides, and a custom calculator for rainwater harvesting potential. The front-end showcased dedicated product pages with rich imagery and 3D models, while the backend handled complex calculations and user data management. Implemented a responsive design that works seamlessly across all devices, resulting in a 45% increase in mobile engagement. The platform also features a blog section for educational content, contributing to a 30% increase in organic traffic.',
		},
		{
			id: 3,
			name: 'Owner and Tenant',
			imageURL: '/images/projects/oat.png',
			projectURL: 'https://www.ownerandtenant.com/',
			summary:
				'I led a team of developers to create Owner & Tenant, a cutting-edge real estate and property management platform. Built with NextJS and expressJS for the backend. The real deal is the custom CRM that is behind an authentication system. Implemented specific onboarding flows, automated rent collection, and maintenance request tracking. The platform features an ML based recommendation system for property matching and automated document verification. Collaborated with cross-functional stakeholders to deliver features that reduced property management overhead by 60%.',
		},
		{
			id: 4,
			name: 'Raman Sports',
			imageURL: '/images/projects/ramansports.png',
			projectURL: 'https://ramansportsacademy.vercel.app/',
			summary:
				"I created a simple yet effective website for a sporting academy, aimed at educating customers on various courses offered and methods to sign up. The business did not have an online presence earlier and I was able to help them get a new customer base. The website successfully showcased the academy's offerings, resulting in increased customer engagement and sign-ups.",
		},
	];
};

export default getProjectData;
