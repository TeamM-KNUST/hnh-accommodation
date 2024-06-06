import { VerificationForm } from "@/components/auth/verification-form";
import { Suspense } from "react";


const Confirm = () => {
    return (<Suspense fallback ={<div>Loading ...</div>}>
       <VerificationForm/>
    </Suspense>)
}
 
export default Confirm;