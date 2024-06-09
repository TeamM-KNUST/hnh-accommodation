"use client";

import dynamic from "next/dynamic";
const AddHostelModal = dynamic(
  () => import("../modals/add-hostel-modal").then((mod) => mod.AddHostelModal),
  { ssr: false }
);


export const ModalProvider = () => {
  return (
    <>
      <AddHostelModal />
    </>
  );
};
