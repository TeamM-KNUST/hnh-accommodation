"use client";

import { Heading } from "@/components/heading";
import { motion } from "framer-motion";
import Image from "next/image";
import HeartButton from "../../../_components/heart-button";
import { User } from "@prisma/client";
import { images } from "@/data/constant";
import { useState } from "react";
import useAddImage from "@/hooks/addImage";
import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <div className="flex items-center justify-between">
        <Heading title={title} subTitle="DFGSDFSDFsdsd" />
        <Button variant="secondary" onClick={() => window.history.back()}>
          <ArrowLeft size={22}className="mr-2" />
          Back
        </Button>
      </div>
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
          <ul className="flex gap-5 flex-wrap">
            {imagesToShow.map((image, index) => (
              <li key={index} className="relative w-48 h-32 cursor-pointer">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="w-full h-40 object-cover cursor-pointer "
                  onClick={addImage.onOpen}
                />
              </li>
            ))}
          </ul>
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
