import { createBrowserRouter} from "react-router-dom";
import Home from './Home.jsx';
import Products from './Products.jsx';
import ShoppingCart from './ShoppingCart.jsx'

export default router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "products/:gameId",
      element: <Products />,
    },
    {
        path: "/shoppingCart",
        element: <ShoppingCart />
    }
  ]);