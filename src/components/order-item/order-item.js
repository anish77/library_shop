import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BookCover } from '../book-cover/book-cover';
import './order-item.css';
import { deleteItemFromCart } from '../../store/cart/reducer';

export const OrderItem = ({ book }) => {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        dispatch(deleteItemFromCart(book.id))
    }
    return (
        <div className="order-item">
            <div className="order-item__cover">
                <BookCover image={ book.image }/>
            </div>
            <div className="order-item__title">
                <span> { book.title } </span>
            </div>
            <div className="order-item__price">
                <span>{ book.price } €</span>
                <AiOutlineCloseCircle
                    size={25}
                    className="cart-item__delete-icon"
                    onClick={handleDeleteClick}
                />
            </div>
        </div>
    )
}