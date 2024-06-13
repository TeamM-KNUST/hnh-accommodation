"use client";

import useAddHostel from "@/hooks/addhostel";
import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { Heading } from "@/components/heading";
import { UploadImage } from "@/components/upload-image";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./modal";

import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Input } from "@/components/Input";

enum STEPS {
  IMAGES = 0,
  DESCRIPTION = 1,
  CATEGORY = 2,
}

export const AddHostelModal = () => {
  const addModal = useAddHostel();

  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.IMAGES);
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
      imageSrc: "",
      title: "",
      description: "",
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

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.DESCRIPTION) {
      return onNext();
    }

    console.log("Data", data);
    setIsLoading(true);

    axios
      .post("/api/hostels", data)
      .then((response) => {
        console.log("Response Data", response.data);
        toast.success("Hostel added successfully");
        router.refresh();
        reset();
        setStep(STEPS.IMAGES);
        addModal.onClose();
      })
      .catch((error) => {
        toast.error("Error adding hostel");
        console.log("Error response", error.response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.DESCRIPTION) {
      return "Create";
    }
    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.IMAGES) {
      return undefined;
    }
    return "Back";
  }, [step]);

  let bodyContent = (
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

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <Heading
          title="How would you describe your place?"
          subTitle="Describe your place to your guests"
        />

        <Input
          id="title"
          label="Title"
          required
          register={register}
          errors={errors}
          disabled={isLoading}
        />
        <hr />

        <Input
          id="description"
          label="Description"
          required
          register={register}
          errors={errors}
          disabled={isLoading}
        />
      </div>
    );
  }

  if (step === STEPS.CATEGORY) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <Heading
          title="What category does your place fall under?"
          subTitle="Select the category that best describes your place"
        />
      </div>
    );
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={addModal.isOpen}
      title="Add Hostel"
      description="Add a new hostel to your listing"
      onClose={addModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.DESCRIPTION ? undefined : onBack}
      body={bodyContent}
    />
  );
};
