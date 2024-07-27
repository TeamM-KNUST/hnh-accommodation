"use client";

import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

interface UploadImageProps {
  onChange: (value: string[]) => void;
  value: string[];
}

export default function UploadImage({ onChange, value }: UploadImageProps) {
  const handleUpload = (data: any) => {
    const newPhotos = data.map((photo: any) => photo.secure_url);
    onChange([...value, ...newPhotos]);
  };

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
      <div className="grid grid-cols-3 gap-4 h-[55vh] overflow-auto pb-10 no-scrollbar">
        {value.map((photo, index) => (
    
          <div className="relative h-36 w-[200px]" key={index}>
            <Image src={photo} fill alt="upload" />

          </div>
        ))}
      </div>
    </div>
  );
}
