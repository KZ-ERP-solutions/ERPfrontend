import {
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Navigate, useNavigate } from 'react-router-dom';
import { login } from '../slices/auth';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(6, 'Username must be at least 6 characters')
    .max(20, 'Username must not exceed 20 characters'),
  password: Yup.string().required('This field is required!'),
});

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    // console.log(formValue)
    setLoading(true);

    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        navigate('/admin');
        window.location.reload();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Container
      maxWidth="lg"
      disableGutters
      sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        component={Paper}
        elevation={2}
        sx={{
          width: '25rem',
          backdropFilter: 'blur(3px) saturate(120%)',
          backgroundColor: 'rgba(255, 255, 255,0.1)',
          p: 4,
          borderRadius: 5,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
            mb: 1,
          }}
        >
          <Typography
            variant="h6"
            noWrap
            color="text.primary"
            sx={{
              ml: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            KEL ERP
          </Typography>
        </Box>
        <Typography
          variant="h5"
          fontWeight={600}
          align="center"
          color="text.primary"
          sx={{ mb: 2 }}
        >
          ADMIN LOGIN
        </Typography>

        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
          }}
        >
          <TextField
            fullWidth
            color="secondary"
            autoFocus
            disabled={loading}
            size="small"
            id="username"
            name="username"
            label="Username"
            sx={{ mb: 1.5 }}
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />

          <TextField
            fullWidth
            color="secondary"
            disabled={loading}
            size="small"
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <div>
            <Button
              variant="contained"
              type="submit"
              disabled={loading}
              endIcon={loading ? <CircularProgress size="small" /> : undefined}
            >
              SIGN IN
            </Button>
          </div>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
