import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import API from '../services/api'

const SingleStudent = () => {

  const { id } = useParams()

  const [student, setStudent] = useState({})

  async function fetchStudent() {

    try {
      const res = await API.get(`/students/${id}`)

      setStudent(res.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchStudent()
  }, [])

  return (
    <div>
      <h1>Single Student Details</h1>

      <h2>{student.name}</h2>
      <h2>{student.email}</h2>
      <h2>{student.course}</h2>
    </div>
  )
}

export default SingleStudent