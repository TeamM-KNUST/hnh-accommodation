"use client";

import React from "react";
import { Button } from "@/components/ui/button";

type Props = {

  totalPrice: number;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: any;
};

function ListingReservation({
  totalPrice,
  onSubmit,
  disabled,
}: Props) {
  return (
    <div className="mx-auto ml-10 ">
      <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden ">
        <div className="flex flex-row items-center gap-1 p-4">
          <p className="flex gap-1 text-2xl font-semibold">
            <p className="font-light text-neutral-600">year</p>
          </p>
        </div>

        <hr />
        <div className="p-4">
          <Button
            variant="destructive"
            disabled={disabled}
            onClick={onSubmit}
            className="w-full"
          >
            Reserve
          </Button>
        </div>
        <hr />
        <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
          <p>Total</p>
          <p> {totalPrice}</p>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold py-2 my-2">Potential Price Range</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">One In A Room</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-950">Gh 100</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Two In A Room</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-950">$80</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Three In A Room</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-950">$60</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Four In A Room</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-950">$50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListingReservation;
