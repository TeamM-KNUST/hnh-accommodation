"use client";

import { Heading } from "@/components/heading";
import { motion } from "framer-motion";
import Image from "next/image";
import HeartButton from "../../../_components/heart-button";
import { Listing, User } from "@prisma/client";

type Props = {
  title: string;
  imageSrc: string;
  id: string;
  currentUser?: User | null;
};

function ListingHead({
  title,
  imageSrc,
  id,
  currentUser,
}: Props) {

  return (
    <>
      <Heading
        title={title}
        subTitle="DFGSDFSDFsdsd"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full h-[60vh] overflow-hidden rounded-xl relative"
      >
        <Image
          src={imageSrc}
          alt="image"
          fill
          className="object-cover w-full"
        />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </motion.div>
    </>
  );
}

export default ListingHead;
