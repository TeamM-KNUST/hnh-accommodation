import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});

export default function Home() {
	return (
		<div className="flex h-full items-center justify-center flex-col bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-blue-600">
			<div className="space-y-6">
				<h1
					className={cn(
						"text-6xl font-semibold text-white drop-shadow-md",
						font.className
					)}
				>
					Auth
				</h1>
				<p className="text-white text-lg">A Simple Authentication service</p>
				<div>
					<LoginButton asChild>
						<Button variant="secondary" size="lg">Sign in</Button>
					</LoginButton>
				</div>
			</div>
		</div>
	);
}
