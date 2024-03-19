import React, { useCallback, useEffect, useState } from "react";

import "./CartListItems.css";

import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import { AiTwotoneDelete } from "react-icons/ai";
import useHttp from "../../hooks/http-hook";
import { deleteItemFromCart } from "../../api/HttpOtherApis";
import { Link } from "react-router-dom";

const CartListItems = (props) => {
  const { sendRequest, data, error } = useHttp(deleteItemFromCart);
  const { name, price, images } = props.item.prodId;
  const [prodQuantity, setProdQuantity] = useState(0);

  const increaseBtn = () => {
    setProdQuantity(prodQuantity + 1);
  };

  const decreaseBtn = () => {
    setProdQuantity((prevState) => {
      if (props.item.prodQuantity + prodQuantity > 0) {
        return prevState - 1;
      }
      return prevState;
    });
  };

  useEffect(() => {
    if (data && !error) {
      props.deleteItem(props.item.prodId._id);
    }
  }, [data, error]);

  const deleteItemBtnhandler = useCallback(() => {
    sendRequest({ userId: props.userId.userId, prodId: props.item.prodId._id });
  }, [props]);

  return (
    <li className="items">
      <Link to={`/product/${props.item.prodId._id}`} className="item-name item">
        {/* <div className='item-img-small' style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(http://localhost:3000/${images[0]})`, backgroundSize: 'cover' }}></div> */}
        <div className="item-img-small">
          <img src={`http://localhost:3000/${images[0]}`} alt="product-img" />
        </div>
        <div>
          <h5>{name.length > 13 ? name.slice(0, 11) + "..." : name}</h5>
          <p>
            color <span style={{ backgroundColor: "red" }}></span>
          </p>
        </div>
      </Link>
      <div className="item-price item">
        <p>&#8377; {price.toLocaleString("en-US")}</p>
      </div>
      <div className="item-quantity item">
        <button onClick={decreaseBtn}>
          <HiMinus />
        </button>
        <p> {props.item.prodQuantity + prodQuantity} </p>
        <button onClick={increaseBtn}>
          <BsPlusLg />
        </button>
      </div>
      <div className="item-subTotal item">
        <p>
          &#8377;{" "}
          {((props.item.prodQuantity + prodQuantity) * price).toLocaleString(
            "en-US"
          )}
        </p>
      </div>
      <button onClick={deleteItemBtnhandler} className="item-remove-btn item">
        <AiTwotoneDelete className="delete-btn" />
      </button>
    </li>
  );
};

export default CartListItems;
