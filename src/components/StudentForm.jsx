import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import API from '../services/api'

const StudentForm = () => {

  const navigate = useNavigate()

  const [student, setStudent] = useState({
    name: '',
    email: '',
    course: ''
  })

  function handleChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await API.post('/students', student)
      alert('Student Added Successfully')

      navigate('/students')

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>

        <input
          type='text'
          placeholder='Enter Name'
          name='name'
          value={student.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type='email'
          placeholder='Enter Email'
          name='email'
          value={student.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type='text'
          placeholder='Enter Course'
          name='course'
          value={student.course}
          onChange={handleChange}
        />

        <br /><br />

        <button>Add Student</button>

      </form>
    </div>
  )
}

export default StudentForm