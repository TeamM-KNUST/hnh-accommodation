import { VerificationForm } from "@/components/auth/verification-form";
import { Suspense } from "react";


const Confirm = () => {
    return (<Suspense >
       <VerificationForm/>
    </Suspense>)
}
 
export default Confirm;