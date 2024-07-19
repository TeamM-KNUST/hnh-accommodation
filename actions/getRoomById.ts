import { db } from "@/lib/db";

interface IParams {
    roomId?:string
}

export default async function getRoomById(params: IParams) {
    try {
        const { roomId } = params;
       
        const room = await db.room.findUnique({
            where: {
                id: roomId
            },
            include: {
            listing: true,
            }
           
        })  
        if (!room) {
            return null
        }
        return room
        
    } catch (error: any) {
        throw new Error(error)
    }
}