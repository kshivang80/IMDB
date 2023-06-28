import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import "./Home.css"
import FistSlider from '../Components/FistSlider'
import SecondSlider from '../Components/SecondSlider'
import ThirdSlide from '../Components/ThirdSlide'

const HomePage = () => {

  return (
    <div style={{ height: "2000px" }}>
      <Box className='fistSlider'>
        <FistSlider />
      </Box>
      <Box className='popular'>
        <Box className='popTitle'>
          <Box className='popTitle1'>
            <Box display={"flex"} mt="10px" >
              <Box className='yellowBox'>

              </Box>
              <Box className='textD'>
                <Text className='textData'>Popular Indian Movies</Text>
              </Box>

            </Box>

          </Box>
          <Box className='popTitle2' >
            <Box w="100%" mt="14px">
              <Text fontSize={"21px"} fontFamily="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" mr="10px">SEE ALL</Text>
            </Box>



          </Box>

        </Box>
        <Box className='week'>
          <Text color="gray" ml="25px">This week's top Indian Movies</Text>
        </Box>

        <Box className='other'>
          <Box className='flexBox'>
            <Box className="box1">
              <Text fontFamily="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">Other Provider</Text>
            </Box>
            <Box className="box2">
              <Text fontFamily="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">Prime Video</Text>
            </Box>
            <Box className="box3">
              <Text fontFamily="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">Prime Explore</Text>
            </Box>

          </Box>
        </Box>

        <Box className='secondslid'>
          <SecondSlider />
        </Box>

      </Box>



      {/* //////////// Third Slider   //////////////// */}

      <Box className='popular' mt="30px">
        <Box className='popTitle'>
          <Box className='popTitle1'>
            <Box display={"flex"} mt="10px" >
              <Box className='yellowBox'>

              </Box>
              <Box className='textD'>
                <Text className='textData'>Popular Indian TV Shows</Text>
              </Box>

            </Box>

          </Box>
          <Box className='popTitle2' >
            <Box w="100%" mt="14px">
              <Text fontSize={"21px"} fontFamily="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" mr="10px">SEE ALL</Text>
            </Box>



          </Box>

        </Box>
        <Box className='week'>
          <Text color="gray" ml="25px">This week's top Indian TV Shows</Text>
        </Box>

        <Box className='other1'>
          <Box className='flexBox1'>
            <Box className="box11">
              <Text fontFamily="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">Other Provider</Text>
            </Box>
            <Box className="box21">
              <Text fontFamily="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">Prime Video</Text>
            </Box>
            {/* <Box className="box31">
              <Text fontFamily="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">Prime Explore</Text>
            </Box> */}

          </Box>

          <Box className='flexBox12'>
          <Box className="box11">
              <Text fontFamily="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">Drama</Text>
            </Box>
            <Box className="box21">
              <Text fontFamily="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">Thriller</Text>
            </Box>
          </Box>
        </Box>

        <Box className='secondslid'>
          <ThirdSlide />
        </Box>

      </Box>

    </div>
  )
}

export default HomePage