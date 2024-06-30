import { Container } from "@/components/container";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { Logo } from "./logo";
import { UserMenu } from "./usermenu";
import { Search } from "./search";
import { Categories } from "./categories";
import { db } from "@/lib/db";

export const Navbar = async () => {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });
  if (!categories) {
    return (
      <div className="flex items-center justify-center text-2xl">
        No Categories Found
      </div>
    );
  }

  return (
    <div className="fixed w-full bg-white z-10 px-10 shadow-sm">
      <div className="border-b-[1px py-4">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
      <Categories
        categories={categories.map((category) => {
          return {
            name: category.name,
            id: category.id,
            locationId: null,
          };
        })}
      />
    </div>
  );
};
