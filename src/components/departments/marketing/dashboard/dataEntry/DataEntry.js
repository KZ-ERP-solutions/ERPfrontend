import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grow,
  IconButton,
  Step,
  StepButton,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'

const SlideUP = React.forwardRef(function Transition(props, ref) {
  return <Grow direction="up" ref={ref} {...props} />
})

const steps = [
  'Order details',
  'Additional details',
  'Payment details',
  'Item details',
]

const DataEntry = () => {
  const [dataEntryForm, setDataEntryForm] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  const nextStep = () => {
    setActiveStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setActiveStep((prev) => prev - 1)
  }

  const openDataEntryForm = () => {
    setDataEntryForm(true)
  }

  const handleDataEntryClose = () => {
    setDataEntryForm(false)
  }

  const getForm = () => {
    switch (activeStep) {
      case 0:
        return (
          <Form1 close={() => handleDataEntryClose()} next={() => nextStep()} />
        )
      case 1:
        return (
          <Form2
            close={() => handleDataEntryClose()}
            prev={() => prevStep()}
            next={() => nextStep()}
          />
        )
      case 2:
        return (
          <Form3
            close={() => handleDataEntryClose()}
            prev={() => prevStep()}
            next={() => nextStep()}
          />
        )
      default:
        return (
          <Form1 close={() => handleDataEntryClose()} next={() => nextStep()} />
        )
    }
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
        maxWidth={'xl'}
        sx={{ m: 2 }}
        fullWidth>
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Typography variant="h6" fontWeight={500}>
            Data Entry
          </Typography>

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
          <Box sx={{ mt: 2, mb: 4 }}>
            <Stepper nonLinear activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepButton onClick={() => handleStepChange(index)}>
                    <StepLabel>{label}</StepLabel>
                  </StepButton>
                </Step>
              ))}
            </Stepper>
          </Box>
          {getForm()}
          {/* <DataEntryForm /> */}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DataEntry
