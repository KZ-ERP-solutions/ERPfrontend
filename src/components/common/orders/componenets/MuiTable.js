import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import { visuallyHidden } from '@mui/utils'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

const TableHeadCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.tertiary.light,
  },
}))

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort, columns } = props
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead sx={{}}>
      <TableRow>
        {columns.length > 0 &&
          columns.map((column) => (
            <TableHeadCell
              key={column.id}
              padding="normal"
              sortDirection={orderBy === column.id ? order : false}>
              <TableSortLabel
                active={orderBy === column.id}
                direction={orderBy === column.id ? order : 'asc'}
                onClick={createSortHandler(column.id)}>
                {column.label}
                {orderBy === column.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableHeadCell>
          ))}
      </TableRow>
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  columns: PropTypes.array.isRequired,
}

export default function MuiTable({ columns = [], rows = [], orderFull = [] }) {
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('woso_date')
  const navigate = useNavigate()
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer>
        <Table
          sx={{
            minWidth: 750,
            borderLeft: 1,
            borderRight: 1,
            borderColor: 'tertiary.light',
          }}
          aria-labelledby="tableTitle"
          size="medium">
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
            columns={columns}
          />
          <TableBody>
            {rows.length > 0
              ? stableSort(rows, getComparator(order, orderBy)).map(
                  (row, index) => {
                    return (
                      <TableRow
                        key={row?.orderId}
                        hover
                        sx={{ bgcolor: 'background.paper' }}
                        onClick={() =>
                          navigate(
                            `${
                              row?.orderId
                                ? `order/${row?.orderId}`
                                : ``
                            }`,
                            { state: { orders: orderFull } }
                          )
                        }
                        tabIndex={-1}>
                        <TableCell padding="normal">{row.woso_no}</TableCell>
                        <TableCell padding="normal">{row.woso_date}</TableCell>
                        <TableCell padding="normal">{row.po_no}</TableCell>
                        <TableCell padding="normal">
                          {row.consignee_org}
                        </TableCell>
                        <TableCell padding="normal">{row.customer}</TableCell>
                        <TableCell padding="normal">{row.items}</TableCell>
                      </TableRow>
                    )
                  }
                )
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
