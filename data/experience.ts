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
				'As a Senior Software Engineer at Getty Images, I lead the end-to-end customer experience track, ensuring that every aspect of our customers interactions with our products is seamless and enjoyable. In addition, I have successfully managed the migration from Google Universal Analytics to GA4, allowing us to better track user behavior and provide valuable insights for continued improvements.',
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
				'As the Principal Tech Architect at CollegePass, I led the development of a user-friendly website by integrating video platforms using LAMP, MERN, and Python. I was responsible for the complete technology stack, and among other things my efforts resulted in a 30% monthly increase in subscribers, demonstrating my ability to design and execute a technical vision and strategy that meets business requirements and includes scalability',
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
				'As a Software Engineer at Accenture, I successfully executed several critical projects. I led the implementation of Legacy Migration for United Utilities, migrating the WM codebase from version 8.0 to version 9.8 while ensuring compliance with SOA principles. I also improved Customer Experience by developing a new portal for end-users to access their accounts and billing details.',
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
				'During my time as a Systems Engineer at TCS, I was instrumental in implementing several key APIs aimed at streamlining business processes. I developed a Merchant Account Maintenance API that provided a centralized solution. I also played an essential role in code deployment, post-production support, and exercising operational skills in estimation, requirement analysis, delivery, and end-user training.',
			],
		},
	];
};

export default getExperienceData;
