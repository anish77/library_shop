import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../button";
import { calcTotalPrice } from "../utils";
import "./cart-menu.css";

export const CartMenu = ({ onClick }) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  return (
    <div className="cart-menu">
      <div className="cart-menu__books-list">
        {items.length > 0
          ? items.map((book) => 
          <div className="cart-menu__items">
          <span>{book.title}</span>
          <span>{book.price}</span>
          </div>
          
         ) : "The cart is empty"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Total:</span>
            <span>{calcTotalPrice(items)} €</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Confirm the order
          </Button>
        </div>
      ) : null}
    </div>
  );
};

