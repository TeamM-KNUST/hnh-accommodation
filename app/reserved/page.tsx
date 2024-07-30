import getReservation from "@/actions/get-reservation";
import getCurrentUser from "@/actions/getCurrentUser";
import ClientOnly from "@/components/client-only";
import { EmptyState } from "@/components/empty-state";
import React from "react";
import TripsClient from "./_components/tripsclient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();
  const reservations = await getReservation({ userId: currentUser?.id });

  if (!currentUser) {
    return (
      <>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </>
    );
  }

  if (!reservations) {
    return (
      <>
        <EmptyState
          title="You don't have any trips."
          subtitle="Try adjusting your search or filters to find what you're looking for."
        />
      </>
    );
  }

  return (
    <ClientOnly>
    <TripsClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default TripsPage;
