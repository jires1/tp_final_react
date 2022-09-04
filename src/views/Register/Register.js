import React from 'react';
import './register.css';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  paddingTop: 70,
  width: '100%',
  paddingLeft: 50,
  paddingRight: 50,
  height: '100vh',
  color: theme.palette.text.secondary,
  
}));

const validationSchema = yup.object({
  firstName: yup
    .string('Enter your first name')
    .min(5, 'too small')
    .max(50, 'too long!')
    .required('First name is required'),
  lastName: yup
    .string('Enter your last name')
    .min(2, 'too small')
    .max(20, 'too long!')
    .required('Last name is required'),
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password'), null], 'Confirmation password does not match'),
  acceptTerms: yup.bool().oneOf([true], 'Accepting the conditions is mandatory'),
});

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Grid container>
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Item elevation={0} >
          <img src={require('../../utils/assets/Asset 1@4x.png')} alt="logo" className="logoFormRegister" />
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="First name"
              variant="filled"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              variant="filled"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              sx={{ marginTop: 4 }}
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="filled"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              sx={{ marginTop: 4 }}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="filled"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{ marginTop: 4 }}
            />
            <TextField
              fullWidth
              id="password"
              name="confirmPassword"
              label="Confirm password"
              type="password"
              variant="filled"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              sx={{ marginTop: 4 }}
            />
            <FormControlLabel
              sx={{ marginTop: 5, display: 'flex' }}
              control={
                <Checkbox
                  value={formik.values.acceptTerms}
                  color="primary"
                  name="acceptTerms"
                  onChange={formik.handleChange}
                  error={formik.touched.acceptTerms && Boolean(formik.errors.acceptTerms)}
                  helperText={formik.touched.acceptTerms && formik.errors.acceptTerms}
                />
              }
              label="I agree with terms and conditions"
            />
            <Button sx={{ marginTop: 4 }} color="primary" variant="contained" fullWidth type="submit">
              Register
            </Button>
          </form>
          <Grid style={{ marginTop: 50 }}>
            <p>
              Already have an account ? <span> </span>
              <Link to="/" style={{ textDecoration: 'none', paddingBottom: 30 }}>
                Login
              </Link>
            </p>
          </Grid>
        </Item>
      </Grid>
      <Grid item xs={6}>
        login left
      </Grid>
    </Grid>
  );
};

export default Register;
