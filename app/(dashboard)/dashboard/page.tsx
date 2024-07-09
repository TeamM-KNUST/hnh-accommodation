import getListings, { IListingsParams } from "@/actions/getLisiting";

import { ListingCard, ListingCardSkeleton } from "./_components/listingCard";
import { Container } from "@/components/container";
import { Suspense } from "react";
import getCurrentUser from "@/actions/getCurrentUser";
import { EmpltyState } from "@/components/empty-state";

interface HomeProps {
  searchParams: IListingsParams;
}

const DashboardPage = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();
  if (listings.length === 0) {
    return (
      <Suspense>
        <EmpltyState showReset />
      </Suspense>
    );
  }
  return (
    <Suspense fallback={<ListingCardSkeleton />}>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              data={listing}
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </Suspense>
  );
};

export default DashboardPage;
