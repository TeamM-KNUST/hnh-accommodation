import { Poppins } from "next/font/google";

const font = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});

export default function Home() {
	return <div>Dashboard</div>;
}
