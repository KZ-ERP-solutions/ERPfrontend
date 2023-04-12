import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import initialValues from '../json/initialValues.json'

const Form5 = ({ close, prev, next, handleSubmit, submitting }) => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      handleSubmit(values)
    },
  })

  return (
    <Container disableGutters maxWidth="100%">
      <form onSubmit={formik.handleSubmit}>
        <div style={{marginLeft:"auto", marginRight:"auto"}}>
          <Box display={'flex'} gap={2} sx={{marginLeft:'19rem'}}>
            <Grid container spacing={1}>
              {/* prr details advance */}
              <Grid item xs={12} rowSpacing={10}>
                <Typography variant="body1" fontWeight={500} sx={{ mb: 2 }}>
                  Dispatch Advice to Fin
                </Typography>
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    autoFocus
                    disabled={submitting}
                    size="small"
                    type={'date'}
                    id="dis_adv_date"
                    name="dis_adv_date"
                    value={formik.values.dis_adv_date}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dis_adv_date &&
                      Boolean(formik.errors.dis_adv_date)
                    }
                    helperText={
                      formik.touched.dis_adv_date && formik.errors.dis_adv_date
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    disabled={submitting}
                    size="small"
                    id="dis_adv_checkpost"
                    name="dis_adv_checkpost"
                    label="Border Checkpost"
                    value={formik.values.dis_adv_checkpost}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dis_adv_checkpost &&
                      Boolean(formik.errors.dis_adv_checkpost)
                    }
                    helperText={
                      formik.touched.dis_adv_checkpost &&
                      formik.errors.dis_adv_checkpost
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    disabled={submitting}
                    size="small"
                    id="dis_adv_trns_lr_no"
                    name="dis_adv_trns_lr_no"
                    label="Transporter LR No"
                    value={formik.values.dis_adv_trns_lr_no}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dis_adv_trns_lr_no &&
                      Boolean(formik.errors.dis_adv_trns_lr_no)
                    }
                    helperText={
                      formik.touched.dis_adv_trns_lr_no &&
                      formik.errors.dis_adv_trns_lr_no
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    disabled={submitting}
                    size="small"
                    type={'date'}
                    id="dis_adv_trns_lr_date"
                    name="dis_adv_trns_lr_date"
                    value={formik.values.dis_adv_trns_lr_date}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dis_adv_trns_lr_date &&
                      Boolean(formik.errors.dis_adv_trns_lr_date)
                    }
                    helperText={
                      formik.touched.dis_adv_trns_lr_date &&
                      formik.errors.dis_adv_trns_lr_date
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    disabled={submitting}
                    size="small"
                    id="dis_adv_dc_no"
                    name="dis_adv_dc_no"
                    label="D.C No"
                    value={formik.values.dis_adv_dc_no}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dis_adv_dc_no &&
                      Boolean(formik.errors.dis_adv_dc_no)
                    }
                    helperText={
                      formik.touched.dis_adv_dc_no &&
                      formik.errors.dis_adv_dc_no
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    disabled={submitting}
                    size="small"
                    type={'date'}
                    id="dis_adv_dc_date"
                    name="dis_adv_dc_date"
                    value={formik.values.dis_adv_dc_date}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dis_adv_dc_date &&
                      Boolean(formik.errors.dis_adv_dc_date)
                    }
                    helperText={
                      formik.touched.dis_adv_dc_date &&
                      formik.errors.dis_adv_dc_date
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    disabled={submitting}
                    size="small"
                    id="dis_adv_lr_no"
                    name="dis_adv_lr_no"
                    label="LR No"
                    value={formik.values.dis_adv_lr_no}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dis_adv_lr_no &&
                      Boolean(formik.errors.dis_adv_lr_no)
                    }
                    helperText={
                      formik.touched.dis_adv_lr_no &&
                      formik.errors.dis_adv_lr_no
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    disabled={submitting}
                    size="small"
                    type={'date'}
                    id="dis_adv_lr_date"
                    name="dis_adv_lr_date"
                    value={formik.values.dis_adv_lr_date}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dis_adv_lr_date &&
                      Boolean(formik.errors.dis_adv_lr_date)
                    }
                    helperText={
                      formik.touched.dis_adv_lr_date &&
                      formik.errors.dis_adv_lr_date
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    disabled={submitting}
                    size="small"
                    id="dis_adv_vehicel_no"
                    name="dis_adv_vehicel_no"
                    label="Vehicel No"
                    value={formik.values.dis_adv_vehicel_no}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dis_adv_vehicel_no &&
                      Boolean(formik.errors.dis_adv_vehicel_no)
                    }
                    helperText={
                      formik.touched.dis_adv_vehicel_no &&
                      formik.errors.dis_adv_vehicel_no
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    disabled={submitting}
                    size="small"
                    id="dis_adv_remarks"
                    name="dis_adv_remarks"
                    label="Remarks"
                    value={formik.values.dis_adv_remarks}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dis_adv_remarks &&
                      Boolean(formik.errors.dis_adv_remarks)
                    }
                    helperText={
                      formik.touched.dis_adv_remarks &&
                      formik.errors.dis_adv_remarks
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Container
              container
              sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* prr details advance */}
              <Grid item xs={12}>
                <Typography variant="body1" fontWeight={500} sx={{ mb: 2 }}>
                  Dispatch Intimation to Pdn
                </Typography>
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    autoFocus
                    disabled={submitting}
                    size="small"
                    type={'date'}
                    id="dis_ini_date"
                    name="dis_ini_date"
                    value={formik.values.dis_ini_date}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dis_ini_date &&
                      Boolean(formik.errors.dis_ini_date)
                    }
                    helperText={
                      formik.touched.dis_ini_date && formik.errors.dis_ini_date
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    disabled={submitting}
                    size="small"
                    id="dis_ini_remarks"
                    name="adv_prr_date"
                    label="Remarks"
                    value={formik.values.dis_ini_remarks}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dis_ini_remarks &&
                      Boolean(formik.errors.dis_ini_remarks)
                    }
                    helperText={
                      formik.touched.dis_ini_remarks &&
                      formik.errors.dis_ini_remarks
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    disabled={submitting}
                    size="small"
                    id="dis_ini_destination"
                    name="dis_ini_destination"
                    label="Destination"
                    value={formik.values.dis_ini_destination}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dis_ini_destination &&
                      Boolean(formik.errors.dis_ini_destination)
                    }
                    helperText={
                      formik.touched.dis_ini_destination &&
                      formik.errors.dis_ini_destination
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    disabled={submitting}
                    size="small"
                    id="dis_ini_transporter"
                    name="dis_ini_transporter"
                    label="Transporter"
                    value={formik.values.dis_ini_transporter}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dis_ini_transporter &&
                      Boolean(formik.errors.dis_ini_transporter)
                    }
                    helperText={
                      formik.touched.dis_ini_transporter &&
                      formik.errors.dis_ini_transporter
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    disabled={submitting}
                    size="small"
                    id="dis_ini_packing"
                    name="dis_ini_packing"
                    label="Packing"
                    value={formik.values.dis_ini_packing}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dis_ini_packing &&
                      Boolean(formik.errors.dis_ini_packing)
                    }
                    helperText={
                      formik.touched.dis_ini_packing &&
                      formik.errors.dis_ini_packing
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    disabled={submitting}
                    size="small"
                    id="dis_ini_exp_time"
                    name="dis_ini_exp_time"
                    label="Expected Time of Vehicle"
                    value={formik.values.dis_ini_exp_time}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dis_ini_exp_time &&
                      Boolean(formik.errors.dis_ini_exp_time)
                    }
                    helperText={
                      formik.touched.dis_ini_exp_time &&
                      formik.errors.dis_ini_exp_time
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} rowSpacing={1}>
                <Typography variant="body1" fontWeight={500} sx={{ mb: 2 }}>
                  Invoice Details
                </Typography>
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    autoFocus
                    disabled={submitting}
                    size="small"
                    type={'date'}
                    id="invoice_date"
                    name="invoice_date"
                    value={formik.values.invoice_date}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.invoice_date &&
                      Boolean(formik.errors.invoice_date)
                    }
                    helperText={
                      formik.touched.invoice_date && formik.errors.invoice_date
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    disabled={submitting}
                    size="small"
                    id="invoice_no"
                    name="invoice_no"
                    label="Invoice No"
                    value={formik.values.invoice_no}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.invoice_no &&
                      Boolean(formik.errors.invoice_no)
                    }
                    helperText={
                      formik.touched.invoice_no && formik.errors.invoice_no
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    fullWidth
                    disabled={submitting}
                    size="small"
                    id="invoice_amount"
                    name="invoice_amount"
                    label="Invoice Amount"
                    value={formik.values.invoice_amount}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.invoice_amount &&
                      Boolean(formik.errors.invoice_amount)
                    }
                    helperText={
                      formik.touched.invoice_amount &&
                      formik.errors.invoice_amount
                    }
                  />
                </FormControl>
              </Grid>
            </Container>

            <Container
              spacing={5}
              sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* prr details advance */}
            </Container>
          </Box>
        </div>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 2,
            gap: 2,
          }}>
          <Button
            type="button"
            onClick={prev}
            fontWeight={600}
            sx={{ justifySelf: 'start' }}
            variant="outlined"
            disabled={submitting}>
            Previous
          </Button>

          <div>
            <Button
              type="button"
              onClick={close}
              fontWeight={600}
              disabled={submitting}
              sx={{ mr: 2 }}>
              Close
            </Button>
            <Button
              type="button"
              onClick={() => {
                formik.handleSubmit()
                close()
              }}
              fontWeight={600}
              sx={{ justifySelf: 'start', mr: 2 }}
              variant="outlined"
              disabled={submitting}>
              Submit & Close
            </Button>
            <Button
              type="button"
              onClick={() => {
                formik.handleSubmit()
                next()
              }}
              variant="contained"
              fontWeight={600}
              disabled={submitting}
              disableElevation>
              Save & Next
            </Button>
          </div>
        </Box>
      </form>
    </Container>
  )
}

export default Form5
