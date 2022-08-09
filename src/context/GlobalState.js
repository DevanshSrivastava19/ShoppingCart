import React, { useState, useReducer } from "react";

import ShopContext from "./shop-context";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";

const GlobalState = props => {
  const products = [
    { id: "p1", title: "Gaming Mouse", price: 499.99 },
    { id: "p2", title: "Harry Potter Game", price: 899.99  },
    { id: "p3", title: "Fridge bottle set 6", price: 500.00 },
    { id: "p4", title: "Dried plant", price: 200.00 },
    { id: "p5", title: "The Half Blood Prince", price: 299.99},
    {id: "p6", title: "Book Shelf", price: 399.99},
    {id: "p7", title: "Flower Pot", price: 499.99},
    {id: "p8", title: "Helmet", price: 899.99}
  ];
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 700);
  };

  const removeProductFromCart = productId => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
