 {/* prr details balance */}
 <Grid item xs={12}>
 <Typography variant="body1" fontWeight={500} sx={{ mb: 2 }}>
   PRR Details ( For balance Payment )
 </Typography>
 <FormControl sx={{ width: '100%' }}>
   <TextField
     fullWidth
     //   disabled={submitting}
     size="small"
     id="bal_prr_no"
     name="bal_prr_no"
     label="bal_prr_no"
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
     label="bal_amount"
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
     label="bal_mode_of_payment"
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
     label="bal_purpose"
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
     label="bal_remarks"
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
     label="bal_billing_status"
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