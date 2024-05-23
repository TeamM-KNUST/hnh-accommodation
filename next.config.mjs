/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "a.hwstatic.com",
			}
		]
	},
};

export default nextConfig;
