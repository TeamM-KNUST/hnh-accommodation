/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
        
				hostname: 'res.cloudinary.com',
        
			},
			{
				hostname: "a.hwstatic.com"
				
			},
			{
				hostname:"imgs.search.brave.com"
			},
			{
				hostname:"photos.google.com"
			}
		]
	},
};

export default nextConfig;
