"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { User, Reservation } from "@prisma/client";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { ListingCard } from "@/app/(dashboard)/dashboard/_components/listingCard";
import { toast } from "react-toastify";

interface TripsClientProps {
  currentUser?: User | null;
  reservations: Reservation[];
}

const TripsClient = ({ currentUser, reservations }: TripsClientProps) => {
  const router = useRouter();

  const [isdeleting, setIsDeleting] = useState("");

  const onCancel = useCallback(
    (id: string) => {
      setIsDeleting(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation canceled");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message || "Something went wrong");
        })
        .finally(() => {
          setIsDeleting("");
        });
    },
    [router]
  );
  return (
    <Container>
      <Heading
        title="Trips"
        subTitle="Where you're going and where you've been"
      />
      <div className="mt-10 grid grid-cols-1 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 xl:grid-cols-5  gap-8">
        {reservations.map((reservation: any) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            disabled={isdeleting === reservation.id}
            onAction={onCancel}
            actionLabel="Cancel Reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default TripsClient;
