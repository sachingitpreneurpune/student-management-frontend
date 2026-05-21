import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../services/api'

const EditStudent = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [student, setStudent] = useState({
    name: '',
    email: '',
    course: ''
  })

  async function fetchSingleStudent() {
    try {
      const res = await API.get(`/students/${id}`)

      setStudent(res.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchSingleStudent()
  }, [])

  function handleChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    })
  }

  async function handleUpdate(e) {
    e.preventDefault()

    try {

      await API.put(`/students/${id}`, student)

      alert('Student Updated Successfully')

      navigate('/students')

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>

      <h1>Edit Student</h1>

      <form onSubmit={handleUpdate}>

        <input
          type='text'
          name='name'
          value={student.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type='email'
          name='email'
          value={student.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type='text'
          name='course'
          value={student.course}
          onChange={handleChange}
        />

        <br /><br />

        <button>Update Student</button>

      </form>

    </div>
  )
}

export default EditStudent