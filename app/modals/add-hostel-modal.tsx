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





enum STEPS {
  IMAGES = 0,
  PRICE = 1,
  AMENITIES= 2,
  DESCRIPTION = 3,
  LOCATION = 4,
  CATEGORY = 5,
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
      price: 1,
      description: "",
      location: " ",
      category: " ",
      amenities: [],
    },
  });

  const imageSrc = watch("imageSrc");
  const location = watch("location");
  const category = watch("category");
const amenities = watch("amenities");


  const setCustomValue = (id: string, value: any) => {
    console.log(`value ${id}`, value);
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
    if (step !== STEPS.CATEGORY) {
      return onNext();
    }

    console.log("Data", data);
    setIsLoading(true);

    axios
      .post("/api/hostels", data)
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
