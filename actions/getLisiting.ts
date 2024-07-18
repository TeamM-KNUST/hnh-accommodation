import { db } from "@/lib/db";

export interface IListingsParams{
    currentUser?: string;
    locationValue?: string;
    category?: string
    title?: string;
    price?: number;
    type?: string;
    capacity?: number;
    

}

export default async function getListings(params: IListingsParams) {
    try {
        const { currentUser, locationValue, category, title, price, type, capacity } = params;
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

        if (title) {
            query.title = {
                contains: title,
                mode: "insensitive",
        
            };
        }

        if (price) {
            query.price =price;
        }

        if (capacity) {
            query.capacity = capacity;
        }

        if (type) {
            query.type = {
                contains: type,
                mode: "insensitive",
        
            };
        }


    const listing = await db.listing.findMany({
        where: query,
        include: {
            rooms: {
                select: {
                    price: true,
                    type: true,
                    capacity: true,
                    
                }

            },
            },  
      orderBy: {
        createdAt: "desc",
      },
    });

        return listing;
        
    } catch (error: any) {
        throw new Error(error.message)
    }
}