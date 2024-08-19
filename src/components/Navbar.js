import React, { useState, useEffect } from 'react';
import { AppBar, Box, Button, Input, InputAdornment, styled, Toolbar, Typography, useMediaQuery } from "@mui/material";
import theme from '../theme';
import Drawers from './MobileDrawer';

const Navbar = () => {
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
                    <Box sx={{display:'flex',flexDirection:'row',alignItems:"center",justifyContent:'space-evenly',width:'60%'}}>
                      <Typography sx={{color:'white',cursor:'pointer'}}>Destination</Typography>
                      <Typography sx={{color:'white',cursor:'pointer'}}>Packages</Typography>
                      <Typography sx={{color:'white',cursor:'pointer'}}>Contact Us</Typography>

                    </Box>
                </Toolbar>
            }
            {isMobileView &&
                <AppBar >
                    <Toolbar sx={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', gap: '30px', justifyContent: 'space-between' }}>
                      
                        <img style={{ width: '100px', padding: '10px' }} src="/assets/logo.png" alt='logo' />

                    </Toolbar>
                </AppBar>
            }
        </AppBar>
    );
};

export default Navbar;
