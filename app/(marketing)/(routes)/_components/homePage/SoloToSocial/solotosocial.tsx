"use client";

import { useState } from "react";
import { CardsCarousel } from "../_components/cardsCarousel";
import { CARD_ITEMS } from "./constant";

export const SoloToSocial = () => {
	const [items, setItems] = useState(CARD_ITEMS);

	const filterItems = items.slice(0, 3);
	return (
		<section className="py-16">
			<CardsCarousel />
		</section>
	);
};
