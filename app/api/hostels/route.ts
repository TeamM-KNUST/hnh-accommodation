
import getCurrentUser from "@/actions/getCurrentUser";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {

        const currentUser = await getCurrentUser();
        if (!currentUser?.id) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
       
        const body = await req.json();

        

    const {
        imageSrc,
        description,
        title

        } = body;
        
        if (!imageSrc || !description || !title) {
            return new NextResponse("missing required fileds", { status: 400 });
        }
    const listing = await db.listing.create({
        data: {
            description,
            title,
            imageSrc,
            userId:currentUser.id
           }
    })
        
        console.log("Listing", listing);

        return NextResponse.json(listing)
        
    }
    catch (error) {
        console.log(["ADD HOSTEL ERROR", error]);
        return new NextResponse("Internal server error", { status: 500 });
    }
}