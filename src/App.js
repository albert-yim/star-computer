import './App.css'

import Homepage from './pages/homepage/homepage-component';
import {Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component.jsx'
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component.jsx'
const HatsPage = () => (
  <div>
    <h1> Hats page</h1>
  </div>
)

function App() {
  return (
   <div>
    <switch>
      <Header />
      <Route exact path = '/' component={Homepage} />
      <Route path = '/MotherBoard' component={HatsPage} />
      <Route path = '/shop' component={ShopPage} />
      <Route path = '/signIn' component={SignInAndSignOut} />
    </switch>
   </div>
  );
}

export default App;
