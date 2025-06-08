// stores/useModalStore.ts
import { create } from "zustand";

export type ModalType = "none" | "form" | "policy";

interface ModalStore {
  type: ModalType;
  open: (type: ModalType) => void;
  close: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  type: "none",
  open: (type) => set({ type }),
  close: () => set({ type: "none" }),
}));
