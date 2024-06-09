"use client";

import useAddHostel from "@/hooks/addhostel";
import { useState } from "react";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("./modal").then((mod)=> mod.Modal), { ssr: false });

export const AddHostelModal = () => {
  const addModal = useAddHostel();

  const [isLoading, setIsLoading] = useState(false);
  return (
    <Modal
      disabled={isLoading}
      isOpen={addModal.isOpen}
      title="Add Hostel"
      onClose={addModal.onClose}
      onSubmit={() => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          addModal.onClose();
        }, 2000);
      }}
    />
  );
};
