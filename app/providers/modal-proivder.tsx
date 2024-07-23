"use client";

import { Toaster } from "react-hot-toast";
import { AddHostelModal } from "../modals/add-hostel-modal";
import { ToasterProvider } from "./toaster-provider";
import { ImageDialog } from "../(dashboard)/dashboard/listings/[listingId]/_components/image-dialog";

// const AddHostelModal = dynamic(
//   () => import("../modals/add-hostel-modal").then((mod) => mod.AddHostelModal),
//   { ssr: false }
// );

export const ModalProvider = () => {
  return (
    <>
      <ToasterProvider />
      <AddHostelModal />
      <Toaster />
      <ImageDialog />
    </>
  );
};
