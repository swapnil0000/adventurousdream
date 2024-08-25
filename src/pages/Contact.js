import { Box, Typography, useMediaQuery, Button } from '@mui/material';
import React from 'react';
import Form from '../components/Form';
import theme from '../theme';

const Contact = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Background Section */}
      <Box
        sx={{
          background: 'linear-gradient(to right top, #121519, #433352, #9c4569, #e36a4e, #ebb612)',
          height: isMobileView ? '400px' : '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          padding: '0 20px',
        }}
      >
        <Typography
          variant={isMobileView ? 'h4' : 'h3'}
          sx={{
            color: 'white',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            textAlign: 'center',
            paddingBottom: '50px',
          }}
        >
          Get in Touch with Us
        </Typography>
      </Box>

      {/* Content Section with Form */}
      <Box
        sx={{
          marginTop: isMobileView ? '-100px' : '-50px',
          backgroundColor: 'white',
          borderRadius: '20px',
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
         
          maxWidth: isMobileView ? '90%' : '50%',
          mx: 'auto',
          textAlign: 'center',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <Typography variant="h6" sx={{marginBottom: '20px', color: '#666',textTransform:'uppercase' }}>
          Booking & Enquiry
        </Typography>
         <Box sx={{display:'flex',flexDirection:'row',width:'100%'}}>
         {!isMobileView && <img style={{width:'50%',objectFit:'cover'}} src='/assets/Darjelling.jpg'/>}
         <Box>
          <Typography sx={{fontSize:'15px',fontWeight:'600'}}>swapnilsrivastava199@gmail.com</Typography>
          <Typography sx={{fontSize:'15px',fontWeight:'500'}}>+91-6386455982</Typography>
         </Box>
         </Box>
      </Box>
    </Box>
  );
};

export default Contact;


// <Button
// variant="contained"
// sx={{
//   marginTop: '20px',
//   background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
//   color: 'white',
//   padding: '10px 20px',
//   borderRadius: '20px',
//   boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
//   '&:hover': {
//     background: 'linear-gradient(135deg, #2575fc 0%, #6a11cb 100%)',
//   },
// }}
// >
// Send Message
// </Button>
