import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, count, status) {
  return { name, count, status };
}

const rows = [
  createData(1201, '40W', 'Design Pending'),
  createData(1201, '150W', 'Preparing For Dispatch'),
  createData(1201, '25W', 'Delivered'),
  createData(1201, '55W', 'Pending Design'),
  createData(1201, '40W', 'Valuating Offer'),

];

export default function Items() {
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
            <TableCell>Item Code</TableCell>
            <TableCell>Item Name</TableCell>
            <TableCell align="center">Status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.count}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
