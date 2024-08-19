import { Box } from '@mui/material';
import React from 'react';
const Card = ({ img, title, author }) => {
  return (
    <Box className="card">
      <img style={{width:'250px'}} src={img} alt={title} />
      <Box className="card-body-card">
        <h2>{title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <h5>{author}</h5>
      </Box>
    </Box>
  );
};

export default Card;
