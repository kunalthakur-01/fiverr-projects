import React from 'react';

import './TrustedCompanies.css';
import microsoftImg from '../../assets/microsoft.png';
import googleImg from '../../assets/google.png';
import adidasImg from '../../assets/adidas.png';
import clothingImg from '../../assets/clothing.png';
import genieImg from '../../assets/genie.png';

const TrustedCompanies = () => {
  return (
    <section className='trustedCompanies-section'>
        <h2>Our Associated Companies</h2>
        <div className="companies">
            <div className="company">
                {/* <img src={require('../../assests/microsoft.png')} alt="microsoft" /> */}
                <img src={microsoftImg} alt="microsoft" />
            </div>
            <div className="company">
                {/* <img src={require('../../assests/google.png')} alt="google" /> */}
                <img src={googleImg} alt="microsoft" />
            </div>
            <div className="company">
                {/* <img src={require('../../assests/adidas.png')} alt="adidas" /> */}
                <img src={adidasImg} alt="microsoft" />
            </div>
            <div className="company">
                {/* <img src={require('../../assests/clothing.png')} alt="clothing" /> */}
                <img src={clothingImg} alt="microsoft" />
            </div>
            <div className="company">
                {/* <img src={require('../../assests/genie.png')} alt="genie" /> */}
                <img src={genieImg} alt="microsoft" />
            </div>
            {/* <div className="company">
                <img src={require('../../assests/microsoft.png')} alt="icrosoft" />
            </div> */}
        </div>
    </section>
  )
}

export default TrustedCompanies;
