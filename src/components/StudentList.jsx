import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import API from '../services/api'

const StudentList = () => {

  const [students, setStudents] = useState([])

  async function fetchStudents() {
    try {
      const res = await API.get('/students')
      setStudents(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  async function handleDelete(id) {

    const confirmDelete = window.confirm('Are you sure?')

    if (confirmDelete) {
      try {
        await API.delete(`/students/${id}`)

        fetchStudents()

      } catch (error) {
        console.log(error)
      }
    }
  }

  async function handlePatch(id) {

    try {
      await API.patch(`/students/${id}`, {
        course: 'Updated Course'
      })

      fetchStudents()

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>All Students</h1>

      {
        students.map((student) => (

          <div
            key={student.id}
            style={{
              border: '1px solid black',
              padding: '20px',
              marginBottom: '20px'
            }}
          >

            <h2>{student.name}</h2>
            <h3>{student.email}</h3>
            <h3>{student.course}</h3>

            <button onClick={() => handleDelete(student.id)}>
              Delete
            </button>

            <button onClick={() => handlePatch(student.id)}>
              Patch
            </button>

            <Link to={`/edit/${student.id}`}>
              <button>Edit</button>
            </Link>

            <Link to={`/student/${student.id}`}>
              <button>View</button>
            </Link>

          </div>
        ))
      }
    </div>
  )
}

export default StudentList