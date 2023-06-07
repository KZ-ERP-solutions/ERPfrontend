import {
  Button,
  Container,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  styled,
  Alert,
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import api from '../../../utils/api';

const Dialog = styled(MuiDialog)(() => ({
  '& .MuiDialog-paper': {
    borderRadius: 16,
    overflowX: 'hidden',
  },
}));

function Add() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alert, setAlert] = useState(false);

  const formik = useFormik({
    initialValues: {
      matcode: '',
      title: '',
      ref: '',
      au: '',
      safstk: '',
      ordercst: '',
      safty: '',
      spare: '',
      matgroup: '',
      abc: '',
      reorderqty: '',
      unitrate: '',
      dwgno: '',
    },
    onSubmit: async (values) => {
      api.planning.material
        .add(values)
        .then((res) => {
          console.log(res);
          setSuccess(true);
          formik.resetForm();
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
        onClose={() => {
          setOpen(false);
          formik.resetForm();
        }}
        open={open}
      >
        <DialogTitle>Add Materials</DialogTitle>
        <DialogContent>
          <Container>
            <form>
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
                id="ref"
                name="ref"
                label="Ref"
                variant="outlined"
                size="small"
                value={formik.values.ref}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                margin="dense"
                id="au"
                name="au"
                label="au"
                variant="outlined"
                size="small"
                value={formik.values.au}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                margin="dense"
                id="safstk"
                name="safstk"
                label="safstk"
                variant="outlined"
                size="small"
                value={formik.values.safstk}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                margin="dense"
                id="ordercst"
                name="ordercst"
                label="ordercst"
                variant="outlined"
                size="small"
                value={formik.values.ordercst}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                margin="dense"
                id="safty"
                name="safty"
                label="safty"
                variant="outlined"
                size="small"
                value={formik.values.safty}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                margin="dense"
                id="spare"
                name="spare"
                label="spare"
                variant="outlined"
                size="small"
                value={formik.values.spare}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                margin="dense"
                id="matgroup"
                name="matgroup"
                label="matgroup"
                variant="outlined"
                size="small"
                value={formik.values.matgroup}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                margin="dense"
                id="abc"
                name="abc"
                label="abc"
                variant="outlined"
                size="small"
                value={formik.values.abc}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                margin="dense"
                id="reorderqty"
                name="reorderqty"
                label="reorderqty"
                variant="outlined"
                size="small"
                value={formik.values.reorderqty}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                margin="dense"
                id="unitrate"
                name="unitrate"
                label="unitrate"
                variant="outlined"
                size="small"
                value={formik.values.unitrate}
                onChange={formik.handleChange}
              />
              <TextField
                fullWidth
                margin="dense"
                id="dwgno"
                name="dwgno"
                label="dwgno"
                variant="outlined"
                size="small"
                value={formik.values.dwgno}
                onChange={formik.handleChange}
              />
            </form>
          </Container>
        </DialogContent>
        <DialogActions sx={{ mb: 1, mr: 1 }}>
          <Button
            onClick={() => {
              setOpen(false);
              formik.resetForm();
            }}
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={formik.handleSubmit}
            variant="contained"
          >
            Submit
          </Button>
        </DialogActions>
        {success && (
          <Alert variant="filled" severity="success">
            Material is successfully added
          </Alert>
        )}
        {alert && (
          <Alert variant="filled" severity="error">
            Material failed to added
          </Alert>
        )}
      </Dialog>
    </div>
  );
}

export default Add;
