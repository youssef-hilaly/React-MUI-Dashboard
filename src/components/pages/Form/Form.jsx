import { Box, Button, MenuItem, Stack, TextField, Typography, useTheme } from '@mui/material'
import React from 'react'
import * as yup from 'yup';
import { useFormik } from 'formik';

const data = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Manager',
    label: 'Manager',
  },
  {
    value: 'User',
    label: 'User',
  },
]
const validationSchema = yup.object({
  firstName: yup
    .string('Enter your first name')
    .required('First Name is required'),
  lastName: yup
    .string('Enter your last name')
    .required('Last Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  contactNumber: yup
    .string('Enter your contact number')
    .required('Contact Number is required')
    .matches(/^(01)[0125][0-9]{8}$/, 'Enter a valid contact number'),
  address1: yup
    .string('Enter your address')
    .required('Address is required'),
  address2: yup
    .string('Enter your address')
    .required('Address is required'),
  role: yup
    .string('Select your role')
    .required('Role is required'),
});

function Form() {
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      address1: '',
      address2: '',
      role: 'Admin',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <>

      <Box sx={{ width: '100%', maxWidth: '360px', marginRight: 'auto', marginBottom: '15px'}}>
       <Typography variant="h3" sx={{color: theme.palette.primary.main, textTransform: 'uppercase' }}>Create user</Typography>
       <Typography variant="body1" sx={{}}>Fill in the form below to create a new user</Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Stack spacing={2} direction={'row'}>
            <TextField
              sx={{ flex: 1 }}
              label="First Name"
              variant="filled"
              id='firstName'
              name='firstName'
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              sx={{ flex: 1 }}
              label="Last Name"
              variant="filled"
              id='lastName'
              name='lastName'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Stack>

          <TextField
            label="Email"
            variant="filled"
            id='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            label="Contact Number"
            variant="filled"
            id='contactNumber'
            name='contactNumber'
            value={formik.values.contactNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
            helperText={formik.touched.contactNumber && formik.errors.contactNumber}
          />
          <TextField
            label="Address 1"
            variant="filled"
            id='address1'
            name='address1'
            value={formik.values.address1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address1 && Boolean(formik.errors.address1)}
            helperText={formik.touched.address1 && formik.errors.address1}
          />
          <TextField
            label="Address 2"
            variant="filled"
            id='address2'
            name='address2'
            value={formik.values.address2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address2 && Boolean(formik.errors.address2)}
            helperText={formik.touched.address2 && formik.errors.address2}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="Admin"
            name='role'
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.role && Boolean(formik.errors.role)}
            helperText={formik.touched.role && formik.errors.role}
          >
            {data.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <Box sx={{ textAlign: 'right' }}>
            <Button variant="contained" color="primary" type='submit'>Submit</Button>
          </Box>
        </Box>
      </form>
    </>
  )
}

export default Form

