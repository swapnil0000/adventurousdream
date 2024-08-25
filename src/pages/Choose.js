import React from 'react';
import { Box, Container, Typography, useMediaQuery, useTheme, Grid } from '@mui/material';

const boxData = [
    {
        id: 1,
        img: "/assets/choose/life-insurance.png",
        title: "Free Insurance",
        description: "Enjoy peace of mind with our 100% free cancellation—no questions asked!"
    },
    {
        id: 2,
        img: "/assets/choose/trust.png",
        title: "Most Trusted",
        description: "Partner with us and experience the most trusted name in the industry."
    },
    {
        id: 3,
        img: "/assets/choose/cancel.png",
        title: "Free Cancellation",
        description: "Enjoy the freedom of free cancellation—book with no cancellation fees!"
    },
    {
        id: 4,
        img: "/assets/choose/discount.png",
        title: "Exclusive Offer",
        description: "Unlock your exclusive discount today—limited time offer, don't miss out!"
    }
];

const Choose = () => {
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ padding: '30px 0', backgroundColor: '#f5f5f5' }}>
            <Container sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: isMobileView ? "28px" : "36px", fontWeight: '800', fontFamily: 'Montserrat', mb: 4 }}>
                    Why Choose <span style={{ color: '#d32f2f' }}>Adventurous Dreams?</span>
                </Typography>
                <Grid container spacing={4}>
                    {boxData.map((box) => (
                        <Grid item key={box.id} xs={12} sm={6} md={3}>
                            <Box
                                sx={{
                                    padding: '31px',
                                    borderRadius: '12px',
                                    textAlign: 'center',
                                    backgroundColor: '#fff',
                                    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        boxShadow: '0px 15px 20px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            >
                                <img src={box.img} alt={box.title} style={{ marginBottom: '20px', width: '60px' }} />
                                <Typography sx={{ fontSize: '20px', fontWeight: '700', mb: 1 }}>{box.title}</Typography>
                                <Typography sx={{ fontSize: '16px', color: '#555' }}>{box.description}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Choose;
