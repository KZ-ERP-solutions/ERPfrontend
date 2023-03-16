import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import React, { useEffect, useState } from 'react'

function createData(dept, status, remarks) {
  return { dept, status, remarks }
}

const OrderStatusTable = () => {
  const [rows, setRows] = useState([])

  useEffect(() => {
    let rows = []
    rows.push(
      createData(
        'Marketing',
        'On going',
        'Need to have a discussion with Planning head'
      )
    )
    rows.push(createData('Planning', 'Not started', ''))
    rows.push(createData('Purchase', 'Not started', ''))
    rows.push(createData('Design', 'Not started', ''))
    rows.push(createData('Production', 'Not started', ''))
    setRows(rows)
  }, [])

  return (
    <Box>
      <TableContainer sx={{ borderRadius: 1 }}>
        <Table sx={{ minWidth: 300, bgcolor: 'background.paper' }}>
          <TableHead sx={{ bgcolor: 'tertiary.light' }}>
            <TableRow>
              <TableCell>Department</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Remarks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 &&
              rows.map((row) => (
                <TableRow
                  key={row.dept}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}>
                  <TableCell component="th" scope="row">
                    {row.dept}
                  </TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.remarks}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default OrderStatusTable
