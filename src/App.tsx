import React from 'react'
import CreatPost from './components/CreatPost'
import MakePost from './components/MakePost'
import { Routes, Route, NavLink, Outlet, Link } from 'react-router-dom'
import ChuY from './components/ChuY'

export default function App() {
  return (
    <div>
      <h2>Shop Siuuuu</h2>
      <Routes>
        <Route path='/' element={<CreatPost></CreatPost>} ></Route>
        <Route path='creatPost' element={<MakePost/>}></Route>
      </Routes>
      
    </div>
  )
}
