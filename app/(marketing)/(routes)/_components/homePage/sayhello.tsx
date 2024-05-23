import { cn } from "@/lib/utils";
import "../style/sayhello.css";


import { Poppins } from "next/font/google";

const font = Poppins({
    subsets: ["latin"],
    weight: ["800"],
});

export const Sayhello = () => {
    return (
			<section className="overflow-x-hidden my-16 mb-16">
				<div className="relative flex flex-col justify-center items-center mr-0">
					<div className="relative flex my-0 mx-auto min-w-[26.25rem]">
						<div className="flex-1 ml-1 mt-4 p-0">
							<h2
								className={cn(
									"sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl mt-4",
									font.className
								)}
							>
								Say <span className="text-[#7f32cd]">Hello</span>
								(before you go!)
							</h2>
						</div>
					</div>
				</div>
			</section>
		);
}