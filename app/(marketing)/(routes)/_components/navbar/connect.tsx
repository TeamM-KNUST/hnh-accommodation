import Image from "next/image";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600", "700", "800"],
});

export const Connect = () => {
	return (
		<div className=" relative md:flex flex-col  max-w-[90rem] mx-auto xl:px-12 md:px-8 sm:px-2 px-4 items-center justify-center mb-16 m-auto ">
			<Image
				src={
					"https://a.hwstatic.com/image/upload/f_auto,h_568,q_50/v1644922394/pwa/new/The_Spindrift_Hostel-img.jpg"
				}
				alt="hostel"
				className="h-auto max-w-full object-cover "
				height={568}
				width={504}
			/>
			<div className="flex flex-col items-center justify-center">
				<p className={cn("text-sm md:text-lg lg:text-2xl xl:text-3xl mt-8 mb-1", font.className)}>
					This is the <span className="text-[#cc0074]">NEW</span> Hostelworld.
				</p>
				<h2
					className={cn(
						"font-medium sm:text-2xl md:text-3xl lg:4xl xl:text-5xl text-center hyphens-auto",
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
