import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import React from 'react';

function OrderPayment({ order = null }) {
  return (
    <Box>
      <TableContainer>
        <Table sx={{ minWidth: 300 }}>
          <TableBody>
            <TableRow
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell>Amount</TableCell>
              <TableCell>{order?.amount}</TableCell>
              <TableCell>Billing status</TableCell>
              <TableCell>{order?.billing_status}</TableCell>
            </TableRow>
            <TableRow
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell>Sub total</TableCell>
              <TableCell>{order?.sub_total}</TableCell>
              <TableCell>Grand total</TableCell>
              <TableCell>{order?.grand_total}</TableCell>
            </TableRow>
            <TableRow
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell>Payment terms</TableCell>
              <TableCell>{order?.payment_terms}</TableCell>

              <TableCell>Insurance</TableCell>
              <TableCell>{order?.insurance}</TableCell>
            </TableRow>

            <TableRow
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell>CESS</TableCell>
              <TableCell>{order?.cess}</TableCell>
              <TableCell>Paying authority</TableCell>
              <TableCell>{order?.paying_authority}</TableCell>
            </TableRow>

            <TableRow
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell>Tax GST</TableCell>
              <TableCell>{order?.tax_gst}</TableCell>
              <TableCell>Penalty clause</TableCell>
              <TableCell>{order?.insurance}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default OrderPayment;
