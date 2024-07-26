"use client";
import React, { useState } from "react";
import { userAppStore } from "@/store/store";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

export const Photos=()=> {
  const { photos, setPhotos } = userAppStore();
  const handleUpload = (data) => {
    setPhotos([...photos, data.info.secure_url]);
  };
  return (
    <div className="flex gap-5 items-center justify-center flex-col h-full">
      <h2 className="font-semibold text-4xl">Add some photos of your house</h2>
      <p>
        You'll need 5 photos to get started. You can add more or make changes
        later.
      </p>
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
        {photos.map((photo) => (
          <div className="relative h-36 w-[200px]" key={photo}>
            <Image src={photo.Photos} fill alt="upload" />
          </div>
        ))}
      </div>
    </div>
  );
}
