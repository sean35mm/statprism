// module.exports = {
// 	reactStrictMode: true,
// 	images: {
// 		domains: ['bing.com'],
// 		remotePatterns: [
// 			{
// 				protocol: 'https',
// 				hostname: 'bing.com',
// 				port: '',
// 				pathname: ''
// 			}
// 		]
// 	}
// };

module.exports = async (phase, { defaultConfig }) => {
	/**
	 * @type {import('next').NextConfig}
	 */
	const nextConfig = {
		reactStrictMode: true,
		images: {
			domains: ['bing.com', 'www.bing.com', 'static.coinpaprika.com'],
			remotePatterns: [
				{
					protocol: 'https',
					hostname: 'www.bing.com',
					port: '',
					pathname: '/**'
				}
			]
		}
	};
	return nextConfig;
};
