"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import qs from "query-string";

type Props = {
  name: string;
  selected?: boolean;
};

export const CategoryBox = ({ name, selected }: Props) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: name,
    };
    if (params.get("category") === name) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/dashboard",
        query: updatedQuery,
      },
      { skipNull: true }
    );
    router.push(url);
  }, [name, params, router]);
  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 p-3  hover:text-blue-800 transition cursor-pointer
         ${selected ? "border-b-[2px] border-b-blue-800" : "boarder-transparent "}
           ${selected ? " text-blue-800" : "text-blue-500"}
          
       `}
    >
      <div className="font-medium text-xl">{name}</div>
    </div>
  );
};
