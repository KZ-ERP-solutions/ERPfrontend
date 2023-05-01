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

function createData(dept, status, remarks) {
  return { dept, status, remarks };
}

function OrderStatusTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const rowsTemp = [];
    rowsTemp.push(
      createData(
        'Marketing',
        'On going',
        'Need to have a discussion with Planning head',
      ),
    );
    rowsTemp.push(createData('Planning', 'Not started', ''));
    rowsTemp.push(createData('Purchase', 'Not started', ''));
    rowsTemp.push(createData('Design', 'Not started', ''));
    rowsTemp.push(createData('Production', 'Not started', ''));
    setRows(rowsTemp);
  }, []);

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
            {rows.length > 0
              && rows.map((row) => (
                <TableRow
                  key={row.dept}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                  }}
                >
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
  );
}

export default OrderStatusTable;
