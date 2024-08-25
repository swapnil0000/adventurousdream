import React, { useEffect, useState } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const Achievement = () => {
  // State variables for each statistic
  const [customersCount, setCustomersCount] = useState(0);
  const [destinationsCount, setDestinationsCount] = useState(0);
  const [toursCount, setToursCount] = useState(0);
  const [tourTypesCount, setTourTypesCount] = useState(0);

  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  // Function to increment counts
  useEffect(() => {
    const animateCount = (setter, target, step, delay) => {
      const interval = setInterval(() => {
        setter((prev) => {
          const next = prev + step;
          if (next >= target) {
            clearInterval(interval);
            return target;
          }
          return next;
        });
      }, delay);
      return interval;
    };

    const customersInterval = animateCount(setCustomersCount, 6531, 50, 10);
    const destinationsInterval = animateCount(setDestinationsCount, 100, 1, 20);
    const toursInterval = animateCount(setToursCount, 5000, 50, 10);
    const tourTypesInterval = animateCount(setTourTypesCount, 20, 1, 100);

    // Cleanup intervals on unmount
    return () => {
      clearInterval(customersInterval);
      clearInterval(destinationsInterval);
      clearInterval(toursInterval);
      clearInterval(tourTypesInterval);
    };
  }, []);

  // CounterBox component to display each statistic
  const CounterBox = ({ icon, count, label }) => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.3s',
        '&:hover': { transform: 'scale(1.15)' },
        width: isMobileView ? '100%' : '200px',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
      }}
    >
      {icon}
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: isMobileView ? '24px' : '24px',
          color: 'red',
          marginTop: '10px',
        }}
      >
        {count.toLocaleString()}
      </Typography>
      <Typography
        sx={{
          fontSize: isMobileView ? '14px' : '12px',
          color: 'white',
          fontWeight:'700',
          marginTop: '5px',
        }}
      >
        {label}
      </Typography>
    </Box>
  );

  return (
   
    <Box
      sx={{
        backgroundSize: 'cover',
        backgroundColor:'black',
        backgroundPosition: 'center',
        padding: isMobileView ? '40px 20px' : '40px 60px',
        position: 'relative',
      }}
    >
    <Typography sx={{fontSize:'30px',fontWeight:'600',textAlign:'center',color:'white',marginBottom:'20px'}}>CENTER ACHIEVEMENTS</Typography>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobileView ? 'column' : 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <CounterBox
            icon={
              <img
                src="/assets/achieve/plane.png"
                alt="Customers"
                style={{ width: isMobileView ? '50px' : '60px' }}
              />
            }
            count={customersCount}
            label="CUSTOMERS"
          />
          <CounterBox
            icon={
              <img
                src="/assets/achieve/destination.png"
                alt="Destinations"
                style={{ width: isMobileView ? '50px' : '60px' }}
              />
            }
            count={destinationsCount}
            label="DESTINATIONS"
          />
          <CounterBox
            icon={
              <img
                src="/assets/achieve/tours.png"
                alt="Tours"
                style={{ width: isMobileView ? '50px' : '60px' }}
              />
            }
            count={toursCount}
            label="TOURS"
          />
          <CounterBox
            icon={
              <img
                src="/assets/achieve/tourtypes.png"
                alt="Tour Types"
                style={{ width: isMobileView ? '50px' : '60px' }}
              />
            }
            count={tourTypesCount}
            label="TOUR TYPES"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Achievement;
