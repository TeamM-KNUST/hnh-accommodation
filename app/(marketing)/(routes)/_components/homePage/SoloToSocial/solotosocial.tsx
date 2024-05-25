"use client";

import { useState } from "react";
import { CardsCarousel } from "../_components/cardsCarousel";
import { CARD_ITEMS } from "./constant";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import "../../style/connect.css";

const font = Poppins({
	subsets: ["latin"],
	weight: ["700"],
});

export const SoloToSocial = () => {
	const [items, setItems] = useState(CARD_ITEMS);

	const filterItems = items.slice(0, 3);
	return (
		<section className="py-16 h-[41.25rem] mb-0 ml-[(cal50%-800px)] w-[(cal50%-800px)] flex">
			<CardsCarousel />
			<div className="relative flex flex-col m-auto px-8 max-w-[40rem]">
				<header className={cn( "font-medium sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl  hyphens-auto lg:mt-4 lg:mb-4 h2", font.className)}>
					Go from
					<span className="text-[#00e0ce]"> solo to social</span>, in just a few
					taps!
				</header>
				<p className="py-4 m-0 relative block text-xl">Join Linkups to explore and hang out with travellers.</p>
			</div>
		</section>
	);
};
