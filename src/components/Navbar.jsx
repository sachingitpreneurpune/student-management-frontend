import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex',gap:'20px',padding:'20px',background:'black'}}>
      <Link to='/' style={{color:'white'}}>Home</Link>
      <Link to='/add' style={{color:'white'}}>Add Student</Link>
      <Link to='/students' style={{color:'white'}}>Students</Link>
    </div>
  )
}

export default Navbar