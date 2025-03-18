import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useToastStore = create<ToastStoreStateType>()(
  devtools((set) => ({
    toastState: {
      message: "",
      type: "info",
      isOpen: false,
    },
    setToast: (toastState: ToastType) => {
      set({ toastState });
    },
    handleClose: () => {
      set({
        toastState: {
          message: "",
          type: "info",
          isOpen: false,
        },
      });
    },
  }))
);

export default useToastStore;
