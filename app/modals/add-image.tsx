"use client";

import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Listing, User } from "@prisma/client";

import { toast } from "react-toastify";
import { UploadImage } from "@/components/upload-image";

interface ImageFormProps {
  initialData: Listing;
  ListingId: string;
  currentUser?: User | null;
}

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Image is required",
  }),
});
export const AddImage = ({ initialData, ListingId,currentUser }: ImageFormProps) => {
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Values", values);
    try {
      await axios.post(`/api/listings/${ListingId}`, values);
      toast.success("Course updated");
      console.log("Values", values);
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div>
        <UploadImage
          onChange={(value) => onSubmit({ imageUrl: value })}
          value={initialData?.imageSrc}
        />
      </div>
    </div>
  );
};
