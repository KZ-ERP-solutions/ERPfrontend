import {
  Box, Button, FormControl, TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

const initialValues = {
  no: '',
  date: null,
  customer: '',
  note: '',
};

const validationSchema = yup.object({
  no: yup.string().required('WO/SO no is required'),
  date: yup.string().required('Date is required'),
  customer: yup.string().required('Customer is required'),
  note: yup.string(),
});

function AddOrderForm({ handleSubmit, close }) {
  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2.5,
        width: '100%',
        py: 1,
      }}
    >
      <FormControl>
        <TextField
          fullWidth
          autoFocus
          //   disabled={submitting}
          size="small"
          id="no"
          name="no"
          label="WO/SO no"
          value={formik.values.no}
          onChange={formik.handleChange}
          error={formik.touched.no && Boolean(formik.errors.no)}
          helperText={formik.touched.no && formik.errors.no}
        />
      </FormControl>

      <FormControl>
        <TextField
          fullWidth
          autoFocus
          //   disabled={submitting}
          InputLabelProps={{ shrink: true }}
          size="small"
          type="date"
          id="date"
          name="date"
          label="Date"
          value={formik.values.date}
          onChange={formik.handleChange}
          error={formik.touched.date && Boolean(formik.errors.date)}
          helperText={formik.touched.date && formik.errors.date}
        />
      </FormControl>

      <FormControl>
        <TextField
          fullWidth
          autoFocus
          //   disabled={submitting}
          size="small"
          id="customer"
          name="customer"
          label="Customer"
          value={formik.values.customer}
          onChange={formik.handleChange}
          error={formik.touched.customer && Boolean(formik.errors.customer)}
          helperText={formik.touched.customer && formik.errors.customer}
        />
      </FormControl>

      <FormControl>
        <TextField
          fullWidth
          autoFocus
          //   disabled={submitting}
          size="small"
          id="note"
          name="note"
          label="Comments"
          value={formik.values.not}
          onChange={formik.handleChange}
          error={formik.touched.note && Boolean(formik.errors.note)}
          helperText={formik.touched.note && formik.errors.note}
        />
      </FormControl>

      <Box
        sx={{
          mt: 0.5,
          display: 'flex',
          justifyContent: 'end',
          gap: 2,
        }}
      >
        <Button variant="outlined" type="button" onClick={close}>
          Cancel
        </Button>
        <Button variant="contained" type="submit">
          Add
        </Button>
      </Box>
    </Box>
  );
}

export default AddOrderForm;
