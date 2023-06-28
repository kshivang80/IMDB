import React, { useEffect, useState } from 'react'
//import "./FistSlider.modules.css"
import { Box, Image, Text } from '@chakra-ui/react'
import { fristSlide } from '../data/newData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings4 } from '../Pages/ResponsiveCard';




const Video = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % fristSlide.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [fristSlide.length]);


    return (
        <div>



            {/* {
                fristSlide.map((ele,index) => (
                        <Box
                        key={index} style={{ display: index === currentImage ? 'block' : 'none' }}
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
                    ))} */}
            <Box className="oneSlide">
             <Slider {...settings4}>
                {fristSlide.map((ele, index) => (
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
            </Box>

            {/* <Box className='mainDiv'>

                
                <iframe
                    className='video'
                    src='https://www.youtube.com/embed/Z3Z7RocQUXI'
                    title='YouTube video'
                    frameBorder='0'
                    allowFullScreen
                ></iframe>
            </Box>

            <Box className='NameDIV'>
                <Box className='smallDiv'>
                    <Image className='mainVid' src="https://m.media-amazon.com/images/M/MV5BNDJmZDU0NDMtMDAzYy00Yjk5LWEyNDYtOWYzYTEyZGQ0MDljXkEyXkFqcGdeQXVyMTU2MTIyODU2._V1_.jpg" />
                </Box>
                <Box className='Title'>
                    <Text fontFamily={"sans-serif"}>"Lust Stories 2"</Text>
                    <Text fontFamily={"sans-serif"} color="gray">Watch the trailer</Text>
                </Box>

            </Box> */}


        </div>
    )
}

export default Video