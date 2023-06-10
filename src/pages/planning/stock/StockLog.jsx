import {
  Button,
  Dialog as MuiDialog,
  DialogContent,
  DialogTitle,
  styled,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import api from '../../../utils/api';

const Dialog = styled(MuiDialog)(() => ({
  '& .MuiDialog-paper': {
    borderRadius: 16,
    overflowX: 'hidden',
  },
}));

function StockLog() {
  const [open, setOpen] = useState(false);
  const [log, setLog] = useState([]);
  useEffect(() => {
    api.planning.stock
      .log()
      .then((res) => {
        setLog(res);
        console.log(log);
      })
      .catch((err) => console.log(err));
  }, []);
  const columns = [
    { field: 'Matcode', headName: 'matcode' },
    { field: 'Quantity', headName: 'Quantity' },
    { field: 'Date', headName: 'Date' },
    { field: 'GRN_No', headName: 'GRN No', type: 'number' },
    { field: 'SRN_No', headName: 'SRN No', type: 'number' },
    { field: 'remark', headName: 'Remark' },
  ];

  const rows = log.map((item) => ({
    id: uuidv4(),
    Matcode: item.matcode,
    Quantity: item.qty,
    Date: item.Date,
    GRN_No: item.grn_no,
    SRN_No: item.srn_no,
    remark: item.remark,
  }));

  console.log(columns);

  return (
    <div>
      <Button
        variant="contained"
        sx={{ marginLeft: '10px' }}
        onClick={() => setOpen(true)}
      >
        Log
      </Button>
      <Dialog maxWidth="auto" open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Stock Log</DialogTitle>
        <DialogContent sx={{ p: 4 }}>
          <div style={{ height: 400 }}>
            <DataGrid
              columns={columns}
              rows={rows}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default StockLog;
