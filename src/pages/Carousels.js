import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Box, Container } from '@mui/material';
const Carousels = () => {
  return (
    <Box>
      <Carousel
        autoFocus={false}
        autoPlay={true}
        width='100%'
        dynamicHeight={180} // Adjust the height as needed
        showStatus={false}
        infiniteLoop={true}
        showIndicators={true}
        centerSlidePercentage={50}
        showThumbs={false}>
        <Box>
          <img style={{ height: '350px', objectFit: 'cover' }} src='/assets/banner.png' />
        </Box>
        <Box>
          <img style={{ height: '350px', objectFit: 'cover' }} src="/assets/udaypur.jpg" />
        </Box>
        <Box>
          <img style={{ height: '350px', objectFit: 'cover' }} src='/assets/sikkim.jpg' />
        </Box>
        <Box>
          <img style={{ height: '350px', objectFit: 'cover' }} src='/assets/eastsikkim.jpg' />
        </Box>
      </Carousel>
    </Box>
  )
}

export default Carousels