import { db } from "@/lib/db";
import { Room } from "@prisma/client";
import getCurrentUser from "./getCurrentUser";

export default async function getRooms() {
    try {

        const currentUser = await getCurrentUser();
        

    const room = await db.room.findMany({
        where: {
            id:currentUser?.id
        },
        orderBy: {
            createdAt:"desc"
        }
            });

        return room;
        
    } catch (error: any) {
        throw new Error(error.message)
    }
}