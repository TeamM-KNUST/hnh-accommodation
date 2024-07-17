import { db } from "@/lib/db";
import { Room } from "@prisma/client";

export interface IListingsParams{
    currentUser?: string;
    price?: number;
    type?: string;
    capacity?: number;

}

export default async function getRooms(params: IListingsParams):Promise<Room[]> {
    try {
        const { currentUser, price, type, capacity } = params;
        let query: any = {};

        if (currentUser) {
            query.currentUser = currentUser;
        }

        if (price) {
            query.price = price;
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


    const room = await db.room.findMany({
        where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

        return room;
        
    } catch (error: any) {
        throw new Error(error.message)
    }
}