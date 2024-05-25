"use client";

import { useEffect, useRef, useState } from "react";
import { CARD_ITEMS } from "../SoloToSocial/constant";
import { CommunityCards } from "./communityCard";
import { HomePageAvatar } from "./homepageavatar";

export const CardsCarousel = () => {
	const [isCarouselVisible, setIsCarouselVisible] = useState(false);
	const [items, setItems] = useState(CARD_ITEMS);
	const sectionRef = useRef<HTMLDivElement | null>(null);

	let animationInterval: NodeJS.Timeout | null = null;
	let observer: IntersectionObserver | null = null;

	useEffect(() => {
		const currentSection = sectionRef.current;
		observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setIsCarouselVisible(true);
				runAnimation();
			} else if (!entries[0].isIntersecting && animationInterval) {
				clearInterval(animationInterval);
				animationInterval = null;
			}
		});

		if (currentSection) {
			observer.observe(currentSection);
		}

		return () => {
			if (observer && currentSection) {
				observer.unobserve(currentSection);
			}
			if (animationInterval) {
				clearInterval(animationInterval);
			}
		};
	}, []);

	 const filterItems = items.slice(0, 3);

    const getMiddleItemTitle = filterItems[1]?.title;

	const shitfPushItems = () => {
		const newItems = [...items];
		const shifted = newItems.shift();
		if (shifted) {
			setTimeout(() => {
				newItems.push(shifted);
				setItems(newItems);
			}, 400);
		}
	};

	const runAnimation = () => {
		animationInterval = setInterval(() => {
			shitfPushItems();
		}, 3000);
	};

	return (
		<div className="relative flex w-full justify-center mb-8 overflow-x-hidden h-[36.25rem]">
		
				<div className="flex items-center gap-x-2 ">	
					{filterItems.map((item, index) => (
						<CommunityCards
							key={item.title}
							title={item.title}
							name={item.name}
							frameUrl={item.frameUrl}
							avatarUrl={item.avatarUrl}
							location={item.location}
							time={item.time}
							participantsAvatarUrls={item.participantsAvatarUrls}
							participantsCount={item.participantsCount}
							className={index === 1 ? "middle" : ""}
						/>
					))}
				</div>
			
			<div className="absolute flex items-center max-w-[100vw] h-[6.375rem] md:top-[22.5rem] top-[27.5rem] md:gap-x-2 gap-x-6" >
				{filterItems.map((item, index) => (
					<div
						key={item.thumbnailUrl}
						className={`h-12 w-12 transition-all duration-300 ease-in-out${
							item.title === getMiddleItemTitle  && "h-[4.5rem] w-[4.5rem]" 
						}`}
					>
						<HomePageAvatar imgUrl={item.thumbnailUrl} size={48} alt="" />
						<span className="inline-block overflow-hidden w-full text-xs font-normal text-center whitespace-nowrap overflow-ellipsis tracking-[0.125rem]">{item.title}</span>
					</div>
				))}
			</div>
		</div>
	);
};
