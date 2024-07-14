"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { categories } from "@/data/constant";
import { CategoryBox } from "./categorybox";
import { Suspense } from "react";
import { CategoriesSketeton } from "@/data/loadingSkeleton";

export const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/dashboard";

  if (!isMainPage) {
    return null;
  }

  return (
    <div className="flex items-center justify-center overflow-x-auto p-4">
      <Suspense fallback={<CategoriesSketeton />}>
        {categories.map((items) => (
          <CategoryBox
            key={items.id}
            name={items.name}
            selected={category === items.name}
          />
        ))}
      </Suspense>
    </div>
  );
};
