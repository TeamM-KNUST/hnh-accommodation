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

        const { title,
    description,
    imageSrc,
    category,
    roomCount,
    location,
    price } = body;

        Object.keys(body).forEach((key) => {
            if (!body[key]) {
                return new NextResponse("Invalid request", { status: 400 });
            }
        
        })

    const listing = await db.listing.create({
            data: {
               title,
    description,
    imageSrc,
    category,
    roomCount,
            
                locationValue: location.value,
                price: parseInt(price, 10),
                userId: currentUser.id,

            }
        })

        return NextResponse.json(listing)
        
    }
    catch (error) {
        console.log(["ADD HOSTEL ERROR", error]);
        return new NextResponse("Internal server error", { status: 500 });
    }
}