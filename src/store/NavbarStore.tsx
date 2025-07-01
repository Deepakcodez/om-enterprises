// stores/navbarStore.ts
import { create } from 'zustand';

// Define the type for the store state
interface NavbarState {
  isOpen: boolean;
  toggleNavbar: () => void;
  openNavbar: () => void;
  closeNavbar: () => void;
}

// Create the store
const useNavbarStore = create<NavbarState>((set) => ({
  isOpen: false, // Initial state: navbar is closed
  toggleNavbar: () => set((state) => ({ isOpen: !state.isOpen })), // Toggle navbar state
  openNavbar: () => set({ isOpen: true }), // Open navbar
  closeNavbar: () => set({ isOpen: false }), // Close navbar
}));

export default useNavbarStore;