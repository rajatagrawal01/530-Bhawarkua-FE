import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import User from './User'


export default function Home() {
  return (
    <div>
      <Link to="/user">User</Link><br />
      <h1>This is Home</h1>
      <Routes>
        <Route path='/user' element={<User />}></Route>
      </Routes>
    </div>
  )
}
