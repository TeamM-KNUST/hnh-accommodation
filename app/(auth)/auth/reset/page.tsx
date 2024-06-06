import { PassswordResetForm } from "@/components/auth/password-reset-form";
import { Metadata } from "next";
import { Suspense } from "react";

const PasswordRestPage = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <PassswordResetForm />
    </Suspense>
  );
};

export default PasswordRestPage;
