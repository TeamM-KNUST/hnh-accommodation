import { Skeleton } from "@/components/ui/skeleton";
import { Listing, User } from "@prisma/client";
import Image from "next/image";

interface ListingCardProps {
  data: Listing;
  currentUser?: User;
}

export const ListingCard = ({ data, currentUser }: ListingCardProps) => {
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            src={data.imageSrc}
            alt="hostel"
            className="object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
          />
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
