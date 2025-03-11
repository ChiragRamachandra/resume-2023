const products = [
	{
		id: 1,
		title: 'StartDev',
		description:
			'An open-source learning platform helping developers kickstart their journey with free resources and curated content.',
		icon: 'https://www.startdev.org/android-chrome-512x512.png',
		url: 'https://www.startdev.org',
		productUrl: '/startdev',
	},
	// {
	// 	id: 2,
	// 	title: 'SplitsBill',
	// 	description:
	// 		'Simplify group expenses and bill splitting with our intuitive expense sharing solution.',
	// 	icon: '/icons/splitsbill-icon.png',
	// 	url: 'https://splitsbill.com',
	// },
	{
		id: 3,
		title: 'CodeFlowJam',
		description:
			'Enhance your coding workflow with our developer-focused productivity tools.',
		icon: '/icons/code-flow-jam.svg',
		url: 'https://www.codeflowjam.com',
		productUrl: '/codeflowjam',
	},
	{
		id: 4,
		title: 'Sales Tax Calculator',
		description:
			'Instantly calculate sales tax, income tax, or VAT with our user-friendly calculator app. Features include tip calculation and multiple tax options.',
		icon: '/icons/tax-calculator.png',
		stores: {
			apple: 'https://apps.apple.com/us/app/sales-tax-calculator/id6737439748',
			android:
				'https://play.google.com/store/apps/details?id=com.chiragramachandra.taxcalculator',
		},
		productUrl: '/salestaxcalculator',
	},
	{
		id: 5,
		title: 'JS Interview Prep',
		description:
			'A collection of resources and tools to help you prepare for your next JavaScript interview.',
		icon: 'https://www.jsinterview.tech/img/jsInterview.png',
		url: 'https://www.jsinterview.tech/',
		productUrl: '/jsinterview',
	},
];

export default products;
