import { devtools, persist } from "zustand/middleware";

import { create } from "zustand";

const useCartStore = create<CartStoreStateType>()(
  persist(
    devtools((set, get) => ({
      cart: [],
      addToCart: (product: CartItemType) => {
        set((state) => {
          const cartItem = state.cart.find(
            (item) =>
              item.restaurantId === product.restaurantId &&
              item.dishId === product.dishId
          );
          if (cartItem) {
            return {
              cart: state.cart.map((item) =>
                item.restaurantId === product.restaurantId &&
                item.dishId === product.dishId
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return {
            cart: [
              ...state.cart,
              {
                restaurantId: product.restaurantId,
                dishId: product.dishId,
                name: product.name,
                price: product.price,
                quantity: 1,
              },
            ],
          };
        });
      },
      removeFromCart: (restaurantId: number, dishId: number) => {
        set((state) => ({
          cart: state.cart.filter(
            (item) =>
              item.restaurantId !== restaurantId && item.dishId !== dishId
          ),
        }));
      },
      increaseQuantity: (restarantId: number, dishId: number) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.restaurantId === restarantId && item.dishId === dishId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }));
      },
      decreaseQuantity: (restaurantId: number, dishId: number) => {
        set((state) => {
          const cartItem = state.cart.find(
            (item) =>
              item.restaurantId === restaurantId && item.dishId === dishId
          );
          if (cartItem && cartItem.quantity > 1) {
            return {
              cart: state.cart.map((item) =>
                item.restaurantId === restaurantId && item.dishId === dishId
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            };
          }
          return {
            cart: state.cart.filter(
              (item) =>
                item.restaurantId !== restaurantId && item.dishId !== dishId
            ),
          };
        });
      },
      getQuantity: (restaurantId: number, dishId: number) => {
        const cartItem = get().cart.find(
          (item) => item.restaurantId === restaurantId && item.dishId === dishId
        );
        return cartItem ? cartItem.quantity : 0;
      },
    })),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
