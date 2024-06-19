import getListings from "@/actions/getLisiting";

import { ListingCard, ListingCardSkeleton } from "./_components/listingCard";
import { Container } from "@/components/container";
import { Suspense } from "react";
import { Divide } from "lucide-react";
import getCurrentUser from "@/actions/getCurrentUser";

const DashboardPage = async () => {
  const listings = await getListings();
  const currentUser = await getCurrentUser();
  if (listings.length === 0) {
    return (
      <Container>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl font-bold">No Listings Found</h1>
          <Divide size={64} className="mt-4" />
          <p className="text-gray-500">Create your first listing</p>
        </div>
      </Container>
    );
  }
  if (!currentUser) {
    return null;
  }
  



  return (
    <Container>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        <Suspense fallback={<ListingCardSkeleton/>}>
        {listings.map((listing) => (
          <ListingCard key={listing.id} data={listing} currentUser={currentUser}/>
        ))}
        </Suspense>
      </div>
    </Container>
  );
};

export default DashboardPage;
