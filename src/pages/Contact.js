import { Box, Typography, useMediaQuery, Button } from '@mui/material';
import React from 'react';
import Form from '../components/Form';
import theme from '../theme';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactDetailsForm from '../components/Form';

const Contact = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Background Section */}
      <Box
        sx={{
          background:`url(/assets/design3.jpg)`,
          backgroundPosition:'cover',
          height: isMobileView ? '200px' : '280px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          padding: '0 20px',
        }}
      >
        <Typography
          variant={isMobileView ? 'h5' : 'h3'}
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
          marginTop: isMobileView ? '-70px' : '-100px',
          backgroundColor: 'whitesmoke',
          maxWidth: isMobileView ? '90%' : '50%',
          mx: 'auto',
          textAlign: 'center',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: isMobileView ? 'column' : 'row', width: '100%', gap: '10px', alignItems: 'center' }}>
          {/* Image Section */}

          <Box sx={{ width: isMobileView ? "100%" : "50%", height: '200px' }} >
            <img src='/assets/contact.jpg' alt='Contact' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>

          {/* Contact Details Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              width: isMobileView ? "100%" : "50%",
              padding: '10px',
            }}
          >
            <Typography
              sx={{
                fontSize: '24px',
                fontWeight: '800',
                color: '#666 ',

              }}
            >
              Contact Details
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <EmailIcon sx={{ color: 'red' }} />
              <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#666' }}>
                swapnilsrivastava199@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <PhoneIcon sx={{ color: 'blue' }} />
              <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#666' }}>
                +91-6386455982
              </Typography>
            </Box>
            <Box sx={{ display: 'flex' ,gap:'10px'}}>
              <LocationOnIcon sx={{ color: 'blueviolet' }} />
              <Typography sx={{ fontSize: '14px', fontWeight: '600', color: '#666',textAlign:'start' }}>
                Dwarikapuri colony near Ravi Offset, Ballia (UP), Pin code – 277001
              </Typography>
            </Box>
          </Box>

        </Box>
      </Box>
      <Box sx={{display:'flex',flexDirection:'column',marginTop:'40px',margin:'20px'}}>
        <Typography sx={{fontSize:'20px',color:'#666',fontWeight:'600',fontFamily:'lato',marginBottom:'10px'
        }}>Got a question or need assistance? Fill out the form below, and we'll get back to you as soon as possible!</Typography>
        <ContactDetailsForm/>
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
