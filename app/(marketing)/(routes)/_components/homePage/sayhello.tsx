"use client";

import { cn } from "@/lib/utils";
import "../style/sayhello.css";

import { Inter, Poppins } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


const font = Poppins({
	subsets: ["latin"],
	weight: ["800"],
});

const inter = Inter({
	subsets: ["latin"],
	weight: ["400"],
});

export const Sayhello = () => {
    const timer = useRef<ReturnType<typeof setInterval> | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev === 2? 0 : prev + 1));
    }

    const forceStepSlection = (index: number) => {
        if (timer.current) {
            clearInterval(timer.current);
        
        }
        setCurrentIndex(index);
    }

    const startSlides = () => {
        timer.current = setInterval(() => {
            next();
        }, 4000);
    }

    useEffect(() => {
        startSlides();
        return () => {
            if (timer.current) {
                clearInterval(timer.current);
            }
        }
    });
	return (
		<section className="overflow-x-hidden my-16 mb-16 say-hello-section">
			<div className="relative flex flex-col justify-center items-center mr-0 say-hello-wrapper">
				<div className="relative flex my-0 mx-auto min-w-[26.25rem] say-hello-container">
					<div className="flex-1 ml-1 mt-4 p-0 say-hello-heading">
						<h2
							className={cn(
								"sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl mt-12 mb-15 sh-heading-title",
								font.className
							)}
						>
							Say <span className="text-[#7f32cd]">Hello</span>
							(before you go!)
						</h2>
						<p className={cn("text-xl sh-heading-subtitle", inter.className)}>
							Plan a meal with new friends, or gather a crew for a game of beach
							volleyball!
						</p>
					</div>
					<div className="h-[30rem] mt-12 ml-6 w-[17.5rem] sh-chat-windows">
						<Image
							src="https://a.hwstatic.com/image/upload/f_auto,h_656,w_375,q_50/v1645433308/pwa/chat/chat-hostel.png"
							alt="chat hostel"
							width={375}
							height={656}
							loading="lazy"
							className={`sh-chat-window ${
								currentIndex === 0 ? "step-ative" : ""
							}`}
						/>
						<Image
							src="https://a.hwstatic.com/image/upload/f_auto,h_656,w_375,q_50/v1645433308/pwa/chat/chat-direct.png"
							alt="chat direct"
							width={375}
							height={656}
							loading="lazy"
							className={`sh-chat-window${
								currentIndex === 2 ? "step-ative" : ""
							}`}
						/>
						<Image
							src="https://a.hwstatic.com/image/upload/f_auto,h_656,w_375,q_50/v1645433308/pwa/chat/chat-city.png"
							alt="chat city"
							width={375}
							height={656}
							loading="lazy"
							className={`sh-chat-window${
								currentIndex === 1 ? "step-ative" : ""
							}`}
						/>
					</div>
					<Image
						src="https://a.hwstatic.com/image/upload/f_auto,h_226,w_370,q_50/v1644506518/pwa/chat/chat-image-1-sm.jpg"
						alt="chat image 1 s"
						width={370}
						height={226}
						loading="lazy"
						className="sh-chat-image small"
					/>
					<Image
						src="https://a.hwstatic.com/image/upload/f_auto,h_480,w_320,q_50/v1644506520/pwa/chat/chat-image-1.jpg"
						alt="chat image"
						width={320}
						height={480}
						loading="lazy"
						className={` sh-chat-image large top-left step-active-${currentIndex}`}
					/>
					<Image
						src="https://a.hwstatic.com/image/upload/f_auto,h_480,w_320,q_50/v1644506518/pwa/chat/chat-image-2.jpg"
						alt="chat image 2"
						width={320}
						height={480}
						loading="lazy"
						className={`sh-chat-image large bottom-right step-active-${currentIndex}`}
					/>
					<div className=" sh-steps-wrapper">
						<Image
							src="/image/dashed-circle.svg"
							alt="dashed circle"
							width={33}
							height={33}
							loading="lazy"
							className={`dashed-circle step-${currentIndex + 1} `}
						/>
						<div
							className={`step ${currentIndex === 0 ? "active" : ""}`}
							onClick={() => forceStepSlection(0)}
						>
							Hostel Chat
						</div>
						<div
							className={`step ${currentIndex === 1 ? "active" : ""}`}
							onClick={() => forceStepSlection(1)}
						>
							Direct Message
						</div>
						<div
							className={`step ${currentIndex === 2 ? "active" : ""}`}
							onClick={() => forceStepSlection(2)}
						>
							Homestel Chat
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
