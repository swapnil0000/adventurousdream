import React, { useEffect } from 'react'
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger

const About = () => {

  gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

  const elementRefs = useRef([]); // Ref for multiple elements

  useEffect(() => {
    // Use GSAP inside useEffect
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
            toggleActions: "play none none none" // Only play the animation on enter
          }
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
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Box sx={{ backgroundColor: 'black' }}>
      <Box sx={{ border: 'none', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ position: 'absolute', bottom: isMobileView ? "35%" : "40%", transform: 'translate(-50%, 100%)', color: 'white', fontSize: '24px', animation: 'moveUp 3s forwards' }}>
          <Typography sx={{ fontSize: isMobileView ? "50px" : "100px", width: '950px', fontFamily: 'Montserrat', fontWeight: '700', textAlign: 'center' }}>ABOUT US
          </Typography>
        </Box>
      </Box>
      <Container sx={{ marginTop: '40px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', margin: 'auto', overflow: 'hidden' }}>
          <Box sx={{ padding: '10px', overflow: 'hidden', lineHeight: 'auto' }} >
            <Typography className="revealUp" ref={(el) => (elementRefs.current[0] = el)} style={{ fontSize: '40px', overflow: 'hidden', fontWeight: '900', fontFamily: 'Montserrat', color: '#f91942' }}>ABOUT,</Typography>
            <Typography className="revealUp" sx={{ fontSize: '20px', fontFamily: 'Montserrat', color: '#666', overflow: 'hidden', fontWeight: '400', textAlign: 'start' }}><span style={{ fontSize: '25px', fontWeight: '900', fontFamily: 'Montserrat' }}>CODESINTENSITY</span> is to revolutionize the digital landscape by providing innovative solutions that empower businesses to thrive in the modern world. We are committed to leveraging our expertise in web development, design, and digital marketing to deliver cutting-edge solutions tailored to meet the unique needs of each of our clients.</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '30px', overflow: 'hidden' }}>
          <Box className="revealUp">
            <Typography style={{ fontSize: isMobileView ? "35px" : "40px", fontWeight: '900', fontFamily: 'Montserrat', color: '#f91942' }}>MISSION & STORY,</Typography>
            <Typography sx={{ fontSize: '20px', fontFamily: 'Montserrat', color: '#666', fontWeight: '400', textAlign: 'start' }}> at <span style={{ fontSize: '25px', fontWeight: '900', fontFamily: 'Montserrat' }}>CODESINTENSITY</span> is to revolutionize the digital landscape by providing innovative solutions that empower businesses to thrive in the modern world. We are committed to leveraging our expertise in web development, design, and digital marketing to deliver cutting-edge solutions tailored to meet the unique needs of each of our clients</Typography>
          </Box>
        </Box>
        <Box className="revealUp" sx={{ marginTop: '30px', display: 'flex', width: '100%', flexDirection: 'column', overflow: 'hidden' }}>
          <Typography style={{ fontSize: '40px', fontWeight: '900', fontFamily: 'Montserrat', color: '#f91942' }}>FAQs,</Typography>
          <section style={{ color: '#666', display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="container" style={{ backgroundColor: 'black', borderRadius: '20px', border: '1px solid #666', padding: '20px' }}>
              <div className="" style={{ Color: 'black', backgroundColor: 'black' }}>

                <div style={{ backgroundColor: 'black' }}>
                  <h2 className="h3 mb-2" style={{ lineHeight: '40px' }}>How can we help you?</h2>
                  <p >We hope you have found an answer to your question. If you need any help, please search your query on our Support Center or contact us via email.</p>
                  <div style={{ border: '1px solid white' }} className="accordion accordion-flush" id="accordionExample" >
                    <div className="accordion-item" style={{ color: '#666', backgroundColor: 'black', border: '1px solid white' }}>
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: 'black', color: '#666' }}>
                          What is CODESINTENSITY?
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>CodesIntensity is a leading software development company specializing in crafting innovative solutions for businesses worldwide. We provide a range of services including custom software development, mobile app development, web development, and more.</p>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item" style={{ color: '#666', backgroundColor: 'black', border: '1px solid white' }}>
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: 'black', color: '#666' }}>
                          What industries does CodesIntensity serve?                    </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>  We cater to diverse industries such as healthcare, finance, e-commerce, education, and beyond. Our flexible approach allows us to tailor solutions to meet the unique needs of each client.    </p>              </div>
                      </div>

                      <div className="accordion-item" style={{ color: '#666', backgroundColor: 'black', border: '1px solid white' }}>
                        <h2 className="accordion-header" id="headingThree">
                          <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: 'black', color: '#666' }}>
                            What sets CodesIntensity apart from other software companies?
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>At CodesIntensity, we prioritize innovation, quality, and client satisfaction. Our team consists of highly skilled professionals who are dedicated to delivering cutting-edge solutions that drive business growth and success.</p>

                          </div>
                        </div>
                      </div>

                      <div className="accordion-item" style={{ color: '#666', backgroundColor: 'black' }}>
                        <h2 className="accordion-header" id="headingFour">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{ backgroundColor: 'black', color: '#666' }}>
                            How can I get started with CodesIntensity?
                          </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample" style={{ backgroundColor: 'black', color: '#666' }}>
                          <div className="accordion-body">
                            <p>Getting started with CodesIntensity is easy. Simply reach out to us via our website or contact us directly to discuss your project requirements. Our team will work with you to determine the best approach and provide a tailored solution to meet your needs.

                            </p>

                          </div>
                        </div>
                      </div>






                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

        </Box>

        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ width: '100%', height: '190px', backgroundColor: '#110c11', margin: '20px', display: 'flex', flexDirection: isMobileView ? "column" : "row", alignItems: 'center', justifyContent: 'space-around', borderRadius: '20px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 100, 0, 0.12) 0px 12px 30px, rgba(0, 100, 0, 0.12) 10px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(100, 0, 0, 0.09) 0px -3px 5px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ color: 'white', fontSize: '20px', fontFamily: 'Montserrat', fontWeight: '600', textAlign: 'center' }}>Get Free Consultation Now!</Typography>
              <Typography sx={{ color: 'white', fontSize: '15px', fontFamily: 'Montserrat', fontWeight: '400', maxWidth: isMobileView ? "270px" : '100%', textAlign: 'center' }}>Let’s create a powerful website that grows with your business.</Typography>

            </Box>
            <Box>
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <Typography onClick={() => navigate('/contact')} className="button-text">Contact Us</Typography>
              </button>
            </Box>
          </Box>
        </Box>

      </Container>
    </Box>
  )
}

export default About