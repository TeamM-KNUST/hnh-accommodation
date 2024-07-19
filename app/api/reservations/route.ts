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

        const { roomId, startDate, endDate, totalPrice } = body;
        
        if (!roomId || !startDate || !endDate || !totalPrice) {
            return new NextResponse("Bad Request", { status: 400 });
        }

        const reservations = await db.room.update({
            where: { id: roomId },
            data: {
                reservations: {
                    create: {
                        startDate: new Date(startDate),
                        endDate: new Date(endDate),
                        totalPrice,
                        user: {
                            connect: {
                                id: currentUser.id,
                            },
                        },
                    },
                },
            },
        });
        
        console.log("RESERVATION", reservations);
        return NextResponse.json(reservations);
        
    } catch (error) {
        console.error(["RSERVATION_CREATE_ERROR", error]);
        return new  NextResponse("Internal Server Error", { status: 500 });
    }
}