/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "a.hwstatic.com",
				hostname: "res.cloudinary.com",
			}
		]
	},
};

export default nextConfig;
