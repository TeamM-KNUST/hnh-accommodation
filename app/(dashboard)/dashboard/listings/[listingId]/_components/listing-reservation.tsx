"use client";

import React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: any;
  oneInRoom: string;
  twoInRoom: string;
  threeInRoom: string;
  fourInRoom: string;
  managerName: string;
  managerNumber: string;
  address: string;
};

function ListingReservation({
  onSubmit,
  disabled,
  oneInRoom,
  twoInRoom,
  threeInRoom,
  fourInRoom,
  managerName,
  managerNumber,
  address,
}: Props) {
  return (
    <div className="mx-auto ml-10 ">
      <div>
        <h2 className="text-xl my-2 py-2 font-semibold ">Manager Information</h2>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-1">
            <p className="font-semibold">Manager Name:</p>
            <p className="text-gray-950">{ managerName}</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="font-semibold">Manager Number:</p>
            <p className="text-gray-950">{managerNumber}</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="font-semibold">Digital Address:</p>
            <p className="text-gray-950">{address}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold py-2 my-2">
          Potential Price Range
        </h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Room Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">One In A Room</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-950">
                Gh₵ {oneInRoom}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Two In A Room</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-950">
                Gh₵ {twoInRoom}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Three In A Room</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-950">
                Gh₵ {threeInRoom}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Four In A Room</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-950">
                Gh₵ {fourInRoom}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
          <p> {}</p>
        </div>
      </div>
    </div>
  );
}

export default ListingReservation;
