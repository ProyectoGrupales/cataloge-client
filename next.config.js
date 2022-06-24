/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'images.pexels.com',
			'upload.wikimedia.org',
			'drifters.com.ar',
			'cdn-icons-png.flaticon.com',
		],
	},
};

module.exports = nextConfig;
