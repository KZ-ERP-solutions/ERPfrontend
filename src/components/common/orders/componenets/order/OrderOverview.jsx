import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import {
  Box, Paper, Typography, styled,
} from '@mui/material';

function createData(parameter, value) {
  return { parameter, value };
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-child(7n), &:first-child': {
    backgroundColor: theme.palette.tertiary.light,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function OrderOverview({ order }) {
  const [rowsDetails, setRowsDetails] = useState([]);
  const [rowsCustomer, setRowsCustomer] = useState([]);
  const [rowsItems, setRowsItems] = useState([]);
  const [rowsStatus, setRowsStatus] = useState([]);
  console.log(order);
  useEffect(() => {
    if (order) {
      let rows = [];
      rows.push(createData('WO/SO No', order?.no));
      rows.push(createData('Date', order?.date));
      rows.push(createData('PO No', order?.po_no));
      rows.push(createData('PO Date', order?.po_date));
      rows.push(createData('Delivery date', order?.delivery_date));
      rows.push(createData('Remarks', order?.remarks));
      setRowsDetails(rows);

      rows = [];
      rows.push(createData('Customer', order?.customer));
      rows.push(createData('Buyer organization', order?.buyer_addr[0].org));
      rows.push(createData('Buyer phone no', order?.buyer_addr[0].phone_no));
      rows.push(
        createData('Consignee organization', order?.consign_addr[0].org),
      );
      rows.push(
        createData('Consignee phone no', order?.consign_addr[0].phone_no),
      );
      setRowsCustomer(rows);

      rows = [];
      rows.push(createData('Marketing', 'On going'));
      rows.push(createData('Planning', 'Not started'));
      rows.push(createData('Purchase', 'Not started'));
      rows.push(createData('Design', 'Not started'));
      rows.push(createData('Production', 'Not started'));
      setRowsStatus(rows);

      rows = [];
      if (order?.items && order.items.length > 0) {
        const { items } = order;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          rows.push(createData('Parameter', `Item ${i + 1}`));
          rows.push(
            createData('Std / Non-std', item.is_std ? 'Std' : 'Non-std'),
          );
          rows.push(createData('Item', item.item));
          rows.push(createData('Rating', item.rating));
          rows.push(createData('Model', item.model));
          rows.push(createData('Basic amount', item.basic_amount));
        }
      }
      setRowsItems(rows);
    }
  }, [order]);

  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={3}
        width="100%"
      >
        {/* details  */}
        <Box gridColumn="span 6">
          <Typography variant="h6" sx={{ mb: 1 }}>
            Details
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }}>
              <TableBody>
                {rowsDetails.length > 0
                  && rowsDetails.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.parameter}
                      </TableCell>
                      <TableCell>{row.value}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* items  */}
        {rowsItems && rowsItems.length > 0 ? (
          <Box gridColumn="span 6" gridRow={`span ${rowsItems.length / 6}`}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Items
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 300 }}>
                <TableBody>
                  {rowsItems.length > 0
                    && rowsItems.map((row) => (
                      <StyledTableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.parameter}
                        </TableCell>
                        <TableCell>{row.value}</TableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ) : (
          <Box gridColumn="span 6">
            <Typography variant="h6" sx={{ mb: 1 }}>
              Items
            </Typography>
            <Typography variant="body1" color="text.secondary" align="center">
              <i>0 items in list</i>
            </Typography>
          </Box>
        )}

        {/* status  */}
        <Box gridColumn="span 6">
          <Typography variant="h6" sx={{ mb: 1 }}>
            Status
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }}>
              <TableBody>
                {rowsStatus.length > 0
                  && rowsStatus.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.parameter}
                      </TableCell>
                      <TableCell>{row.value}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* customer  */}
        <Box gridColumn="span 6">
          <Typography variant="h6" sx={{ mb: 1 }}>
            Customer
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }}>
              <TableBody>
                {rowsCustomer.length > 0
                  && rowsCustomer.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.parameter}
                      </TableCell>
                      <TableCell>{row.value}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}
