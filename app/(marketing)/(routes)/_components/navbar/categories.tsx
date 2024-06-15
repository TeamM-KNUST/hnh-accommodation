"use client";

import { Category } from "@prisma/client";
import { usePathname } from "next/navigation";

interface CategoriesProps {
  categories: Category[];
  options?: {
    label: string;
    value: string;
  };
}

export const Categories = ({ categories, options }: CategoriesProps) => {
  const pathname = usePathname();

  if (!pathname.includes("dashboard") || pathname.includes("listings")){
    return null;
  }

  return (
    <div className="flex items-center justify-center overflow-x-auto p-4">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex items-center justify-center px-4 p-2 font-semibold text-gray-600 rounded-lg cursor-pointer hover:bg-gray-100 text-xl"
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};
