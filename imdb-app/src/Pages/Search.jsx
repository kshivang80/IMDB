import React, { useState, useEffect } from 'react';
import "../Components/FistSlider.modules.css"
import { Box, Image, Text } from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings4 } from './ResponsiveCard';

const Search = () => {


  const slides = [
    {
      name: 'Lust Stories 2',
      image: 'https://m.media-amazon.com/images/M/MV5BNDJmZDU0NDMtMDAzYy00Yjk5LWEyNDYtOWYzYTEyZGQ0MDljXkEyXkFqcGdeQXVyMTU2MTIyODU2._V1_.jpg',
      videoUrl: 'https://www.youtube.com/embed/Z3Z7RocQUXI'
    },
    {
      name: 'Strange thing 2',
      image: 'https://occ-0-990-1009.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608',
      videoUrl: 'https://www.youtube.com/embed/l5OAxkuq850'
    },
    {
      name: 'Lucifer 2',
      image: 'https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      videoUrl: 'https://www.youtube.com/embed/-l2VT_5waTo'
    },
    {
      name: 'Naruto 3',
      image: 'https://wallpapers.com/images/hd/naruto-background-423q102rdslu9o0i.jpg',
      videoUrl: 'https://www.youtube.com/embed/2EpoMwm35Q0'
    }
  ];



  return (
    <div>
     <Box>
      
     </Box>
      <Slider {...settings4}>
        {slides.map((ele,index) => (
          <Box
            key={index} 
          >
            <Box className='mainDiv'>

              <iframe
                className='video'
                src={ele.videoUrl}
                title='YouTube video'
                frameBorder='0'
                allowFullScreen
              ></iframe>
            </Box>

            <Box className='NameDIV'>
              <Box className='smallDiv'>
                <Image className='mainVid' src={ele.image} />
              </Box>
              <Box className='Title'>
                <Text fontFamily={"sans-serif"}>{ele.name}</Text>
                <Text fontFamily={"sans-serif"} color="gray">Watch the trailer</Text>
              </Box>

            </Box>


          </Box>
        ))}
      </Slider>



    </div>
  );
};

export default Search