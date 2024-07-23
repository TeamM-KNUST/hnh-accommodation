"use client";

import { Heading } from "@/components/heading";
import { motion } from "framer-motion";
import Image from "next/image";
import HeartButton from "../../../_components/heart-button";
import { Listing, User } from "@prisma/client";
import { images } from "@/data/constant";
import { useState } from "react";
import useAddImage from "@/hooks/addImage";

type Props = {
  title: string;
  imageSrc: string;
  id: string;
  currentUser?: User | null;
};

function ListingHead({ title, imageSrc, id, currentUser }: Props) {
  const [showAll, setShowAll] = useState(false);
  const addImage = useAddImage();

  const imagesToShow = showAll ? images : images.slice(0, 3);
  return (
    <>
      <Heading title={title} subTitle="DFGSDFSDFsdsd" />
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
      <div>
        <h1 className="text-2xl font-bold">List of Facilities</h1>
        <div className="flex flex-wrap justify-between">
          {imagesToShow.map((image, index) => (
            <div key={index} className="w-[33%]">
              <Image
                src={image.url}
                alt={image.alt}
                width={500}
                height={500}
                className="w-full h-40 object-cover cursor-pointer "
                onClick={addImage.onOpen}
              />
            </div>
          ))}
        </div>
        {images.length > 3 && (
          <button
            className="mt-4 text-blue-500"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </>
  );
}

export default ListingHead;
