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

const Form3 = ({ close, handleSubmit, submitting }) => {
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
          <Grid container spacing={2}>
            {/* prr details advance */}
            <Grid item xs={12}>
              <Typography variant="body1" fontWeight={500} sx={{ mb: 2 }}>
                PRR Details ( For Advance Payment )
              </Typography>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="adv_prr_no"
                  name="adv_prr_no"
                  label="PRR no"
                  value={formik.values.adv_prr_no}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.adv_prr_no &&
                    Boolean(formik.errors.adv_prr_no)
                  }
                  helperText={
                    formik.touched.adv_prr_no && formik.errors.adv_prr_no
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
                  type={'date'}
                  id="adv_prr_date"
                  name="adv_prr_date"
                  value={formik.values.adv_prr_date}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.adv_prr_date &&
                    Boolean(formik.errors.adv_prr_date)
                  }
                  helperText={
                    formik.touched.adv_prr_date && formik.errors.adv_prr_date
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
                  id="adv_amount"
                  name="adv_amount"
                  label="Amount"
                  value={formik.values.adv_amount}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.adv_amount &&
                    Boolean(formik.errors.adv_amount)
                  }
                  helperText={
                    formik.touched.adv_amount && formik.errors.adv_amount
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
                  id="adv_mode_of_payment"
                  name="adv_mode_of_payment"
                  label="Mode of Payment:Cash/EFT/DD"
                  value={formik.values.adv_mode_of_payment}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.adv_mode_of_payment &&
                    Boolean(formik.errors.adv_mode_of_payment)
                  }
                  helperText={
                    formik.touched.adv_mode_of_payment &&
                    formik.errors.adv_mode_of_payment
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
                  id="adv_purpose"
                  name="adv_purpose"
                  label="Purpose"
                  value={formik.values.adv_purpose}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.adv_purpose &&
                    Boolean(formik.errors.adv_purpose)
                  }
                  helperText={
                    formik.touched.adv_purpose && formik.errors.adv_purpose
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
                  id="adv_remarks"
                  name="adv_remarks"
                  label="Deduction / Remarks"
                  value={formik.values.adv_remarks}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.adv_remarks &&
                    Boolean(formik.errors.adv_remarks)
                  }
                  helperText={
                    formik.touched.adv_remarks && formik.errors.adv_remarks
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
                  id="adv_billing_status"
                  name="adv_billing_status"
                  label="Billing status"
                  value={formik.values.adv_billing_status}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.adv_billing_status &&
                    Boolean(formik.errors.adv_billing_status)
                  }
                  helperText={
                    formik.touched.adv_billing_status &&
                    formik.errors.adv_billing_status
                  }
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            {/* prr details balance */}
            <Grid item xs={12}>
              <Typography variant="body1" fontWeight={500} sx={{ mb: 2 }}>
                PRR Details ( For Balance Payment )
              </Typography>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  //   disabled={submitting}
                  size="small"
                  id="bal_prr_no"
                  name="bal_prr_no"
                  label="PRR no"
                  value={formik.values.bal_prr_no}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.bal_prr_no &&
                    Boolean(formik.errors.bal_prr_no)
                  }
                  helperText={
                    formik.touched.bal_prr_no && formik.errors.bal_prr_no
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
                  type={'date'}
                  id="bal_prr_date"
                  name="bal_prr_date"
                  value={formik.values.bal_prr_date}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.bal_prr_date &&
                    Boolean(formik.errors.bal_prr_date)
                  }
                  helperText={
                    formik.touched.bal_prr_date && formik.errors.bal_prr_date
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
                  id="bal_amount"
                  name="bal_amount"
                  label="Amount"
                  value={formik.values.bal_amount}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.bal_amount &&
                    Boolean(formik.errors.bal_amount)
                  }
                  helperText={
                    formik.touched.bal_amount && formik.errors.bal_amount
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
                  id="bal_mode_of_payment"
                  name="bal_mode_of_payment"
                  label="Mode of payment:Cash/EFT/DD"
                  value={formik.values.bal_mode_of_payment}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.bal_mode_of_payment &&
                    Boolean(formik.errors.bal_mode_of_payment)
                  }
                  helperText={
                    formik.touched.bal_mode_of_payment &&
                    formik.errors.bal_mode_of_payment
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
                  id="bal_purpose"
                  name="bal_purpose"
                  label="Purpose"
                  value={formik.values.bal_purpose}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.bal_purpose &&
                    Boolean(formik.errors.bal_purpose)
                  }
                  helperText={
                    formik.touched.bal_purpose && formik.errors.bal_purpose
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
                  id="bal_remarks"
                  name="bal_remarks"
                  label="Deduction / Remarks"
                  value={formik.values.bal_remarks}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.bal_remarks &&
                    Boolean(formik.errors.bal_remarks)
                  }
                  helperText={
                    formik.touched.bal_remarks && formik.errors.bal_remarks
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
                  id="bal_billing_status"
                  name="bal_billing_status"
                  label="Billing status"
                  value={formik.values.bal_billing_status}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.bal_billing_status &&
                    Boolean(formik.errors.bal_billing_status)
                  }
                  helperText={
                    formik.touched.bal_billing_status &&
                    formik.errors.bal_billing_status
                  }
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

export default Form3
