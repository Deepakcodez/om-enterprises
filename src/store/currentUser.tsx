// stores/navbarStore.ts
import { create } from "zustand";

type UserT = {
  name: string;
  email: string;
  phone: string;
  role : string;
  _id: string;
};
// Define the type for the store state
interface UserState {
  currentUser: UserT | null;
  setCurrentUser: (user: UserT) => void;
}

// Create the store
const useCurrentUser = create<UserState>((set) => ({
  currentUser: null,
  setCurrentUser: (user: UserT) => set({ currentUser: user }) 
  //()=>set({})
}));

export default useCurrentUser;
