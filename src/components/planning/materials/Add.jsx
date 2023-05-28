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

function Add() {
  const [open, setOpen] = useState(false);

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
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  });
  return (
    <div>
      <Button
        variant="contained"
        sx={{ marginRight: '10px' }}
        onClick={() => setOpen(true)}
      >
        Add
      </Button>
      <Dialog onClose={() => setOpen(false)} open={open}>
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
        <DialogActions>
          <Button onClick={() => setOpen(false)} variant="contained">
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
      </Dialog>
    </div>
  );
}

export default Add;
