import getCurrentUser from "@/actions/getCurrentUser";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";


interface Iparams{
    listingId: string;
}

export async function DELETE(req: Request, { params }: {
    params: Iparams;
}) {
    try {
        const currentUser = await getCurrentUser();
        if(!currentUser){
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const listingId = params;
        if(!listingId){
            return new NextResponse("Bad Request", { status: 400 })
        }

        const ownListing = await db.listing.findFirst({
            where: {
                id: params.listingId,
                userId: currentUser.id
            }
        })

        if(!ownListing){
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const deleteListing = await db.listing.delete({
            where: {
                id: params.listingId,
                userId: currentUser.id
            }
        })

        return  NextResponse.json(deleteListing)

        
    } catch (error){
        console.log("Error deleting listing:", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}



export async function POST(req: Request, { params }: {
    params: Iparams;
}) {
    try {
        const body = await req.json();

        

    const {
        imageSrc,
        } = body;
        
        Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
        });


        
        const room = await db.room.create({
        
            data: {
                imageSrc,
            listing: {
                connect: {
                    id: params.listingId
                }
            }
        },
      
       
    });
        
        return NextResponse.json(room)
        console.log("Room", room);
     
    }
    catch (error) {
        console.log(["ADD IMAGE ERROR", error]);
        return new NextResponse("Internal server error", { status: 500 });
    }
}



  