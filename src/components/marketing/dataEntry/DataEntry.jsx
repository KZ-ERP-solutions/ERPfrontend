import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grow,
  IconButton,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Form1 from './Forms/Form1';
import Form2 from './Forms/Form2';
import Form3 from './Forms/Form3';
import Form4 from './Forms/Form4';
import Form5 from './Forms/Form5';
import initialValues from './json/initialValues.json';
import api from '../../../utils/api';

const SlideUP = React.forwardRef((props, ref) => (
  <Grow direction="up" ref={ref} {...props} />
));

const steps = [
  'Order details',
  'Additional details',
  'Payment details',
  'Dispatch',
  'Item details',
];

function DataEntry({ updateList }) {
  const [dataEntryForm, setDataEntryForm] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [submitting, setSubmitting] = useState(false);
  const [values, setValues] = useState(initialValues);

  const nextStep = () => {
    setActiveStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  const openDataEntryForm = () => {
    setDataEntryForm(true);
  };

  const handleDataEntryClose = () => {
    setDataEntryForm(false);
  };

  // removes empty fields
  const getCleanObject = (jsObj) => {
    for (const [key, value] of Object.entries(jsObj)) {
      if (value === '' || value === undefined || value === null) delete jsObj[key];
    }
    return jsObj;
  };

  const onFinalSubmit = () => {
    updateList();
    setActiveStep(0);
    console.log({ ...initialValues, ...values });
    api.marketing.order
      .create({ ...initialValues, ...values })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (formData) => {
    // const cleanObject = getCleanObject(formData);
    setValues((prev) => ({ ...prev, ...formData }));
    console.log({ ...values, ...formData });

    if (activeStep === 4) onFinalSubmit();
  };

  const getForm = () => {
    switch (activeStep) {
      case 0:
        return (
          <Form1
            close={() => handleDataEntryClose()}
            next={() => nextStep()}
            handleSubmit={(formData) => onSubmit(formData)}
            submitting={submitting}
            values={values}
          />
        );
      case 1:
        return (
          <Form2
            close={() => handleDataEntryClose()}
            prev={() => prevStep()}
            next={() => nextStep()}
            handleSubmit={(formData) => onSubmit(formData)}
            submitting={submitting}
            values={values}
          />
        );
      case 2:
        return (
          <Form3
            close={() => handleDataEntryClose()}
            prev={() => prevStep()}
            next={() => nextStep()}
            handleSubmit={(formData) => onSubmit(formData)}
            submitting={submitting}
            values={values}
          />
        );

      case 3:
        return (
          <Form5
            close={() => handleDataEntryClose()}
            prev={() => prevStep()}
            next={() => nextStep()}
            handleSubmit={(formData) => onSubmit(formData)}
            submitting={submitting}
            values={values}
          />
        );

      case 4:
        return (
          <Form4
            close={() => handleDataEntryClose()}
            prev={() => prevStep()}
            handleSubmit={(formData) => onSubmit(formData)}
            submitting={submitting}
            woso_no={values?.woso_no ? values.woso_no : initialValues.woso_no}
            values={values}
          />
        );

      default:
        return (
          <Form1
            close={() => handleDataEntryClose()}
            next={() => nextStep()}
            handleSubmit={(formData) => onSubmit(formData)}
            submitting={submitting}
            values={values}
          />
        );
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        endIcon={<AddIcon />}
        onClick={openDataEntryForm}
        disableElevation
      >
        Data Entry
      </Button>

      <Dialog
        open={dataEntryForm}
        onClose={handleDataEntryClose}
        TransitionComponent={SlideUP}
        maxWidth="xl"
        sx={{ m: 2 }}
        fullWidth
      >
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
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
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2, mb: 4 }}>
            <Stepper nonLinear activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          {getForm()}
          {/* <DataEntryForm /> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DataEntry;
