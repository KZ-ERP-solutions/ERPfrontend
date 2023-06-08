import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { yellow } from '@mui/material/colors';

function createData(dept, status, remarks) {
  return { dept, status, remarks };
}

function OrderStatusTable({ orderNo }) {
  const [rows, setRows] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/planning/status/${orderNo}`)
      .then((res) => {
        setStatus(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const rowsTemp = [];
    rowsTemp.push(createData('Marketing', status.status, ''));
    rowsTemp.push(createData('Planning', status.status, ''));
    rowsTemp.push(createData('Purchase', status.status, ''));
    rowsTemp.push(createData('Design', status.status, ''));
    rowsTemp.push(createData('Production', status.status, ''));
    setRows(rowsTemp);
  }, [status]);

  return (
    <Box>
      <TableContainer sx={{ borderRadius: 1 }}>
        <Table sx={{ minWidth: 300 }}>
          <TableHead>
            <TableRow>
              <TableCell>Department</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Remarks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0
              && rows.map((row) => (
                <TableRow key={row.dept}>
                  <TableCell>{row.dept}</TableCell>
                  <TableCell
                    sx={{
                      color:
                        row.status === 1
                          ? 'red'
                          : row.status === 2
                            ? 'yellow'
                            : row.status === 3
                              ? 'red'
                              : 'black',
                    }}
                  >
                    {row.status}
                  </TableCell>
                  <TableCell>{row.remarks}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default OrderStatusTable;
