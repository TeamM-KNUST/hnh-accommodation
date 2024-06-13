import getListings from "@/actions/getLisiting";

import { ListingCard, ListingCardSkeleton } from "./_components/listingCard";
import { Container } from "@/components/container";
import { Suspense } from "react";
import { Divide } from "lucide-react";

const DashboardPage = async () => {
  const listings = await getListings();

  return (
    <Container>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        <Suspense fallback={<ListingCardSkeleton/>}>
        {listings.map((listing) => (
          <ListingCard key={listing.id} data={listing} />
        ))}
        </Suspense>
      </div>
    </Container>
  );
};

export default DashboardPage;
