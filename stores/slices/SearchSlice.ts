type SetFunction = (state: Partial<SearchState>) => void;
type GetFunction = () => SearchState;

interface SearchPlaceSpace {
  adults: number;
  childrens: number;
  infants: number;
}

interface SearchState {
  searchLocation: any;
  setSearchLocation: (location: any) => void;
  selectionType: any;
  setSelectionType: (type: any) => void;
  searchPlaceSpace: SearchPlaceSpace;
  setSearchPlaceSpace: (searchPlaceSpace: SearchPlaceSpace) => void;
  dates: any;
  setDates: (dates: any) => void;
  searchListings: any[];
  setSearchListings: (searchListings: any[]) => void;
}

export const createSearchSlice = (set: SetFunction, get: GetFunction): SearchState => ({
  searchLocation: undefined,
  setSearchLocation: (location: any) => set({ searchLocation: location }),
  selectionType: undefined,
  setSelectionType: (type: any) => set({ selectionType: type }),
  searchPlaceSpace: {
    adults: 0,
    childrens: 0,
    infants: 0,
  },
  setSearchPlaceSpace: (searchPlaceSpace: SearchPlaceSpace) => set({ searchPlaceSpace }),
  dates: undefined,
  setDates: (dates: any) => set({ dates }),
  searchListings: [],
  setSearchListings: (searchListings: any[]) => set({ searchListings }),
});
