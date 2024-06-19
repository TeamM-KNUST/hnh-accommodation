import { ListingClient } from "./_components/listingClient";
import getCurrentUser from "@/actions/getCurrentUser";
import getListingById from "@/actions/getListingById";

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
    <div>
      <ListingClient listing={listings} currentUser={currentUser} />
    </div>
  );
};

export default HostelIdPage;
