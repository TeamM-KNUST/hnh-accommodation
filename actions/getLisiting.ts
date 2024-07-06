import { db } from "@/lib/db";

export interface IListingsParams{
    currentUser?: string;
    locationValue?: string;
    category?:string
}

export default async function getListings(params: IListingsParams) {
    try {
        const { currentUser, locationValue, category } = params;
        let query: any = {};

        if (currentUser) {
            query.currentUser = currentUser;
        }

        if (category) {
            query.category = category;
        }

        if (locationValue) {
            query.locationValue = locationValue;
        }


    const listing = await db.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

        return listing;
        
    } catch (error: any) {
        throw new Error(error.message)
    }
}