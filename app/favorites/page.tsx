import { User } from "@prisma/client";
import FavoritesClient from "./_components/favorite-client";
import getCurrentUser from "@/actions/getCurrentUser";
import getFavoriteListing from "@/actions/getFavoriteListing";
import { EmpltyState } from "@/components/empty-state";

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListing();

  if (!listings || listings.length === 0) {
    return (
      <EmpltyState
        title="Unauthorized"
        subtitle="You are not authorized to view this page. Please login to view your favorite listings."
      />
    );
  }

  return (
    <FavoritesClient
      listings={listings}
      currentUser={currentUser as unknown as User}
    />
  );
};

export default FavoritesPage;
