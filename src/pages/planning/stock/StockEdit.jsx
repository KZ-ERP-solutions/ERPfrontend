import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';
import api from '../../../utils/api';

function StockEdit() {
  const formik = useFormik({
    initialValues: {
      matcode: '',
      title: '',
      qty: '',
      Date: '',
      grn_no: '',
    },
    onSubmit: async (values) => {
      axios
        .put('http://127.0.0.1:8000/api/planning/Stock_api/', values)
        .then((res) => console.log(`put sucess${res}`))
        .catch((err) => console.log(err));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          margin="dense"
          id="matcode"
          name="matcode"
          label="Matcode"
          variant="outlined"
          size="small"
          value={formik.values.matcode || ''}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          margin="dense"
          id="title"
          name="title"
          label="Title"
          variant="outlined"
          size="small"
          value={formik.values.title}
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
          id="grn_no"
          name="grn_no"
          label="GNR No"
          variant="outlined"
          size="small"
          value={formik.values.grn_no}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          margin="dense"
          id="Date"
          name="Date"
          type="date"
          variant="outlined"
          size="small"
          value={formik.values.Date}
          onChange={formik.handleChange}
        />
        <Button type="submit" variant="contained" onClick={formik.handleSubmit}>
          Update
        </Button>
      </form>
    </div>
  );
}

export default StockEdit;
