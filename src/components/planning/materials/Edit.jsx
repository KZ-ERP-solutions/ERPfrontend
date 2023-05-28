import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Skeleton,
  TextField,
} from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';

function Edit() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [matcode, setMatcode] = useState('');
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleMatcodeChange = () => {
    setLoading(true);
    setMatcode(input);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    if (matcode !== '') {
      axios
        .get(`http://localhost:8000/api/planning/Material_api/${matcode}/`)
        .then((res) => {
          console.log(res);
          setData(res.data);

          // Update the formik initial values
          formik.setValues({
            ...formik.values,
            matcode: res.data.matcode,
            title: res.data.title,
            ref: res.data.ref,
            au: res.data.au,
            safstk: res.data.safstk,
            ordercst: res.data.ordercst,
            safty: res.data.safty,
            spare: res.data.spare,
            matgroup: res.data.matgroup,
            abc: res.data.abc,
            reorderqty: res.data.reorderqty,
            unitrate: res.data.unitrate,
            dwgno: res.data.dwgno,
          });
        })
        .catch((err) => console.log(err));
    }
  }, [matcode]);

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
      // api.planning.material
      //   .add(values)
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err));
      const url = `http://localhost:8000/api/planning/Material_api/${formik.values.matcode}/`;

      await axios
        .put(url, values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  });
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        sx={{ marginRight: '10px' }}
      >
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          formik.resetForm();
          setMatcode('');
          setLoading(false);
        }}
      >
        <DialogTitle>Material Editor</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            id="matcode"
            name="matcode"
            label="Matcode"
            variant="outlined"
            size="small"
            value={input}
            onChange={handleInputChange}
          />
          <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              onClick={handleMatcodeChange}
            >
              Search
            </Button>
          </DialogActions>
          {loading ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
              }}
            >
              <Skeleton variant="rounded" width="518px" height="50px" />
              <Skeleton animation="wave" />
              <Skeleton variant="rounded" width="518px" height="50px" />
              <Skeleton animation="wave" />
              <Skeleton variant="rounded" width="518px" height="50px" />
              <Skeleton animation="wave" />
            </div>
          ) : (
            matcode.length >= 6 && (
              <form
                style={{
                  border: '2px solid #48466d',
                  padding: '15px',
                  borderRadius: '10px',
                }}
              >
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

                <div style={{ display: 'flex', gap: '10px' }}>
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
                </div>
              </form>
            )
          )}
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => {
              setOpen(false);
              setOpen(false);
              formik.resetForm();
              setMatcode('');
              setLoading(false);
            }}
          >
            Close
          </Button>
          <Button
            variant="contained"
            type="submit"
            onClick={formik.handleSubmit}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Edit;
