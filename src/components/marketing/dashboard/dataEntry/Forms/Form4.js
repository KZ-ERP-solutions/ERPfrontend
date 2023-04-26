import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'

const itemsInitialValue = {
  si_no: '',
  is_std: '',
  item_name: '',
  rating: '',
  quantity: 1,
  unit: '',
  model: '',
  basic_rate: '',
  basic_amount: '',
  dp: '',
  net_weight_per_unit: '',
  gross_weight_per_unit: '',
  total_weight: '',
  serial_no: '',
}

const Form4 = ({ close, prev, handleSubmit, submitting ,woso_no}) => {
  const [showForm, setShowForm] = useState(false)
  const [items, setItems] = useState([])
  const [showDelete, setShowDelete] = useState(false)

  const formik = useFormik({
    initialValues: {
      ...itemsInitialValue,
      isChecked: false,
    },
    onSubmit: (values) => {
      const finalValues = {
        ...values,
        total_weight:
          Number(formik.values.quantity) *
          Number(formik.values.gross_weight_per_unit),
        si_no: items.length + 1,
      }
      setItems((items) => [...items, finalValues])
      setShowForm(false)
      formik.resetForm()
    },
  })

  const handleCheck = (index, isChecked) => {
    console.log(index, isChecked)
    setItems((items) => {
      const changedItems = items.slice()
      changedItems[index].isChecked = !isChecked
      return changedItems
    })
  }

  const handleFinalSubmit = () => {
    const submitValue = {
      items: [
        ...items.map((item) => {
          const { isChecked, ...newItem } = item
          return newItem
        }),
      ],
    }
    handleSubmit(submitValue)
  }

  const onDeleteClick = () => {
    setItems((items) => items.filter((item) => !item.isChecked))
    setItems((items) => {
      const newItems = items.slice()
      return newItems.map((item, index) => {
        item.isChecked = false
        item.si_no = index + 1
        return item
      })
    })
    setShowDelete(false)
  }

  return (
    <Container maxWidth="100%" disableGutters>
      <Box sx={{ display: 'flex', justifyContent: 'end', mb: 1, gap: 2 }}>
        <Button
          variant="contained"
          size="small"
          disableElevation
          onClick={() => setShowDelete(true)}
          disabled={showForm || showDelete}>
          Remove Item
        </Button>

        <Button
          variant="contained"
          size="small"
          disableElevation
          onClick={() => setShowForm(true)}
          disabled={showForm || showDelete}>
          Add Item
        </Button>
      </Box>
      <TableContainer sx={{ minHeight: '15rem' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              {showDelete && (
                <TableCell sx={{ minWidth: '3rem' }}>Select</TableCell>
              )}
              <TableCell sx={{ minWidth: '5rem' }}>SI No</TableCell>
              <TableCell sx={{ minWidth: '8rem' }}>Std / Non Std</TableCell>
              <TableCell sx={{ minWidth: '20rem' }}>Item</TableCell>
              <TableCell sx={{ minWidth: '8rem' }}>Rating(kVA)</TableCell>
              <TableCell sx={{ minWidth: '6rem' }}>Qty</TableCell>
              <TableCell sx={{ minWidth: '4rem' }}>Unit</TableCell>
              <TableCell sx={{ minWidth: '8rem' }}>Model</TableCell>
              <TableCell sx={{ minWidth: '8rem' }}>WO No</TableCell>
              <TableCell sx={{ minWidth: '8rem' }}>Basic Rate (Rs)</TableCell>
              <TableCell sx={{ minWidth: '8rem' }}>Basic Amount (Rs)</TableCell>
              <TableCell sx={{ minWidth: '10rem' }}>DP</TableCell>
              <TableCell sx={{ minWidth: '8rem' }}>
                Net Weight Per Unit (kg)
              </TableCell>
              <TableCell sx={{ minWidth: '8rem' }}>
                Gross Weight Per Unit (kg)
              </TableCell>
              <TableCell sx={{ minWidth: '8rem' }}>Total Weight (Kg)</TableCell>
              <TableCell sx={{ minWidth: '10rem' }}>Serial No</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.length > 0 &&
              items.map((item, index) => (
                <TableRow key={`items-table-${index}`}>
                  {showDelete && (
                    <TableCell>
                      <Checkbox
                        id="isChecked"
                        name="isChecked"
                        checked={item.isChecked}
                        onChange={() => handleCheck(index, item.isChecked)}
                      />
                    </TableCell>
                  )}
                  <TableCell>{item.si_no}</TableCell>
                  <TableCell>{item.is_std ? 'Std' : 'Non-Std'}</TableCell>
                  <TableCell>{item.item_name}</TableCell>
                  <TableCell>{item.rating}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.unit}</TableCell>
                  <TableCell>{item.model}</TableCell>
                  <TableCell>{woso_no}</TableCell>
                  <TableCell>{item.basic_rate}</TableCell>
                  <TableCell>{item.basic_amount}</TableCell>
                  <TableCell>{item.dp}</TableCell>
                  <TableCell>{item.net_weight_per_unit}</TableCell>
                  <TableCell>{item.gross_weight_per_unit}</TableCell>
                  <TableCell>{item.total_weight}</TableCell>
                  <TableCell>{item.serial_no}</TableCell>
                </TableRow>
              ))}
            {/* form input */}
            {showForm && (
              <TableRow>
                <TableCell padding="none">{items.length + 1}</TableCell>

                <TableCell padding="none">
                  <FormControl sx={{ width: '100%' }}>
                    <TextField
                      select
                      autoFocus
                      InputLabelProps={{ shrink: false }}
                      fullWidth
                      disabled={submitting}
                      size="small"
                      id="is_std"
                      name="is_std"
                      label={formik.values.is_std === '' ? '-select-' : ''}
                      value={formik.values.is_std}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.is_std && Boolean(formik.errors.is_std)
                      }
                      helperText={
                        formik.touched.is_std && formik.errors.is_std
                      }>
                      <MenuItem value={true}>Std</MenuItem>
                      <MenuItem value={false}>Non-std</MenuItem>
                    </TextField>
                  </FormControl>
                </TableCell>

                <TableCell padding="none">
                  <FormControl sx={{ width: '100%', maxWidth: '20rem' }}>
                    <TextField
                      select
                      InputLabelProps={{ shrink: false }}
                      fullWidth
                      disabled={submitting}
                      size="small"
                      id="item_name"
                      name="item_name"
                      label=""
                      value={formik.values.item_name}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.item_name &&
                        Boolean(formik.errors.item_name)
                      }
                      helperText={
                        formik.touched.item_name && formik.errors.item_name
                      }>
                      <MenuItem sx={{ maxWidth: '20rem' }} value={'Item 2'}>
                        Item 1
                      </MenuItem>
                      <MenuItem sx={{ maxWidth: '20rem' }} value={'Item 2'}>
                        Item 2
                      </MenuItem>
                      <MenuItem
                        sx={{ maxWidth: '20rem' }}
                        value={
                          '62.5 KVA Brushless Alternator (Double Bearing, 415V,3Ph) Make:KEL EML'
                        }>
                        62.5 KVA Brushless Alternator (Double Bearing, 415V,
                        3Ph) Make:KEL EML
                      </MenuItem>
                    </TextField>
                  </FormControl>
                </TableCell>

                <TableCell>62.5</TableCell>

                <TableCell padding="none">
                  <FormControl sx={{ width: '100%' }}>
                    <TextField
                      InputLabelProps={{ shrink: false }}
                      fullWidth
                      disabled={submitting}
                      size="small"
                      type={'number'}
                      id="quantity"
                      name="quantity"
                      label=""
                      value={formik.values.quantity}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.quantity &&
                        Boolean(formik.errors.quantity)
                      }
                      helperText={
                        formik.touched.quantity && formik.errors.quantity
                      }
                    />
                  </FormControl>
                </TableCell>
                <TableCell>1</TableCell>
                <TableCell>SL 225 VS</TableCell>
                <TableCell>{woso_no}</TableCell>
                <TableCell>
                  <FormControl sx={{ width: '100%' }}>
                    <TextField
                      InputLabelProps={{ shrink: false }}
                      fullWidth
                      disabled={submitting}
                      size="small"
                      id="basic_rate"
                      name="basic_rate"
                      label=""
                      value={formik.values.basic_rate}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.basic_rate &&
                        Boolean(formik.errors.basic_rate)
                      }
                      helperText={
                        formik.touched.basic_rate && formik.errors.basic_rate
                      }
                    />
                  </FormControl>
                </TableCell>
                <TableCell>
                  <FormControl sx={{ width: '100%' }}>
                    <TextField
                      InputLabelProps={{ shrink: false }}
                      fullWidth
                      disabled={submitting}
                      size="small"
                      id="basic_amount"
                      name="basic_amount"
                      label=""
                      value={formik.values.basic_amount}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.basic_amount &&
                        Boolean(formik.errors.basic_amount)
                      }
                      helperText={
                        formik.touched.basic_amount &&
                        formik.errors.basic_amount
                      }
                    />
                  </FormControl>
                </TableCell>
                <TableCell>
                  <FormControl sx={{ width: '100%' }}>
                    <TextField
                      InputLabelProps={{ shrink: false }}
                      fullWidth
                      disabled={submitting}
                      size="small"
                      id="dp"
                      name="dp"
                      label=""
                      value={formik.values.dp}
                      onChange={formik.handleChange}
                      error={formik.touched.dp && Boolean(formik.errors.dp)}
                      helperText={formik.touched.dp && formik.errors.dp}
                    />
                  </FormControl>
                </TableCell>
                <TableCell>
                  <FormControl sx={{ width: '100%' }}>
                    <TextField
                      InputLabelProps={{ shrink: false }}
                      fullWidth
                      disabled={submitting}
                      size="small"
                      id="net_weight_per_unit"
                      name="net_weight_per_unit"
                      label=""
                      value={formik.values.net_weight_per_unit}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.net_weight_per_unit &&
                        Boolean(formik.errors.net_weight_per_unit)
                      }
                      helperText={
                        formik.touched.net_weight_per_unit &&
                        formik.errors.net_weight_per_unit
                      }
                    />
                  </FormControl>
                </TableCell>
                <TableCell>
                  <FormControl sx={{ width: '100%' }}>
                    <TextField
                      InputLabelProps={{ shrink: false }}
                      fullWidth
                      disabled={submitting}
                      size="small"
                      id="gross_weight_per_unit"
                      name="gross_weight_per_unit"
                      label=""
                      value={formik.values.gross_weight_per_unit}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.gross_weight_per_unit &&
                        Boolean(formik.errors.gross_weight_per_unit)
                      }
                      helperText={
                        formik.touched.gross_weight_per_unit &&
                        formik.errors.gross_weight_per_unit
                      }
                    />
                  </FormControl>
                </TableCell>
                <TableCell>
                  {Number(formik.values.quantity) *
                    Number(formik.values.gross_weight_per_unit)}
                </TableCell>
                <TableCell>
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
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {showForm && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            mt: 2,
            gap: 2,
          }}>
          <Button
            type="button"
            onClick={() => setShowForm(false)}
            disabled={submitting}
            size="small"
            sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => {
              formik.handleSubmit()
            }}
            variant="contained"
            disabled={submitting}
            size="small"
            endIcon={<AddIcon />}
            disableElevation>
            Add
          </Button>
        </Box>
      )}

      {showDelete && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            mt: 2,
            gap: 2,
          }}>
          <Typography
            variant="body2"
            color={(theme) => theme.palette.text.secondary}>
            Select items to remove from the list using checkbox at the beginning of
            table
          </Typography>
          <Button
            type="button"
            onClick={() => setShowDelete(false)}
            disabled={submitting}
            size="small"
            sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button
            type="button"
            onClick={onDeleteClick}
            variant="contained"
            disabled={submitting}
            size="small"
            disableElevation>
            Remove
          </Button>
        </Box>
      )}

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
          disabled={submitting || showForm || showDelete}>
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
              handleFinalSubmit()
              close()
            }}
            variant="contained"
            fontWeight={600}
            disabled={submitting || showForm || showDelete}
            disableElevation>
            Submit
          </Button>
        </div>
      </Box>
    </Container>
  )
}

export default Form4
