import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grow,
  IconButton,
} from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import DataEntryForm from './DataEntryForm'
import CloseIcon from '@mui/icons-material/Close'

const SlideUP = React.forwardRef(function Transition(props, ref) {
  return <Grow direction="up" ref={ref} {...props} />
})

const DataEntry = () => {
  const [dataEntryForm, setDataEntryForm] = useState(false)

  const openDataEntryForm = () => {
    setDataEntryForm(true)
  }

  const handleDataEntryClose = () => {
    setDataEntryForm(false)
  }
  return (
    <div>
      <Button
        variant="contained"
        endIcon={<AddIcon />}
        onClick={openDataEntryForm}
        disableElevation>
        Data Entry
      </Button>

      <Dialog
        open={dataEntryForm}
        onClose={handleDataEntryClose}
        TransitionComponent={SlideUP}
        sx={{ m: 2 }}
        fullScreen>
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          Data Entry
          <IconButton
            aria-label="close"
            onClick={handleDataEntryClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DataEntryForm />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DataEntry
