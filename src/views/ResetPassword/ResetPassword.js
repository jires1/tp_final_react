import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  paddingTop: 200,
  width: '100%',
  paddingLeft: 50,
  paddingRight: 50,
  height: '100%',
  color: theme.palette.text.secondary,
}));

const validationSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

const ResetPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Grid container>
      <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
            <Button sx={{ marginTop: 5 }} color="primary" variant="contained" fullWidth type="submit">
              send request
            </Button>
          </form>
        </Item>
      </Grid>
      <Grid item xs={6}sx={{ display: { xs: 'none', md: 'flex' } }} >
        <img src={require('../../utils/assets/Монтажная область 97@4x.png')} alt="logo side" className="logoSide" />
      </Grid>
    </Grid>
  );
};
export default ResetPassword;
