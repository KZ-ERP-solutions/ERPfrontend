import {
  Button, Dialog, DialogContent, DialogTitle,
} from '@mui/material';
import React, { useState } from 'react';

function Edit() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        sx={{ marginRight: '10px' }}
      >
        Edit
      </Button>
      <Dialog open={open} onClick={() => setOpen(false)}>
        <DialogTitle>Material Item Content Editor</DialogTitle>
        <DialogContent>hee</DialogContent>
      </Dialog>
    </div>
  );
}

export default Edit;
