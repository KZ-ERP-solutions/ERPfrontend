import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import api from '../../../utils/api';

function StockAdd() {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      matcode: '',
      qty: '',
      safe_stock: '',
    },
    onSubmit: async (values) => {
      // const { ...data } = values;

      // await axios
      //   .post('http://127.0.0.1:8000/api/planning/Stock_api/', data)
      //   .catch((err) => console.log(` stock api error:${err}`));
      api.planning.stock
        .add(values)
        .then((res) => console.log(res))
        .catch((err) => console.log(`add stock err: ${err}`));

      formik.resetForm();
      location.reload();
    },
  });
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="contained"
        sx={{ ml: '10px' }}
      >
        Add
      </Button>
      <Dialog onClick={() => setOpen(false)} open={open}>
        <DialogTitle>Stock Data Entry Form</DialogTitle>
        <DialogContent>
          <Container sx={{ padding: '10px' }}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                margin="dense"
                id="matcode"
                name="matcode"
                label="Matcode"
                variant="outlined"
                size="small"
                value={formik.values.matcode}
                onChange={formik.handleChange}
              />

              <TextField
                fullWidth
                margin="dense"
                id="qty"
                name="qty"
                label="Quantity"
                variant="outlined"
                size="small"
                value={formik.values.qty}
                onChange={formik.handleChange}
              />

              <TextField
                fullWidth
                margin="dense"
                id="safe_stock"
                name="safe_stock"
                label="Safe stock"
                variant="outlined"
                size="small"
                value={formik.values.safe_stock}
                onChange={formik.handleChange}
              />
            </form>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} variant="contained">
            Close
          </Button>
          <Button
            type="submit"
            onClick={formik.handleSubmit}
            variant="contained"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default StockAdd;
