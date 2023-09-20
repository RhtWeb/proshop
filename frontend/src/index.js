import React from 'react';
import ReactDOM from 'react-dom/client';

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='product/:id' element={<ProductScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
