import { Box, Container, Typography } from '@mui/material';
import React from 'react'
import Slider from 'react-slick';

function HomePage() {
  function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "blue", borderRadius: '50%', }}
      onClick={onClick}
    />
  );
}
function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", background: "blue",  borderRadius: '50%',}}
      onClick={onClick}
    />
  );
}

   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      prevArrow: <PrevArrow/>,
      nextArrow: <NextArrow/>
      
    };
  return (
    <Container sx={{marginTop: '50px'}} >
      <Slider className='.slick-prev' {...settings}>
         <div>
          <img src="/images/hero1.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}} />
         </div>
         <div>
          <img src="/images/hero2.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}} />
         </div>
          <div>
           <img src="/images/hero3.jpg" alt="hero" style={{display: 'block', width: '100%', maxHeight: 500}} />
         </div>
      </Slider>
      <Box display='flex' justifyContent='center' sx={{p: 4}} >
        <Typography variant='h1'>Welcome to the store</Typography>
      </Box>
    </Container>
  )
}

export default HomePage