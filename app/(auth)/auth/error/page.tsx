import { ErrorCard } from "@/components/auth/error-card";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Error",
    description:"A page to cater for error incase something went wrong"
}

const AuthErrorPage = () => {
    return ( 
        <ErrorCard/>
     );
}
 
export default AuthErrorPage;