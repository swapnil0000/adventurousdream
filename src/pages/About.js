import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import theme from '../theme'

const About = () => {
  const isMobileView=useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Container sx={{display:'flex',flexDirection:'column',marginTop:'10px'}}>
      <Typography sx={{fontSize:isMobileView?"24px":"35px",fontWeight:'800',color:'red',textAlign:'start',fontFamily:'montserrat'}}>About,</Typography>
      <Typography sx={{fontSize:isMobileView?"17px":"20px",fontFamily:'montserrat'}}> <span style={{fontSize:isMobileView?"18px":"20px",fontWeight:'600',color:'#333'}}>ADVENTUROUS DREAMS</span> is to revolutionize the digital landscape by providing innovative solutions that empower businesses to thrive in the modern world. We are committed to leveraging our expertise in web development, design, and digital marketing to deliver cutting-edge solutions tailored to meet the unique needs of each of our clients.</Typography>
    </Container>
  )
}

export default About