"use client";

import { Container } from "@/components/container";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { Logo } from "./logo";
import { UserMenu } from "./usermenu";

export const Navbar = () => {
	const isScrolled = useScrollTop();

	return (
		<div
			className={`fixed w-full bg-white x-10  z-50 ${
				isScrolled ? "border-b-[1px] shadow-sm" : ""
			}`}
		>
			<div className="py-4">
				<Container>
					<div className="flex items-center justify-between gap-3 md:gap-0">
						<Logo />
						<UserMenu />
					</div>
				</Container>
			</div>
		</div>
	);
};
