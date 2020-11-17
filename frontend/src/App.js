import React from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import CartScreen from './Screens/CartScreen';
import SigninScreen from './Screens/SigninScreen';
import { userSigninReducer } from './reducers/userReducers';
import { useSelector } from 'react-redux';
import RegisterScreen from './Screens/RegisterScreen';
import ProductsScreen from './Screens/ProductsScreen';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderScreen from './Screens/OrderScreen';
import ProfileScreen from './Screens/ProfileScreen';
import OrdersScreen from './Screens/OrdersScreen';
function App() {
  const userSignin = useSelector(state=>state.userSignin);
  const userInfo = userSignin.userInfo; 
  
 
  const openMenu = () => {
      document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <Link to="/">William's Store</Link>
      </div>
      <div className="header-links">
        <a href="/cart/cart.html">Cart</a>
        {
          userInfo ? <Link to ="/profile">{userInfo.name}</Link>
          : <Link to="/signin">Sign In</Link>
        }
        {userInfo && userInfo.isAdmin && (
          <div className="dropdown">
            <a href="#" >Admin</a>
            <ul className="dropdown-content">
              <li>
                <Link to ="/orders">Orders</Link>
                </li>
                <li>
                <Link to ="/products">Products</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul className="categories">
        <li>
          <Link to="/category/pants">Pants</Link>
        </li>

        <li>
          <Link to="/category/shirts">Shirts</Link>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <Switch>
        <Route path="/orders" component={OrdersScreen} />
        <Route path = "/profile" component={ProfileScreen} />
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component = {CartScreen} />
        <Route path="/products" component={ProductsScreen} />
        <Route path="/category/:id" component={HomeScreen} />
        <Route path="/" exact component={HomeScreen} />  
        </Switch>
        
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
