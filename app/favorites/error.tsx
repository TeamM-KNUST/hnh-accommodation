"use client";

import { EmpltyState } from "@/components/empty-state";
import { useEffect } from "react";

type Props = {
  error: Error;
};

function ErrorState({ error }: Props) {
  useEffect(() => {
    console.log("🚀 ~ file: error.tsx:12 ~ ErrorState ~ error:", error);
  }, [error]);

  return <EmpltyState title="Uh Oh" subtitle="Something went wrong!" />;
}

export default ErrorState;
