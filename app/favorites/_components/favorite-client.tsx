
import { ListingCard } from "@/app/(dashboard)/dashboard/_components/listingCard";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Listing, User } from "@prisma/client";

interface FavoritesClientProps {
  listings: Listing[];
  currentUser?: User | null;
}

const FavoritesClient = async ({
  listings,
  currentUser,
}: FavoritesClientProps) => {
  return (
    <Container>
      <Heading title="Favorites" subTitle="Your favorite listings" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesClient;
