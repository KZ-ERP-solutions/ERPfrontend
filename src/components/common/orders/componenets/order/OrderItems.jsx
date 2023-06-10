import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';

function OrderItems({ items = [] }) {
  return (
    <Box>
      {items.length > 0 ? (
        items.map((item, index) => (
          <>
            <Typography variant="h5" fontWeight={600} sx={{ mt: 1 }}>
              Item
              {` ${item?.si_no}`}
            </Typography>
            <TableContainer>
              <Table sx={{ minWidth: 300 }}>
                <TableBody>
                  <TableRow
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell>Standard</TableCell>
                    <TableCell>{item?.is_std ? 'Yes' : 'No'}</TableCell>
                    <TableCell>Item</TableCell>
                    <TableCell>{item?.item}</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell>Model</TableCell>
                    <TableCell>{item?.model}</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>{item?.quantity}</TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell>Net weight per unit</TableCell>
                    <TableCell>{item?.net_weight_per_unit}</TableCell>
                    <TableCell>Gross weight per unit</TableCell>
                    <TableCell>{item?.gross_weight_per_unit}</TableCell>
                  </TableRow>

                  <TableRow
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell>Total weight</TableCell>
                    <TableCell>{item?.total_weight}</TableCell>
                    <TableCell>Serial nos</TableCell>
                    <TableCell>{item?.serial_nos}</TableCell>
                  </TableRow>

                  <TableRow
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell>Rating</TableCell>
                    <TableCell>{item?.rating}</TableCell>
                    <TableCell>Unit</TableCell>
                    <TableCell>{item?.unit}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ))
      ) : (
        <Typography color="text.secondary">
          No items found for this order!
        </Typography>
      )}
    </Box>
  );
}

export default OrderItems;
