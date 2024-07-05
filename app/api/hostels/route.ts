
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
        title,
        description,
        location,
        price,

        } = body;
        
        Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });
    const listing = await db.listing.create({
        data: {
            imageSrc,
            title,
            description,
            locationValue:location,
            price:parseInt(price, 10),
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



  