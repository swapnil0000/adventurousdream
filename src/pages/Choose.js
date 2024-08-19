import React from 'react';
import { Box, Container, Typography, useMediaQuery, useTheme, Grid } from '@mui/material';

const boxData = [
    {
        id: 1,
        img: "/assets/insurance.png",
        title: "Free Insurance",
        description: "Enjoy peace of mind with our 100% free cancellation—no questions asked!"
    },
    {
        id: 2,
        img: "/assets/like.png",
        title: "Most Trusted",
        description: "Partner with us and experience the expertise of the most trusted name in the industry."
    },
    {
        id: 3,
        img: "/assets/like.png",
        title: "Free Cancellation",
        description: "Enjoy the freedom of free cancellation—book with confidence!"
    },
    {
        id: 4,
        img: "/assets/insurance.png",
        title: "Exclusive offer",
        description: "Unlock your exclusive discount today—limited time offer, don't miss out!"
    }
];

const Choose = () => {
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box  sx={{ marginBottom:'10px',}}>
        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',width:'100%' }}>
            <Typography sx={{ marginTop: '30px', fontSize:isMobileView?"25px":"30px", fontWeight: '800',fontFamily:'montserrat',textAlign:'center' }}>
            Why Choose <span style={{color:'red'}}>Adventurous dreams ?</span>
            </Typography>
            <Grid container spacing={5}>
                {boxData.map((box) => (
                    <Grid item key={box.id} xs={12} sm={6} md={3} lg={3}>
                        <Box
                            sx={{
                                width: '100%',
                                padding: '10px',
                                borderRadius:'15px',
                                marginTop:'20px',
                                gap: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor:'white',
                                boxShadow: '4px 4px 32px 0px rgba(100, 100, 100, 1.25)',
                                marginBottom:'20px'
                            }}
                        >
                            <img src={box.img} alt={box.title} />
                            <Typography sx={{ fontSize: '17px', fontWeight: '600' }}>{box.title}</Typography>
                            <Typography sx={{ textAlign: 'center' }}>{box.description}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
        </Box>
    );
};

export default Choose;
