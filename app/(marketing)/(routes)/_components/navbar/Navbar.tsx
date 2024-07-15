"use client";

import { Container } from "@/components/container";
import { Logo } from "./logo";
import { UserMenu } from "./usermenu";
import { Categories } from "./categories";
import { SearchInput } from "./search";
import { User } from "@prisma/client";
import { usePathname } from "next/navigation";

interface NavbarProps {
  currentUser?: User | null;
}

export const Navbar = ({ currentUser }: NavbarProps) => {
  const pathname = usePathname();
  const isDashboard = pathname.includes("/dashboard");

  return (
    <div className="fixed w-full bg-white z-10 px-10 shadow-sm">
      <div className="border-b-[1px] py-4">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Logo />
            {isDashboard && <SearchInput />}
            <UserMenu />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};
