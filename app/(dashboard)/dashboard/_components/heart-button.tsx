"use client";

import useFavorite from "@/hooks/use-favourite";
import { User } from "@prisma/client";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  listingId: string;
  currentUser?: User | null;
}

function HeartButton({ listingId, currentUser }: Props) {
  const { hasFavorite, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <div
      onClick={toggleFavorite}
      className=" relative hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart
        size={29}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={25}
        className={hasFavorite ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
}

export default HeartButton;
