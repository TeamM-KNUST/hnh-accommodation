import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});

interface HeaderProps {
	label: string;
}

export const Header = ({ label }: HeaderProps) => {
	return (
		<div className="w-full flex flex-col gap-y-4 items-center justify-center">
			<h1 className={cn("text-3xl font-semibold", font.className)}>
				<div className="flex items-center justify-center">
					<Image
						src="/logo.png"
						alt="H&H Accomodation"
						width={38}
						height={30}
					/>
				</div>
				H&H Accomodation
			</h1>
			<p className="text-muted-foreground text-sm">{label}</p>
		</div>
	);
};
