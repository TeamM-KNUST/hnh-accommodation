"use client";

import { Container } from "@/components/container";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { Logo } from "./logo";
import { UserMenu } from "./usermenu";
import { Search } from "./search";

export const Navbar = () => {
	const isScrolled = useScrollTop();

	return (
		<div
			className={`fixed w-full bg-white  z-50 px-10 py-4 ${
				isScrolled ? "border-b-[1px] shadow-sm" : ""
			}`}
		>
			<div className="h-[48px] ">
				<Container>
					<div className="flex items-center justify-between gap-3 md:gap-0">
						<Logo />
						<Search />
						<UserMenu />
					</div>
				</Container>
			</div>
		</div>
	);
};
