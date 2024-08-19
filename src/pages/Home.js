import { Box } from '@mui/material'
import React from 'react'
import Carousels from './Carousels'
import Choose from './Choose'
import Destination from './Destination'
import Packages from './Packages'
import Contact from './Contact'
import About from './About'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <Box>
      <Carousels/>
      <About/>
      <Choose/>
      <Destination/>
      <Packages/>
      <Testimonials/>
      <Contact/>     
    </Box>
  )
}

export default Home