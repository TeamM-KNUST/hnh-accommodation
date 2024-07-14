"use client";

import { Container } from "@/components/container";
import axios from "axios";
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Range } from "react-date-range";
import { toast } from "react-toastify";
import { ListingInfo } from "./lisiting-info";
import ListingReservation from "./listing-reservation";
import { Reservation, Listing, User } from "@prisma/client";

import { categories } from "@/data/constant";
import ListingHead from "./listingHead";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

type Props = {
  reservations?: Reservation[];
  listing: Listing & {
    user: User;
  };
  currentUser?: User | null;
};

function ListingClient({ reservations = [], listing, currentUser }: Props) {
  const router = useRouter();

  const disableDates = useMemo(() => {
    let dates: Date[] = [];

    reservations.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState<number>(listing.price ?? 0);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  const onCreateReservation = useCallback(() => {
    if (!currentUser) {
      return router.push("/auth/login");
    }

    setIsLoading(true);

    axios
      .post("/api/reservations", {
        totalPrice,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        listingId: listing?.id,
      })
      .then(() => {
        toast.success("Success!");
        setDateRange(initialDateRange);
        router.push("/trips");
      })
      .catch(() => {
        toast.error("Something Went Wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [totalPrice, dateRange, listing?.id, router, currentUser]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );

      if (dayCount && listing.price !== null) {
        setTotalPrice(dayCount * Number(listing.price));
      } else {
        setTotalPrice(Number(listing.price) ?? 0);
      }
    }
  }, [dateRange, listing.price]);
  const category = useMemo(() => {
    return categories.find((item) => item.name === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              locationValue={listing.locationValue}
            />
            <div className="order-first mb-10 md:order-last md:col-span-3">
              <ListingReservation
                price={listing.price ?? 0}
                totalPrice={totalPrice}
                onChangeDate={(value) => setDateRange(value)}
                dateRange={dateRange}
                onSubmit={onCreateReservation}
                disabled={isLoading}
                disabledDates={disableDates}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ListingClient;
