type SetFunction = (state: Partial<AuthState>) => void;
type GetFunction = () => AuthState;

interface AuthState {
  isAuthModalOpen: boolean;
  isLoggedIn: boolean;
  userInfo: any | null;
  setAuthModal: () => void;
  setIsLoggedIn: (status: boolean) => void;
  setUserInfo: (userInfo: any) => void;
}

export const createAuthSlice = (set: SetFunction, get: GetFunction): AuthState => ({
  isAuthModalOpen: false,
  isLoggedIn: false,
  userInfo: null,
  setAuthModal: () => {
    set({ isAuthModalOpen: !get().isAuthModalOpen });
  },
  setIsLoggedIn: (status: boolean) => {
    set({ isLoggedIn: status });
  },
  setUserInfo: (userInfo: any) => {
    set({ userInfo });
  },
});
