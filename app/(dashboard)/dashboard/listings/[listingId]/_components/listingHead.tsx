import { Heading } from "@/components/heading";
import { User } from "@prisma/client";
import Image from "next/image";

interface ListingHeadProps {
  title: string;
  imageSrc: string;
  id: string;
  currentUser?: User | null;
}

export const ListingHead = ({
  title,
  imageSrc,
  id,
  currentUser,
}: ListingHeadProps) => {
  return (
    <>
      <Heading title={title} subTitle="sfdasdasd" />
      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover w-full"
        />
      </div>
    </>
  );
};
