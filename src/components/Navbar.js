import React, { useState } from 'react';
import { AppBar, Box, Button, Divider, Toolbar, Typography, useMediaQuery } from "@mui/material";
import theme from '../theme';
import { useNavigate } from 'react-router-dom';
import AnchorTemporaryDrawer from './MobileDrawer';

const Navbar = () => {
    const handleWhatsapp = () => {
        const phoneNumber = '9151472404';
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleEmail = () => {
        const recipientEmail = 'adventurousdreamspvtltd@gmail.com';
        const mailtoUrl = `mailto:${recipientEmail}`;
        window.open(mailtoUrl, '_blank');
    };

    const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

    const navigate = useNavigate();

    const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppBar position='relative'>
            <Toolbar
                sx={{
                    height: '80px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    justifyContent: 'space-between',
                    boxShadow: 'none'

                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px',
                        position: 'absolute', // Make sure the logo and menu items are positioned absolutely over the image
                        top: 0, // Align to the top of the toolbar
                    }}
                >
                    <img style={{ width: '100px' }} src="/assets/logo.png" alt='logo' />
                    {!isMobileView && (
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", gap: '15px', padding: '10px', borderRadius: '10px', color: 'white' }}>
                            <Typography sx={{
                                color: '#444444', cursor: 'pointer', fontSize: '17px', fontWeight: '600', fontFamily: 'sans-serif ', transition: 'transform 0.3s',
                                '&:hover': { transform: 'scale(1.15)' },
                            }} onClick={() => navigate('/')}>Home</Typography>
                            <Divider orientation='vertical' sx={{
                                height: '20px', width: '1.5px', border: '1px solid #666', transition: 'transform 0.3s',
                                '&:hover': { transform: 'scale(1.15)' },
                            }} />
                            <Typography sx={{
                                color: '#444444', cursor: 'pointer', fontSize: '17px', fontWeight: '600', fontFamily: 'sans-serif ', transition: 'transform 0.3s',
                                '&:hover': { transform: 'scale(1.15)' },
                            }} onClick={() => navigate('/about')}>About Us</Typography>
                            <Divider orientation='vertical' sx={{ height: '20px', width: '1.5px', border: '1px solid #666' }} />
                            <Typography sx={{
                                color: '#444444', cursor: 'pointer', fontSize: '17px', fontWeight: '600', fontFamily: 'sans-serif ', transition: 'transform 0.3s',
                                '&:hover': { transform: 'scale(1.15)' },
                            }} onClick={() => handleScrollToSection('destination')}>Destination</Typography>
                            <Divider orientation='vertical' sx={{ height: '20px', width: '1.5px', border: '1px solid #666' }} />
                            <Typography sx={{
                                color: '#444444', cursor: 'pointer', fontSize: '17px', fontWeight: '600', fontFamily: 'sans-serif ', transition: 'transform 0.3s',
                                '&:hover': { transform: 'scale(1.15)' },
                            }} onClick={() => handleScrollToSection('package')}>Packages</Typography>
                            <Divider orientation='vertical' sx={{ height: '20px', width: '1.5px', border: '1px solid #666' }} />
                            <Typography sx={{
                                color: '#444444', cursor: 'pointer', fontSize: '17px', fontWeight: '600', fontFamily: 'sans-serif ', transition: 'transform 0.3s',
                                '&:hover': { transform: 'scale(1.15)' },
                            }} onClick={() => navigate('/contact')}>Contact Us</Typography>
                        </Box>
                    )}
                    {!isMobileView && <Box>
                        <Button sx={{ backgroundColor: 'rgb(196, 86, 86)', padding: '10px', borderRadius: '10px', color: 'white' }}>Book Now</Button>
                    </Box>}
                    {isMobileView && (
                        <AnchorTemporaryDrawer />
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
