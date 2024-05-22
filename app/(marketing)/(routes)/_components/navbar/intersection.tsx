"use client";
import Image from "next/image";
import "../style/intersection.css";

import { cn } from "@/lib/utils";
import { Inter, Poppins } from "next/font/google";
import { useEffect, useRef } from "react";
import { AVATAR_IMAGE_URLS, FLAGS_IMAGE_URLS } from "@/data/constant";
import { HomePageAvatar } from "../homePage/homepageavatar";

const font = Poppins({
	subsets: ["latin"],
	weight: ["600", "700", "800"],
});

const inter = Inter({
	subsets: ["latin"],
	weight: ["800"],
});

export const InterSection = () => {
	const imageRef = useRef<HTMLImageElement>(null);
	useEffect(() => {
		const currentImageRef = imageRef.current;
		if (currentImageRef) {
			imageRef.current.style.animation = " rotate 10s linear";
		}
		return () => {
			if (currentImageRef) {
				currentImageRef.style.animation = "";
			}
		};
	}, []);

	return (
		<div className="section-wrapper">
			<div className="relatve w-full flex items-center h-[40.625rem] justify-center overflow-x-hidden break-out">
				<Image
                    ref={imageRef}
                    sizes="(min-width: 640px) 50vw, 100vw"
					src={
						"https://a.hwstatic.com/image/upload/f_auto/v1645010222/pwa/whosgoing/los-patios-card_png.jpg"
					}
					alt="Connect with travellers"
					width={289}
					height={328}
					loading="lazy"
                />
                <div>
                    <HomePageAvatar 
                        imgUrl={AVATAR_IMAGE_URLS["mike"]}
                        flagImgUrl={FLAGS_IMAGE_URLS["usa"]}
                        size={24}
                        flagPosition={3}
                        borerColor="aqua"
                        className="w-16 h-16 avatar-usa"
                        alt="Mike"
                    />

                    <HomePageAvatar
                        imgUrl={AVATAR_IMAGE_URLS["nathan"]}
                        flagImgUrl={FLAGS_IMAGE_URLS["china"]}
                        size={24}
                        flagPosition={3}
                        borerColor="orange"
                        className="w-16 h-16 avatar-china"
                        alt="Pan"
                    />

                    <HomePageAvatar
                        imgUrl={AVATAR_IMAGE_URLS["pan"]}
                        flagImgUrl={FLAGS_IMAGE_URLS["poland"]}
                        size={24}
                        flagPosition={3}
                        borerColor="red"
                        className="w-16 h-16 avatar-poland"
                        alt="Pan"
                    />

                    <HomePageAvatar
                        imgUrl={AVATAR_IMAGE_URLS["tom"]}
                        flagImgUrl={FLAGS_IMAGE_URLS["brazil"]}
                        size={24}
                        flagPosition={3}
                        borerColor="red"
                        className="w-16 h-16 avatar-poland"
                        alt="Pan"
                    />





                </div>
			</div>
			<div className="flex flex-col items-center mt:[-3.125rem] text-center px-4 text-white">
				<h2
					className={cn(
						"sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl",
						font.className
					)}
				>
					See <span className="text-[#f6a90e]">who&apos;s</span> going to hostel
				</h2>
				<p
					className={cn(
						"my-2 sm:text-2xl md:text-3xl lg:text-4xl xl:text-xl",
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
