import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { LinearProgress } from '@mui/material';

const headCells = [
  {
    id: 'srlno',
    label: 'SRL NO',
  },
  {
    id: 'prno',
    label: 'PR No',
  },
  {
    id: 'pono',
    label: 'PO NO',
  },
  {
    id: 'pr_qty',
    label: 'PR Qty',
  },
  {
    id: 'pr_date',
    label: 'PR Date',
  },
  {
    id: 'poqty',
    label: 'PO Qty',
  },
  {
    id: 'pr_date',
    label: 'PO Date',
  },
];

function EnhancedTableHead() {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id}>{headCell.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function PiTable({
  rows = [],

  loading,

  filter,
}) {
  // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  // const filteredProduct = rows.find((prod) => prod.productid === filter);

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer sx={{ width: '100%' }}>
        <Table sx={{ minWidth: 750, width: '100%' }}>
          <EnhancedTableHead />
          <TableBody>
            {rows.length > 0 && !filter
              ? rows.map((row) => (
                <TableRow key={row.srlno}>
                  <TableCell>{row.srlno}</TableCell>
                  <TableCell>{row.prno}</TableCell>
                  <TableCell>{row.pono}</TableCell>
                  <TableCell>{row.pr_qty}</TableCell>
                  <TableCell>{row.pr_date}</TableCell>
                  <TableCell>{row.poqty}</TableCell>
                  <TableCell>{row.podate}</TableCell>
                </TableRow>
              ))
              : null}
            {/* {emptyRows > 0 && (
              <TableRow>
                <TableCell colSpan={6} />
              </TableRow>
            )}
            {filter && filteredProduct ? (
              <TableRow>
                <TableCell>{filteredProduct.productid}</TableCell>
                <TableCell>{filteredProduct.productname}</TableCell>
                <TableCell>{filteredProduct.standard ? 'Yes' : 'No'}</TableCell>
                <TableCell>{filteredProduct.taxid}</TableCell>
              </TableRow>
            ) : filter ? (
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ my: 2 }}
              >
                Failed to find product with id
                {' '}
                {filter}
              </Typography>
            ) : null} */}
          </TableBody>
        </Table>
      </TableContainer>
      {loading && <LinearProgress />}
    </Box>
  );
}
