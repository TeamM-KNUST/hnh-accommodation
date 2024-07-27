import { create } from 'zustand';

interface ProcessState {
  locationType?: string;
  setLocationType: (locationType?: string) => void;
  placetype?: string;
  setPlaceType: (placetype?: string) => void;
  mapData?: any;
  setMapData: (mapData?: any) => void;
  locationData?: any;
  setLocationData: (locationData?: any) => void;
  placeSpace: { OneInRoom: number; TwoInRoom: number; ThreeInRoom: number; FourInRoom: number };
  setPlaceSpace: (placeSpace: { OneInRoom: number; TwoInRoom: number; ThreeInRoom: number; FourInRoom: number }) => void;
  placeAmenities: any[];
  setPlaceAmenities: (placeAmenities: any[]) => void;
  photos: any[];
  setPhotos: (photos: any[]) => void;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  price: number;
  setPrice: (price: number) => void;
  resetNewListingData: () => void;
}

const useProcessStore = create<ProcessState>((set) => ({
  locationType: undefined,
  setLocationType: (locationType) => set({ locationType }),
  placetype: undefined,
  setPlaceType: (placetype) => set({ placetype }),
  mapData: undefined,
  setMapData: (mapData) => set({ mapData }),
  locationData: undefined,
  setLocationData: (locationData) => set({ locationData }),
  placeSpace: { OneInRoom: 1, TwoInRoom: 1, ThreeInRoom: 4, FourInRoom: 3 },
  setPlaceSpace: (placeSpace) => set({ placeSpace }),
  placeAmenities: [],
  setPlaceAmenities: (placeAmenities) => set({ placeAmenities }),
  photos: [],
  setPhotos: (photos) => set({ photos }),
  title: "",
  setTitle: (title) => set({ title }),
  description: "",
  setDescription: (description) => set({ description }),
  price: 0,
  setPrice: (price) => set({ price }),
  resetNewListingData: () =>
    set({
      locationType: undefined,
      placetype: undefined,
      mapData: undefined,
      locationData: undefined,
      placeSpace: { OneInRoom: 1, TwoInRoom: 1, ThreeInRoom: 4, FourInRoom: 3 },
      placeAmenities: [],
      photos: [],
      title: "",
      description: "",
      price: 0,
    }),
}));

export default useProcessStore;
