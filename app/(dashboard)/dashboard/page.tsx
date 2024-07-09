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
      <>
        <EmpltyState showReset />
      </>
    );
  }
  return (
    <Container>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        <Suspense fallback={<ListingCardSkeleton />}>
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              data={listing}
              currentUser={currentUser}
            />
          ))}
        </Suspense>
      </div>
    </Container>
  );
};

export default DashboardPage;
