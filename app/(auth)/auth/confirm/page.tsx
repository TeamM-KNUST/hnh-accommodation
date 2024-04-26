import { VerificationForm } from "@/components/auth/verification-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Verify account",
    description:"Enter the token on your email to verify"
}

const Confirm = () => {
    return (<div>
       <VerificationForm/>
    </div>)
}
 
export default Confirm;