import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import stringFns from '../../../../../utils/stringFns';

function OrderMainTable({ order = null, editable = false }) {
  const columns = [
    {
      field: 'id',
      headerName: '#',
      width: 80,
    },
    {
      field: 'parameter',
      headerName: 'Parameter',
      minWidth: 200,
      flex: 2,
    },
    {
      field: 'value',
      headerName: 'Value',
      minWidth: 300,
      flex: 3,
      editable,
      sortable: false,
    },
  ];
  const [rowsWithoutId, setRowsWithoutId] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const setRow = () => {
      if (order !== null) {
        const rowsTemp = [];
        for (const [key, value] of Object.entries(order)) {
          if (!rowsTemp.find((row) => row.parameter === key)) {
            rowsTemp.push({
              parameter: stringFns.sentenceCase(key),
              value,
            });
          }
        }
        setRowsWithoutId(rowsTemp);
      } else setRowsWithoutId([]);
    };
    setRow();
  }, [order]);

  useEffect(() => {
    if (rowsWithoutId.length > 0) {
      setRows([
        ...rowsWithoutId.map((row, index) => ({ id: index + 1, ...row })),
      ]);
    } else setRows([]);
  }, [rowsWithoutId]);

  return (
    <Box sx={{ height: 794 }}>
      <DataGrid
        sx={{ bgcolor: 'background.paper' }}
        rows={rows}
        columns={columns}
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
        rowCount={rows.length}
      />
    </Box>
  );
}

export default OrderMainTable;
