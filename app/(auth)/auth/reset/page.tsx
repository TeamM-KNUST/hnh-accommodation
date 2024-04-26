import { PassswordResetForm } from "@/components/auth/password-reset-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reset",
    description: "Reset password if forgotten "
}

const PasswordRestPage = () => {
    return (
        <PassswordResetForm />  
     );
}
 
export default PasswordRestPage;