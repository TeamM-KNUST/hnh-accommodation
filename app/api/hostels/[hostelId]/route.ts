
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface Iparams{
    hostelId: string;
}


export async function POST(req: Request, { params }: {
    params: Iparams;
}) {
    try {
        const body = await req.json();

        

    const {
        imageSrc,
        price,
        type,
        capacity,

        } = body;
        
        Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
        });


        
    const room = await db.room.create({
        data: {
            price: parseFloat(price),
            type,
            capacity,
            listing: {
                connect: {
                    id: params.hostelId
                }
            },
            roomImages: {
                create: {
                    imageSrc,
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



  