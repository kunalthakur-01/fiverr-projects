import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../UI/Button';

import './Overview.css';
import storeImg from '../../assets/store.jpg';

const Overview = () => {
  return (
    <section className='home-overview-section'>
        <div className="home_top_detail">
            <h4>Welcome to,</h4>
            <h1>Swami Sanitation</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem iste optio officiis ipsam at sed deleniti eius veniam sapiente quia, mollitia sit nulla dolorem praesentium odit dolore deserunt suscipit doloremque.</p>
            <Button className='show-now-btn'><Link to={'/products'}>Shop Now</Link></Button>
        </div>
        <div className="home_top_img">
            {/* <img src={require('../../assests/store.jpg')} alt="shopping" /> */}
            <img src={storeImg} alt="shopping" />
            <span></span>
        </div>
        <div className="landing-img">
          {/* <img src={require('../../assests/user.png')} alt="" /> */}
        </div>
    </section>
  )
}

export default Overview;
