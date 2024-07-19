import getCurrentUser from "@/actions/getCurrentUser";
import ListingClient from "./_components/listingClient";
import ClientOnly from "@/components/client-only";
import getListingById from "@/actions/getListitingById";
import getRoomById from "@/actions/getRoomById";

interface IParams {
  listingId?: string;
  roomId?: string;
}

const HostelIdPage = async ({ params }: { params: IParams }) => {
  const listings = await getListingById(params);
  const currentUser = await getCurrentUser();
  const rooms = await getRoomById(params);

  if (!listings) {
    return null;
  }

  if (!rooms) {
    return null;
  }
  return (
    <ClientOnly>
      <div>
        <ListingClient
          listing={listings}
          currentUser={currentUser}
          room={rooms}
        />
      </div>
    </ClientOnly>
  );
};

export default HostelIdPage;
