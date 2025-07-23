import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saveCard = localStorage.getItem("cart");

    if (saveCard) {
      setCart(JSON.parse(saveCard));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((PrevCart) => {
      const existingItem = PrevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return PrevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...PrevCart, { ...product, quantity: 1 }];
    });

    const toastLiveExample = document.getElementById("livetoast");
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  };
  const removeFromCart = (productId) => {
    setCart((PrevCart) => PrevCart.filter((item) => item.id !== productId));
  };
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((PrevCart) =>
      PrevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalItem = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItem,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
