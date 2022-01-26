import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../button";
import { setItemInCart, deleteItemFromCart } from "../../redax/cart/reducer";
import "./book-buy.css";

export const BookBuy = ({ book }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === book.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(book.id));
    } else {
      dispatch(setItemInCart(book));
    }
  };

  return (
    <div className="book-buy">
      <span className="book-buy__price">{book.price} €</span>
      <Button
        type={isItemInCart ? "secondary" : "primary" }
        onClick={handleClick}
      >
        {isItemInCart ? "delete from the cart" : "to the cart"}
      </Button>
    </div>
  );
};
