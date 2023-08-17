import { useState, createContext } from 'react';

export const ShopContext = createContext({
  productsList: [],
  cartItems: [],
});

export default function App() {
    const [cartItems, setCartItems] = useState();

    const productsList = 'https://api.rawg.io/api/games?token&key=d37fd1ac0277464d9eddfb173d19588a';
  
    return (
      /* We are going to pass the things that we want to inject to these components using the value prop */
      /* This value prop will overwrite the default value */
      <ShopContext.Provider value={{ cartItems, products, addToCart }}>
        <Router/>
      </ShopContext.Provider>
    );
  }