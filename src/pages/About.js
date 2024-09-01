import React, { useEffect } from 'react';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger

const About = () => {
  gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

  const elementRefs = useRef([]); // Ref for multiple elements

  useEffect(() => {
    gsap.utils.toArray(".revealUp").forEach((elem) => {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            end: "bottom 20%",
            markers: false,
            toggleActions: "play none none none", // Only play the animation on enter
          },
        }
      );
    });
  }, []); // Empty dependency array for mounting once

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const theme = useTheme();
  const navigate = useNavigate();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60vh', // Adjust height as needed
          background: `url(/assets/aboutback.jpg) no-repeat center center`,
          backgroundSize: 'cover',
          color: 'white',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '30%', // Adjust as needed
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: isMobileView ? '50px' : '100px',
              fontFamily: 'Montserrat',
              fontWeight: '700',
            }}
          >
            ABOUT US
          </Typography>
        </Box>
      </Box>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <Box sx={{backgroundColor:'whitesmoke',padding:'20px',marginTop:'-50px',width:'70%',zIndex:2,position:'relative',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}> 
       <Typography sx={{padding:'10px',fontSize:'15px'}}>Adventurous Drams is a pioneering Tour & Travel company based 
       in Ballia, founded by the enterprising Kumar Harshit. Since its inception, the company has carved a 
       niche for itself in the highly competitive travel industry by
        offering unique and adrenaline-pumping adventure tourism experiences. With a profound understanding of
         the nuances of travel and a deep-seated passion for exploration,
        Kumar Harshit established Adventurous Drams with the vision of providing travelers with not just trips, 
        but life-changing experiences that resonate long after the journey ends.</Typography>
        <Typography sx={{padding:'10px',fontSize:'15px'}}>One of the hallmarks of Adventurous Drams is its diverse range of travel offerings. The company caters to a wide array of travelers,
         from solo adventurers seeking the thrill of the unknown to families looking for a memorable getaway, and from corporate groups in need of team-building experiences 
         to couples in search of a romantic escape. The travel packages offered by Adventurous Drams are highly recommended by Experts</Typography>
      </Box>
      <Box sx={{width:'100%',height:'400px',backgroundColor:'#333',marginTop:'10px'}}>
        <Container sx={{display:'flex',flexDirection:'column',alignItems:'self-start',justifyContent:'center',marginTop:'20px'}}>
        <Typography sx={{fontSize:'25px',fontWeight:'600',color:'white'}}>The Objective</Typography>
        <Typography sx={{fontSize:'15px',fontWeight:'500',color:'white'}}>With the vision “To conquer the travel world by spreading its wings of quality service” Nirmala Travels 
        strives hard to make it possible for its customers to visit any corner of the world through its quality service in the field of tourism.</Typography>

        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around",width:'100%',marginTop:'50px'}}>
         <Box sx={{width:'50%'}}>
         <Typography sx={{fontSize:'20px',color:'white',margin:'10px'}}>To provide quality service to the customers. </Typography>
         <Typography sx={{fontSize:'20px',color:'white',margin:'10px'}}>To ensure safety and security of the customers in the course of their travel with us. </Typography>
         <Typography sx={{fontSize:'20px',color:'white',margin:'10px'}}>To continue to be the market leader in domestic tours in Southern India.</Typography>
         </Box>
         <Box sx={{width:'50%'}}>
         <Typography sx={{fontSize:'20px',color:'white',margin:'10px'}}>To create a good working environment for the employees and enable them to continuously improve their performance levels. </Typography>
         <Typography sx={{fontSize:'20px',color:'white',margin:'10px'}}>To provide quality service to the customers. </Typography>
         </Box>
        </Box>

        </Container>
      </Box>
        
      </Box>

    </Box>
  );
};

export default About;


