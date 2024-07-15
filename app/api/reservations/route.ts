import getCurrentUser from "@/actions/getCurrentUser";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        const body = await req.json();

        const { listingId, startDate, endDate, totalPrice } = body;
        
        if (!listingId || !startDate || !endDate || !totalPrice) {
            return new NextResponse("Bad Request", { status: 400 });
        }

        const reservation = await  db.listing.update({
            where: {
                id: listingId,
            },
            data: {
            },
            
        });

        return NextResponse.json(reservation);
        
    } catch (error) {
        console.error(["RSERVATION_CREATE_ERROR", error]);
        return new  NextResponse("Internal Server Error", { status: 500 });
    }
}