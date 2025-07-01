// stores/navbarStore.ts
import { create } from "zustand";


// Define the type for the store state
interface NotificationState {
  showNotification: boolean;
  setShowNotification: (show:boolean)=>void
  
}

// Create the store
const useNotification = create<NotificationState>((set) => ({
  showNotification: false,
  setShowNotification: (show: boolean) => set({ showNotification: show })

  //()=>set({})
}));

export default useNotification;
