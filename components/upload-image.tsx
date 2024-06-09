"use client";

import { CldUploadWidget } from "next-cloudinary";
import { Button } from "./ui/button";

export const UploadImage = () => {
  return (
   
      <CldUploadWidget
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      >
          {({ open }) => {
            return (
              <Button
                className="bg-blue-500 text-white p-2 rounded-lg"
                onClick={() => open()}
              >
                Upload Image
              </Button>
            );
          
          }}
       
      </CldUploadWidget>
  );
};
