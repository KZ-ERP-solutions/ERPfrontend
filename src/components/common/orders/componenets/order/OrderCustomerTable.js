import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import stringFns from '../../../../../utils/stringFns'

const OrderCustomerTable = ({
  buyer = null,
  consignee = null,
  editable = false,
}) => {
  const columnsBuyer = [
    {
      field: 'id',
      headerName: '#',
      width: 80,
    },
    {
      field: 'parameter',
      headerName: 'Parameter',
      minWidth: 150,
      flex: 1.5,
    },
    {
      field: 'value',
      headerName: 'Value',
      minWidth: 200,
      flex: 2,
      editable: editable,
      sortable: false,
    },
  ]
  const [rowsWithoutIdBuyer, setRowsWithoutIdBuyer] = useState([])
  const [rowsWithoutIdConsign, setRowsWithoutIdConsign] = useState([])
  const [rowsBuyer, setRowsBuyer] = useState([])
  const [rowsConsign, setRowsConsign] = useState([])

  useEffect(() => {
    const setRow = () => {
      if (buyer !== null) {
        const rows = []
        const { id, type, group, ...fields } = buyer
        for (const [key, value] of Object.entries(fields)) {
          if (!rows.find((row) => row.parameter === key))
            rows.push({
              parameter: stringFns.sentenceCase(key),
              value: value,
            })
        }
        setRowsWithoutIdBuyer(rows)
      } else setRowsWithoutIdBuyer([])

      if (consignee !== null) {
        const rows = []
        for (const [key, value] of Object.entries(consignee)) {
          if (!rows.find((row) => row.parameter === key))
            rows.push({
              parameter: stringFns.sentenceCase(key),
              value: value,
            })
        }
        setRowsWithoutIdConsign(rows)
      } else setRowsWithoutIdConsign([])
    }
    setRow()
  }, [buyer, consignee])

  useEffect(() => {
    if (rowsWithoutIdBuyer.length > 0)
      setRowsBuyer([
        ...rowsWithoutIdBuyer.map((row, index) => ({ id: index + 1, ...row })),
      ])
    else setRowsBuyer([])

    if (rowsWithoutIdConsign.length > 0)
      setRowsConsign([
        ...rowsWithoutIdConsign.map((row, index) => ({
          id: index + 1,
          ...row,
        })),
      ])
    else setRowsBuyer([])
  }, [rowsWithoutIdBuyer, rowsWithoutIdConsign])

  return (
    <Grid
      container
      sx={{ width: '100%', justifyContent: 'center', my: 5 }}
      columnSpacing={5}>
      <Grid item sx={{ disply: 'flex', height: 305, width: '45%' }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Buyer Address
        </Typography>
        <DataGrid
          sx={{  bgcolor:'background.paper'}}
          rows={rowsBuyer}
          columns={columnsBuyer}
          initialState={{
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
          disableColumnMenu
          hideFooter
          rowHeight={35}
          rowCount={rowsBuyer.length}
        />
      </Grid>
      <Grid item sx={{ disply: 'flex', height: 305, width: '45%' }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Consignee Address
        </Typography>
        <DataGrid
              sx={{  bgcolor:'background.paper'}}
          rows={rowsBuyer}
          columns={columnsBuyer}
          initialState={{
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
          disableColumnMenu
          hideFooter
          rowHeight={35}
          rowCount={rowsBuyer.length}
        />
      </Grid>
    </Grid>
  )
}

export default OrderCustomerTable
