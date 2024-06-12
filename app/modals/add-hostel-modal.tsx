"use client";

import useAddHostel from "@/hooks/addhostel";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Heading } from "@/components/heading";
import { UploadImage } from "@/components/upload-image";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./modal";

import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// const Modal = dynamic(() => import("./modal").then((mod) => mod.Modal), {
//   ssr: false,
// });

export const AddHostelModal = () => {
  const addModal = useAddHostel();

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      locationValue: "",
      imageSrc: "",
      category: "",
      roomCount: 0,
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
    setIsLoading(true);

    axios
      .post("/api/hostel", data)
      .then(() => {
        toast.success("Hostel added successfully");
        router.refresh();
        reset();
        addModal.onClose();
      })
      .catch(() => {
        toast.error("Error adding hostel");
      })
      .finally(() => {
        setIsLoading(false);
      });

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
      description="Add a new hostel to your listing"
      onClose={addModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="Add Hostel"
      secondaryActionLabel="okay"
      body={bodyContent}
    />
  );
};
