import { useEffect, useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import { Navigate, NavLink, Route, Router, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import ProductDetail from './pages/ProductDetail'
import ProductManager from './pages/ProductManager'


function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => { // 3 c
    const getProducts = async () => {
        const response = await fetch('http://localhost:8000/api/products/');
        const data = await response.json();
        setProducts(data);
    }   
    getProducts();
}, []);
  return (
    <div className="container">
      {products.map(item => <div>{item.name}</div>)}
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
              <Route index element={<Homepage />} />
              <Route path="product" element={<h1>Product Page</h1>}/>
              <Route path="/product/:id" element={<ProductDetail />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<h1>Dashboard page</h1>} />
          </Route>
        </Routes>
    </div>
  )
}

export default App