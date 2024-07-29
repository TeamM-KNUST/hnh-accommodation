import getCurrentUser from "@/actions/getCurrentUser";
import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request, { params }: { params: { listingId: string } }) {
    try {

        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const listing = await db.listing.findUnique({
            where: {
                id: params.listingId
            }
        });

        const purchase = await db.purchase.findUnique({
            where: {
                userId_listingId: {
                    listingId: params.listingId,
                    userId: currentUser.id
                }
            }
        });

        if(purchase){
            return new NextResponse("Already purchased", { status: 400 });
        }

        if (!listing) {
            return new NextResponse("Not Found", { status: 404 });
        }

        const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
            {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: listing.title,
                        description: listing.description,
                    },
                    unit_amount: Math.round(listing.price * 100),
                },
                quantity: 1,
            },
        ];

        let stripeCustomer = await db.stripeCustomer.findUnique({
            where: {
                userId: currentUser.id
            },
            select: {
                stripeCustomerId: true
            }
        });


        if (!stripeCustomer) {
            const customer = await stripe.customers.create({
                email: currentUser.email,
            });

            stripeCustomer = await db.stripeCustomer.create({
                data: {
                    userId: currentUser.id,
                    stripeCustomerId: customer.id
                }
            });
        }

        const session = await stripe.checkout.sessions.create({
            customer: stripeCustomer.stripeCustomerId,
            payment_method_types: ["card"],
            line_items,
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/listings/${listing.id}?success=1`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/listings/${listing.id}?canceled=1`,
            metadata: {
                listingId: listing.id,
                userId: currentUser.id
            }
        });

        return NextResponse.json({url: session.url});
    

        
    } catch (error) {
        console.log("Error creating checkout session:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}