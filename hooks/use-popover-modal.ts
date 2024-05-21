import create from 'zustand';

type usePopoverStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const usePopoverModal = create<usePopoverStore>((set) => ({
  isOpen: true,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));