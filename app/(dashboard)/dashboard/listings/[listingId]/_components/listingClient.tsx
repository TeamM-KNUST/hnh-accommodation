"use client";

import { Container } from "@/components/container";
import { ListingHead } from "./listingHead";
import { Listing, User } from "@prisma/client";
import { ListingInfo } from "./lisiting-info";

interface ListingClientProps {
  listing: Listing & {
    user: User;
  };
  currentUser: User | null;
}

export const ListingClient = ({ listing, currentUser }: ListingClientProps) => {
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
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
