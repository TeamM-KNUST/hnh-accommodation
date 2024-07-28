"use client";

import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";



interface UploadImageProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export default function UploadImage({ onChange, value }: UploadImageProps) {
const [photos, setPhotos] = useState<string[]>(value);

useEffect(() => {
  setPhotos(value);

  console.log("Value props updated", value);
}, [value]);

const handleUpload = (data:any) => {
   const newPhotoUrl = data.info.secure_url;
   const newPhotos = [...photos, newPhotoUrl];
   setPhotos(newPhotos);
   onChange(newPhotos);
};

  return (
    <div className="flex gap-5 items-center justify-center flex-col h-full">
      <h2 className="font-semibold text-lg">Add some photos of your Hostel</h2>
      <CldUploadButton
        options={{ multiple: true }}
        onSuccess={handleUpload}
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      >
        <Button variant="destructive">Upload</Button>
      </CldUploadButton>
      <div className="grid grid-cols-3 gap-4 h-[55vh] overflow-auto pb-10 no-scrollbar">
        {photos.map((photo, index) => (
          <div className="relative h-36 w-[200px]" key={index}>
            <Image src={photo} layout="fill" objectFit="cover" alt={`upload ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
