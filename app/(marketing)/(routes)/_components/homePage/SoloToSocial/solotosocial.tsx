"use client";

import { CardsCarousel } from "../_components/cardsCarousel";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import "../../style/connect.css";

const font = Poppins({
	subsets: ["latin"],
	weight: ["700"],
});

export const SoloToSocial = () => {
	return (
		<section className="py-16 h-[41.25rem] mb-0  flex flex-col lg:flex-row max-w-[1600px] mx-auto xl:pl-32 md:pl-10 sm:pl-2">
			<CardsCarousel />
			<div className="relative flex items-center justify-center flex-col m-auto px-8 max-w-[40rem]">
				<header
					className={cn(
						"font-medium sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl  hyphens-auto lg:mt-4 lg:mb-4 h3",
						font.className
					)}
				>
					Go from
					<span className="text-[#00e0ce]"> solo to social</span>, in just a few
					taps!
				</header>
				<p className="py-4 m-0 relative block text-xl">
					Join Linkups to explore and hang out with travellers.
				</p>
			</div>
		</section>
	);
};
