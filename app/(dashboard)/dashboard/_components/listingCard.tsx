"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Listing, User } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ListingCardProps {
  data: Listing;
  currentUser?: User;
}

export const ListingCard = ({ data, currentUser }: ListingCardProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/dashboard/listings/${data.id}`)}
      
      className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            src={data.imageSrc}
            alt="hostel"
            className="object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold">{data.title}</h3>
          <p className="text-sm text-gray-500">{data.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium">₵{data.price}</p>
            <p className="text-sm text-gray-500">{data.locationValue}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
//loading skeleton

export const ListingCardSkeleton = () => {
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <Skeleton className="aspect-square w-full relative overflow-hidden rounded-xl" />
      </div>
    </div>
  );
};
