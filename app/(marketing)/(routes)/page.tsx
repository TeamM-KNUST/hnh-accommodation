import { Container } from "@/components/container";
import { Poppins } from "next/font/google";
import { Connect } from "./_components/navbar/connect";
import { Hero } from "./_components/navbar/hero";
import { InterSection } from "./_components/navbar/intersection";

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
