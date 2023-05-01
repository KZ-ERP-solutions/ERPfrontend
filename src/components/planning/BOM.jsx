import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import api from '../../utils/api';

function BOM() {
  const [boms, setBoms] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    api.planning.product.list().then((res) => console.log(res));
  }, []);

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Generate BOM
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Generate BOM</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Generate BOM as .xlsx file for selected product(BOM ID)
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ m: 1 }}>
          <Button variant="outlined" onClick={handleClose} fullWidth>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleClose} fullWidth>
            Generate
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default BOM;
