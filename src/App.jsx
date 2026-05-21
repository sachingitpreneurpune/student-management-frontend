import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddStudent from './pages/AddStudent'
import Students from './pages/Students'
import EditStudent from './components/EditStudent'
import SingleStudent from './components/SingleStudent'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddStudent />} />
        <Route path='/students' element={<Students />} />
        <Route path='/edit/:id' element={<EditStudent />} />
        <Route path='/student/:id' element={<SingleStudent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App