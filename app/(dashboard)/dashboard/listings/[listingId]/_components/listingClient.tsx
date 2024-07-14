"use client";

import { Container } from "@/components/container";
import { ListingHead } from "./listingHead";
import { Listing, User } from "@prisma/client";
import { ListingInfo } from "./lisiting-info";
import { useMemo } from "react";
import { categories } from "@/data/constant";

interface ListingClientProps {
  listing: Listing & {
    user: User;
  };
  currentUser: User | null;
}

export const ListingClient = ({ listing, currentUser }: ListingClientProps) => {

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
          <div>
            <ListingInfo
              locationValue={listing.locationValue}
              user={listing.user}
              description={listing.description}
              category={category}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
