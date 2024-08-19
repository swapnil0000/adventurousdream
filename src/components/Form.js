import React from 'react';
import { Box, Button, TextField, Typography, useMediaQuery } from '@mui/material';
import theme from '../theme';

const Form = () => {
  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission
    console.log('Form submitted');
  };
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        width:isMobileView?"80%":"50%",
        margin: 'auto', 
        padding: '10px', 
        borderRadius: '18px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 

      }}
    >
      <TextField
        label="Name"
        variant="outlined"
        required
        sx={{ marginBottom: '16px',backgroundColor:'white',borderRadius:'10px' }}
      />
      <TextField
        label="Email"
        type="email"
        variant="filled"
        required
        sx={{ marginBottom: '16px',backgroundColor:'white',borderRadius:'10px'  }}
      />
      <TextField
        label="Phone Number"
        type="tel"
        variant="outlined"
        required
        sx={{ marginBottom: '16px' ,backgroundColor:'white',borderRadius:'10px' }}
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        sx={{ alignSelf: 'center',backgroundColor:'white',color:'black',borderRadius:'10px'  }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default Form;
