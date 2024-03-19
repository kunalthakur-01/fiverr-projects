import { Route, Switch } from 'react-router-dom';

import './App.css';
import Artlab from './components/artlab/Artlab';

import Authentication from './components/authentication page/Authentication';
import Categories from './components/category page/Categories';
import Create from './components/create page/Create';
import CreditCheckout from './components/credit checkout/CreditCheckout';
import Explore from './components/explore page/Explore';
import Favorites from './components/favorites/Favorites';
import HomePage from './components/homepage/HomePage';
import Invoice from './components/invoices/Invoice';
import Layout from './components/Layout';
import Editing from './components/others/Editing';
import License from './components/others/License';
import PrivacyPolicy from './components/others/PrivacyPolicy';
import TermsAndCondition from './components/others/TermsAndCondition';
import Pricing from './components/pricing page/Pricing';
import Profile from './components/profile/Profile';
import Purchase from './components/purchase/Purchase';

function App() {
  return (
    <div className='app'>
      <Layout>
        <Switch>
          <Route path={'/'} exact>
            <HomePage />
          </Route>

          <Route path={'/explore'}>
            <Explore />
          </Route>

          <Route path={'/category/:categories'}>
            <Categories />
          </Route>

          <Route path={'/create'}>
            <Create />
          </Route>

          <Route path={'/pricing'}>
            <Pricing />
          </Route>

          <Route path={'/license'}>
            <License />
          </Route>

          <Route path={'/editing'}>
            <Editing />
          </Route>

          <Route path={'/profile'}>
            <Profile />
          </Route>

          <Route path={'/purchase'}>
            <Purchase />
          </Route>

          <Route path={'/favorites'}>
            <Favorites />
          </Route>

          <Route path={'/invoice'}>
            <Invoice />
          </Route>

          <Route path={'/privacy-policy'}>
            <PrivacyPolicy />
          </Route>

          <Route path={'/terms&condition'}>
            <TermsAndCondition />
          </Route>

          <Route path={'/artlab'}>
            <Artlab />
          </Route>

          <Route path={'/credit-checkout/:price'}>
            <CreditCheckout />
          </Route>

          <Route path={'/signup'}>
            <Authentication />
          </Route>

          <Route path={'/login'}>
            <Authentication />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
