import React from 'react'
import { Box, Button, Image, Text } from "@chakra-ui/react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SecondSlider.modules.css"
import { settings5 } from '../Pages/ResponsiveCard';
import { SecondSlide, ThirdSlideDoc } from '../data/newData';
import { AiFillStar } from 'react-icons/ai';

const ThirdSlide = () => {
   

    return (
        <div>
            <Box className="mainDiv420">
                <Slider {...settings5}>
                    { ThirdSlideDoc.map((ele, index) => (
                        <Box
                            key={index}

                            className='sliderDiv420'
                        >
                            <Box className='secImage'>
                                <Image className='secImageDiv' src={ele.image} h="100%" w="100%" />
                            </Box>

                            <Box className='textDiv420'>
                                <Box className='star'>
                                    <AiFillStar className='starIcone' />
                                    <Text className="starText">{ele.rating}</Text>
                                </Box>
                                <Box className='secTitle'>
                                    <Text className='sectitleTxt'>{ele.title}</Text>
                                </Box>

                                <Box className='YearDiv' >
                                    <Text className='year'>{ele.year}</Text>
                                    <Text className="timeText">{ele.time}</Text>
                                </Box>

                                <Box className='btnBox'>
                                    <button className='buton'>
                                      + Watchlist
                                    </button>

                                </Box>

                            </Box>

                        </Box>
                    ))}
                </Slider>
            </Box>
        </div>
    )
}

export default ThirdSlide