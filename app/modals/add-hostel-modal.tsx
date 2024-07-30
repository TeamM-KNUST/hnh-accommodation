"use client";

import { useMemo, useState } from "react";
import { Heading } from "@/components/heading";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { locations, categories } from "@/data/constant";
import Modal from "./modal";

import axios from "axios";
import { useRouter } from "next/navigation";
import { Input } from "@/components/Input";
import { toast } from "react-toastify";

import { Combobox, ComboboxItem } from "@/components/ui/combobox";
import useAddHostel from "@/hooks/addhostel";
import UploadImage from "@/components/upload-image";
import { ProcessAmeneties } from "@/components/amenities";
import { m } from "framer-motion";

enum STEPS {
  IMAGES = 0,
  PRICE = 1,
  AMENITIES = 2,
  DESCRIPTION = 3,
  LOCATION = 4,
  MANAGER = 5,
  CATEGORY = 6,
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
      imageSrc: [],
      title: "",
      oneInRoom: "",
      twoInRoom: "",
      threeInRoom: "",
      fourInRoom: "",
      description: "",
      location: " ",
      category: " ",
      managerName: "",
      managerNumber: 0,
      address: "",
      amenities: [],
    },
  });

  const imageSrc = watch("imageSrc");
  const location = watch("location");
  const category = watch("category");
  const amenities = watch("amenities");

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
    console.log("hostel Data",data);
    if (step !== STEPS.CATEGORY) {
      return onNext();
    }

    setIsLoading(true);

    axios
      .post("/api/hostels", data)
      .then((response) => {
        toast.success("Hostel added successfully");
        router.refresh();
        reset();
        setStep(STEPS.IMAGES);
        addModal.onClose();
      })
      .catch((error) => {
        toast.error(error.response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
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
          title="What is the potential price range your rooms?"
          subTitle="Set a price for your students"
        />

        <Input
          id="oneInRoom"
          label="One in a room"
          required
          register={register}
          errors={errors}
          disabled={isLoading}
          formatPrice
        />
        <hr />

        <Input
          id="twoInRoom"
          label="Two in a room"
          required
          register={register}
          errors={errors}
          disabled={isLoading}
          formatPrice
        />

        <hr />

        <Input
          id="threeInRoom"
          label="Three in a room"
          required
          register={register}
          errors={errors}
          disabled={isLoading}
          formatPrice
        />

        <hr />

        <Input
          id="fourInRoom"
          label="Four in a room"
          required
          register={register}
          errors={errors}
          disabled={isLoading}
          formatPrice
        />
      </div>
    );
  }

  if (step === STEPS.AMENITIES) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <Heading
          title="What amenities does your place have?"
          subTitle="Select the amenities that your place has"
        />
        <ProcessAmeneties
          value={amenities}
          onChange={(value) => setCustomValue("amenities", value)}
        />
      </div>
    );
  }

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

  if (step === STEPS.MANAGER) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <Heading
          title="Who is the manager of your place?"
          subTitle="Enter the manager details"
        />

        <Input
          id="managerName"
          label="Manager Name"
          required
          register={register}
          errors={errors}
          disabled={isLoading}
        />
        <hr />

        <Input
          id="managerNumber"
          label="Manager Number"
          type="number"
          required
          register={register}
          errors={errors}
          disabled={isLoading}
        />

        <hr />

        <Input
          id="address"
          label="Address"
          required
          register={register}
          errors={errors}
          disabled={isLoading}
        />
      </div>
    );
  }

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Where is your place located?"
          subTitle="Enter the location of your place"
        />
        <Combobox
          onChange={(data) => setCustomValue("location", data)}
          data={location}
        >
          {locations.map((location) => (
            <ComboboxItem
              key={location.id}
              name={location.name}
              id={location.id || ""}
              onSelect={(name) => setCustomValue("location", name)}
              selectedValue={location.name}
            />
          ))}
        </Combobox>

        {/* <Map center={location?.latlng} /> */}
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
        <Combobox
          onChange={(data) => setCustomValue("category", data)}
          data={category}
        >
          {categories.map((category) => (
            <ComboboxItem
              key={category.id}
              id={category.id}
              name={category.name}
              onSelect={(name) => setCustomValue("category", name)}
              selectedValue={category.name}
            />
          ))}
        </Combobox>
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
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      body={bodyContent}
    />
  );
};
