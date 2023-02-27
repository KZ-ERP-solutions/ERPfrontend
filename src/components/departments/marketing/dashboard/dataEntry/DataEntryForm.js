import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

const initialValues = {
  // WO/SO Number
  woso_no: '',
  woso_date: '',
  customer: '',
  po_no: '',
  po_date: '',
  item: '',

  // Consignee
  consignee_org: '',
  consignee_addr_line1: '',
  consignee_addr_line2: '',
  consignee_addr_line3: '',
  consignee_pin: '',
  consignee_mob_no: '',
  consignee_gst_no: '',

// Buyer
  buyer_org: '',
  buyer_addr_line1: '',
  buyer_addr_line2: '',
  buyer_addr_line3: '',
  buyer_pin: '',
  buyer_mob_no: '',
  buyer_gst_no: '',
}

const DataEntryForm = ({ close, handleSubmit, submitting }) => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <Container disableGutters maxWidth="100%">
      <form onSubmit={formik.handleSubmit}>
        <Box display={'flex'} gap={4}>
          {/* WO/SO */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1" fontWeight={500} sx={{ mb: 2 }}>
                WO/SO
              </Typography>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="woso_no"
                  name="woso_no"
                  label="WO/SO Number"
                  value={formik.values.woso_no}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.woso_no && Boolean(formik.errors.woso_no)
                  }
                  helperText={formik.touched.woso_no && formik.errors.woso_no}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="woso_date"
                  name="woso_date"
                  type={'date'}
                  value={formik.values.woso_date}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.woso_date && Boolean(formik.errors.woso_date)
                  }
                  helperText={
                    formik.touched.woso_date && formik.errors.woso_date
                  }
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="customer"
                  name="customer"
                  label="Customer"
                  value={formik.values.customer}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.customer && Boolean(formik.errors.customer)
                  }
                  helperText={formik.touched.customer && formik.errors.customer}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="po_no"
                  name="po_no"
                  label="PO Number"
                  value={formik.values.po_no}
                  onChange={formik.handleChange}
                  error={formik.touched.po_no && Boolean(formik.errors.po_no)}
                  helperText={formik.touched.po_no && formik.errors.po_no}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="po_date"
                  name="po_date"
                  label="PO Date"
                  value={formik.values.po_date}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.po_date && Boolean(formik.errors.po_date)
                  }
                  helperText={formik.touched.po_date && formik.errors.po_date}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="item"
                  name="item"
                  label="Item"
                  value={formik.values.item}
                  onChange={formik.handleChange}
                  error={formik.touched.item && Boolean(formik.errors.item)}
                  helperText={formik.touched.item && formik.errors.item}
                />
              </FormControl>
            </Grid>
          </Grid>

          {/* Consignee */}
         
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'end', mt: 2, gap: 2 }}>
          <Button
            type="button"
            onClick={close}
            fontWeight={600}
            // disabled={submitting}>
          >
            Cancel
          </Button>
          {submitting ? (
            <Button
              type="submit"
              variant="contained"
              fontWeight={600}
              disabled
              endIcon={<CircularProgress size={'1rem'} />}
              disableElevation>
              Submitting...
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              fontWeight={600}
              disableElevation>
              Submit
            </Button>
          )}
        </Box>
      </form>
    </Container>
  )
}

export default DataEntryForm
