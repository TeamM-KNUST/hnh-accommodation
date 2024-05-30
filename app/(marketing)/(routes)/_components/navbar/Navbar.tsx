"use client";

import { Container } from "@/components/container";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { Logo } from "./logo";
import { UserMenu } from "./usermenu";
import { Search } from "./search";
import { usePathname, useSearchParams } from "next/navigation";
import path from "path";

export const Navbar = () => {
	const isScrolled = useScrollTop();
	const pathname = usePathname();

	const dasboardPathname = pathname.includes("dashboard");

	return (
		<div
			className={`fixed w-full bg-white  z-50 px-10 py-4 ${
				!isScrolled ? "border-b-[1px] shadow-md h-[7rem]" : ""
			}`}
		>
			<div className="h-[48px] ">
				<Container>
					<div className="flex items-center justify-between gap-3 md:gap-0">
						<Logo />
						{!dasboardPathname && <Search />}
						<UserMenu />
					</div>
				</Container>
			</div>
		</div>
	);
};
