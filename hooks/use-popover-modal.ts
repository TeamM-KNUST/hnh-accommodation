import {create} from 'zustand';

type usePopoverStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const usePopoverModal = create<usePopoverStore>((set) => ({
	isOpen: true,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));