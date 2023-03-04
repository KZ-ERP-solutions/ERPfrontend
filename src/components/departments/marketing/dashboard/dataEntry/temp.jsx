<FormControl sx={{ width: '100%' }}>
                    <TextField
                      InputLabelProps={{ shrink: false }}
                      fullWidth
                      disabled={submitting}
                      size="small"
                      id="serial_no"
                      name="serial_no"
                      label=""
                      value={formik.values.serial_no}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.serial_no &&
                        Boolean(formik.errors.serial_no)
                      }
                      helperText={
                        formik.touched.serial_no && formik.errors.serial_no
                      }
                    />
                  </FormControl>