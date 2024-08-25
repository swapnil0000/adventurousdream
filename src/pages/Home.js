import { Box } from '@mui/material'
import React from 'react'
import Carousels from './Carousels'
import Choose from './Choose'
import Destination from './Destination'
import Packages from './Packages'
import Contact from './Contact'
import About from './About'
import Testimonials from './Testimonials'
import Acheivement from './Achievement'

const Home = () => {
  return (
    <Box>
      <Carousels/>
      <Acheivement/>
      <Choose/>
      <Destination/>
      <Packages/>
      <Testimonials/>
    </Box>
  )
}

export default Home