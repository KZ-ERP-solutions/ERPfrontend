import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

function createData(name, status) {
  return { name, status };
}

const rows = [
  createData('Vijay', 'Present'),
  createData('Kavya', 'Off Site'),
  createData('Ram', 'On Leave'),
  createData('Tom', 'Absent'),
  createData('Layana', 'Unavilable'),
];

export default function EmployeeStatus() {
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
            <TableCell>Name</TableCell>
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
                <div>
                  <Stack direction="row" alignItems="center" gap={1}>
                    <Avatar
                      align="left"
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 28, height: 25 }}
                    />
                    <Typography varient="body5">{row.name}</Typography>
                  </Stack>
                </div>
              </TableCell>
              <TableCell align="center">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
