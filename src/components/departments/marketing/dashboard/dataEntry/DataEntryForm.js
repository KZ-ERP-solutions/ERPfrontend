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
import initialValues from './initialValues.json'

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
                  label="WO/SO no"
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
                  label="PO no"
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
                  label="PO date"
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
                    formik.touched.consignee_org &&
                    Boolean(formik.errors.consignee_org)
                  }
                  helperText={
                    formik.touched.consignee_org && formik.errors.consignee_org
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
                  id="consignee_addr_line1"
                  name="consignee_addr_line1"
                  label="Address line-1"
                  value={formik.values.consignee_addr_line1}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.consignee_addr_line1 &&
                    Boolean(formik.errors.consignee_addr_line1)
                  }
                  helperText={
                    formik.touched.consignee_addr_line1 &&
                    formik.errors.consignee_addr_line1
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
                  id="consignee_addr_line2"
                  name="consignee_addr_line2"
                  label="Address line-2"
                  value={formik.values.consignee_addr_line2}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.consignee_addr_line2 &&
                    Boolean(formik.errors.consignee_addr_line2)
                  }
                  helperText={
                    formik.touched.consignee_addr_line2 &&
                    formik.errors.consignee_addr_line2
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
                  id="consignee_addr_line3"
                  name="consignee_addr_line3"
                  label="Address line-3"
                  value={formik.values.consignee_addr_line3}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.consignee_addr_line3 &&
                    Boolean(formik.errors.consignee_addr_line3)
                  }
                  helperText={
                    formik.touched.consignee_addr_line3 &&
                    formik.errors.consignee_addr_line3
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
                  id="consignee_pine"
                  name="consignee_pin"
                  label="PIN"
                  value={formik.values.consignee_pin}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.consignee_pin &&
                    Boolean(formik.errors.consignee_pin)
                  }
                  helperText={
                    formik.touched.consignee_pin && formik.errors.consignee_pin
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
                  id="consignee_phone_no"
                  name="consignee_phone_no"
                  label="Phone no"
                  value={formik.values.consignee_phone_no}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.consignee_phone_no &&
                    Boolean(formik.errors.consignee_phone_no)
                  }
                  helperText={
                    formik.touched.consignee_phone_no &&
                    formik.errors.consignee_phone_no
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
                  id="consignee_gst_no"
                  name="consignee_gst_no"
                  label="GST no"
                  value={formik.values.consignee_gst_no}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.consignee_gst_no &&
                    Boolean(formik.errors.consignee_gst_no)
                  }
                  helperText={
                    formik.touched.consignee_gst_no &&
                    formik.errors.consignee_gst_no
                  }
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
                  helperText={
                    formik.touched.buyer_org && formik.errors.buyer_org
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
                  id="buyer_addr_line1"
                  name="buyer_addr_line1"
                  label="Address line-1"
                  value={formik.values.buyer_addr_line1}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.buyer_addr_line1 &&
                    Boolean(formik.errors.buyer_addr_line1)
                  }
                  helperText={
                    formik.touched.buyer_addr_line1 &&
                    formik.errors.buyer_addr_line1
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
                  id="buyer_addr_line2"
                  name="buyer_addr_line2"
                  label="Address line-2"
                  value={formik.values.buyer_addr_line2}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.buyer_addr_line2 &&
                    Boolean(formik.errors.buyer_addr_line2)
                  }
                  helperText={
                    formik.touched.buyer_addr_line2 &&
                    formik.errors.buyer_addr_line2
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
                  id="buyer_addr_line3"
                  name="buyer_addr_line3"
                  label="Address line-3"
                  value={formik.values.buyer_addr_line3}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.buyer_addr_line3 &&
                    Boolean(formik.errors.buyer_addr_line3)
                  }
                  helperText={
                    formik.touched.buyer_addr_line3 &&
                    formik.errors.buyer_addr_line3
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
                  id="buyer_pine"
                  name="buyer_pin"
                  label="PIN"
                  value={formik.values.buyer_pin}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.buyer_pin && Boolean(formik.errors.buyer_pin)
                  }
                  helperText={
                    formik.touched.buyer_pin && formik.errors.buyer_pin
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
                  id="buyer_phone_no"
                  name="buyer_phone_no"
                  label="Phone no"
                  value={formik.values.buyer_phone_no}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.buyer_phone_no &&
                    Boolean(formik.errors.buyer_phone_no)
                  }
                  helperText={
                    formik.touched.buyer_phone_no &&
                    formik.errors.buyer_phone_no
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
                  id="buyer_gst_no"
                  name="buyer_gst_no"
                  label="GST no"
                  value={formik.values.buyer_gst_no}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.buyer_gst_no &&
                    Boolean(formik.errors.buyer_gst_no)
                  }
                  helperText={
                    formik.touched.buyer_gst_no &&
                    formik.errors.consignee_gst_no
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        <Box display={'flex'} gap={4} mt={3}>
          <Grid container spacing={2}>
            {/* delivery details  */}
            <Grid item xs={12}>
              <Typography variant="body1" fontWeight={500} sx={{ mb: 2 }}>
                Delivery Details
              </Typography>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="buyer_tel_no"
                  name="buyer_tel_no"
                  label="Buyer telephone no"
                  value={formik.values.buyer_tel_no}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.buyer_tel_no &&
                    Boolean(formik.errors.buyer_tel_no)
                  }
                  helperText={
                    formik.touched.buyer_tel_no && formik.errors.buyer_tel_no
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
                  id="consignee_tel_no"
                  name="consignee_tel_no"
                  label="Consignee telephone no"
                  value={formik.values.consignee_tel_no}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.consignee_tel_no &&
                    Boolean(formik.errors.consignee_tel_no)
                  }
                  helperText={
                    formik.touched.consignee_tel_no &&
                    formik.errors.consignee_tel_no
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
                  id="payment_terms"
                  name="payment_terms"
                  label="Payment terms"
                  value={formik.values.payment_terms}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.payment_terms &&
                    Boolean(formik.errors.payment_terms)
                  }
                  helperText={
                    formik.touched.payment_terms && formik.errors.payment_terms
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
                  id="paying_authority"
                  name="paying_authority"
                  label="Paying authority"
                  value={formik.values.paying_authority}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.paying_authority &&
                    Boolean(formik.errors.paying_authority)
                  }
                  helperText={
                    formik.touched.paying_authority &&
                    formik.errors.paying_authority
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
                  id="insurance"
                  name="insurance"
                  label="Insurance ( by us / party )"
                  value={formik.values.insurance}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.insurance && Boolean(formik.errors.insurance)
                  }
                  helperText={
                    formik.touched.insurance && formik.errors.insurance
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
                  id="delivery_date"
                  name="delivery_date"
                  label="Delivery date"
                  value={formik.values.delivery_date}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.delivery_date &&
                    Boolean(formik.errors.delivery_date)
                  }
                  helperText={
                    formik.touched.delivery_date && formik.errors.delivery_date
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
                  id="delivery_place"
                  name="delivery_place"
                  label="Delivery place ( door / ex-works )"
                  value={formik.values.delivery_place}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.delivery_place &&
                    Boolean(formik.errors.delivery_place)
                  }
                  helperText={
                    formik.touched.delivery_place &&
                    formik.errors.delivery_place
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
                  id="freight"
                  name="freight"
                  label="Freight ( paid / to pay )"
                  value={formik.values.freight}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.freight && Boolean(formik.errors.freight)
                  }
                  helperText={formik.touched.freight && formik.errors.freight}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="mode_of_despatch"
                  name="mode_of_despatch"
                  label="Mode of despatch"
                  value={formik.values.mode_of_despatch}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.mode_of_despatch &&
                    Boolean(formik.errors.mode_of_despatch)
                  }
                  helperText={
                    formik.touched.mode_of_despatch &&
                    formik.errors.mode_of_despatch
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
                  id="inspection"
                  name="inspection"
                  label="Inspection"
                  value={formik.values.inspection}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.inspection &&
                    Boolean(formik.errors.inspection)
                  }
                  helperText={
                    formik.touched.inspection && formik.errors.inspection
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
                  id="special_instruction"
                  name="special_instruction"
                  label="Special instructions if any"
                  value={formik.values.special_instruction}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.special_instruction &&
                    Boolean(formik.errors.special_instruction)
                  }
                  helperText={
                    formik.touched.special_instruction &&
                    formik.errors.special_instruction
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
                  id="despatch_additional_info"
                  name="despatch_additional_info"
                  label="Further despatch clear required"
                  value={formik.values.despatch_additional_info}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.despatch_additional_info &&
                    Boolean(formik.errors.despatch_additional_info)
                  }
                  helperText={
                    formik.touched.despatch_additional_info &&
                    formik.errors.despatch_additional_info
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
                  id="note"
                  name="note"
                  label="Note"
                  value={formik.values.note}
                  onChange={formik.handleChange}
                  error={formik.touched.note && Boolean(formik.errors.note)}
                  helperText={formik.touched.note && formik.errors.note}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="remarks"
                  name="remarks"
                  label="Remarks"
                  value={formik.values.remarks}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.remarks && Boolean(formik.errors.remarks)
                  }
                  helperText={formik.touched.remarks && formik.errors.remarks}
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
