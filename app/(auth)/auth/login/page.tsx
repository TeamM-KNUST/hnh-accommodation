import { LoginForm } from "@/components/auth/login-form";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Login",
    description: "Login to your account",
}


const LoginPage = () => {
      return (
		  <Suspense>
          <LoginForm />
        </Suspense>
      );
}
 
export default LoginPage;