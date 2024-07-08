import { RegisterForm } from "@/components/auth/register-form";
import { Metadata } from "next";
import { Suspense } from "react";


export const metadata: Metadata = {
    title: "Register",
    description: "Register for an account",
}

const RegisterPage = () => {
	  return (
      <Suspense>
        <RegisterForm />
      </Suspense>
    );
};

export default RegisterPage;
