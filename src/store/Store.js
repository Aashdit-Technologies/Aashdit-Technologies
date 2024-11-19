import { create } from "zustand";

const useAuthStore = create((set) => ({
  token: sessionStorage.getItem("token") || null,
  authenticated: !!sessionStorage.getItem("token"),
  data: [], // Initialize data as an empty array
  menuData: [],
  
  setToken: (token) => {
    sessionStorage.setItem("token", token);
    set({ token, authenticated: true });
  },
  clearAuth: () => {
    sessionStorage.removeItem("token");
    set({ token: null, authenticated: false }); 
  },
  setData: (data) => set({ data }),
  setMenuData: (menuData) => set({ menuData }),
}));

export default useAuthStore;
