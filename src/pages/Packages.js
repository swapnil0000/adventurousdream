import React, { useRef, useState } from 'react';
import { Grid, Box, Typography, useMediaQuery } from '@mui/material';
import "../styles/packages.css"
import { cards } from '../utils/common';
import Cards from '../components/Cards';
import theme from '../theme';

const Packages = () => {
    const imgListRef = useRef(null);

    const [more, setMore] = useState(false);
    const handleClick = () => {
        setMore(!more);
    }
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <Typography sx={{ textAlign: 'center', fontSize: '35px', fontWeight: '800', fontFamily: 'montserrat' }}>India & Around <span style={{ color: 'red' }}>Holiday Packages</span></Typography>
            {
                !more && <Typography sx={{ width: '70%', textAlign: 'center' }}>Travelling abroad for a holiday is a great thing but there isn’t anything that beats the diversity of landscapes and cultures in India. We inspire...{!more && <span onClick={handleClick} style={{ color: 'red', cursor: 'pointer' }}>read more</span>}{more && <span> local travellers to travel more in India, as our India holiday packages acquaint travellers with the incredible beauty of the country. Take a look at top selling holiday packages in India.</span>}</Typography>
            }
            {
                more && <Typography sx={{ width: '70%', textAlign: 'center' }}>Travelling abroad for a holiday is a great thing but there isn’t anything that beats the diversity of landscapes and cultures in India. We inspiren local travellers to travel more in India, as our India holiday packages acquaint travellers with the incredible beauty of the country. Take a look at top selling holiday packages in India. <span onClick={handleClick} style={{ color: 'red', cursor: 'pointer' }}>read less</span></Typography>
            }
            <Grid sx={{ marginTop: '30px' }} container spacing={2}>
                <div className="grid-container full">
                    <div ref={imgListRef} style={{
                        display: 'flex',
                        flexDirection: isMobileView ? "column" : "row",
                        gap: '10px',
                        marginBottom:'20px',
                        overflowX: 'scroll',
                        scrollbarWidth: 'none', /* Firefox */
                        msOverflowStyle: 'none'  /* IE and Edge */
                    }} 
                    className="grid-x grid-margin-x small-up-1 medium-up-4 large-up-4 no-scrollbar">
                        {cards.map((card, index) => (
                            <Cards key={index} {...card} />
                        ))}
                    </div>
                </div>
            </Grid>
        </Box>
    );
};

export default Packages;
