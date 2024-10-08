"use client";

import { Container } from "@/components/container";

import { useCallback, useMemo, useState } from "react";

import { ListingInfo } from "./lisiting-info";
import { Listing, Reservation, User } from "@prisma/client";
import { categories } from "@/data/constant";
import ListingHead from "./listingHead";
import ListingReservation from "./listing-reservation";
import { redirect, useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

type Props = {
  listing: Listing & {
    user: User;
  };
  currentUser?: User | null;
  reservations: Reservation[];
};

function ListingClient({ listing, currentUser, reservations = [] }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const disabledDates = useMemo(() => {
    return reservations.map((item) => item.totalPrice);
  }, [reservations]);

  const onCreateReservation = useCallback(() => {
    if (!currentUser) {
      return redirect("/auth/login");
    }

    setIsLoading(true);

    axios
      .post("api/reservations", {
        listingId: listing.id,
        totalPrice:
          listing.oneInARoomPrice ||
          listing.twoInARoomPrice ||
          listing.threeInARoomPrice ||
          listing.fourInARoomPrice,
      })
      .then(() => {
        toast.success("Reservation created successfully");
        router.push("/reserved");
      })

      .finally(() => {
        setIsLoading(false);
      });
  }, [
    currentUser,
    listing.id,
    router,
    listing.oneInARoomPrice,
    listing.twoInARoomPrice,
    listing.threeInARoomPrice,
    listing.fourInARoomPrice,
  ]);

  const category = useMemo(() => {
    return categories.find((item) => item.name === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc[0]}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              locationValue={listing.locationValue}
              placeAmeneites={listing.placeAmenities}
            />
            <div className="order-first mb-10 md:order-last md:col-span-2">
              <ListingReservation
                disabledDates={disabledDates}
                onSubmit={onCreateReservation}
                disabled={isLoading}
                oneInRoom={listing.oneInARoomPrice}
                twoInRoom={listing.twoInARoomPrice}
                threeInRoom={listing.threeInARoomPrice}
                fourInRoom={listing.fourInARoomPrice}
                managerName={listing.managerName}
                managerNumber={listing.managerNumber.toString()}
                address={listing.digitalAddress}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ListingClient;
