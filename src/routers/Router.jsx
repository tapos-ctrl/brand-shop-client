import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AddProduct from '../pages/AddProduct/AddProduct'
import Main from '../pages/Main/Main'
import Login from '../pages/Login/Login'
import MyCart from '../pages/MyCart/MyCart'
import AddBrand from '../pages/AddBrand/AddBrand'
import Products from '../pages/Home/Products/Products'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import Update from '../pages/Update/Update'
import SignUp from '../pages/SignUp/SignUp'
import PrivateRoute from './PrivateRoute'
import NotFound from '../pages/NotFound/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
        
      }
      ,
      {
        path: '/login',
        element: <Login></Login>
      }
      ,
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
      ,
      {
        path: '/cart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
      }
      ,
      {
        path: '/addBrands',
        element: <AddBrand></AddBrand>
        
      }
      ,
      {
        path: 'product/:id',
        element: <Products></Products>
      }
      ,
      {
        path: '/details/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader:({params}) => fetch(`https://brand-shop-server-a2tw.onrender.com/details/${params.id}`)
      }
      ,
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader:({params}) => fetch(`https://brand-shop-server-a2tw.onrender.com/details/${params.id}`)
  
      }
    ]
  }
  
])

export default router
