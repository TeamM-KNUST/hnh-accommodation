import { db } from "@/lib/db";
import getCurrentUser from "./getCurrentUser"


export default async function getFavoriteListing() {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return null;
        }

        const favoriteListings = await db.listing.findMany({
            where: {
                id: {
                    in: [...(currentUser.favoriteIds || [])],
                }
            }
        })
        return favoriteListings
        
    } catch (error: any) {
        throw new Error(error.message)
    }
}