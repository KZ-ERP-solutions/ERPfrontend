import { Container } from '@mui/material'
import React from 'react'
import SidePanel from '../../components/common/SidePanel'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from '../ErrorPage'
import Users from './Users'

const SuperAdmin = () => {
  return (
    <Container maxWidth="100%" disableGutters sx={{ display: 'flex' }}>
    <SidePanel />

    {/* marketing routes  */}
    <Routes>
      <Route index element={<Users />} />
      <Route exact path='/admin/users' element={<Users />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Container>
  )
}

export default SuperAdmin