import React from 'react';
import ReactDOM from 'react-dom/client';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import { Provider } from 'react-redux';
import store from './store';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";  OR
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.css";

import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen'; 
import CartScreen from './screen/CartScreen';
import ShippingScreen from './screen/ShippingScreen';
import PrivateRoute from './components/PrivateRoute';
import PaymentScreen from './screen/PaymentScreen';
import PlaceOrderScreen from './screen/PlaceOrderScreen';
import OrderScreen from './screen/OrderScreen';
import ProfileScreen from './screen/ProfileScreen';

import AdminRoute from './components/AdminRoute';
import OrderListScreen from './screen/admin/OrderListScreen';
import ProductListScreen from './screen/admin/ProductListScreen';
import UserListScreen from './screen/admin/UserListScreen';
import UserEditScreen from './screen/admin/UserEditScreen';
import ProductEditScreen from './screen/admin/ProductEditScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/page/:pageNumber' element={<HomeScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      <Route path='/cart' element={<CartScreen />} />

      <Route path="/search/:keyword" element={<HomeScreen />} />
      <Route path="/search/:keyword/page/:pageNumber" element={<HomeScreen />} />

      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingScreen />} />
        <Route path='/payment' element={<PaymentScreen />} />
        <Route path='/placeorder' element={<PlaceOrderScreen />} />
        <Route path='/order/:id' element={<OrderScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
      </Route>

      <Route path='' element={<AdminRoute />}>
        <Route path='/admin/orderlist' element={<OrderListScreen />} />
        <Route path='/admin/productlist' element={<ProductListScreen />} />
        <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen />} />
        <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
        <Route path='/admin/userlist' element={<UserListScreen />} />
        <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
