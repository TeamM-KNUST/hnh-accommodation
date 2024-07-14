"use client";

import React from "react";


type Props = {
  id: string;
  name: string;
};

function ListingCategory({ name }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-col">
          <p className="text-neutral-500 font-light">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default ListingCategory;
