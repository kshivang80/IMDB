import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Search from '../Pages/Search'
import Video from '../Pages/Video'
import Login from '../Pages/Login'

const AllRoutes = () => {

    return (
        <div>
            <Routes>

                <Route path="/" element={<HomePage />}></Route>

                <Route path="/search" element={<Search/>}></Route>
                <Route path="/video" element={<Video/>}></Route>
                <Route path="/login" element={<Login/>}></Route>

            </Routes>
        </div>
    )
}

export default AllRoutes