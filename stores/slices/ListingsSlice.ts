type SetFunction = (state: Partial<ListingsState>) => void;
type GetFunction = () => ListingsState;

interface ListingsState {
  wishLists: any[];
  setWishLists: (wishLists: any[]) => void;
  wishListsPage: any[];
  setWishListsPage: (wishListsPage: any[]) => void;
  addToWishListSlice: (id: any) => void;
  removeFromWishList: () => void;
  currentListing: any | undefined;
  setCurrentListing: (listing: any) => void;
  removeUserListing: (listing: any) => void;
  isMapView: boolean;
  listings: any[];
  showScheduleBar: boolean;
  userListings: any[];
  setUserListings: (userListings: any[]) => void;
  setMapView: () => void;
  setInitialView: () => void;
  setListings: (listings: any[]) => void;
  setShowScheduleBar: () => void;
}

export const createLisitingsSlice = (set: SetFunction, get: GetFunction): ListingsState => ({
  wishLists: [],
  setWishLists: (wishLists: any[]) => set({ wishLists }),
  wishListsPage: [],
  setWishListsPage: (wishListsPage: any[]) => set({ wishListsPage }),
  addToWishListSlice: (id: any) => {
    const lists = get().wishLists;
    lists.push(id);
    set({ wishLists: lists });
  },
  removeFromWishList: () => {},
  currentListing: undefined,
  setCurrentListing: (listing: any) => set({ currentListing: listing }),
  removeUserListing: (listing: any) => {
    const listings = get().userListings;
    const index = listings.findIndex((list) => list.id === listing);
    if (index !== -1) {
      listings.splice(index, 1);
    }
    set({ userListings: listings });
  },
  isMapView: false,
  listings: [],
  showScheduleBar: false,
  userListings: [],
  setUserListings: (userListings: any[]) => set({ userListings }),
  setMapView: () => {
    set({ isMapView: !get().isMapView });
  },
  setInitialView: () => {
    set({ isMapView: false });
  },
  setListings: (listings: any[]) => {
    set({ listings });
  },
  setShowScheduleBar: () => {
    set({ showScheduleBar: !get().showScheduleBar });
  },
});
