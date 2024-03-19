import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './ProductOrder.css';

import OrderItem from './OrderItem';
import ProductOrderImageSection from './ProductOrderImageSection';
import { deleteProduct, getProduct } from '../../api/HttpOtherApis';
import useHttp from '../../hooks/http-hook';
import LoadingSpinner from '../UI/LoadingSpinner';
import Button from '../UI/Button';
import { contextManage } from '../../context/ManageState';

const ProductOrder = () => {

    const { sendRequest, data, error, status } = useHttp(getProduct);
    const { sendRequest: sendDeleteRequest, data: deleteRequestData, status: deleteRequestStatus } = useHttp(deleteProduct);
    const ctx = useContext(contextManage);

    const param = useParams();
    const navigate = useNavigate();
    const [ product, setProduct] = useState(null);


    useEffect(() => {
        if(!param.pid) return;
        sendRequest(param.pid);
    }, []);

    useEffect(() => {
        if(status === "completed" && !error && data){
            setProduct(data.product);
        }
        if(error){
            navigate(-1);
        }
    }, [status, error, data]);

    const deleteProductBtn = () => {
        sendDeleteRequest({userId: ctx.userData.userId, prodId: product._id, token: ctx.userData.token});
    }

    useEffect(() => {
        if(deleteRequestStatus == 'completed' && deleteRequestData){
            navigate('/products');
        }
    }, [deleteRequestStatus, deleteRequestData])



    if(status === 'pending' || !product){
    // if(status === 'pending'){
        return (
            <div className='centered'>
                <LoadingSpinner />  
            </div>
        )
    }

    return (
        <section className='product-order-section'>
            <div className="product-details">
                <ProductOrderImageSection images={product.images} />
                <OrderItem product={product}/>
            </div>
            {product.creator === ctx.userData.userId && <Button className="edit-product-btn" >Edit</Button>}
            {product.creator === ctx.userData.userId && <Button onClick={deleteProductBtn} className="delete-product-btn" >Delete</Button>}
        </section>
    )
}

export default ProductOrder;
