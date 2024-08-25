import React from 'react';
import "../styles/moving.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { Box, Divider, Typography, useMediaQuery } from '@mui/material';
import theme from '../theme';

const MovingText = () => {
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

    const handleSocialClick = (url) => {
        window.open(url, '_blank');
    };

    const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className="moving-text">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer', padding: '10px', borderRadius: '10px' }}>
                <Box onClick={handleWhatsapp} sx={{ display: 'flex', flexDirection: 'row', gap: '4px', alignItems: 'center', cursor: 'pointer' }}>
                    <WhatsAppIcon sx={{ color: 'white', fontWeight: '700', fontSize: isMobileView ? "23px" : "23px" }} />
                    {!isMobileView && <Typography sx={{ fontSize: '15px', color: 'white', cursor: 'pointer' }}>+91-9151472404</Typography>}
                </Box>
                <Divider orientation='vertical' sx={{ height: '20px', color: 'white', border: '1px solid white' }} />
                <Box onClick={handleEmail} sx={{ display: 'flex', flexDirection: 'row', gap: '5px', alignItems: 'center', cursor: 'pointer' }}>
                    <EmailIcon sx={{ color: 'white', fontWeight: '700', fontSize: isMobileView ? "23px" : "23px" }} />
                    {!isMobileView && <Typography sx={{ color: 'white', fontSize: '15px' }}>Mail Us</Typography>}
                </Box>
                <Divider orientation='vertical' sx={{ height: '20px', color: 'white', border: '1px solid white' }} />
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
                    <InstagramIcon sx={{ color: 'white', fontSize: isMobileView ? "25px" : "20px", cursor: 'pointer' }} onClick={() => handleSocialClick('https://www.instagram.com/yourprofile')} />
                    <TwitterIcon sx={{ color: 'white', fontSize: isMobileView ? "25px" : "20px", cursor: 'pointer' }} onClick={() => handleSocialClick('https://twitter.com/yourprofile')} />
                    <FacebookIcon sx={{ color: 'white', fontSize: isMobileView ? "25px" : "20px", cursor: 'pointer' }} onClick={() => handleSocialClick('https://www.facebook.com/yourprofile')} />
                </Box>
            </Box>
        </div>
    );
};

export default MovingText;
