import getListings, { IListingsParams } from "@/actions/getLisiting";
import { ListingCard } from "./_components/listingCard";
import { Container } from "@/components/container";
import { Suspense } from "react";
import getCurrentUser from "@/actions/getCurrentUser";
import { EmptyState } from "@/components/empty-state";
import { ListingCardSkeleton } from "@/data/loadingSkeleton";
interface DashboardPageProps {
  searchParams?: IListingsParams; // Make searchParams optional
}

const DashboardPage = async ({
  searchParams = {} as IListingsParams,
}: DashboardPageProps) => {
  try {
    const listings = await getListings(searchParams);
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {
      return (
        <>
          <EmptyState showReset />
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
  } catch (error) {
    console.error("Error loading listings or current user:", error);
    return (
      <>
        <EmptyState showReset />
      </>
    );
  }
};

export default DashboardPage;
