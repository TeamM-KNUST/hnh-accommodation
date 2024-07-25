type SetFunction = (state: Partial<ProcessState>) => void;
type GetFunction = () => ProcessState;

interface PlaceSpace {
  bathrooms: number;
  beds: number;
  guests: number;
}

interface ProcessState {
  resetNewListingData: () => void;
  locationType: any;
  setLocationType: (locationType: any) => void;
  placetype: any;
  setPlaceType: (placetype: any) => void;
  mapData: any;
  setMapData: (mapData: any) => void;
  locationData: any;
  setLocationData: (locationData: any) => void;
  placeSpace: PlaceSpace;
  setPlaceSpace: (placeSpace: PlaceSpace) => void;
  placeAmeneites: any[];
  setPlaceAmenities: (placeAmeneites: any[]) => void;
  photos: any[];
  setPhotos: (photos: any[]) => void;
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  price: number;
  setPrice: (price: number) => void;
}

export const createProcessSlice = (set: SetFunction, get: GetFunction): ProcessState => ({
  resetNewListingData: () =>
    set({
      locationType: undefined,
      placetype: undefined,
      mapData: undefined,
      locationData: undefined,
      placeSpace: { bathrooms: 1, beds: 1, guests: 4 },
      placeAmeneites: [],
      photos: [],
      title: "",
      description: "",
      price: 0,
    }),
  locationType: undefined,
  setLocationType: (locationType: any) => set({ locationType }),
  placetype: undefined,
  setPlaceType: (placetype: any) => set({ placetype }),
  mapData: undefined,
  setMapData: (mapData: any) => set({ mapData }),
  locationData: undefined,
  setLocationData: (locationData: any) => set({ locationData }),
  placeSpace: { bathrooms: 1, beds: 1, guests: 4 },
  setPlaceSpace: (placeSpace: PlaceSpace) => set({ placeSpace }),
  placeAmeneites: [],
  setPlaceAmenities: (placeAmeneites: any[]) => set({ placeAmeneites }),
  photos: [],
  setPhotos: (photos: any[]) => set({ photos }),
  title: "",
  setTitle: (title: string) => set({ title }),
  description: "",
  setDescription: (description: string) => set({ description }),
  price: 0,
  setPrice: (price: number) => set({ price }),
});
