"use client";

import { CldUploadWidget} from "next-cloudinary";
import { ImageMinus} from "lucide-react";
import { useCallback, useState } from "react";
import Image from "next/image";

declare global {
  var cloudinary: any;
}
const uploadPreset = "szu1fqku";

interface UploadImageProps {
  onChange?: (value: string) => void;
  value?: string;
}

export const UploadImage = ({ onChange, value }: UploadImageProps) => {
  
  const handleUpload = useCallback(
    (result: any) => {
      onChange?.(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      uploadPreset={uploadPreset}
      onSuccess
      ={handleUpload}
      options={{
        maxFiles: 1,
      }}
     
    >
      {({ open }) => {
        return (
          <div
            className="relative hover:opacity-70
                transition duration-200 ease-in-out cursor-pointer
                border-dashed border-2 p-20 border-neutral-300 flex flex-col items-center justify-center gap-4 text-neutral-600"
            onClick={()=>open()}
          >
            <ImageMinus size={34} />
            <div className="font-semibold text-lg">Click to upload image</div>
            {value && (
              <div className="absolute inset-0 w-full h-full">
                <Image
                  fill
                  src={value}
                  alt="uploaded"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};
