import React from "react";

export default React.createContext({
  products: [
    { id: "p1", title: "Gaming Mouse", price: 499.99 },
    { id: "p2", title: "Harry Potter Game", price: 899.99  },
    { id: "p3", title: "Fridge bottle set 6", price: 500.00 },
    { id: "p4", title: "Dried plant", price: 200.00 },
    { id: "p5", title: "The Half Blood Prince", price: 299.99},
    {id: "p6", title: "Book Shelf", price: 399.99},
    {id: "p7", title: "Flower Pot", price: 499.99},
    {id: "p8", title: "Helmet", price: 899.99}
  ],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});
