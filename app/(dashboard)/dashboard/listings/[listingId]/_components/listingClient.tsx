"use client";

import { Container } from "@/components/container";


import {  useMemo } from "react";

import { ListingInfo } from "./lisiting-info";
import {  Listing, User} from "@prisma/client";

import { categories } from "@/data/constant";
import ListingHead from "./listingHead";
import ListingReservation from "./listing-reservation";

type Props = {
  listing: Listing & {
    user: User;
  };
  currentUser?: User | null;

};

function ListingClient({ listing, currentUser }: Props) {
  const category = useMemo(() => {
    return categories.find((item) => item.name === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ListingClient;
