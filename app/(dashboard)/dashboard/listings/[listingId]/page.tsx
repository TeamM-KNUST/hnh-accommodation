import getCurrentUser from "@/actions/getCurrentUser";
import getListingById from "@/actions/getListingById";
import ListingClient from "./_components/listingClient";
import ClientOnly from "@/components/client-only";

interface IParams {
  listingId?: string;
}

const HostelIdPage = async ({ params }: { params: IParams }) => {
  const listings = await getListingById(params);
  const currentUser = await getCurrentUser();

  if (!listings) {
    return null;
  }
  return (
    <ClientOnly>
      <div>
        <ListingClient listing={listings} currentUser={currentUser} />
      </div>
    </ClientOnly>
  );
};

export default HostelIdPage;
