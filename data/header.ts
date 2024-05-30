import { Socials } from 'types';

const getSocialsData = (): Socials[] => {
	return [
		{
			id: 1,
			isOpenNewPage: true,
			url: 'https://twitter.com/ChiragRamchndra',
		},
		{
			id: 2,
			isOpenNewPage: true,
			url: 'https://github.com/ChiragRamachandra',
		},
		{
			id: 3,
			isOpenNewPage: true,
			url: 'https://www.linkedin.com/in/chiragram/',
		},
		{
			id: 4,
			isOpenNewPage: true,
			url: 'https://www.instagram.com/startdev_org',
		},
	];
};

export default getSocialsData;
