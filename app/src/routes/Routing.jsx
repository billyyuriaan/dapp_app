import React from 'react'
import { Home, About, Login, Register } from '../views'
import { Routes, Route } from 'react-router-dom'

const Routing = () => {
  return (
    <Routes>
        <Route path='/'>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
        </Route>
    </Routes>
  )
}

export default Routing