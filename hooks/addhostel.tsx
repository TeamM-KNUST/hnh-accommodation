import { create } from "zustand";

interface AddHostelStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddHostel = create<AddHostelStore>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddHostel;
