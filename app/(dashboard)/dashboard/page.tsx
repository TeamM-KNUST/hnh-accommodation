import getListings, { IListingsParams } from "@/actions/getLisiting";
import { ListingCard, ListingCardSkeleton } from "./_components/listingCard";
import { Container } from "@/components/container";
import { Suspense } from "react";
import getCurrentUser from "@/actions/getCurrentUser";
import { EmptyState } from "@/components/empty-state";

interface DashboardPageProps {
  searchParams?: IListingsParams; // Make searchParams optional
}

const DashboardPage = async ({
  searchParams = {} as IListingsParams,
}: DashboardPageProps) => {
  try {
    // Ensure searchParams is correctly typed
    const listings = await getListings(searchParams);
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <EmptyState showReset />
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
  } catch (error) {
    console.error("Error loading listings or current user:", error);
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <EmptyState showReset />
      </Suspense>
    );
  }
};

export default DashboardPage;
