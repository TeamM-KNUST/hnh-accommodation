"use client";

import useAddHostel from "@/hooks/addhostel";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Heading } from "@/components/heading";
import { UploadImage } from "@/components/upload-image";

const Modal = dynamic(() => import("./modal").then((mod)=> mod.Modal), { ssr: false });

export const AddHostelModal = () => {
  const addModal = useAddHostel();

  const [isLoading, setIsLoading] = useState(false);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Add Photo to your place"
        subTitle="How guests what your place looks like"
      />
      <UploadImage />

    </div>
  );
  
  return (
    <Modal
      disabled={isLoading}
      isOpen={addModal.isOpen}
      title="Add Hostel"
      description="Add a new hostel to your account"
      onClose={addModal.onClose}
      onSubmit={() => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          addModal.onClose();
        }, 2000);
      }}
      actionLabel="Add Hostel"
      secondaryActionLabel="Cancel"
      secondaryAction={addModal.onClose}
      body={bodyContent}
    />
  );
};
