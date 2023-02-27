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
  // WO/SO No
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
  consignee_phone_no: '',
  consignee_gst_no: '',

// Buyer
  buyer_org: '',
  buyer_addr_line1: '',
  buyer_addr_line2: '',
  buyer_addr_line3: '',
  buyer_pin: '',
  buyer_phone_no: '',
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
                  label="WO/SO No"
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
                  label="PO No"
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

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1" fontWeight={500} sx={{ mb: 2 }}>
              Address of Consignee
              </Typography>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="consignee_org"
                  name="consignee_org"
                  label="Organization"
                  value={formik.values.consignee_org}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.consignee_org && Boolean(formik.errors.consignee_org)
                  }
                  helperText={formik.touched.consignee_org && formik.errors.consignee_org}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
              <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="consignee_addr_line1"
                  name="consignee_addr_line1"
                  label="Address Line-1"
                  value={formik.values.consignee_addr_line1}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.consignee_addr_line1 && Boolean(formik.errors.consignee_addr_line1)
                  }
                  helperText={formik.touched.consignee_addr_line1 && formik.errors.consignee_addr_line1}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
              <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="consignee_addr_line2"
                  name="consignee_addr_line2"
                  label="Address Line-2"
                  value={formik.values.consignee_addr_line2}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.consignee_addr_line2 && Boolean(formik.errors.consignee_addr_line2)
                  }
                  helperText={formik.touched.consignee_addr_line2 && formik.errors.consignee_addr_line2}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
              <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="consignee_addr_line3"
                  name="consignee_addr_line3"
                  label="Address Line-3"
                  value={formik.values.consignee_addr_line3}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.consignee_addr_line3 && Boolean(formik.errors.consignee_addr_line3)
                  }
                  helperText={formik.touched.consignee_addr_line3 && formik.errors.consignee_addr_line3}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="consignee_pine"
                  name="consignee_pin"
                  type={"number"}
                  label="PIN"
                  value={formik.values.consignee_pin}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.consignee_pin && Boolean(formik.errors.consignee_pin)
                  }
                  helperText={formik.touched.consignee_pin && formik.errors.consignee_pin}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="consignee_phone_no"
                  name="consignee_phone_no"
                  label="Phone No"
                  value={formik.values.consignee_phone_no}
                  onChange={formik.handleChange}
                  error={formik.touched.consignee_phone_no && Boolean(formik.errors.consignee_phone_no)}
                  helperText={formik.touched.consignee_phone_no && formik.errors.consignee_phone_no}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="consignee_gst_no"
                  name="consignee_gst_no"
                  label="GST No"
                  value={formik.values.consignee_gst_no}
                  onChange={formik.handleChange}
                  error={formik.touched.consignee_gst_no && Boolean(formik.errors.consignee_gst_no)}
                  helperText={formik.touched.consignee_gst_no && formik.errors.consignee_gst_no}
                />
              </FormControl>
            </Grid>
          </Grid>
          

          {/* Buyer */}

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1" fontWeight={500} sx={{ mb: 2 }}>
              Address of buyer
              </Typography>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="buyer_org"
                  name="buyer_org"
                  label="Organization"
                  value={formik.values.buyer_org}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.buyer_org && Boolean(formik.errors.buyer_org)
                  }
                  helperText={formik.touched.buyer_org && formik.errors.buyer_org}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
              <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="buyer_addr_line1"
                  name="buyer_addr_line1"
                  label="Address Line-1"
                  value={formik.values.buyer_addr_line1}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.buyer_addr_line1 && Boolean(formik.errors.buyer_addr_line1)
                  }
                  helperText={formik.touched.buyer_addr_line1 && formik.errors.buyer_addr_line1}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
              <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="buyer_addr_line2"
                  name="buyer_addr_line2"
                  label="Address Line-2"
                  value={formik.values.buyer_addr_line2}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.buyer_addr_line2 && Boolean(formik.errors.buyer_addr_line2)
                  }
                  helperText={formik.touched.buyer_addr_line2 && formik.errors.buyer_addr_line2}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
              <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="buyer_addr_line3"
                  name="buyer_addr_line3"
                  label="Address Line-3"
                  value={formik.values.buyer_addr_line3}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.buyer_addr_line3 && Boolean(formik.errors.buyer_addr_line3)
                  }
                  helperText={formik.touched.buyer_addr_line3 && formik.errors.buyer_addr_line3}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="buyer_pine"
                  name="buyer_pin"
                  type={"number"}
                  label="PIN"
                  value={formik.values.buyer_pin}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.buyer_pin && Boolean(formik.errors.buyer_pin)
                  }
                  helperText={formik.touched.buyer_pin && formik.errors.buyer_pin}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="buyer_phone_no"
                  name="buyer_phone_no"
                  label="Phone No"
                  value={formik.values.buyer_phone_no}
                  onChange={formik.handleChange}
                  error={formik.touched.buyer_phone_no && Boolean(formik.errors.buyer_phone_no)}
                  helperText={formik.touched.buyer_phone_no && formik.errors.buyer_phone_no}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="buyer_gst_no"
                  name="buyer_gst_no"
                  label="GST No"
                  value={formik.values.buyer_gst_no}
                  onChange={formik.handleChange}
                  error={formik.touched.buyer_gst_no && Boolean(formik.errors.buyer_gst_no)}
                  helperText={formik.touched.buyer_gst_no && formik.errors.consignee_gst_no}
                />
              </FormControl>
            </Grid>
          </Grid>
          
                  


         
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
