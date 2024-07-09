import { Container } from "@/components/container";
import { Logo } from "./logo";
import { UserMenu } from "./usermenu";
import { Categories } from "./categories";
import { SearchInput } from "./search";
import { User } from "@prisma/client";

interface NavbarProps{
  currentUser?: User | null;
}

export const Navbar = ({
  currentUser
}:NavbarProps) => {
  return (
    <div className="fixed w-full bg-white z-10 px-10 shadow-sm">
      <div className="border-b-[1px] py-4">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Logo />
            <SearchInput />
            <UserMenu />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};
