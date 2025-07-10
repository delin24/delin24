import { create } from "zustand";

interface ModalStore {
  type: "none" | "form" | "policy";
  goalId?: string;
  open: (type: ModalStore["type"], goalId?: string) => void;
  close: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  type: "none",
  goalId: undefined,
  open: (type, goalId) => set({ type, goalId }),
  close: () => set({ type: "none", goalId: undefined }),
}));
