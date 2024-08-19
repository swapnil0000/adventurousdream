import React, { useState, useEffect } from 'react';
import { AppBar, Box, Button, Input, InputAdornment, styled, Toolbar, Typography, useMediaQuery } from "@mui/material";
import theme from '../theme';
import Drawers from './MobileDrawer';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Navbar = () => {
    const handleWhatsapp = () => {
        // Replace '1234567890' with the phone number you want to send the message to
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
    const [showAppBar, setShowAppBar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowAppBar(false);
            } else {
                setShowAppBar(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const InputStyle = styled(Input)({
        backgroundColor: '#F8F8F8',
        width: '40%',
        borderRadius: '25px',
    });

    const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppBar
            position='sticky'
            sx={{
                boxShadow: 'none',
                backgroundColor: '#333',
                transform: showAppBar ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'transform 0.3s ease-in-out',
            }}
        >
            {!isMobileView &&
                <Toolbar sx={{ backgroundColor: 'transparent', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <img style={{ width: '100px', padding: '10px' }} src="/assets/logo.png" alt='logo' />
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'space-evenly', width: '30%' }}>
                        <Typography sx={{ color: 'white', cursor: 'pointer' }}  onClick={() => handleScrollToSection('destination')}>Destination</Typography>
                        <Typography sx={{ color: 'white', cursor: 'pointer' }}  onClick={() => handleScrollToSection('package')}>Packages</Typography>
                        <Typography sx={{ color: 'white', cursor: 'pointer' }}  onClick={() => handleScrollToSection('contact')}>Contact Us</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '50px', cursor: 'pointer', marginTop: '15px' }}>
                        <Box onClick={handleWhatsapp} sx={{ display: 'flex', flexDirection: 'row', gap: '5px', alignItems: 'center', cursor: 'pointer' }}>
                            <WhatsAppIcon sx={{ color: 'lightgreen', fontWeight: '700', fontSize: '20px' }} />
                            <Typography sx={{fontSize:'15px'}}>9151472404</Typography>
                        </Box>
                        <Box onClick={handleEmail} sx={{ display: 'flex', flexDirection: 'row', gap: '5px', alignItems: 'center', cursor: 'pointer' }}>
                            <img  style={{ width: '20px' }} src="/assets/gmail.webp" alt='gmail' />
                            <Typography sx={{color:'white',textDecorationLine:'underline',fontSize:'15px'
                            }}>adventurousdreamspvtltd@gmail.com</Typography>
                        </Box>
                    </Box>

                </Toolbar>
            }
            {isMobileView &&
                <AppBar >
                    <Toolbar sx={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', gap: '30px', justifyContent: 'space-between' }}>

                        <img style={{ width: '100px', padding: '10px' }} src="/assets/logo.png" alt='logo' />
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '50px', cursor: 'pointer', marginTop: '15px' }}>
                        <Box sx={{display:'flex',flexDirection:'row'
                        }}>
                        <Box onClick={handleWhatsapp} sx={{ display: 'flex', flexDirection: 'row', gap: '5px', alignItems: 'center', cursor: 'pointer' }}>
                            <WhatsAppIcon sx={{ color: 'green', fontWeight: '700', fontSize: '20px' }} />
                        </Box>
                        <Box onClick={handleEmail} sx={{ display: 'flex', flexDirection: 'row', gap: '5px', alignItems: 'center', cursor: 'pointer' }}>
                            <img  style={{ width: '30px' }} src="/assets/gmail.webp" alt='gmail' />
                        </Box>
                        </Box>
                    </Box>


                    </Toolbar>
                </AppBar>
            }
        </AppBar>
    );
};

export default Navbar;
