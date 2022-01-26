import React from 'react';
import { useSelector} from 'react-redux';
import { OrderItem } from '../../components/order-item';
import { calcTotalPrice } from '../../components/utils';
import './order-page.css';

export const OrderPage = () => {
    const items = useSelector((state) => state.cart.itemsInCart);

    if(items.length < 1) {
        return <h1>The cart is empty!</h1>
    }

    return (
        <div className="order-page">
            <div className="order-page__left">
                { items.map(book => <OrderItem book={book}/>)}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span> Total price: {calcTotalPrice(items)} €</span>
                </div>
            </div>
        </div>
    )
}