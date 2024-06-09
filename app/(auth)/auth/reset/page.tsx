import { PassswordResetForm } from "@/components/auth/password-reset-form";
import { Metadata } from "next";
import { Suspense } from "react";

const PasswordRestPage = () => {
  return (
    <Suspense >
      <PassswordResetForm />
    </Suspense>
  );
};

export default PasswordRestPage;
