import React, { useState } from 'react';
import './BottomNavbar.css';
import { Link, Navigate } from 'react-router-dom'
import {Box} from "@chakra-ui/react"
import { AiFillHome,AiOutlineSearch,AiOutlinePlayCircle } from 'react-icons/ai';
import {  BiUserCircle} from 'react-icons/bi';

const BottomNavbar = () => {
    const [activeButton, setActiveButton] = useState('');
    const [activeIconColor, setActiveIconColor] = useState('gray');


    //https://www.omdbapi.com/?t=${title}&apikey=97b2b655
    //http://www.omdbapi.com/?apikey=97b2b655


  return (
    <div className="bottom-navbar">
      <Box textAlign={"center"}   >
              <Link to="/">
                <button
                 className={activeButton === 'home' ? 'active' : ''}
                 onClick={() => setActiveButton('home')}
                >
                    <AiFillHome className='homeIcone' style={{ color: activeButton === 'home' ? 'yellow' : activeIconColor }}/>
                    Home
                </button>

              </Link>

            </Box>

            <Box textAlign={"center"} >
              <Link to="/search">
                <button
                 className={activeButton === 'search' ? 'active' : ''}
                 onClick={() => setActiveButton('search')}
                >
                    <AiOutlineSearch className='homeIcone'  style={{ color: activeButton === 'search' ? 'yellow' : activeIconColor }}/>
                    search
                 </button>

              </Link>

            </Box>
            <Box textAlign={"center"}  >
              <Link to="/video">
                <button 
                 className={activeButton === 'video' ? 'active' : ''}
                 onClick={() => setActiveButton('video')}
                >
                    <AiOutlinePlayCircle className='homeIcone'  style={{ color: activeButton === 'video' ? 'yellow' : activeIconColor }}/>
                    Video
                 </button>
              </Link>

            </Box>
            <Box textAlign={"center"}   >
              <Link to="/login">
                <button
                 className={activeButton === 'login' ? 'active' : ''}
                 onClick={() => setActiveButton('login')}
                >
                    <BiUserCircle className='homeIcone' style={{ color: activeButton === 'login' ? 'yellow' : activeIconColor }}/>
                    You
                 </button>
              </Link>

            </Box>
    </div>
  );
};

export default BottomNavbar;