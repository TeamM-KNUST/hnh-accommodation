import getCurrentUser from "@/actions/getCurrentUser";
import ClientOnly from "@/components/client-only";
import { EmptyState } from "@/components/empty-state";
import React from "react";
import TripsClient from "./_components/tripsclient";

type Props = {};

const TripsPage = async (props: Props) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </>
    );
  }

  return (
    <ClientOnly>
      <div>asdfasdfasdfasd</div>
    </ClientOnly>
  );
};

export default TripsPage;
