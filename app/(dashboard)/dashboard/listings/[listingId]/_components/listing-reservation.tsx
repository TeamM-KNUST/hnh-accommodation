"use client";

import React from "react";
import { Button } from "@/components/ui/button";

type Props = {

  totalPrice: number;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
};

function ListingReservation({
  totalPrice,
  onSubmit,
  disabled,
}: Props) {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <p className="flex gap-1 text-2xl font-semibold">
         <p className="font-light text-neutral-600">year</p>
        </p>
      </div>

      <hr />
      <div className="p-4">
        <Button variant="destructive" disabled={disabled} onClick={onSubmit} className="w-full">
          Reserve
        </Button>
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <p>Total</p>
        <p> {totalPrice}</p>
      </div>
    </div>
  );
}

export default ListingReservation;
