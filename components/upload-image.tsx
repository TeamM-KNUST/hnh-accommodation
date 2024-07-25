"use client";

import { CldUploadButton } from "next-cloudinary";
import { useCallback } from "react";
import Image from "next/image";

declare global {
  var cloudinary: any;
}

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
    <div className="flex gap-5 items-center justify-center flex-col h-full">
      <h2 className="font-semibold text-lg">Add some photos of your Hostel</h2>
      <CldUploadButton
        options={{ multiple: true }}
        onSuccess={handleUpload}
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      >
        <span className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-36 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600">
          Upload
        </span>
      </CldUploadButton>
      {value && (
        <div className=" absolute inset-0 w-full h-full">
          <Image
            alt="uploade"
            fill
            style={{ objectFit: "cover" }}
            src={value}
          />
        </div>
      )}
    </div>
  );
};