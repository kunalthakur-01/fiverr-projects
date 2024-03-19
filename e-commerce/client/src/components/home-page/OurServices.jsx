import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductListItem from '../all-products/ProductListItem';

import './OurServices.css';

import img1 from '../../assets/service-images/img1.jpeg';
import img2 from '../../assets/service-images/img2.jpeg';
import img3 from '../../assets/service-images/img3.jpeg';
import img4 from '../../assets/service-images/img4.jpeg';
import img5 from '../../assets/service-images/img5.jpeg';
import img6 from '../../assets/service-images/img6.jpeg';
import img7 from '../../assets/service-images/img7.jpeg';
import img8 from '../../assets/service-images/img8.jpeg';
import img9 from '../../assets/service-images/img9.jpeg';
import img10 from '../../assets/service-images/img10.jpeg';
import img11 from '../../assets/service-images/img11.jpeg';
import img12 from '../../assets/service-images/img12.jpeg';

const OurServices = () => {

  const services = [
    {
      imgName: 'FONTE',
      imgUrl: img1
    },
    {
      imgName: 'OPAL',
      imgUrl: img2
    },
    {
      imgName: 'URINALS',
      imgUrl: img3
    },
    {
      imgName: 'SHOWERS',
      imgUrl: img4
    },
    {
      imgName: 'LYRIC',
      imgUrl: img5
    },
    {
      imgName: 'TAP ',
      imgUrl: img6
    },
    {
      imgName: 'TOILET UTENSILS',
      imgUrl: img7
    },
    {
      imgName: 'ACCESSORIES',
      imgUrl: img8
    },
    {
      imgName: 'PIPES',
      imgUrl: img9
    },
    {
      imgName: 'Fonte',
      imgUrl: img10
    },
    {
      imgName: 'STEEL PIPE',
      imgUrl: img11
    },
    {
      imgName: 'STEEL SINK',
      imgUrl: img12
    },
  ];

  return (
    <section className='our-services-section'>
      <p className='colored-p'>Check now</p>
      <h2>Our Feature Services</h2>
      <div className="services">
        {services.map(service => (
          <Link key={service.imgUrl} to={'/products'} className="service-component">
            {/* <img src='http://localhost:5173/src/assets/sanitary.jpg' alt="" /> */}
            <img src={service.imgUrl} alt={service.imgName} />
            <h2>{service.imgName}</h2>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default OurServices;
