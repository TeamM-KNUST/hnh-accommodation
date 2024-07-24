"use client";

import { AvatarImg } from "@/app/(marketing)/(routes)/_components/navbar/avatarImage";
import { useCountries } from "@/hooks/useCountries";
import { User } from "@prisma/client";
import Sleep from "./sleep";
import Offers from "./offer";
import ListingCategory from "./listing-category";
import { Map } from "@/components/map";



interface ListingInfoProps {
  user: User;
  description: string;
  category: | {
    id: string;
    name: string;
  } | undefined;
  locationValue: string 
}

// const Map = dynamic(() => import("@/components/map"), {
//   ssr: false,
// });

export const ListingInfo = ({
  user,
  description,
  locationValue,
  category,
}: ListingInfoProps) => {
  const { getByCode } = useCountries();
  const coordinates = getByCode(locationValue || "");
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex-row items-center gap-2">
          <div>Hosted by {user.name}</div>
          <AvatarImg src={user?.image} />
        </div>
        <hr />
        <div className="flex flex-col">
          <p className="text-4xl font-bold text-[#FF5A5F]">
            Air<span className="text-black">cover</span>
          </p>
          <p className="text-neutral-500 pt-3">
            Every booking includes free protection from Host cancellations,
            listing inaccuracies, and other issues like trouble checking in.
          </p>
          <p className="text-black font-bold underline pt-3 cursor-pointer">
            Learn more
          </p>
        </div>
        <hr />
        {category && (
          <ListingCategory id={category?.id} name={category?.name} />
        )}
        <p className="text-lg font-light text-neutral-500">{description}</p>
        <hr />
        <Sleep />
        <hr />
        <Offers />
        <hr />
        <p className="text-xl font-semibold">{`Where you’ll be`}</p>
        <Map/>
      </div>
    </div>
  );
};
