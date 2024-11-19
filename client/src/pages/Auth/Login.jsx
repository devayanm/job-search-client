import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/slices/authSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  TextField,
  Button,
  Alert,
  CircularProgress,
  Box,
  Typography,
  IconButton,
  InputAdornment,
  Divider,
  Link,
} from '@mui/material';
import { Visibility, VisibilityOff, ArrowBack } from '@mui/icons-material';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address.')
    .required('Email is required.'),
  password: yup.string().required('Password is required.'),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm, setErrors }) => {
    try {
      setTimeout(() => {
        const fakeUser = { email: values.email, name: 'John Doe', role: 'admin' };
        dispatch(login(fakeUser));
        setSubmitting(false);
        resetForm();
        navigate('/home');
      }, 1000);

      /*
      // Real API call
      const response = await authAPI.login(values);
      const userData = response.data;
      dispatch(login(userData));
      resetForm();
      navigate('/home');
      */
    } catch (error) {
      setSubmitting(false);
      setErrors({ submit: 'Login failed. Please try again.' });
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f6f9',
        padding: 2,
        animation: 'fadeIn 0.5s ease',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          padding: 4,
          backgroundColor: '#fff',
          borderRadius: 2,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          animation: 'scaleUp 0.3s ease',
        }}
      >
        <IconButton onClick={() => navigate(-1)} sx={{ marginBottom: 2 }}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h4" textAlign="center" marginBottom={2}>
          Login
        </Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, resetForm }) => (
            <Form>
              {errors.submit && (
                <Alert severity="error" sx={{ marginBottom: 2 }}>
                  {errors.submit}
                </Alert>
              )}

              <Box sx={{ marginBottom: 2 }}>
                <Field
                  name="email"
                  as={TextField}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  helperText={<ErrorMessage name="email" />}
                  error={!!errors.email}
                />
              </Box>

              <Box sx={{ marginBottom: 2 }}>
                <Field
                  name="password"
                  as={TextField}
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handlePasswordVisibility} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  helperText={<ErrorMessage name="password" />}
                  error={!!errors.password}
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => resetForm()}
                  disabled={isSubmitting}
                >
                  Reset
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  sx={{ minWidth: 120 }}
                >
                  {isSubmitting ? (
                    <CircularProgress size={24} style={{ color: '#fff' }} />
                  ) : (
                    'Login'
                  )}
                </Button>
              </Box>

              <Divider sx={{ marginY: 2 }}>OR</Divider>

              <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#DB4437', color: '#fff', marginBottom: 1 }}
                  fullWidth
                  onClick={() => alert('Google Login Coming Soon!')}
                >
                  Login with Google
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#1877F2', color: '#fff' }}
                  fullWidth
                  onClick={() => alert('Facebook Login Coming Soon!')}
                >
                  Login with Facebook
                </Button>
              </Box>
              <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                <Typography variant="body2">
                  Don't have an account?{' '}
                  <Link
                    href="/register"
                    variant="body2"
                    sx={{ textDecoration: 'none', color: '#1976d2' }}
                  >
                    Sign up
                  </Link>
                </Typography>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Login;
