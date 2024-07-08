import { PassswordResetForm } from "@/components/auth/password-reset-form";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Password Reset",
  description: "Reset your password",
};

const PasswordRestPage = () => {
  return (
    <Suspense>
      <PassswordResetForm />
    </Suspense>
  );
};

export default PasswordRestPage;
