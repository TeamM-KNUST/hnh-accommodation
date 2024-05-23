import { Container } from "@/components/container";
import { Poppins } from "next/font/google";
import { Connect } from "./_components/homePage/connect";
import { Hero } from "./_components/homePage/hero";
import { InterSection } from "./_components/homePage/intersection";
const font = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});

export default function Home() {
	return (
		<Container>
			<div className="flex flex-col gap-y-6">
				<Hero />
				<Connect />
				<InterSection/>
			</div>
		</Container>
	);
}
