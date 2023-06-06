import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import { useNavigate } from 'react-router-dom';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    order, orderBy, onRequestSort, columns,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.length > 0
          && columns.map((column) => (
            <TableCell
              key={column.id}
              padding="normal"
              sortDirection={orderBy === column.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === column.id}
                direction={orderBy === column.id ? order : 'asc'}
                onClick={createSortHandler(column.id)}
              >
                {column.label}
                {orderBy === column.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
      </TableRow>
    </TableHead>
  );
}

export default function MuiTable({ columns = [], rows = [] }) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('woso_date');
  const navigate = useNavigate();
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer>
        <Table
          sx={{
            minWidth: 750,
          }}
          size="medium"
        >
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
            columns={columns}
          />
          <TableBody>
            {rows.length > 0
              ? stableSort(rows, getComparator(order, orderBy)).map((row) => (
                <TableRow
                  key={row?.orderId}
                  onClick={() => navigate(`${row?.no ? `order/${row.no}` : ''}`)}
                  tabIndex={-1}
                >
                  <TableCell padding="normal">{row.no}</TableCell>
                  <TableCell padding="normal">{row.date}</TableCell>
                  <TableCell padding="normal">{row.po_no}</TableCell>
                  {/* <TableCell padding="normal">{row.consignee_org}</TableCell> */}
                  <TableCell padding="normal">{row.customer}</TableCell>
                  <TableCell padding="normal">{row.marketing_item}</TableCell>
                </TableRow>
              ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
