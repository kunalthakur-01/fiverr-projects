import React, { useContext, useEffect, useState } from 'react';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

import './Cart.css';

import CartList from './CartList';
import cart from '../../assets/cart.png';

import useHttp from '../../hooks/http-hook';
import { contextManage } from '../../context/ManageState';
import LoadingSpinner from '../UI/LoadingSpinner';
import { getcart } from '../../api/HttpOtherApis';
import { CiSaveDown2 } from 'react-icons/ci';
import { useCallback } from 'react';


const Cart = () => {

    const { sendRequest, data, error, status } = useHttp(getcart);
    const [cartItems, setcartItems] = useState(null);
    const ctx = useContext(contextManage);
    
    useEffect(() => {
        if(ctx.token){
            sendRequest( ctx.userData.userId );
        }
        else {
            setcartItems(null);
        }
    }, [ctx, ctx.token]);

    useEffect(() => {
        if(status === "completed" && !error){
            setcartItems(data.userCart);
        }
    }, [status, error, data]);
    

    const checkingStatus = useCallback(() => {
        setcartItems(null);
    }, []);


    if(status === 'pending'){
        return (
            <div className='centered'>
                <LoadingSpinner />  
            </div>
        )
    };

    return (
        <section className='cart-section'>
            {cartItems && cartItems.items.length && <div className="cart">
                <div className="cart-owner">
                    <div className="cart-owner-name">
                        <img src={`http://localhost:3000/${ctx.userData.imageUrl}`} alt="img" />
                        <p>{ctx.userData.userName} Cart Items</p>
                    </div>
                    {/* <div className="cart-save-btn">
                        <Button>Save Cart <CiSaveDown2 className='cart-save-icon'/></Button>
                    </div> */}
                </div>
                <CartList userId={ctx.userData} items={cartItems.items} checkingStatus={checkingStatus} />
                <div className="cart-controls-btn">
                    <Button><Link to={'/products'}>Continue Shopping</Link></Button>
                    <button className='clear-btn'>Clear Cart</button>
                </div>
                <div className="cart-itemsPrice">
                    <div className="order-subtotalPrice">
                        <p>Subtotal:</p>
                        <h4>&#8377; 60,000.00</h4>
                    </div>
                    <div className="order-shipping-fee">
                        <p>Shipping fee:</p>
                        <h4>&#8377; 50.00</h4>
                    </div>
                    <hr />
                    <div className="order-totalPrice">
                        <p>Order total:</p>
                        <h4>&#8377; 60,050.00</h4>
                    </div>
                </div>
            </div>}
            
            { (!cartItems || !cartItems.items.length) && <div className='no_items_found'>
                <h2>No items!</h2>
                <Link to={'/products'}>
                    <Button>Shop Now</Button>
                </Link>
            </div>}

            <div className="vector-img-section">
                <div className="vector-imgContainer">
                    <img src={cart} alt="cart" />
                </div>
            </div>
        </section>
    )
}

export default Cart;
