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
    id: 'matcode',
    label: 'Material code',
  },
  {
    id: 'matgroup',
    label: 'Material group',
  },
  {
    id: 'title',
    label: 'Material name',
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

export default function MaterialsTable({
  rows,
  page,
  count,
  changePage,
  loading,
  rowsPerPage = 10,
  filter,
}) {
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const filteredMaterial = rows.find((mat) => mat.matcode === filter);

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer sx={{ width: '100%' }}>
        <Table
          sx={{ minWidth: 750, width: '100%' }}
          aria-labelledby="tableTitle"
        >
          <EnhancedTableHead rowCount={rows.length} />
          <TableBody>
            {rows.length > 0 && !filter
              ? rows.map((row) => (
                <TableRow key={row.productid} sx={{ cursor: 'pointer' }}>
                  <TableCell>{row.matcode}</TableCell>
                  <TableCell>{row.matgroup}</TableCell>
                  {/* <TableCell>{row.standard ? 'Yes' : 'No'}</TableCell> */}
                  <TableCell>{row.title}</TableCell>
                </TableRow>
              ))
              : null}
            {emptyRows > 0 && (
              <TableRow>
                <TableCell colSpan={6} />
              </TableRow>
            )}
            {filter && (
              <TableRow sx={{ cursor: 'pointer' }}>
                <TableCell>{filteredMaterial.matcode}</TableCell>
                <TableCell>{filteredMaterial.matgroup}</TableCell>
                {/* <TableCell>{row.standard ? 'Yes' : 'No'}</TableCell> */}
                <TableCell>{filteredMaterial.title}</TableCell>
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
