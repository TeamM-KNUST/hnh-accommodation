"use client";

import useAddHostel from "@/hooks/addhostel";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Heading } from "@/components/heading";
import { UploadImage } from "@/components/upload-image";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const Modal = dynamic(() => import("./modal").then((mod) => mod.Modal), {
  ssr: false,
});

export const AddHostelModal = () => {
  const addModal = useAddHostel();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      location: "",
      imageSrc: "",
    },
  });

  const imageSrc = watch("imageSrc");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Add Photo to your place"
        subTitle="How guests what your place looks like"
      />
      <UploadImage
        onChange={(value) => setCustomValue("imageSrc", value)}
        value={imageSrc}
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={addModal.isOpen}
      title="Add Hostel"
      description="Add a new hostel to your account"
      onClose={addModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="Add Hostel"
      secondaryActionLabel="Cancel"
      secondaryAction={addModal.onClose}
      body={bodyContent}
    />
  );
};
