"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import "../style/connect.css";

const font = Poppins({
	subsets: ["latin"],
	weight: [ "800"],
});

export const Connect = () => {
	const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
	const getImageUrl = useMemo(() => {
		return isSmallScreen
			? "https://a.hwstatic.com/image/upload/f_auto,h_400,q_50/v1644922394/pwa/new/The_Spindrift_Hostel-img-sm.jpg"
			: "https://a.hwstatic.com/image/upload/f_auto,h_568,q_50/v1644922394/pwa/new/The_Spindrift_Hostel-img.jpg";
	}, [isSmallScreen]);
	return (
		<div className=" relative w-full flex flex-col lg:flex-row max-w-[1600px] mx-auto xl:pl-28 md:pl-10 sm:pl-2">
			<Image
				src={getImageUrl}
				alt="hostel"
				className="block mx-auto object-contain  max-h-[568px] w-[305px] tablet-large:w-[375px] lg:order-2 lg:max-h-[568px] lg:w-[568px] lg:m-0"
				height={568}
				width={504}
			/>
			<div className="flex flex-col items-center justify-center lg:items-start pt-3">
				<p
					className={cn(
						"text-sm md:text-lg lg:text-xl xl:text-2xl mb-2 lg:mt-8 lg:mb-4 font-bold",
						font.className
					)}
				>
					This is the <span className="text-[#cc0074]">NEW</span> Hostelworld.
				</p>
				<h2
					className={cn(
						"font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center hyphens-auto lg:text-left lg:mt-4 lg:mb-8 h2",
						font.className
					)}
				>
					Helping you
					<span className="text-[#cc0074]"> connect with travellers </span> .
					Even <span className="text-[#cc0074]">before</span> you get to your
					hostel.
				</h2>
			</div>
		</div>
	);
};
