import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
	subsets: ["latin"],
	weight: ["800"],
});

export const Hero = () => {
	return (
		<section className="flex flex-col lg:flex-row gap-8 mb-16">
			<div
				className={cn(
					"flex flex-col gap-y-4 w-full lg:w-1/2 xl:w-1/3 ",
					font.className
				)}
			>
				<h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">
					Connecting <span className="text-orange-500">Students</span> to
					Amazing <span className="text-purple-500">Accommodation</span>
				</h1>
				<h3 className="text-orange-400">
					Access All Recognised Private Hostel & Homestels
				</h3>
				<p className="italic font-extralight text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
					Access the University’s recognized Hostels and homestels for easy room
					booking and get all necessary information concerning them.
				</p>
				<Button
					className=" cursor-pointer w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3 xl:w-1/4 text-sm font-semibold bg-blue-800 items-center justify-center text-white h-12 mx-auto hover:bg-blue-900 hover:text-white"
					variant="outline"
					size="lg"
				>
					Browse Hostels
				</Button>
			</div>
			<div
				className="relative w-full lg:w-1/2 xl:w-2/3 shadow-md rounded-lg overflow-hidden bg-no-repeat bg-cover bg-center"
				style={{ backgroundImage: "url('image/hostel.jpg')" }}
			/>
		</section>
	);
};
