import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import theme from '../theme'
const Testimonials = () => {
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%'
    }}>
      <Typography sx={{ marginTop:isMobileView?"0px":'30px', fontSize: isMobileView ? "23px" : "30px", fontWeight: '800', fontFamily: 'montserrat', textAlign: 'center'}}>
        Read What <span style={{ color: 'red' }}>Our Customer Say</span></Typography>
      <Box sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row",alignItems:'center',justifyContent:'center', gap: '20px', width:isMobileView?"100%":"70%",marginTop:'10px' }}>
        <Box sx={{ backgroundColor: '#19212e', width: isMobileView ? "300px" : "200x", padding: "15px", borderRadius: '20px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
            <img src="https://github.com/annafkt/frontend-mentor-challenges/blob/main/challenges/testimonials-grid-section/images/image-patrick.jpg?raw=true" alt="" width="35" />
            <Typography sx={{ fontSize: isMobileView ? "10px" : "15px", fontWeight: '700', fontFamily: 'montserrat', color: 'white' }}>Swapnil Srivastava</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: '20px', fontFamily: 'lato ', color: 'white', marginTop: '10px' }}>If you're seeking an extraordinary adventure, look no further than Adventurous Dreams. Their attention to detail and passion for travel made our experience truly special.</Typography>
          </Box>
        </Box>
        <Box sx={{ backgroundColor: '#19212e', width: isMobileView ? "300px" : "400x", height: 'auto', padding: "15px", borderRadius: '20px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
            <img src="https://github.com/annafkt/frontend-mentor-challenges/blob/main/challenges/testimonials-grid-section/images/image-patrick.jpg?raw=true" alt="" width="35" />
            <Typography sx={{ fontSize: '15px', fontWeight: '700', fontFamily: 'montserrat', color: 'white' }}>Swapnil Srivastava</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: '20px', fontFamily: 'lato ', color: 'white', marginTop: '10px' }}>If you're seeking an extraordinary adventure, look no further than Adventurous Dreams. Their attention to detail and passion for travel made our experience truly special.</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Testimonials