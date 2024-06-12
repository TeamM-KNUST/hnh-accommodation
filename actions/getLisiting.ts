import { db } from "@/lib/db";

export default async function getListings() {
    const listings = await db.listing.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
    return listings;
}