
import { create } from 'zustand';

// Define the type for the store state
interface servicesState {
    selectedServiceId: number;
    setSelectedServiceId: (id: number) => void;
 
}

// Create the store
const useServicesStore = create<servicesState>((set) =>({
  selectedServiceId: 1, // Initial state
  setSelectedServiceId: (id: number) => set({ selectedServiceId: id }), // set service state
}));
export default useServicesStore;
