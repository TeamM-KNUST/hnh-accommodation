"use client";

import React from "react";
import { Range } from "react-date-range";
import { Button } from "@/components/ui/button";
import Calendar from "@/components/calendar";

type Props = {
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
};

function ListingReservation({
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}: Props) {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <p className="flex gap-1 text-2xl font-semibold">
         <p className="font-light text-neutral-600">year</p>
        </p>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
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
