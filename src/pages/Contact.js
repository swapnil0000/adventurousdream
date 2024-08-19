import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import Form from '../components/Form'
import theme from '../theme'

const Contact = () => {
  const isMobileView=useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box id="contact" sx={{height:'300px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',marginTop:'50px',width:'100%'}}>
    <Typography sx={{ marginTop: '0px',fontSize: '30px', fontWeight: '800', fontFamily: 'montserrat', textAlign: 'center', color: '#333' }}>
    Contact <span style={{ color: 'red' }}>Us</span>
  </Typography>
      <Box sx={{backgroundImage:`url('/assets/back.png')`,width:'100%',height:'300px',display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
        {!isMobileView && <Typography sx={{color:'white',fontSize:isMobileView?"15px":"25px",fontWeight:'700',fontFamily:'montserrat',width:'45%',textAlign:'center'}}>
        PLAN YOUR HOLIDAYS WITH OUR ASSISTANCE,
        JUST FILL IN YOUR DETAILS.
        </Typography>}
        <Form/>
      </Box>
    </Box>
  )
}

export default Contact