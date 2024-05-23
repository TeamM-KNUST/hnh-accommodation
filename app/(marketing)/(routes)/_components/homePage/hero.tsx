import { Button } from "@/components/ui/button";

export const Hero = () => {
	return (
		<section className="flex gap-6 mb-16">
			<div className="w-2/3 xl:w-1/3  lg:w-1/2   flex flex-col gap-y-4 ">
				<h1 className="text-3xl sm:text-xl md:text-2xl xl:text-6xl, lg:text-5xl font-medium ">
					Connecting
					<span className="text-orange-500">Students</span> to Amazing{" "}
					<span className="text-purple-500"> Accommodation</span>
				</h1>
				<h2 className="sm:text-sm md:text-lg lg:text-2xl xl:text-3xl font-light">
					Find a cosy home away from home, connect with fellow students, and
					embark on an unforgettable experience. Start your journey with us
					today!
				</h2>
				<h3 className="text-orange-400 ">
					Access All Recognised Private Hostel & Homestels
				</h3>
				<p className="font-extralight italic sm:text-sm md:text-lg lg:text-2xl xl:text-3xl">
					Access the University’s recognized Hostels and homestels for easy room
					booking and get all necessary information concerning them
				</p>
				<Button
					className="from-orange-500 to-purple-500 bg-gradient-to-r cursor-pointer w-autoshut"
					variant="default"
					size="lg"
				>
					Browse Hostels
				</Button>
			</div>
			<div
				className="relative w-full  shadow-md rounded-lg overflow-hidden bg-no-repeat bg-cover bg-center z-0"
				style={{ backgroundImage: "url('image/hostel.jpg')" }}
			/>
		</section>
	);
};
