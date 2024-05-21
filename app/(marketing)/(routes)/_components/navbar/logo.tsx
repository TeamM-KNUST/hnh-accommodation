"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
	const router = useRouter();
	return (
		<div className="flex items-center justify-center  gap-2  ">
			<Image
				src="/logo.png"
				alt="logo"
				width={50}
				height={50}
				className="hidden md:block cursor-pointer"
				onClick={() => router.push("/")}
			/>
			<h2 className="text-3xl text-blue-700 hidden md:block">Accomodation</h2>
		</div>
	);
};
