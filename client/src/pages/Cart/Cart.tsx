import CartItemsList from "./components/CartItemsList";
import EmptyCart from "./components/EmptyCart";
import { useCartStore } from "@/store";

const Cart = () => {
  const { cart, removeFromCart, decreaseQuantity } = useCartStore(
    (state) => state
  );

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <>
      <CartItemsList cartItems={cart} />
    </>
  );
};

export default Cart;
