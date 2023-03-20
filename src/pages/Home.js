import { Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container>
      <Typography>KEL ERP</Typography>
      <Link to={'/marketing'}>Marketing Department</Link><br />
      <Link to={'/planning'}>Planning Department</Link>
    </Container>
  )
}

export default Home
