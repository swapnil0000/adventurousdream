import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^[0-9]{10}$/;

    if (!formValues.name) errors.name = 'Name is required';
    if (!formValues.email) errors.email = 'Email is required';
    else if (!emailPattern.test(formValues.email)) errors.email = 'Invalid email format';
    
    if (!formValues.mobile) errors.mobile = 'Mobile number is required';
    else if (!mobilePattern.test(formValues.mobile)) errors.mobile = 'Invalid mobile number';
    
    if (!formValues.subject) errors.subject = 'Subject is required';
    if (!formValues.message) errors.message = 'Message is required';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      // Handle form submission (e.g., send data to server)
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            required="true"
            label="Name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            error={!!formErrors.name}
            helperText={formErrors.name}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
             required="true"
            label="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
             required="true"
            label="Mobile Number"
            name="mobile"
            value={formValues.mobile}
            onChange={handleChange}
            error={!!formErrors.mobile}
            helperText={formErrors.mobile}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
             required="true"
            label="Subject"
            name="subject"
            value={formValues.subject}
            onChange={handleChange}
            error={!!formErrors.subject}
            helperText={formErrors.subject}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
             required="true"
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formValues.message}
            onChange={handleChange}
            error={!!formErrors.message}
            helperText={formErrors.message}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              marginTop: '20px',
              background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '20px',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                background: 'linear-gradient(135deg, #2575fc 0%, #6a11cb 100%)',
              },
            }}
          >
            Submit
          </Button>
        </Grid>
        {isSubmitted && (
          <Grid item xs={12}>
            <Typography variant="h6" color="success">
              Form submitted successfully!
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ContactForm;
