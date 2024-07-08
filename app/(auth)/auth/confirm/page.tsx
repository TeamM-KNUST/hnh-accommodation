import { VerificationForm } from "@/components/auth/verification-form";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Confirm Email",
    description: "Confirm your email address",
}

const Confirm = () => {
    return (<Suspense >
       <VerificationForm/>
    </Suspense>)
}
 
export default Confirm;