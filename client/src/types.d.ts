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

type CartItemType = {
  restaurantId: number;
  dishId: number;
  name: string;
  price: number;
  quantity: number;
};

type CartStoreStateType = {
  cart: CartItemType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (restaurantId: number, dishId: number) => void;
  increaseQuantity: (restaurantId: number, dishId: number) => void;
  decreaseQuantity: (restaurantId: number, dishId: number) => void;
  getQuantity: (restaurantId: number, dishId: number) => number;
};
