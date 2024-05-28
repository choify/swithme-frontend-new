import { create } from "zustand";

interface AuthStore {
  logged: boolean;
  setLogged: (logged: boolean) => void;
}

export const useAuthStore = create<AuthStore>()((set) => ({
  logged: false,
  setLogged: (logged) => set((state) => ({ logged })),
}));
