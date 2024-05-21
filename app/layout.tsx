import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: `%s | ${siteConfig.name}`,
		default: siteConfig.name,
	},
	description: siteConfig.description,
	metadataBase: new URL(siteConfig.url),
	icons: [
		{
			url: "/logo.png",
			href: "/logo.png",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
