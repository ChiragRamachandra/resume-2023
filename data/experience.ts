import { Experience } from 'types';

const getExperienceData = (): Experience[] => {
	return [
		{
			id: 1,
			imageUrl: '/images/experience/getty_logo.jpeg',
			title: 'Senior Software Engineer',
			company: 'Getty Images',
			technologyImages: [
				'/images/technology/ts_logo.png',
				'/images/technology/cypress_logo.png',
				'/images/technology/react_logo.png',
				'/images/technology/html_logo.png',
				'/images/technology/css_logo.png',
			],
			startDate: 'May 2022',
			endDate: 'Till Date',
			experienceBulletPoint: [
				'Leading the end to end customer experience track',
				'worked on migration from google UA to GA4',
			],
		},
		{
			id: 2,
			imageUrl: '/images/experience/collegepass_logo.png',
			title: 'Principal Tech Architect',
			company: 'CollegePass',
			technologyImages: [
				'/images/technology/ts_logo.png',
				'/images/technology/cypress_logo.png',
				'/images/technology/mysql_logo.png',
				'/images/technology/aws_logo.jpeg',
			],
			startDate: 'March 2018',
			endDate: 'March 2022',
			experienceBulletPoint: [
				'Leading the technical vision, strategy and architecture that ensures business requirements are met and includes scalability',
				'Responsible for complete technology stack, including prototype, build, deployment and testing of CollegePass Technology Solutions, which is an Ed Tech Start Up (https://www.collegepass.org/)',
				'Designed and developed user-friendly website, including optimized video platform integration using LAMP, MERN & Python, continue to optimize website by applying enhancements to improve functionality and speed and generated increase of 30% jump in subscriber base month over month',
			],
		},
		{
			id: 3,
			imageUrl: '/images/experience/accenture_logo.jpeg',
			title: 'Software Engineering Analyst',
			company: 'Accenture',
			technologyImages: [
				'/images/technology/html_logo.png',
				'/images/technology/react_logo.png',
				'/images/technology/mysql_logo.png',
				'/images/technology/mongodb_logo.png',
			],
			startDate: 'Oct 2016',
			endDate: 'March 2018',
			experienceBulletPoint: [
				'Customer Experience (CeP) improvement: Built a new portal for end users to view the account, billing and other relevant details',
				'Code Deployment to production environment and Post production PRISM support',
				'Preparing/ Updating of HLD, LLD and SSD’s with UAT and other project documentation',
				'Involved in Requirements gathering, tracking daily activities, providing work assignment, delegation of work, mentor new joiners and other updates',
			],
		},
		{
			id: 4,
			imageUrl: '/images/experience/tcs_logo.jpeg',
			title: 'System Engineer',
			company: 'Tata Consultancy Services',
			technologyImages: [
				'/images/technology/html_logo.png',
				'/images/technology/css_logo.png',
				'/images/technology/react_logo.png',
				'/images/technology/mysql_logo.png',
			],
			startDate: 'March 2014',
			endDate: 'Oct 2016',
			experienceBulletPoint: [
				'Implemented Merchant Account Maintenance aimed at providing a single stop solution for retrieving all details relevant to a given chain, merchant or store',
				'Worked on Self Registration feature, which enables the merchants of the client (Vantiv) to set up their shop by enabling them to create their organization and multiple users',
				'Preparing/ Updating of HLD, LLD and SSD’s with UAT and other project documentation',
				'Exercised Operational skills in estimation, requirement analysis, delivery and deployment and end user training',
			],
		},
	];
};

export default getExperienceData;
