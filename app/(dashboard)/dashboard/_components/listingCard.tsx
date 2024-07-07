"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Listing, User } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import HeartButton from "./heart-button";

interface ListingCardProps {
  data: Listing;
  currentUser?: User | null;
}

export const ListingCard = ({ data, currentUser }: ListingCardProps) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      onClick={() => router.push(`/dashboard/listings/${data.id}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            src={data.imageSrc}
            alt="hostel"
            className="object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
          />
          <div className="absolute top-3 right-3">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold">{data.title}</h3>
          <p className="text-sm text-gray-500">{data.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">{data.category}</p>
            <p className="text-sm text-gray-500">{data.locationValue}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
//loading skeleton

export const ListingCardSkeleton = () => {
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <Skeleton className="aspect-square w-full relative overflow-hidden rounded-xl" />
        <Skeleton className="aspect-square w-full relative overflow-hidden rounded-xl" />
      </div>
    </div>
  );
};
