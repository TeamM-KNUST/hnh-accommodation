import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface IParams{
    listingId?: string;
    authorId?: string;
    userId: string;
    
}

export default async function POST(params: IParams) {
    
    try {

        const { listingId, userId, authorId } = params;
        const query: any = {};

        if (listingId) {
            query.listingId= listingId
        }
        if (userId) {
            query.userId = userId;
        }

        if (authorId) {
            query.listingId = {userId:authorId}
        }

        const reservation = await db.reservation.findMany({
            where: query,
            include: {
                listing:true
            },
            orderBy: {
                createdAt:"desc"
            }
        })

        return NextResponse.json(reservation)
        
    } catch (error) {
        console.log(["COURSE-ERROR"], error);
        return new NextResponse("Internal Server Error", {status:500})
    }
}