"use client";

import { Toaster } from "react-hot-toast";
import { AddHostelModal } from "../modals/add-hostel-modal";
import { ToasterProvider } from "./toaster-provider";

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
    </>
  );
};
