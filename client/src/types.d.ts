type ToastStoreStateType = {
  toastState: ToastType;
  setToast: (toast: ToastType) => void;
  handleClose: () => void;
};

type ToastType = {
  message: string;
  type: "error" | "success" | "info";
  isOpen: boolean;
};
