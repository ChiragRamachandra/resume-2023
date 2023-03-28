/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			'images.unsplash.com',
			'randomuser.me',
			'unsplash.com',
			'gravatar.com',
			'1.gravatar.com',
		],
	},
};

module.exports = nextConfig;
