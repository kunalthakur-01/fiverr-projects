import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./ProductListItem.css";

const ProductListItem = (props) => {
  const { name, mrp, price } = props.product;

  return (
    <Link
      to={`/product/${props.product._id}`}
      className={`${props.className ? props.className : ""} product-list-item`}
    >
      <div className="product-img-section">
        <img src={`http://localhost:3000/${props.product.images[0]}`} alt="" />
      </div>
      <div className="product-detail-section">
        <h4>{name.length > 13 ? name.slice(0, 13) + "..." : name}</h4>
        <del>&#8377;{mrp.toLocaleString()}</del>
        <p>&#8377;{price.toLocaleString()}</p>
      </div>
    </Link>
  );
};

export default React.memo(ProductListItem);
