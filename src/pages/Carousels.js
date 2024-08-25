import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Box, Container, useMediaQuery } from '@mui/material';
import theme from '../theme';
const Carousels = () => {
  const isMobileView=useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box sx={{marginTop:isMobileView?"px":"0px"}}>
      <Carousel
        autoFocus={false}
        autoPlay={true}
        width='100%'
        dynamicHeight={10} // Adjust the height as needed
        showStatus={false}
        infiniteLoop={true}
        showIndicators={true}
        centerSlidePercentage={50}
        showThumbs={false}>
       
        <Box>
          <img style={{width:'100%', height:isMobileView?"200px":"auto", objectFit: 'cover'}} src="/assets/banner.png" />
        </Box>
        <Box>
          <img style={{width:'100%', height:isMobileView?"200px":"auto", objectFit: 'cover' }} src='/assets/banner.png' />
        </Box>
        <Box>
          <img style={{width:'100%', height:isMobileView?"200px":"auto", objectFit: 'cover' }} src='/assets/banner.png' />
        </Box>
      </Carousel>
    </Box>
  )
}

export default Carousels