import { create } from "zustand";

interface AddImageStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddImage = create<AddImageStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddImage;
