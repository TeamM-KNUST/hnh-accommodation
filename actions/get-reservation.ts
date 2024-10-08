import { db } from "@/lib/db";
import { NextResponse } from "next/server";
interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

export default async function getReservation(params: IParams) {
    
     try {
    const { listingId, userId, authorId } = params;

    const query: any = {};

    if (listingId) {
      query.listingId = listingId;
    }

    if (userId) {
      query.userId = userId;
    }

    if (authorId) {
      query.listing = { userId: authorId };
    }

    const reservations = await db.reservation.findMany({
      where: query,
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
    
      }
    });

		return reservations;
    } catch (error) {
      console.error("Error in getReservations:", error);
		throw new Error("An error occurred while fetching reservations.");
    }
}