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

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  description: z.string().min(4, {
    message: "Description should be at least 4 characters",
  }),
  title: z.string().min(4, { 
    message: "Title should be at least 4 characters",
  }),
});



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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

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
      description: "",
      category: "",
    },
  });

  const imageSrc = watch("imageSrc");
  const description = watch("description");
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
    if (step !== STEPS.CATEGORY) {
      return onNext();
    }
    setIsLoading(true);

    axios
      .post("/api/hostels", data)
      .then((response) => {
        console.log("Response Data", response.data);
        toast.success("Hostel added successfully");
        router.refresh();
        reset();
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

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <Heading
          title="How would you describe your place?"
          subTitle="Describe your place to your guests"
        />

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="eg. 'Happy Hostel'"
                      disabled={isSubmitting}
                      className="outline-none focus-visible:ring-0 focus-visible:ring-muted"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="eg. 'A cozy place in the heart of the city' "
                      disabled={isSubmitting}
                      className="outline-none focus-visible:ring-0 focus-visible:ring-muted"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
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
