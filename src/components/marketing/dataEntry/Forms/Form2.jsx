import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import initialValues from '../json/initialValues.json';

function Form2({
  close, prev, next, handleSubmit, submitting,values
}) {
  const formik = useFormik({
    initialValues:values,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <Container disableGutters maxWidth="100%">
      <form onSubmit={formik.handleSubmit}>
        <Box display="flex" gap={4} mt={3}>
          <Grid container spacing={2}>
            {/* delivery details  */}

            <Grid item xs={12}>
              <Typography variant="body1" fontWeight={500} sx={{ mb: 2 }}>
                Delivery Details
              </Typography>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  autoFocus
                  disabled={submitting}
                  size="small"
                  id="buyer_tel_no"
                  name="buyer_tel_no"
                  label="Buyer telephone no"
                  value={formik.values.buyer_tel_no}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.buyer_tel_no
                    && Boolean(formik.errors.buyer_tel_no)
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
                  disabled={submitting}
                  size="small"
                  id="consignee_tel_no"
                  name="consignee_tel_no"
                  label="Consignee telephone no"
                  value={formik.values.consignee_tel_no}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.consignee_tel_no
                    && Boolean(formik.errors.consignee_tel_no)
                  }
                  helperText={
                    formik.touched.consignee_tel_no
                    && formik.errors.consignee_tel_no
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
                  id="payment_terms"
                  name="payment_terms"
                  label="Payment terms"
                  value={formik.values.payment_terms}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.payment_terms
                    && Boolean(formik.errors.payment_terms)
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
                  disabled={submitting}
                  size="small"
                  id="paying_authority"
                  name="paying_authority"
                  label="Paying authority"
                  value={formik.values.paying_authority}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.paying_authority
                    && Boolean(formik.errors.paying_authority)
                  }
                  helperText={
                    formik.touched.paying_authority
                    && formik.errors.paying_authority
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
                  id="penalty_clause"
                  name="penalty_clause"
                  label="Penalty Clause "
                  value={formik.values.penalty_clause}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.penalty_clause
                    && Boolean(formik.errors.penalty_clause)
                  }
                  helperText={
                    formik.touched.penalty_clause
                    && formik.errors.penalty_clause
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
                  disabled={submitting}
                  size="small"
                  id="delivery_date"
                  name="delivery_date"
                  label="Delivery date"
                  value={formik.values.delivery_date}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.delivery_date
                    && Boolean(formik.errors.delivery_date)
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
                  disabled={submitting}
                  size="small"
                  id="delivery_place"
                  name="delivery_place"
                  label="Delivery place ( door / ex-works )"
                  value={formik.values.delivery_place}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.delivery_place
                    && Boolean(formik.errors.delivery_place)
                  }
                  helperText={
                    formik.touched.delivery_place
                    && formik.errors.delivery_place
                  }
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl sx={{ width: '100%', pt: 5 }}>
                <TextField
                  fullWidth
                  disabled={submitting}
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
                  disabled={submitting}
                  size="small"
                  id="mode_of_despatch"
                  name="mode_of_despatch"
                  label="Mode of despatch"
                  value={formik.values.mode_of_despatch}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.mode_of_despatch
                    && Boolean(formik.errors.mode_of_despatch)
                  }
                  helperText={
                    formik.touched.mode_of_despatch
                    && formik.errors.mode_of_despatch
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
                  id="inspection"
                  name="inspection"
                  label="Inspection"
                  value={formik.values.inspection}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.inspection
                    && Boolean(formik.errors.inspection)
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
                  disabled={submitting}
                  size="small"
                  id="special_instruction"
                  name="special_instruction"
                  label="Special instructions if any"
                  value={formik.values.special_instruction}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.special_instruction
                    && Boolean(formik.errors.special_instruction)
                  }
                  helperText={
                    formik.touched.special_instruction
                    && formik.errors.special_instruction
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
                  id="despatch_additional_info"
                  name="despatch_additional_info"
                  label="Further despatch clear required"
                  value={formik.values.despatch_additional_info}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.despatch_additional_info
                    && Boolean(formik.errors.despatch_additional_info)
                  }
                  helperText={
                    formik.touched.despatch_additional_info
                    && formik.errors.despatch_additional_info
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
                  disabled={submitting}
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

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 2,
            gap: 2,
          }}
        >
          <Button
            type="button"
            onClick={prev}
            fontWeight={600}
            sx={{ justifySelf: 'start' }}
            variant="outlined"
            disabled={submitting}
          >
            Previous
          </Button>

          <div>
            <Button
              type="button"
              onClick={close}
              fontWeight={600}
              disabled={submitting}
              sx={{ mr: 2 }}
            >
              Close
            </Button>
            <Button
              type="button"
              onClick={() => {
                formik.handleSubmit();
                close();
              }}
              fontWeight={600}
              sx={{ justifySelf: 'start', mr: 2 }}
              variant="outlined"
              disabled={submitting}
            >
              Submit & Close
            </Button>
            <Button
              type="button"
              onClick={() => {
                formik.handleSubmit();
                next();
              }}
              variant="contained"
              fontWeight={600}
              disabled={submitting}
              disableElevation
            >
              Save & Next
            </Button>
          </div>
        </Box>
      </form>
    </Container>
  );
}

export default Form2;
