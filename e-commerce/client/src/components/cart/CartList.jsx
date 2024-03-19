import React, { useEffect, useState } from 'react';

import './CartList.css';

import CartListItems from './CartListItems';

const CartList = (props) => {

    const [ cartItems, setCartItems ] = useState(props.items);

    // useEffect(() => {
    //     setCartItems(props.items)
    // }, [props]);
    const deleteItem = (prodId) => {
        setCartItems(prevItems => {
            const newCartItems = prevItems.filter(prod => {
                if( prod.prodId._id !== prodId ){
                    return prod;
                }
            });
            return newCartItems;
        })
    };

    // checking wheather cart is empty or not
    useEffect(() => {
        if(!cartItems || !cartItems.length){
            props.checkingStatus();
        }
    }, [cartItems]);
    
    return (
        <div className="cart-list">
            <div className="items-names">
                <article>
                    <p>ITEM</p>
                </article>
                <article>
                    <p>PRICE</p>
                </article>
                <article>
                    <p>QUANTITY</p>
                </article>
                <article>
                    <p>SUBTOTAL</p>
                </article>
                <article>
                    <p>REMOVE</p>
                </article>
            </div>
            <hr />
            <ul className='list-items-section'>
                {/* {props.items.map(item => <CartListItems key={item._id} item={item}/> )} */}
                {cartItems.map(item => <CartListItems key={item.prodId._id} item={item} deleteItem={deleteItem} userId={props.userId} /> )}
            </ul>
            <hr />
        </div>
    )
}

export default CartList
