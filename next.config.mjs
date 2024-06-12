/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
        
				hostname: 'res.cloudinary.com',
        
			},
			{
				hostname: "a.hwstatic.com"
				
						 }			 
		]
	},
};

export default nextConfig;
