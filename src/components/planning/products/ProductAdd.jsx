import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

function ProductAdd() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add
      </Button>
      <Dialog open={open}>
        <DialogTitle>Product Add</DialogTitle>
        <DialogContent>
          <form>
            <TextField />
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProductAdd;
