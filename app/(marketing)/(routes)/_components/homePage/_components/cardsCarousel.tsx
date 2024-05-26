"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CARD_ITEMS } from "../SoloToSocial/constant";
import { CommunityCards } from "./communityCard";
import { HomePageAvatar } from "./homepageavatar";

export const CardsCarousel = () => {
	const [items, setItems] = useState(CARD_ITEMS);
	const [isCarouselVisible, setIsCarouselVisible] = useState(false);
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const animationInterval = useRef<NodeJS.Timeout | null>(null);
	const observer = useRef<IntersectionObserver | null>(null);

	const runAnimation = useCallback(() => {
		if (animationInterval.current) {
			clearInterval(animationInterval.current);
		}
		animationInterval.current = setInterval(() => {
			shiftPushItems();
		}, 4000);
	},[]);

	const shiftPushItems = useCallback(() => {
		setItems((prevItems) => {
			const newItems = [...prevItems];
			const shifted = newItems.shift();
			if (shifted) {
				setTimeout(() => {
					newItems.push(shifted);
					setItems(newItems);
				}, 300);
			}
			return newItems;
		});
	}, []);

	useEffect(() => {
		const currentSection = sectionRef.current;

		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setIsCarouselVisible(true);
				runAnimation();
			} else if (!entries[0].isIntersecting && animationInterval.current) {
				clearInterval(animationInterval.current);
				animationInterval.current = null;
			}
		});
		if (currentSection) {
			observer.current.observe(currentSection);
		}
		return () => {
			if (observer.current && currentSection) {
				observer.current.unobserve(currentSection);
			}
			if (animationInterval.current) {
				clearInterval(animationInterval.current);
			}
		};
	}, [runAnimation]);

	const filterItems = useMemo(() => items.slice(0, 3), [items]);
	const getMiddleItemTitle = useMemo(() => {
		if (filterItems.length === 3) {
			return filterItems[1].title;
		}
		return "";
	}, [filterItems]);

	return (
		<div
			className="relative flex w-full justify-center mb-8 overflow-x-hidden h-[39.25rem] "
			ref={sectionRef}
		>
			{isCarouselVisible && items && (
				<div className="flex items-center gap-x-2  lg:mb-24 mb-8  transition-all duration-300 ease-in-out">
					{filterItems.map((item, index) => (
						<CommunityCards
							key={index}
							title={item.title}
							name={item.name}
							frameUrl={item.frameUrl}
							avatarUrl={item.avatarUrl}
							location={item.location}
							time={item.time}
							participantsAvatarUrls={item.participantsAvatarUrls}
							participantsCount={item.participantsCount}
							className={ index === 1 ? "opacity-100 blur-0" : "opacity-50 blur-md "}
						
							
						/>
					))}
				</div>
			)}

			<div className="absolute flex items-center max-w-[100vw] h-[6.375rem]  top-[22.5rem] md:top-[22.5rem] gap-x-2 md:gap-x-6">
				{filterItems.map((item, index) => (
					<div
						key={item.thumbnailUrl}
						className={`h-12 w-12 transition-all duration-300 ease-in-out${
							item.title === getMiddleItemTitle
								? "w-[3rem] h-[3rem] transition-all duration-300 ease-in-out z-10 "
								: ""
						}`}
					>
						<HomePageAvatar imgUrl={item.thumbnailUrl} size={60} alt="" />
						<span className="inline-block overflow-hidden w-full text-xs font-normal text-center whitespace-nowrap overflow-ellipsis tracking-[0.125rem]">
							{item.title}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};
