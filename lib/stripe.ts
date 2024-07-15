import Stripe from "stripe"

export const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY!, {
        apiVersion: "2024-06-20",
        appInfo: {
            name: "hostel finder",
            version: "0.0.0",
            url:"https://localhost:3000"
        },
        typescript: true,
        
    }

)