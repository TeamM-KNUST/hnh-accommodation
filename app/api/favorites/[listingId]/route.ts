import getCurrentUser from "@/actions/getCurrentUser"
import { db } from "@/lib/db";
import { NextResponse } from "next/server"


export async function POST(req: Request, { params }: {
    params: {
    listingId:string
}}) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const { listingId } = params;

        if (!listingId) {
            return new NextResponse("Invalid", {status:400})
        }

        let favoriteIds = [...(currentUser.favoriteIds || [])]

        const favorite = await db.user.update({
            where: {
                id:currentUser.id,
            },
            data: {
                favoriteIds,
            }
        })

        return NextResponse.json(favorite)
        console.log(favorite)
        
    } catch (error) {
        console.log("[FAVORITE_LIKE_ERROR]", error)
        return new NextResponse("Internal Server Errror", {status: 500})
    }
}