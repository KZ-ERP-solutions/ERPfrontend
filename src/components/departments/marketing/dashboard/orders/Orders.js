import { Container } from '@mui/system'
import React from 'react'
import orders from '../orders.json'
import { Typography } from '@mui/material'
import MuiTable from './MuiTable'

const columns = [
  { id: 'woso_no', label: 'WO/SO No' },
  { id: 'woso_date', label: 'WO/SO Date' },
  { id: 'po_no', label: 'PO No' },
  { id: 'consignee', label: 'Consignee' },
  { id: 'customer', label: 'Customer' },
  { id: 'item', label: 'Item' },
]

const Orders = () => {
  function createData(id, woso_no, woso_date, po_no,consignee_org, customer, items) {
    return { id, woso_no, woso_date, po_no,consignee_org, customer, items }
  }

  const rows =
    orders.orders.length > 0
      ? [
          ...orders.orders.map((order, index) =>
            createData(
              index,
              order.woso_no,
              order.woso_date,
              order.po_no,
              order.consignee_org,
              order.customer,
              order.item
            )
          ),
        ]
      : []

  console.log(rows)
  return (
    <Container maxWidth="100%" sx={{ p: 2 }}>
      <Typography variant="h4" fontWeight={600} sx={{ my: 2 }}>
        Orders
      </Typography>
      <MuiTable columns={columns} rows={rows} />
    </Container>
  )
}

export default Orders
