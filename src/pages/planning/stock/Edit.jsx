import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../../../utils/api';

function Edit() {
  const [open, setOpen] = useState(false);
  const [matcode, setMatcode] = useState([]);
  const [selectValue, setSelectedValue] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    api.planning.stock
      .suggestions()
      .then((res) => {
        console.log(res?.Material_ids);
        setMatcode(res?.Material_ids?.map((mat) => mat.matcode));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api.planning.stock
      .list()
      .then((res) => {
        console.log(res);
        setList(res);
        const stockList = res.filter((item) => item.matcode === selectValue);
        console.log(stockList);
      })
      .catch((err) => {
        console.log(`stock has ${err}`);
      });
  }, []);

  const handleSelectedSearch = (event, newValue) => {
    setSelectedValue(newValue);
    const filteredList = list.filter((item) => item.matcode === newValue);
    if (filteredList.length > 0) {
      const selectedItem = filteredList[0];
      formik.setValues({
        ...formik.values,
        matcode: selectedItem.matcode,
        title: selectedItem.title,
        qty: selectedItem.qty,
        Date: selectedItem.Date,
        grn_no: selectedItem.grn_no,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      matcode: '',
      title: '',
      qty: '',
      Date: new Date().toISOString().split('T')[0],
      grn_no: '',
    },
    onSubmit: async (values) => {
      await axios
        .put('http://localhost:8000/api/planning/Stock_api/', values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  });

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        sx={{ margin: '0px 10px' }}
      >
        Edit
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Stock Edit</DialogTitle>
        <DialogContent>
          <Autocomplete
            options={matcode}
            onChange={handleSelectedSearch}
            renderInput={(params) => (
              <TextField {...params} label="Search by material code" />
            )}
          />
        </DialogContent>
        <DialogContent>
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
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button
            type="submit"
            variant="contained"
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
