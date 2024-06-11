"use client";

import { AddHostelModal } from "../modals/add-hostel-modal";


// const AddHostelModal = dynamic(
//   () => import("../modals/add-hostel-modal").then((mod) => mod.AddHostelModal),
//   { ssr: false }
// );


export const ModalProvider = () => {
  return (
    <>
      <AddHostelModal />
    </>
  );
};
