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

        const { listingId, price } = body;
        
        if (!listingId || !price) {
            return new NextResponse("Bad Request", { status: 400 });
        }

          const listenAndReservation = await db.listing.update({
    where: {
      id: listingId,
    },
    data: {
      reservations: {
        create: {
          totalPrice: price,
          user: {
            connect: {
              id: currentUser.id,
            },
          },
        },
      },
    },
  });
  
        console.log("RESERVATION", listenAndReservation);
        return NextResponse.json(listenAndReservation);
        
    } catch (error) {
        console.error(["RSERVATION_CREATE_ERROR", error]);
        return new  NextResponse("Internal Server Error", { status: 500 });
    }
}