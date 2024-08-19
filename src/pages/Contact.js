import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import Form from '../components/Form'
import theme from '../theme'

const Contact = () => {
  const isMobileView=useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{height:'300px',display:'flex',alignItems:'center',justifyContent:'space-evenly',marginTop:'50px',width:'100%'}}>
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