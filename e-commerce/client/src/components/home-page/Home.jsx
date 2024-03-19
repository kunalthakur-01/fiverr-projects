import React from 'react';
import FacilitiesWeProvide from './FacilitiesWeProvide';

import './Home.css';
import OurServices from './OurServices';
import Overview from './Overview';
import TrustedCompanies from './TrustedCompanies';

const Home = () => {
  return (
    <main className='home'>
        <Overview />
        <OurServices />
        <TrustedCompanies />
        <FacilitiesWeProvide />
    </main>
  )
}

export default Home;
