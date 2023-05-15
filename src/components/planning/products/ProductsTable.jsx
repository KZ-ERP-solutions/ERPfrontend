import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { LinearProgress } from '@mui/material';

const headCells = [
  {
    id: 'productid',
    label: 'Product ID',
  },
  {
    id: 'productname',
    label: 'Product Name',
  },
  {
    id: 'standard',
    label: 'Standard',
  },
  {
    id: 'taxid',
    label: 'Tax ID',
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

export default function ProductsTable({
  rows = [],
  page,
  count,
  changePage,
  loading,
  rowsPerPage = 10,
  filter,
}) {
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const filteredProduct = rows.find((prod) => prod.productid === filter);

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer sx={{ width: '100%' }}>
        <Table sx={{ minWidth: 750, width: '100%' }}>
          <EnhancedTableHead />
          <TableBody>
            {rows.length > 0 && !filter
              ? rows.map((row) => (
                <TableRow hover key={row.productid}>
                  <TableCell>{row.productid}</TableCell>
                  <TableCell>{row.productname}</TableCell>
                  <TableCell>{row.standard ? 'Yes' : 'No'}</TableCell>
                  <TableCell>{row.taxid}</TableCell>
                </TableRow>
              ))
              : null}
            {emptyRows > 0 && (
              <TableRow>
                <TableCell colSpan={6} />
              </TableRow>
            )}
            {filter && (
              <TableRow hover>
                <TableCell>{filteredProduct.productid}</TableCell>
                <TableCell>{filteredProduct.productname}</TableCell>
                <TableCell>{filteredProduct.standard ? 'Yes' : 'No'}</TableCell>
                <TableCell>{filteredProduct.taxid}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {loading && <LinearProgress />}
      {!filter && (
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={changePage}
        />
      )}
    </Box>
  );
}
