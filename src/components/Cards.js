import React, { useState } from 'react';
import "../styles/packages.css";
import Dialogs from './Dialog';
import { Box } from '@mui/material';

const Cards = ({ image, title, stay, description, price, include }) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className="cell small-12 medium-6 large-3 xlarge-3">
            <Box className="card">
                <div className="card__image">
                    <img src={image} alt={title} />
                </div>
                <h2 className="card__title">{title}</h2>
                <div className="card__content">
                    <p>{description}</p>
                    <span onClick={handleClick} style={{ color: 'red', cursor: 'pointer' }}>Read more</span>
                </div>
                <Dialogs
                    stay={stay}
                    image={image}
                    title={title}
                    description={description}
                    price={price}
                    include={include}
                    open={open}
                    setOpen={setOpen}
                />
            </Box>
        </div>
    );
};

export default Cards;
