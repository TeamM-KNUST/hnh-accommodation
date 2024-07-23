"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import useAddImage from "@/hooks/addImage";
import { images } from "@/data/constant";
import { useState } from "react";
import Image from "next/image";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function ImageDialog() {
  const addImage = useAddImage();
  return (
    <Dialog open={addImage.isOpen} onOpenChange={addImage.onClose}>
      <DialogContent className="sm:max-w-[955px]">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={3000}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.url}
              alt={image.alt}
              width={500}
              height={500}
              className="w-full h-full object-cover "
              onClick={addImage.onOpen}
            />
          ))}
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
