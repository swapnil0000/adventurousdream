import React, { useRef } from 'react';
import "../styles/destination.css";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography, useMediaQuery } from '@mui/material';
import { destination } from '../utils/common';
import theme from '../theme';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Category = () => {
  const imgListRef = useRef(null);

  const handleScrollRight = () => {
    if (imgListRef.current) {
      imgListRef.current.scrollBy(650, 0);
    }
  };

  const handleScrollLeft = () => {
    if (imgListRef.current) {
      imgListRef.current.scrollBy(-650, 0);
    }
  };

  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div style={{
      backgroundImage: `url('/assets/background.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: '50px 0px'
    }}>
      <section className="destination-section">
        <Typography sx={{ marginTop: '0px', fontSize: '30px', fontWeight: '800', fontFamily: 'montserrat', textAlign: 'center', color: 'whitesmoke' }}>
          Explore Our <span style={{ color: 'red' }}>Top Destination</span>
        </Typography>
        <ul id="imgList" ref={imgListRef} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', overflowX: 'scroll', listStyle: 'none', marginTop: '20px', gap: isMobileView ? "40px" : "0px" }}>
          {destination.map((ele) => (
            <li key={ele.id} style={{ marginLeft: '10px', width: '420px' }}>
              <Card sx={{ width: isMobileView ? "340px" : "400px", backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <CardMedia
                  sx={{ height: 160, width: "100%" }}
                  image={ele.img}
                  title={ele.title}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                  <Typography sx={{ fontWeight: '600', color: '#333', fontFamily: 'lato', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', marginTop: '10px' }} variant="h5">
                    {ele.title} <span style={{ fontSize: '15px',border:'2px solid red',padding:'5px', fontWeight: '400', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>  <LocationOnIcon sx={{ fontSize: '15px', color: 'green' }} /> {ele.location}</span>
                  </Typography>
                  <Divider orientation='horizontal' sx={{ width: '100%', marginTop: '10px' }} />
                  <Typography sx={{ whiteSpace: 'wrap', padding: '10px' }}>
                    {ele.description}
                  </Typography>
                </Box>
                <CardActions>
                  <Button variant='contained' sx={{
                    backgroundColor: '#333'
                  }} size="small">Learn More</Button>
                </CardActions>
              </Card>
            </li>
          ))}
        </ul>

      </section>
    </div>
  );
}

export default Category;
