/* eslint-disable react-refresh/only-export-components */

import { StrictMode,lazy,Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound.jsx'
import ProductList from './components/ProductList.jsx'
import "./components/style.css"


const ProductDetails = lazy(() => import("./components/ProductDetails.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));
const CheckOut = lazy(() => import("./components/CheckOut.jsx"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <ProductList/>
      },
      {
        path: "/product/:id",
       element: (
         <Suspense>
            <ProductDetails/>
         </Suspense>
       ),
      },
      {
        path: "/cart",
        element: (
          <Suspense>
            <Cart/>
         </Suspense>
        )
      },
      {
        path: "/checkout",
        element: (
          <Suspense>
            <CheckOut/>
         </Suspense>
        )
      },
    ],
    errorElement:<NotFound/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
