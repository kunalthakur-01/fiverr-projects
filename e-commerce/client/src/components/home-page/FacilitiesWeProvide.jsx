import React from 'react';

import './FacilitiesWeProvide.css';

import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineSecurity } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiSecurePaymentLine } from 'react-icons/ri';

const FacilitiesWeProvide = () => {
  return (
    <section className='facilities-we-provide-section'>
        <div className="facility">
            <TbTruckDelivery className='facilities_icon'/>
            <p>Super fast and free delivery</p>
        </div>
        <div className="facility">
            <MdOutlineSecurity className='facilities_icon'/>
            <p>Non-contact Shipping</p>
        </div>
        <div className="facility">
            <GiReceiveMoney className='facilities_icon'/>
            <p>Money back Guaranteed</p>
        </div>
        <div className="facility">
            <RiSecurePaymentLine className='facilities_icon'/>
            <p>Super secure payment system</p>
        </div>
    </section>
  )
}

export default FacilitiesWeProvide;
