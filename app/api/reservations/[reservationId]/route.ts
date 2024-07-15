import getCurrentUser from "@/actions/getCurrentUser";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface IParams {
    reservationId?: string;
}

export async function DELETE(req: Request, 
    {params}: {params: IParams}
) {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return new NextResponse("Unauthorized", {status: 401});
        }
        const { reservationId } = params;

        if (!reservationId) {
            return new NextResponse("Bad Request", {status: 400});
        }

        const reservation = await db.reservation.deleteMany
        ({
            where: {
                id: reservationId,
               OR: [{ userId: currentUser.id }],
            },
        });

        return NextResponse.json(reservation);
        
    } catch (error) {
        console.error(["ERROR_IN_DELETION_RESERVATION"], error);
        return new NextResponse("Internal Server Error", {status: 500});
    }
}