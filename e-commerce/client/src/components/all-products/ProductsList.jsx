import React from 'react';

import './ProductsList.css';

import { TfiLayoutGrid2Alt } from 'react-icons/tfi';
import { TbLayoutList } from 'react-icons/tb';
import ProductListItem from './ProductListItem';

const ProductsList = (props) => {

  let {products, filterBySearch, filterByPrice} = props;

  if(filterBySearch){
    products = products.filter(product => {
      return product.name.toLowerCase().includes(filterBySearch);
    });
  }
  if(filterByPrice){
    products = products.filter(product => {
      return product.price <= filterByPrice;
    });
  }

  return (
    <div className='products-list-section'>
      <div className="products-visibility">
        <div className="visibility-types">
          <button className='active-layout'><TfiLayoutGrid2Alt /></button>
          <button><TbLayoutList /></button>
        </div>
        <p>{props.products.length} total products</p>
        <select>
          <option value="all">All</option>
          <option value="apple">Apple</option>
          <option value="samsung">Samsung</option>
          <option value="oppo">Oppo</option>
        </select>
      </div>

      <ul className='products-list'>
        {products.map(product => <ProductListItem key={product._id} product={product} />)}
      </ul>
    </div>
  )
}

export default ProductsList;
