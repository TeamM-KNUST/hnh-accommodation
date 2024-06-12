import getListings from "@/actions/getLisiting";

import { ListingCard } from "./_components/listingCard";
import { Container } from "@/components/container";

const DashboardPage = async () => {
  const listings = await getListings();

  return (
    <Container>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} data={listing} />
        ))}
      </div>
    </Container>
  );
};

export default DashboardPage;
