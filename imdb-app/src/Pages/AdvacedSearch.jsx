// import React, { useState } from 'react'
// import "./Advance.modules.css"
// import { Box, Button, Text } from '@chakra-ui/react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getMovies } from '../Redux/action';

// const AdvacedSearch = () => {

//     const dispatch = useDispatch();
//     const movie = useSelector(store => store.movies)
//     console.log(movie)

//     const [selectedYear, setSelectedYear] = useState('');
//     const [selectedCountry, setSelectedCountry] = useState('');
//     const [searchQuery, setSearchQuery] = useState('');
//     const [isFilterApplied, setIsFilterApplied] = useState(false);

//     const years = [1906, 2022, 2023, 2024, 2025];
//     const countries = ['India', 'Australia', 'USA', 'Russia', 'Pakistan'];

//     const handleYearClick = (year) => {
//         setSelectedYear(year);
//         setIsFilterApplied(false);
//     };

//     const handleCountryClick = (country) => {
//         setSelectedCountry(country);
//         setIsFilterApplied(false);
//     };

//     const handleSearchInputChange = (event) => {
//         setSearchQuery(event.target.value);
//     };

//     const handleSearch = () => {
//         setIsFilterApplied(true);
//         const params = {
//             year: selectedYear,
//             country: selectedCountry,
//             query: searchQuery,
//         };
//         dispatch(getMovies(params))
//     };

//     return (
//         <div className='mainadvanceDiv'>

//             <Box className='filterSection'>


//                 <Box className='filterCountryBox'>
//                     <Box>
//                         <Text color="white" fontSize='25px' fontFamily={"sans-serif"} fontWeight={"thin"}>Decade</Text>
//                     </Box>
//                     <Box className='filterCountry' mt="10px">
//                         {years.map((year) => (
//                             <button

//                                 key={year}
//                                 size='md'
//                                 onClick={() => handleYearClick(year)}
//                                 style={{ backgroundColor: selectedYear === year ? 'yellow' : '#4b5054', width: "70px", height: "35px", borderRadius: "5px", color: "white", fontSize: "16px" }}
//                             >
//                                 {year}
//                             </button>
//                         ))}

//                     </Box>

//                 </Box>

//                 <Box className='filterCountryBox' mt="30px">
//                     <Box>
//                         <Text color="white" fontSize='25px' fontFamily={"sans-serif"} fontWeight={"thin"}>Region</Text>
//                     </Box>
//                     <Box className='filterCountry' mt="10px">
//                         {countries.map((country) => (
//                             <button

//                                 size='md'
//                                 key={country}
//                                 onClick={() => handleCountryClick(country)}
//                                 style={{ backgroundColor: selectedCountry === country ? 'yellow' : '#4b5054', width: "70px", height: "35px", borderRadius: "5px", color: "white", fontSize: "16px" }}
//                             >
//                                 {country}
//                             </button>
//                         ))}

//                     </Box>

//                 </Box>

//             </Box>

//             <Box className='searchButton'>
//                 <Box w="20%" h="100%" border={"1px solid red"} className='cancelBTnSearch'>
//                     <button >
//                         CANCEL
//                     </button>
//                 </Box>
//                 <Box w="70%" h="100%" border={"1px solid red"} display={"flex"} justifyContent={"center"} alignContent={"center"} >
//                     <button
//                         style={{ backgroundColor: isFilterApplied ? 'blue' : 'yellow', width: "80%", height: "85%", borderRadius: "5px", color: "black", fontSize: "18px", fontWeight: "500", border: "1px solid yellow", margin: 'auto', }}
//                         onClick={handleSearch}
//                     >
//                         SEE RESULTS
//                     </button>
//                 </Box>

//             </Box>



//         </div>
//     )
// }

// export default AdvacedSearch