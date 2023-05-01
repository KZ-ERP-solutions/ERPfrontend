import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, customer, status) {
  return { id, customer, status };
}

const rows = [
  createData(100, 'Indian Railway', 'Not Paid'),
  createData(101, 'ISRO', 'Pending'),
  createData(103, 'Indian Railway', 'Pending from Bank'),
  createData(104, 'KSEB', 'Payment Successful'),
  createData(105, 'KSEB', 'Pending'),

];

export default function Payment() {
  return (
    <TableContainer
      style={{
        width: '400px',
        height: 'auto',
      }}
      component={Paper}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Order ID</TableCell>
            <TableCell align="left">Customer</TableCell>
            <TableCell align="left">Status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.customer}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
