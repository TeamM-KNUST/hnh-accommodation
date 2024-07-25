"use client";

import { Listing, User, Reservation} from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeartButton from "./heart-button";
import { useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface ListingCardProps {
  data: Listing;
  currentUser?: User | null;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  secondaryAction?: string;
  secondaryActionLabel?: string;
  roomPrice?: number;
}

export const ListingCard = ({
  data,
  currentUser,
  reservation,
  onAction,
  disabled,
  actionId,
  actionLabel,
  secondaryAction,
  secondaryActionLabel,
  roomPrice

}: ListingCardProps) => {
  const router = useRouter();
 

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) return;

      if (actionId !== undefined) {
        onAction?.(actionId);
      }
    },
    [onAction, actionId, disabled]
  );

  const handleCreate = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) return;

      if (actionId !== undefined) {
        onAction?.(actionId);
      }
    },
    [onAction, actionId, disabled]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return roomPrice

  }, [reservation, roomPrice]);

  const reservationDate = useMemo(() => {
    if (!reservation) return null;

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "MMM dd")} - ${format(end, "MMM dd")}`;
  }, [reservation]);

  return (
    <div
      onClick={() => router.push(`/dashboard/listings/${data.id}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            src={data.imageSrc}
            alt="hostel"
            className="object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
          />
          <div className="absolute top-3 right-3">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold">{data.title}</h3>
          <p className="text-sm text-gray-500">{data.description}</p>
          <div className="flex items-center justify-between">
            <div className="font-light text-neutral-500">
              {reservationDate || data.category}
            </div>
            <div className="flex flex-row items-center gap-">
              <div className="flex gap-1 font-semibold">
                {price} {!reservation && <div className="font-light">year</div>}
              </div>
            </div>
          </div>
        </div>

        {onAction && actionLabel && (
          <div className="flex items-center justify-between gap-x-5">
            <Button
              onClick={handleCreate}
              disabled={disabled}
              className={`${
                disabled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-500 text-white"
              } py-2 rounded-md`}
            >
              {secondaryActionLabel}
            </Button>
            <Button
              onClick={handleCancel}
              disabled={disabled}
              className={`${
                disabled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-red-500 text-white"
              } py-2 rounded-md`}
            >
              {actionLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
//loading skeleton
