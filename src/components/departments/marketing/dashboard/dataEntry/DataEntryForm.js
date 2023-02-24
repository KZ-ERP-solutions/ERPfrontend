import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  TextField,
} from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

const initialValues = {
  name: '',
  incorporationDate: '',
  place: '',
  nature: '',
  sector: '',
  keyManagement: [],
  promoters: [],
  subsidiaries: [],
  targetIpo: '',
  sme: null,
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
        <Box>
          <FormControl>
            <label
              htmlFor="name"
              style={{ marginBottom: '3px', fontSize: '0.8rem' }}>
              Name
            </label>
            <TextField
              fullWidth
              //   disabled={submitting}
              size="small"
              InputLabelProps={{ shrink: false }}
              id="name"
              name="name"
              label={formik.values.name ? '' : 'Enter name'}
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </FormControl>
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
