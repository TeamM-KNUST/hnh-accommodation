
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

interface IParams {
  listingId?: string;
}

const HostelIdPage = async ({ params }: { params: IParams }) => {
  const listing = await db.listing.findUnique({
    where: {
      id: params.listingId,
    },
    include: {
      rooms: true,
    },
  });

  if (!listing) {
    return redirect("/auth/login");
  }
  return redirect(
    `/dashboard/listings/${listing.id}/rooms/${listing.rooms[0].id}`
  );
};

export default HostelIdPage;
