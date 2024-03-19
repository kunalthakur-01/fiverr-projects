import React, { useContext, useState } from 'react';

import './OrderItem.css';

import { TbTruckDelivery } from 'react-icons/tb';
import { TbReplace } from 'react-icons/tb';
import { MdOutlineSecurity } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import { HiMinus } from 'react-icons/hi';
import Button from '../UI/Button';
import { contextManage } from '../../context/ManageState';
import useHttp from '../../hooks/http-hook';
import { addToCart } from '../../api/HttpOtherApis';
import { useNavigate } from 'react-router-dom';

const OrderItem = React.memo((props) => {
    const { sendRequest, status } = useHttp(addToCart);
    const [ prodQuantity, setProdQuantity ] = useState(1);
    const ctx = useContext(contextManage);
    const navigate = useNavigate();

    const { product } = props;

    const addToCartBtnHandler = () => {
        if (ctx.token) {
            sendRequest({ userId: ctx.userData.userId, prodId: product._id, totalProd: prodQuantity });
            setProdQuantity(1);
            return;
        }
        navigate('/login');
    }

    const increaseBtn = () => {
        setProdQuantity( prodQuantity + 1 );
    }

    const decreaseBtn = () => {
        setProdQuantity( prevState => {
            if(prevState > 1) {
                return prevState - 1;
            }
            return prevState;
        } );
    }

    return (
        <div className="product-discription">
            <p className='product-title'>{product.name}</p>
            <article className='product-rating'>⭐⭐⭐⭐⭐ <span>(58 customer reviews)</span></article>
            <div className="product-actualPrice">
                <p>MRP:- &nbsp;<del> &#8377; {product.mrp.toLocaleString("en-US")} </del></p>
            </div>
            <p className='product-priceAfterDiscount'>Deal of the day:-  &nbsp; <span>&#8377; {product.price.toLocaleString("en-US")} </span></p>
            <p className='product-overview'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque modi saepe eligendi iure consequatur
                voluptatem magni sit similique at. Adipisci neque sint aperiam maiores, iste porro nulla minima officia
                exercitationem! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            </p>
            <div className="product-facilities">
                <div className="productFacility">
                    <TbTruckDelivery className='facility-icon' />
                    <p>Free Delivery</p>
                </div>
                <div className="productFacility">
                    <TbReplace className='facility-icon' />
                    <p>30 Days Replacement</p>
                </div>
                <div className="productFacility">
                    <TbTruckDelivery className='facility-icon' />
                    <p>Our Delivery</p>
                </div>
                <div className="productFacility">
                    <MdOutlineSecurity className='facility-icon' />
                    <p>Best Quality</p>
                </div>
            </div>

            <hr className='product-description-hr'/>

            <p className='product-availability'>Available:- <span>in stock</span></p>
            {/* <p className='product-id'>ID:- <span>iphonex12345</span></p> */}
            <p className='product-brand'>Brand:- <span> { product.brand } </span></p>

            <hr className='dark-line' />

            {/* <div className='product-availableColors'>
                <p>Color:</p>
                <button className='color-indicators' style={{ backgroundColor: 'red' }}></button>
                <button className='color-indicators' style={{ backgroundColor: 'gray' }}></button>
                <button className='color-indicators' style={{ backgroundColor: 'lightGreen' }}></button>
            </div> */}

            <div className="product-quantityControlBtn">
                <button onClick={decreaseBtn}><HiMinus /></button>
                <p>{ prodQuantity }</p>
                <button onClick={increaseBtn}><BsPlusLg /></button>
            </div>
            <div className={`addToCart-btn ${status === 'pending' ? 'loading_spinner' : ''}`}>
                {status !== 'pending' && <Button onClick={addToCartBtnHandler} >ADD TO CART</Button>}
                {status === 'pending' && <div></div> }
            </div>
        </div>
    )
});

export default OrderItem;
