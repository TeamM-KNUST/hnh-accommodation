import getCurrentUser from "@/actions/getCurrentUser";
import getListingById from "@/actions/getListitingById";
import ClientOnly from "@/components/client-only";
import { EmptyState } from "@/components/empty-state";
import ListingClient from "./_components/listingClient";

interface Iparams {
  listingId?: string;
  roomId?: string;
}

const ListingIdPage = async ({ params }: { params: Iparams }) => {
  const currentUser = await getCurrentUser();
  const listings = await getListingById(params);

  if (!listings) {
    return (
      <ClientOnly>
        <EmptyState
          title="Listing not found"
          subtitle="This listing may have been removed or the link is incorrect"
        />
      </ClientOnly>
    );
  }

  return (
    <div>
      <ClientOnly>
        <ListingClient listing={listings} currentUser={currentUser} />
      </ClientOnly>
    </div>
  );
};

export default ListingIdPage;
