import { Box, Button, DialogActions, DialogContent, DialogTitle, IconButton, styled, Typography, MenuItem, Select, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import NoMealsIcon from '@mui/icons-material/NoMeals';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import CloseIcon from '@mui/icons-material/Close';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import theme from '../theme';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const Dialogs = ({ open, setOpen, image, title, description, stay, price, include }) => {
    const [selectedPrice, setSelectedPrice] = useState('train');

    const handlePriceChange = (event) => {
        setSelectedPrice(event.target.value);
    };

    const handleClose = () => {
        setOpen(!open);
    };
    const isMobileView=useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2, fontSize: '20px', fontWeight: '600', fontFamily: 'montserrat' }} id="customized-dialog-title">
                    {title}
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent sx={{ width: '600px', display: 'flex',flexDirection:isMobileView?"column":"row", gap: '20px' }} dividers>
                    <Box sx={{width:'300px'}}>
                        <img style={{ width: '250px', height: 'auto',borderRadius:'10px' }} src={image} alt={title} />
                        <Typography sx={{ fontSize: '16px', fontWeight: '500' }} gutterBottom>{description}</Typography>
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px',}}>
                            <Typography sx={{ fontSize: '15px', fontWeight: '600', fontFamily: 'lato', }}>{stay}</Typography>
                            <Box>
                                <Typography sx={{ fontSize: '15px', fontWeight: '600', fontFamily: 'lato', mb: 1 }}>Select Transport Mode</Typography>
                                <Select
                                    value={selectedPrice}
                                    onChange={handlePriceChange}
                                    variant="outlined"
                                    sx={{ width: '160px' }}
                                >
                                    <MenuItem value="train">Train - ₹{price.train}</MenuItem>
                                    <MenuItem value="flight">Flight - ₹{price.flight}</MenuItem>
                                </Select>
                            </Box>
                            <Typography sx={{ fontSize: '16px', fontWeight: '700', fontFamily: 'montserrat', mt: 2 }}>Price: ₹{selectedPrice === 'train' ? price.train : price.flight}</Typography>
                        </Box>
                        <Box sx={{ mt: 3 }}>
                            <Typography sx={{ fontSize: '15px', fontWeight: '600', fontFamily: 'lato', mb: 1 }}>Includes:</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                {include.map((item, index) => (
                                    <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                                        {item.includes('Accommodation') && <LocalHotelIcon sx={{ mr: 1,backgroundColor:'red',padding:'4px',color:'white',borderRadius:'50%' }} />}
                                        {item.includes('Daily Breakfast') && <NoMealsIcon sx={{ mr: 1,backgroundColor:'red',padding:'4px',color:'white',borderRadius:'50%' }} />}
                                        {item.includes('Sightseeing') && <LocalSeeIcon sx={{ mr: 1,backgroundColor:'red',padding:'4px',color:'white',borderRadius:'50%' }} />}
                                        {item.includes('transport') && <DirectionsCarIcon sx={{ mr: 1,backgroundColor:'red',padding:'4px',color:'white',borderRadius:'50%' }} />}
                                        <Typography>{item}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' sx={{backgroundColor:'#333'}} autoFocus onClick={handleClose}>
                        Book
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </Box>
    );
};

export default Dialogs;
