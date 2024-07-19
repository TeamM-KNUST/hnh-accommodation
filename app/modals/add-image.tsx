"use client";

import { useMemo, useState } from "react";
import { Heading } from "@/components/heading";
import { UploadImage } from "@/components/upload-image";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { locations, categories } from "@/data/constant";
import Modal from "./modal";

import axios from "axios";
import { useRouter } from "next/navigation";
import { Input } from "@/components/Input";
import { toast } from "react-toastify";

import { Combobox, ComboboxItem } from "@/components/ui/combobox";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { RoomCount, RoomType } from "@prisma/client";
import useAddImage from "@/hooks/addImage";

enum STEPS {
  IMAGES = 0,
  PRICE = 1,
  CAPACITY = 2,
  TYPE=3,
}

export const AddImage = () => {
  const addModal = useAddImage();

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
      price: 1,
      description: "",
      location: " ",
      category: " ",
      capacity: RoomCount.ONE_IN_A_ROOM,
      type:RoomType.MALE,

    },
  });

  const imageSrc = watch("imageSrc");
  const location = watch("location");
  const category = watch("category");

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
    if (step !== STEPS.TYPE) {
      return onNext();
    }

    console.log("Data", data);
    setIsLoading(true);

    axios
      .post("/api/hostels/images", data)
      .then((response) => {
        console.log("Response", response.data);
        toast.success("Hostel added successfully");
        router.refresh();
        reset();
        setStep(STEPS.IMAGES);
        addModal.onClose();
      })
      .catch((error) => {
        toast.error(error.response.data);
        console.log("Error response", error.response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.TYPE) {
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

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <Heading
          title="How much do you want to charge for your place?"
          subTitle="Set a price for your guests"
        />

        <Input
          id="price"
          label="Price"
          type="number"
          required
          register={register}
          errors={errors}
          disabled={isLoading}
          formatPrice
        />
      </div>
    );
  }

  if (step === STEPS.CAPACITY) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <Heading
          title="How many guests can your place accommodate?"
          subTitle="Set the number of guests your place can accommodate"
        />

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Room Capacity" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Room Capacity</SelectLabel>
              {Object.values(RoomCount).map((count) => (
                <SelectItem key={count} value={count}>
                  {count}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  }


  if (step === STEPS.TYPE) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <Heading
          title="What type of hostel is this?"
          subTitle="Select the type of hostel"
        />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Room Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Room Type</SelectLabel>
              {Object.values(RoomType).map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={addModal.isOpen}
      title="Add Images"
      description="Add a new hostel hostel image"
      onClose={addModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.TYPE ? undefined : onBack}
      body={bodyContent}
    />
  );
};
