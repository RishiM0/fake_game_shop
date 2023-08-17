import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './routes.jsx';
import { useState, createContext } from 'react';

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
