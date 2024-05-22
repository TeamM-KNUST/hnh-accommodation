import { Container } from "@/components/container";
import { Poppins } from "next/font/google";
import { Hero } from "./_components/navbar/hero";

const font = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});

export default function Home() {
	return <Container>
		<div className="flex flex-col gap-y-4">

		<Hero/>
		</div>
	</Container>;
}
