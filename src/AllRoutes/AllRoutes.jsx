
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import HomePage from '../Pages/HomePage'
import ProductDetails from '../Pages/ProductDetails'
import Cart from '../Pages/Cart'
import Signup from '../Pages/Signup'

const AllRoutes = () => {
    
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/home" element={<HomePage />}/>
            <Route path="product/:id" element={<ProductDetails />}/>
            <Route path="/cart" element={<Cart />}/>
        </Routes>
    </div>
  )
}

export default AllRoutes