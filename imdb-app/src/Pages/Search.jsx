import React, { useState, useEffect } from 'react';
import "./Search.modules.css"
import { Box, Button, Text, Input, InputGroup, InputLeftElement, InputRightElement, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Image } from '@chakra-ui/react';
import { BiSolidMicrophone } from 'react-icons/bi';
import { AiFillStar, AiOutlineSearch } from 'react-icons/ai'
import Recent from './Recent';
import AdvacedSearch from './AdvacedSearch';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../Redux/action';


const Search = () => {
  const dispatch = useDispatch();
  const {movie,isLoading} = useSelector(store => store)
  console.log(movie,isLoading)

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterApplied, setIsFilterApplied] = useState(false);


  const years = ["1906", "2022", "2023", "2024", "2025"];
  const countries = ['India', 'Australia', 'USA', 'Russia', 'Pakistan'];

  const handleYearClick = (year) => {
    setSelectedYear(year);
    setIsFilterApplied(false);
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setIsFilterApplied(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };


  useEffect(() => {


  }, [])

  const handleSearch = () => {
    setIsFilterApplied(true);
    const params = {
      year: selectedYear,
      country: selectedCountry,
      query: searchQuery,
    };

    dispatch(getMovies(params))
  };



  const handleCancelFilter = () => {
    setSelectedYear('');
    setSelectedCountry('');
    setSearchQuery('');
    setIsFilterApplied(false);
    console.log("hello")
    console.log(isFilterApplied)
    dispatch(getMovies({}))
  }






  return (
    <div className='MainSearchDiv'>
      <Box className='searchbar'>
        <Box w="75%" m="auto">
          <InputGroup>
            <InputLeftElement size='lg'>
              <AiOutlineSearch className='searchIcone' color='gray.300' />
            </InputLeftElement>

            <Input value={searchQuery} onChange={handleSearchInputChange} focusBorderColor='none' placeholder='Search Movies' size='lg' border="1px solid white" bgColor="white" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" />


            <InputRightElement size='lg'>
              <BiSolidMicrophone className='searchIcone' color='gray.300' />
            </InputRightElement>
          </InputGroup>
        </Box>

        <Box className='cancelBTn'>
          <button
            onClick={handleCancelFilter}
          >
            CANCEL
          </button>
        </Box>

      </Box>

      <Box className='SearchItems1'>
        {

          isFilterApplied && movie.length > 0 ?
            <Box>
              { !isLoading ? <>
                            {movie.length > 0 && movie.map((ele, index) => (
                              <Box className='FetchData' width="100%" height={"200px"} id="index" boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px" borderRadius={"10px"} >
              
                                <Box display={"flex"} width="100%" mt="30px" height={"100%"}  justifyContent={"space-between"} >
                                  <Box className='ImageDivv' width="33%" height={"200px"} padding={"5px"}>
                                    <Image src={ele.image} w="100%" h="100%" />
                                  </Box>
                                  <Box className='textDivv' width="64%" height={"200px"} >
                                    <Box  h="60%" mt="30px">
                                      <Text fontSize={"21px "} color="white">{ele.title}</Text>
                                      <Box display={"flex"} w="45%" mt="5px" justifyContent={"space-between"}>
                                        <Text fontSize={"16px "} color="white">{ele.year}</Text>
                                        <Text fontSize={"16px "} color="white">1h 57m R</Text>
                                      </Box>
                                      <Box className='star1' >
                                        <AiFillStar className='starIcone1' />
                                        <Text className="starText1">{ele.reviews_from_users}</Text>
                                      </Box>
                                    </Box>
                                  </Box>
              
                                </Box>
              
                              </Box>
                            ))
              
                            } </>:
                            <Box w="80%" h="250px"  m="auto" mt="100px">
                               <Image src="https://i.gifer.com/VIcP.gif"  w="100%" h="100%"   />

                            </Box>
                       

              }
              {/* {movie.length > 0 && movie.map((ele, index) => (
                <Box className='FetchData' width="100%" height={"200px"}>

                  <Box display={"flex"} width="100%" mt="30px" height={"100%"} border="1px solid orange" justifyContent={"space-between"}>
                    <Box className='ImageDivv' width="33%" height={"200px"} border="1px solid red">
                      <Image src={ele.image} w="100%" h="100%" />
                    </Box>
                    <Box className='textDivv' width="64%" height={"200px"} border="1px solid red">
                      <Box border="1px solid red" h="60%" mt="30px">
                        <Text fontSize={"21px "} color="white">{ele.title}</Text>
                        <Box display={"flex"} w="45%" mt="5px" justifyContent={"space-between"}>
                          <Text fontSize={"16px "} color="white">{ele.year}</Text>
                          <Text fontSize={"16px "} color="white">1h 57m R</Text>
                        </Box>
                        <Box className='star1' >
                          <AiFillStar className='starIcone1' />
                          <Text className="starText1">{ele.reviews_from_users}</Text>
                        </Box>
                      </Box>
                    </Box>

                  </Box>

                </Box>
              ))

              } */}

            </Box>
           
            : <Box className='SearchItems'>
              <Tabs isFitted position="relative" variant="unstyled" >
                <TabList h="70px" mb='1em' boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
                  <Tab color={"white"}>RECENT</Tab>
                  <Tab color={"white"}>ADVANCED SEARCH</Tab>
                </TabList>
                <TabIndicator
                  mt="-15.5px"
                  height="4px"
                  bg="yellow.500"
                  borderRadius="1px"
                />
                <TabPanels>
                  <TabPanel>
                    <Recent />
                  </TabPanel>
                  <TabPanel>
                    <div className='mainadvanceDiv'>

                      <Box className='filterSection'>


                        <Box className='filterCountryBox'>
                          <Box>
                            <Text color="white" fontSize='23px' fontFamily={"sans-serif"} fontWeight={"thin"}>Decade</Text>
                          </Box>
                          <Box className='filterCountry' mt="10px">
                            {years.map((year) => (
                              <button

                                key={year}
                                size='md'
                                onClick={() => handleYearClick(year)}
                                style={{ backgroundColor: selectedYear === year ? 'yellow' : '#4b5054', width: "70px", height: "35px", borderRadius: "5px", color: "white", fontSize: "16px" }}
                              >
                                {year}
                              </button>
                            ))}

                          </Box>

                        </Box>

                        <Box className='filterCountryBox' mt="30px">
                          <Box>
                            <Text color="white" fontSize='23px' fontFamily={"sans-serif"} fontWeight={"thin"}>Region</Text>
                          </Box>
                          <Box className='filterCountry' mt="10px">
                            {countries.map((country) => (
                              <button

                                size='md'
                                key={country}
                                onClick={() => handleCountryClick(country)}
                                style={{ backgroundColor: selectedCountry === country ? 'yellow' : '#4b5054', width: "70px", height: "35px", borderRadius: "5px", color: "white", fontSize: "16px" }}
                              >
                                {country}
                              </button>
                            ))}

                          </Box>

                        </Box>

                      </Box>

                      <Box className='searchButton'>
                        <Box w="20%" h="100%"  className='cancelBTnSearch'>
                          <button 
                          onClick={handleCancelFilter}
                          >
                            CANCEL
                          </button>
                        </Box>
                        <Box w="70%" h="100%"  display={"flex"} justifyContent={"center"} alignContent={"center"} >
                          <button
                            style={{ backgroundColor: isFilterApplied ? 'blue' : 'yellow', width: "85%", height: "85%", borderRadius: "5px", color: "black", fontSize: "18px", fontWeight: "500", border: "1px solid yellow", margin: 'auto', }}
                            onClick={handleSearch}
                          >
                            SEE RESULTS
                          </button>
                        </Box>

                      </Box>



                    </div>


                  </TabPanel>
                </TabPanels>
              </Tabs>



            </Box>

        }

      </Box>

 
</div>
  );
};

export default Search