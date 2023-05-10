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
import axios from 'axios';
import api from '../../../utils/api';

function StockAdd() {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      matcode: '',
      qty: '',
      remark: '',
      grn_no: '',
      date: '',
    },
    onSubmit: async (values) => {
      const { ...data } = values;

      await axios
        .post('http://127.0.0.1:8000/api/planning/Stock_api/', data)
        .catch((err) => console.log(` stock api error:${err}`));
      // api.planning.stock
      //   .add(values)
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(`add stock err: ${err}`));
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
      <Dialog open={open}>
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
                id="grn_no"
                name="grn_no"
                label="GRN No"
                variant="outlined"
                size="small"
                value={formik.values.grn_no}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                type="date"
                margin="dense"
                id="date"
                name="date"
                variant="outlined"
                size="small"
                value={formik.values.date}
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
                id="remark"
                name="remark"
                label="Remarks"
                variant="outlined"
                size="small"
                value={formik.values.remark}
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
