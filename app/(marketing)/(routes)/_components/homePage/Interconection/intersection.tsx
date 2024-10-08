"use client";

import Image from "next/image";
import "../../style/intersection.css";

import { AVATAR_IMAGE_URLS, FLAGS_IMAGE_URLS } from "@/app/(marketing)/(routes)/_components/homePage/Interconection/constant";
import { cn } from "@/lib/utils";
import { Inter, Poppins } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { HomePageAvatar } from "../_components/homepageavatar";
import { HomePageAvatarDot } from "../_components/homepageavatardot";

const font = Poppins({
	subsets: ["latin"],
	weight: ["700"],
});

const inter = Inter({
	subsets: ["latin"],
	weight: ["400"],
});

const useScreen = () => {
	const [isLargeScreen, setIsLargeScreen] = useState(false);
	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth > 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return { isLargeScreen };
};

export const InterSection = () => {
	const imageRef = useRef<HTMLDivElement>(null);
	const { isLargeScreen } = useScreen();
	const [shouldAnimate, setShouldAnimate] = useState(false);

	useEffect(() => {
		const currentImage = imageRef.current;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setShouldAnimate(true);
					}
				});
			},
			{ threshold: 0.5 }
		);
		if (currentImage) {
			observer.observe(currentImage);
		}
		return () => {
			if (currentImage) {
				observer.unobserve(currentImage);
			}
		};
	}, []);

	return (
		<div className="section-wrapper z-0" ref={imageRef}>
			<div
				className={cn(
					`animate-container w-full flex items-center h-[40.625rem] justify-center overflow-x-hidden break-out relative`,
					shouldAnimate ? "animate" : ""
				)}
			>
				<Image
					sizes="(min-width: 640px) 50vw, 100vw"
					src={
						"https://a.hwstatic.com/image/upload/f_auto/v1645010222/pwa/whosgoing/los-patios-card_png.jpg"
					}
					alt="Connect with travellers"
					className="card"
					width={289}
					height={328}
					loading="lazy"
				/>
				<div>
					<HomePageAvatar
						imgUrl={AVATAR_IMAGE_URLS.mike}
						flagImgUrl={FLAGS_IMAGE_URLS.usa}
						size={72}
						flagPosition={2}
						borderColor="aqua"
						className="avatar-usa rounded-full"
						alt="Mike"
					/>
					<HomePageAvatar
						imgUrl={AVATAR_IMAGE_URLS.anna}
						flagImgUrl={FLAGS_IMAGE_URLS.poland}
						size={64}
						flagPosition={4}
						borderColor="green"
						className="avatar-poland  rounded-full"
						alt="Anna"
					/>
					<HomePageAvatar
						imgUrl={AVATAR_IMAGE_URLS.eve}
						flagImgUrl={FLAGS_IMAGE_URLS.ireland}
						size={108}
						flagPosition={isLargeScreen ? 4 : 8}
						borderColor="blue"
						className="avatar-ireland  rounded-full"
						alt="Eve"
					/>
					<HomePageAvatar
						imgUrl={AVATAR_IMAGE_URLS.luiza}
						flagImgUrl={FLAGS_IMAGE_URLS.brazil}
						size={isLargeScreen ? 168 : 89}
						flagPosition={isLargeScreen ? 14 : 0}
						borderColor="blue"
						className="avatar-brazil  rounded-full"
						alt="Luiza"
					/>
					<HomePageAvatar
						imgUrl={AVATAR_IMAGE_URLS.jenny}
						flagImgUrl={FLAGS_IMAGE_URLS.germany}
						size={isLargeScreen ? 120 : 48}
						flagPosition={isLargeScreen ? 8 : -4}
						borderColor="violet"
						className="avatar-germany  rounded-full"
						alt="Jenny"
					/>
					<HomePageAvatar
						imgUrl={AVATAR_IMAGE_URLS.laura}
						flagImgUrl={FLAGS_IMAGE_URLS.portugal}
						size={isLargeScreen ? 72 : 48}
						flagPosition={0}
						borderColor="yellow"
						className="avatar-portugal  rounded-full"
						alt="Laura"
					/>
					<HomePageAvatar
						imgUrl={AVATAR_IMAGE_URLS.luka}
						flagImgUrl={FLAGS_IMAGE_URLS.italy}
						size={80}
						flagPosition={0}
						borderColor="orange"
						className="avatar-italy  rounded-full"
						alt="Luka"
					/>
					<HomePageAvatar
						imgUrl={AVATAR_IMAGE_URLS.pan}
						flagImgUrl={FLAGS_IMAGE_URLS.china}
						size={isLargeScreen ? 156 : 116}
						flagPosition={isLargeScreen ? 18 : 0}
						borderColor="orange"
						className="avatar-china  rounded-full"
						alt="Pan"
					/>
					<HomePageAvatar
						imgUrl={AVATAR_IMAGE_URLS.pierre}
						flagImgUrl={FLAGS_IMAGE_URLS.france}
						size={isLargeScreen ? 80 : 64}
						flagPosition={0}
						borderColor="pink"
						className="avatar-france  rounded-full"
						alt="Pierre"
					/>
					<HomePageAvatar
						imgUrl={AVATAR_IMAGE_URLS.tom}
						flagImgUrl={FLAGS_IMAGE_URLS.southKorea}
						size={isLargeScreen ? 128 : 86}
						flagPosition={isLargeScreen ? 8 : 0}
						borderColor="pink"
						className="avatar-korea  rounded-full"
						alt="Tom"
					/>
					<HomePageAvatar
						imgUrl={AVATAR_IMAGE_URLS.victoria}
						flagImgUrl={FLAGS_IMAGE_URLS.spain}
						size={isLargeScreen ? 96 : 72}
						flagPosition={0}
						borderColor="aqua"
						className="avatar-spain  rounded-full"
						alt="Victoria"
					/>

					<HomePageAvatarDot
						size={12}
						fill={false}
						color="pink"
						className="dot-1 "
					/>
					<HomePageAvatarDot
						size={12}
						fill={false}
						color="violet"
						className="dot-2 "
					/>
					<HomePageAvatarDot size={10} color="green" className="dot-3" />
					<HomePageAvatarDot size={10} color="pink" className="dot-4 " />
					<HomePageAvatarDot size={20} color="orange" className="dot-5" />
					<HomePageAvatarDot size={20} color="red" className="dot-6" />
					<HomePageAvatarDot
						size={16}
						fill={false}
						color="aqua"
						className="dot-7"
					/>
					<HomePageAvatarDot size={16} color="aqua" className="dot-8" />
					<HomePageAvatarDot
						size={16}
						fill={false}
						color="violet"
						className="dot-9"
					/>
					<HomePageAvatarDot size={16} color="yellow" className="dot-10" />
					<HomePageAvatarDot size={18} color="yellow" className="dot-11" />
				</div>
			</div>
			<div className="flex flex-col items-center mt:[-3.125rem] text-center px-4 text-white">
				<h2
					className={cn(
						"font-medium sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl  hyphens-auto ",
						font.className
					)}
				>
					See <span className="text-[#f6a90e]">who&apos;s</span> going to hostel
				</h2>
				<p
					className={cn(
						"my-2 sm:text-xs md:text-sm lg:text-xl xl:text-2xl",
						inter.className
					)}
				>
					Connect with other travellers staying in the same hostel or city as
					you.
				</p>
			</div>
		</div>
	);
};
