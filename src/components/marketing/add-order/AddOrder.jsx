import { Button, styled, Dialog as MuiDialog } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddOrderForm from './AddOrderForm';
import api from '../../../utils/api';

const Dialog = styled(MuiDialog)(() => ({
  '& .MuiDialog-paper': {
    borderRadius: 16,
    overflowX: 'hidden',
  },
}));

function AddOrder() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddOrder = (formData) => {
    api.marketing.order
      .create(formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Button
        endIcon={<AddIcon />}
        variant="contained"
        onClick={handleClickOpen}
      >
        Add Order
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm">
        <DialogTitle>ADD NEW ORDER</DialogTitle>
        <DialogContent sx={{ width: 500 }}>
          <AddOrderForm
            handleSubmit={(values) => handleAddOrder(values)}
            close={() => handleClose()}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddOrder;
