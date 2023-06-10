import {
  Alert,
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import api from '../../../utils/api';

function ProductAdd() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alert, setAlert] = useState(false);

  const formik = useFormik({
    initialValues: {
      productid: '',
      productname: '',
      standard: false,
      ssrl: '',
      submited: false,
      db: false,
      saeid: '',
      taxid: '',
      model: '',
      netwt: '',
      grosswt: '',
      partno: '',
      bpcode: '',
    },
    onSubmit: async (values) => {
      api.planning.product
        .add(values)
        .then((res) => {
          console.log(res);
          setSuccess(true);
          formik.resetForm();
          window.location.reload();
          setTimeout(() => {
            setSuccess(false);
          }, 4000);
        })
        .catch((err) => {
          console.log(err);
          setAlert(true);
          setTimeout(() => {
            setAlert(false);
          }, 4000);
        });
    },
  });
  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add
      </Button>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DialogTitle>Product Add</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              fullWidth
              margin="dense"
              id="productid"
              name="productid"
              label="ID"
              variant="outlined"
              size="small"
              value={formik.values.productid}
              onChange={formik.handleChange}
            />
            <TextField
              fullWidth
              margin="dense"
              id="productname"
              name="productname"
              label="Name"
              variant="outlined"
              size="small"
              value={formik.values.productname}
              onChange={formik.handleChange}
            />

            <TextField
              fullWidth
              margin="dense"
              type="number"
              id="ssrl"
              name="ssrl"
              label="SSRL"
              variant="outlined"
              size="small"
              value={formik.values.ssrl}
              onChange={formik.handleChange}
            />

            <TextField
              fullWidth
              margin="dense"
              type="number"
              id="saeid"
              name="saeid"
              label="saeid"
              variant="outlined"
              size="small"
              value={formik.values.saeid}
              onChange={formik.handleChange}
            />
            <TextField
              fullWidth
              margin="dense"
              type="number"
              id="taxid"
              name="taxid"
              label="taxid"
              variant="outlined"
              size="small"
              value={formik.values.taxid}
              onChange={formik.handleChange}
            />
            <TextField
              fullWidth
              margin="dense"
              id="model"
              name="model"
              label="Model"
              variant="outlined"
              size="small"
              value={formik.values.model}
              onChange={formik.handleChange}
            />
            <TextField
              fullWidth
              margin="dense"
              type="number"
              id="netwt"
              name="netwt"
              label="Net Weight"
              variant="outlined"
              size="small"
              value={formik.values.netwt}
              onChange={formik.handleChange}
            />
            <TextField
              fullWidth
              margin="dense"
              type="number"
              id="grosswt"
              name="grosswt"
              label="Gross Weight"
              variant="outlined"
              size="small"
              value={formik.values.grosswt}
              onChange={formik.handleChange}
            />
            <TextField
              fullWidth
              margin="dense"
              type="number"
              id="partno"
              name="partno"
              label="Part No"
              variant="outlined"
              size="small"
              value={formik.values.partno}
              onChange={formik.handleChange}
            />
            <TextField
              fullWidth
              margin="dense"
              id="bpcode"
              name="bpcode"
              label="BP Code"
              variant="outlined"
              size="small"
              value={formik.values.bpcode}
              onChange={formik.handleChange}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={formik.values.standard}
                    onChange={formik.handleChange}
                    name="standard"
                    color="primary"
                  />
                )}
                label="Standard"
              />
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={formik.values.submited}
                    onChange={formik.handleChange}
                    name="submited"
                    color="primary"
                  />
                )}
                label="Submited"
              />
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={formik.values.db}
                    onChange={formik.handleChange}
                    name="db"
                    color="primary"
                  />
                )}
                label="DB"
              />
            </Box>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => {
              setOpen(false);
            }}
          >
            Close
          </Button>
          <Button
            type="submit"
            variant="contained"
            onClick={() => formik.handleSubmit()}
          >
            Submit
          </Button>
        </DialogActions>
        {success && (
          <Alert variant="filled" severity="success">
            Product is successfully add
          </Alert>
        )}
        {alert && (
          <Alert variant="filled" severity="error">
            Product failed to add
          </Alert>
        )}
      </Dialog>
    </div>
  );
}

export default ProductAdd;
