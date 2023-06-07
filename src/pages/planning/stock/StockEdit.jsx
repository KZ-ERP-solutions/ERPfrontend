/* eslint-disable react/destructuring-assignment */
import { Alert, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../../../utils/api';

function StockEdit(info) {
  const [data, setData] = useState('');
  const [success, setSuccess] = useState(true);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    api.planning.stock
      .list()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);
  const formik = useFormik({
    initialValues: {
      matcode: info.info.matcode,
      title: info.info.title,
      qty: info.info.qty,
      Date: new Date().toISOString().split('T')[0],
      grn_no: '',
    },
    onSubmit: async (values) => {
      await axios
        .put('http://localhost:8000/api/planning/Stock_api/', values)
        .then((res) => {
          console.log(res);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 4000);
        })
        .catch((err) => {
          console.log(err);
          setAlert(true);
          setTimeout(() => {
            setAlert(false);
          });
        });
      setTimeout(() => {
        window.location.reload();
      }, 500);
      // api.planning.stock
      //   .edit(values)
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} key={data.matcode}>
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
