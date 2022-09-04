import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './login.css';
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
  paddingTop: 200,
  width: '100%',
  paddingLeft: 50,
  paddingRight: 50,
  height: '100vh',
  color: theme.palette.text.secondary,
}));

const validationSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: 'johnDoe@example.com',
      password: 'johnbor',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Grid container >
      <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
        <Item elevation={0}>
          <img src={require('../../utils/assets/Asset 1@4x.png')} alt="logo" className="logoForm" />
          <form onSubmit={formik.handleSubmit}>
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
              sx={{ marginTop: 5 }}
            />
            <Button sx={{ marginTop: 5 }} color="primary" variant="contained" fullWidth type="submit">
              Login
            </Button>
          </form>
          <Link
            to="resetPassword"
            style={{ display: 'flex', justifyContent: 'right', textDecoration: 'none', marginTop: 20 }}
          >
            Forgot password?
          </Link>
          <Grid style={{ marginTop: 50 }}>
            <p>
              Don&apos;t have an account ? <span> </span>
              <Link to="register" style={{ textDecoration: 'none' }}>
                  Register
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

export default Login;
