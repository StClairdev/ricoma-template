import React from 'react'
import { About, Home, Products } from 'pages'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='products' element={<Products />} />
    <Route path='about' element={<About />} />
  </Routes>
)

export default AppRoutes
